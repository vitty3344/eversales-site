// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel'; // <--- UPDATED: Removed '/serverless'

export default defineConfig({
  // UPDATED: Changed back to 'static' (as per Astro 5.0 requirements)
  output: 'static', 

  adapter: vercel(),

  integrations: [
    tailwind(), 
    react(), 
    keystatic()
  ],
});