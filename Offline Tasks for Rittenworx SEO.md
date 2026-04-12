Offline Tasks for Rittenworx SEO  
 Hosting / DNS (Do First — Highest Impact)

- Force www redirect — In Vercel/Netlify, confirm rittenworxhandyman.net → www.rittenworxhandyman.net (301). GSC shows both indexed separately.
- Verify madisonhandymanpro.com status — If this domain also resolves to the site, set it to redirect to www.rittenworxhandyman.net or remove it from DNS entirely to prevent duplicate content.

Google Search Console

- Request re-indexing of these high-impression pages (Inspect URL → Request Indexing):
  - rittenworxhandyman.net/services/exterior-painting-madison-al (1,160 impressions, 0 clicks)
  - rittenworxhandyman.net/services/interior-painting-madison-al (643 impressions)
  - rittenworxhandyman.net/locations/huntsville (654 impressions)
  - rittenworxhandyman.net/services/flooring (516 impressions)
- Resubmit sitemap — Go to GSC → Sitemaps → submit https://www.rittenworxhandyman.net/sitemap-index.xml
- Set preferred domain — In GSC property settings, confirm www version is the primary property

Images

- Review og-roy.jpg in public/images/ — open it and confirm it looks good as a social share card. If you want something more polished, replace it with a 1200×630 branded graphic.

Content / Business Listings

- Yelp / BBB / any directories — Update website URL on any listings that still show the old domain

Optional Wins

- Add og:image overrides on the two highest-traffic service pages by passing ogImage="/images/og-handyman.jpg" to their <Layout> — gives more relevant social previews
- Suppress international bot traffic in GSC via International Targeting → set target country to United States
