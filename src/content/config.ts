import { defineCollection, z } from 'astro:content';

// Resource/article collection. Empty by default — see src/content/resources/README.md
// for how to add an article. The site intentionally ships with no filler articles;
// this schema exists so real articles can be dropped in later without code changes.
const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    relatedServices: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resources };
