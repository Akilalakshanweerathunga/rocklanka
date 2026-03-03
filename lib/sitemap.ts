import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://rocklankatours.com';

const pages = [
  '/',
  '/about',
  '/contact',
  '/tailor-made',
  '/itineraries',
  '/destinations',
  '/activities'
];

export function generateSitemap(dynamicPages: string[] = []) {
  const allPages = [...pages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (url) => `
    <url>
      <loc>${BASE_URL}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  const folder = resolve('./public'); 
  mkdirSync(folder, { recursive: true });

  writeFileSync(resolve(folder, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap();