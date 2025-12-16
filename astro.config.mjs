// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless'; // Ensure this is imported

export default defineConfig({
  // Change 'static' to 'hybrid' so the Admin Portal can run dynamic code
  output: 'hybrid', 
  
  adapter: vercel(), // This tells Vercel how to run the dynamic parts

  integrations: [
    tailwind(), 
    react(),
    keystatic()
  ],
});