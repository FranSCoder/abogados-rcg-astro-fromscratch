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
  site: import.meta.env.MODE === 'production' ? 'https://FranSCoder.github.io' : 'http://localhost:4321',
  base: import.meta.env.MODE === 'production' ? '/abogados-rcg-astro-fromscratch' : '',
});