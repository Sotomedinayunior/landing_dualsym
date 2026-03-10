import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    image: z.string().optional(),
    miniatura: z.string().optional(),
    readTime:z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};