import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Used for canonical URLs and the sitemap. Points at the custom domain even
  // before DNS is switched over, which is what we want in the page metadata.
  site: 'https://thestylenews.com',
  integrations: [sitemap()],
});
