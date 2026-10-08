import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // Shorter <title> tag text (<= 48 chars) so results aren't truncated.
        seoTitle: z.string().optional(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Roy'),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
