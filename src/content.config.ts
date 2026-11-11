import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every Markdown file below BlogPosts (including nested folders) is a post.
const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/BlogPosts",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});
export const collections = { blog };
