// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://rumahbaru.my',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Anti-PBN: every external link in markdown bodies = nofollow noopener.
  // The single FOLLOW link to BINA+ is rendered ONLY inside <BinaDossierNote/>
  // and the about page — never from inline markdown.
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ['nofollow', 'noopener'], target: '_blank' }],
    ],
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/draft'),
      changefreq: 'monthly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'ms',
        locales: { ms: 'ms-MY', en: 'en-MY' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
