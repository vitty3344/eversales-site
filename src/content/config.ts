// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const events = defineCollection({
  type: 'data', // (or 'content' depending on your setup)
  schema: z.object({
    title: z.string(),
    date: z.string(), // (or z.date())
    
    // 1. ADD THIS LINE:
    time: z.string().optional(), 
    
    location: z.string(),
    
    // 2. UPDATE THIS LINE TO INCLUDE 'Masterclass':
    type: z.enum(['Workshop', 'Webinar', 'Accelerator', 'Bootcamp', 'Masterclass']),
    
    price: z.string(),
    link: z.string(),
    isFeatured: z.boolean().optional(),
  }),
});

export const collections = {
  events, // (or whatever your export looks like)
};