// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  // site: 'http://localhost:4321'
  site: 'https://FranSCoder.github.io',
  base: '/abogados-rcg-astro-fromscratch',
});