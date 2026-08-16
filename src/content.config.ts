import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const code = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/code" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string(), icon: z.string().optional() })),
    order: z.number().default(0),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string(),
    date: z.coerce.date(),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/teaching" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    icon: z.string(),
    blurb: z.string(),
    order: z.number().default(0),
  }),
});

const online = defineCollection({
  loader: file("./src/content/online.yaml"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    image: z.string(),
    url: z.string(),
    blurb: z.string(),
  }),
});

export const collections = { projects, code, talks, teaching, online };
