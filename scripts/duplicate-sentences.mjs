/**
 * Lists sentences duplicated within one city/service page.
 * A page is intro + body + both FAQ questions and answers.
 *
 * Two sentences count as a duplicate pair when, after normalization:
 * - they match exactly, or
 * - they share a 6-word run (order preserved), or
 * - Jaccard similarity of content words is at least 0.55
 *   and both sentences have at least 8 content words.
 *
 * Usage: node scripts/duplicate-sentences.mjs
 */
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const src = readFileSync(new URL("../src/data/cityServiceContent.ts", import.meta.url), "utf8");
const stripped = src
    .replace(/^export type[\s\S]*?^}/m, "")
    .replace(/^export interface[\s\S]*?^}/gm, "")
    .replace(/: Record<CityKey, CityContent>/, "");
const tmp = join(tmpdir(), "cityServiceContent.dup.mjs");
writeFileSync(tmp, stripped);
const { cityServiceContent } = await import(pathToFileURL(tmp).href);

const STOP = new Set(
    "a an the and or of to in on for with from that this it is are was were be been being as at by into over after before when so you your he him his she they them their we our not do does did will would can could should than then also only just more most very much such if but about up out off its".split(
        " ",
    ),
);

function sentences(text) {
    return text
        .replace(/\s+/g, " ")
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter((s) => s.split(/\s+/).length >= 6);
}

function normalize(s) {
    return s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function words(s) {
    return normalize(s).split(" ").filter(Boolean);
}

function content(s) {
    return words(s).filter((w) => !STOP.has(w) && w.length > 2);
}

function shingles(tokens, n) {
    const out = [];
    for (let i = 0; i <= tokens.length - n; i++) out.push(tokens.slice(i, i + n).join(" "));
    return out;
}

function jaccard(a, b) {
    const A = new Set(a);
    const B = new Set(b);
    let inter = 0;
    for (const x of A) if (B.has(x)) inter++;
    const union = A.size + B.size - inter;
    return union === 0 ? 0 : inter / union;
}

function isDup(a, b) {
    const na = normalize(a);
    const nb = normalize(b);
    if (na === nb) return "exact";
    const wa = words(a);
    const wb = words(b);
    const sa = new Set(shingles(wa, 6));
    for (const sh of shingles(wb, 6)) {
        if (sa.has(sh)) return "6-word-run";
    }
    const ca = content(a);
    const cb = content(b);
    if (ca.length >= 8 && cb.length >= 8 && jaccard(ca, cb) >= 0.55) return "jaccard";
    return null;
}

const pages = [];
let pairCount = 0;
let sentenceHits = 0;

for (const [city, block] of Object.entries(cityServiceContent)) {
    for (const [service, local] of Object.entries(block.services)) {
        const chunks = [
            ["intro", local.intro],
            ["body", local.body],
            ...local.faqs.flatMap((f, i) => [
                [`faq${i + 1}q`, f.q],
                [`faq${i + 1}a`, f.a],
            ]),
        ];
        const items = [];
        for (const [where, text] of chunks) {
            for (const sentence of sentences(text)) items.push({ where, sentence });
        }
        const pairs = [];
        const hit = new Set();
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                const why = isDup(items[i].sentence, items[j].sentence);
                if (!why) continue;
                pairs.push({ why, a: items[i], b: items[j] });
                hit.add(i);
                hit.add(j);
            }
        }
        pairCount += pairs.length;
        sentenceHits += hit.size;
        if (pairs.length) pages.push({ city, service, pairs, hitSentences: hit.size });
    }
}

console.log(`pages_with_duplicates ${pages.length}`);
console.log(`duplicate_pairs ${pairCount}`);
console.log(`sentences_in_a_duplicate_pair ${sentenceHits}`);
for (const page of pages) {
    console.log(`\n## ${page.city} / ${page.service} (${page.pairs.length} pairs, ${page.hitSentences} sentences)`);
    for (const p of page.pairs) {
        console.log(`- [${p.why}] ${p.a.where}: ${p.a.sentence}`);
        console.log(`          ${p.b.where}: ${p.b.sentence}`);
    }
}
