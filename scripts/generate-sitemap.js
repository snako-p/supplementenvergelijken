const SitemapGenerator = require('react-router-sitemap-generator');
const React = require('react');
const { Routes, Route } = require('react-router-dom');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://supplementenvergelijken.be';

const routes = [
  '/',
  '/vitamines',
  '/sporters',
  '/hersenen',
  '/slaap',
  '/privacybeleid',
  '/algemene-voorwaarden',
  '/affiliate-disclosure',
];

const today = new Date().toISOString().split('T')[0];

const priorityMap = {
  '/': '1.0',
  '/vitamines': '0.9',
  '/sporters': '0.9',
  '/hersenen': '0.9',
  '/slaap': '0.9',
  '/privacybeleid': '0.3',
  '/algemene-voorwaarden': '0.3',
  '/affiliate-disclosure': '0.3',
};

const changefreqMap = {
  '/': 'weekly',
  '/vitamines': 'weekly',
  '/sporters': 'weekly',
  '/hersenen': 'weekly',
  '/slaap': 'weekly',
  '/privacybeleid': 'yearly',
  '/algemene-voorwaarden': 'yearly',
  '/affiliate-disclosure': 'yearly',
};

const urlEntries = routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqMap[route] || 'monthly'}</changefreq>
    <priority>${priorityMap[route] || '0.5'}</priority>
  </url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap.trim(), 'utf8');
console.log(`✓ sitemap.xml gegenereerd met ${routes.length} URLs → ${outputPath}`);
