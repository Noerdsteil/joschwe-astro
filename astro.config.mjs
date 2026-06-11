// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO(content): set the final production domain
  site: 'https://www.schweizer-jonas.de',
  trailingSlash: 'always',
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});