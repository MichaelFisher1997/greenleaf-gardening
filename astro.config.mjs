// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://greenleaf-gardening.example.com',
  output: 'server',
  adapter: netlify(),
  integrations: [
    tailwind({
      // Disable default base styles since we're using our own
      applyBaseStyles: false,
      // Point to our custom Tailwind config
      configFile: './tailwind.config.mjs',
    }),
    sitemap({
      customPages: [
        'https://greenleaf-gardening.example.com/',
        'https://greenleaf-gardening.example.com/about',
        'https://greenleaf-gardening.example.com/services',
        'https://greenleaf-gardening.example.com/pricing',
        'https://greenleaf-gardening.example.com/contact',
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
        },
      },
    }),
  ],
  // Enable prefetch for better performance
  prefetch: {
    prefetchAll: true,
  },
  // Configure Vite
  vite: {
    optimizeDeps: {
      include: ['@astrojs/tailwind', 'tailwindcss', 'autoprefixer'],
    },
  },
});