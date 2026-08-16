import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
