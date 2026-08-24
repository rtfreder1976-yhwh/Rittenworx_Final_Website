import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // Optional shorter title for the <title> tag when the editorial
        // headline would truncate in search results. The H1 always uses `title`.
        seoTitle: z.string().optional(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Roy'),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
