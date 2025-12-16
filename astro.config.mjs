// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless'; // <--- Make sure this import is here

export default defineConfig({
  // 1. Change output to 'hybrid' (allows mixing static pages + dynamic admin)
  output: 'hybrid',

  // 2. Add the Vercel adapter
  adapter: vercel(),

  integrations: [
    tailwind(), 
    react(), 
    keystatic()
  ],
});