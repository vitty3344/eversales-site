// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Define the "Events" Schema
const eventsCollection = defineCollection({
  type: 'data', // 'data' means we use JSON/YAML files (perfect for structured data)
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)), // Auto-converts text to Date object
    location: z.string(),
    type: z.enum(['Workshop', 'Webinar', 'Accelerator', 'Bootcamp']), // Forces specific types
    price: z.string().optional(),
    link: z.string().url(), // Ensures it's a valid URL
    isFeatured: z.boolean().default(false),
  }),
});

// 2. Export the collections
export const collections = {
  'events': eventsCollection,
};