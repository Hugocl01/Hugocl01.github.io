import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/Hugocl01/hugocl01.github.io',
  base: '/',
  root: "./src",
  integrations: [tailwind()]
});