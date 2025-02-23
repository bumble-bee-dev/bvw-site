// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const events = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/events" }),
    schema: z.object({
        title: z.string(),
        start: z.date(),
        end: z.date(),
        location: z.string(),
        price: z.string(),
        runBy: z.string(),
        //image: z.object({
        //    url: z.string(),
        //    alt: z.string()
        //}),
        tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { events };