import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubdate: z.date(),
    author: z.string(),
  }),
});

export const collections = { blog };
