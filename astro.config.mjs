import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fcheng-cpa.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  // 舊網站網址
  redirects: { '/accountant': '/about' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
