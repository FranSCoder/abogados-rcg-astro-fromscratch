// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true
  },
  integrations: [tailwind(), react()],
  // site: 'http://localhost:4321'
  site: 'https://FranSCoder.github.io',
  base: '/abogados-rcg-astro-fromscratch',
});