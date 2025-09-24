// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // base: '/jdgonzalez03.github.io/',
  site: "https://jdgonzalez03.github.io/",
  vite: {
    plugins: [tailwindcss()]
  }
});