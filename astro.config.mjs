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
  site: 'https://FranSCoder.github.io/abogados-rcg-astro-fromscratch',
  base: import.meta.env.MODE === 'production' ? '/abogados-rcg-astro-fromscratch' : '',
});