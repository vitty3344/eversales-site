import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(), // Keystatic saves dates as strings
    location: z.string(),
    type: z.enum(['Workshop', 'Webinar', 'Accelerator', 'Bootcamp']),
    price: z.string(),
    link: z.string().url(),
    isFeatured: z.boolean().optional(),
  }),
});

export const collections = { events };