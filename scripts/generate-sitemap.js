const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.supplementenvergelijken.be';

const routes = [
  '/',
  '/vitamines',
  '/magnesium',
  '/omega-3',
  '/mineralen',
  '/proteine',
  '/vergelijken',
  '/beste-vitamine-d-supplement-belgie',
  '/over-ons',
  '/adverteren',
  '/contact',
  '/privacybeleid',
  '/algemene-voorwaarden',
  '/affiliate-disclosure',
  '/artikelen/top-5-magnesium-supplementen-belgie',
  '/artikelen/whey-vs-plantaardig-eiwit',
  '/artikelen/beste-vitamine-d-supplement-vergeleken',
  '/koopgidsen/creatine-koopgids',
  '/koopgidsen/hoe-kies-je-het-juiste-supplement',
  '/koopgidsen/supplementen-voor-beginners',
  '/ingredienten/magnesiumcitraat-vs-magnesiumoxide',
  '/ingredienten/vitamine-b12-vormen',
  '/ingredienten/whey-concentraat-vs-isolaat-vs-hydrolisaat',
  '/supplement-quiz',
  '/vergelijkingstabel',
];

const today = new Date().toISOString().split('T')[0];

const priorityMap = {
  '/': '1.0',
  '/vitamines': '0.9',
  '/magnesium': '0.9',
  '/omega-3': '0.9',
  '/mineralen': '0.8',
  '/proteine': '0.8',
  '/vergelijken': '0.8',
  '/beste-vitamine-d-supplement-belgie': '0.9',
  '/over-ons': '0.5',
  '/adverteren': '0.5',
  '/contact': '0.4',
  '/privacybeleid': '0.3',
  '/algemene-voorwaarden': '0.3',
  '/affiliate-disclosure': '0.3',
  '/artikelen/top-5-magnesium-supplementen-belgie': '0.8',
  '/artikelen/whey-vs-plantaardig-eiwit': '0.8',
  '/artikelen/beste-vitamine-d-supplement-vergeleken': '0.8',
  '/koopgidsen/creatine-koopgids': '0.7',
  '/koopgidsen/hoe-kies-je-het-juiste-supplement': '0.7',
  '/koopgidsen/supplementen-voor-beginners': '0.7',
  '/ingredienten/magnesiumcitraat-vs-magnesiumoxide': '0.7',
  '/ingredienten/vitamine-b12-vormen': '0.7',
  '/ingredienten/whey-concentraat-vs-isolaat-vs-hydrolisaat': '0.7',
  '/supplement-quiz': '0.8',
  '/vergelijkingstabel': '0.8',
};

const changefreqMap = {
  '/': 'weekly',
  '/vitamines': 'weekly',
  '/magnesium': 'weekly',
  '/omega-3': 'weekly',
  '/mineralen': 'weekly',
  '/proteine': 'weekly',
  '/vergelijken': 'weekly',
  '/beste-vitamine-d-supplement-belgie': 'monthly',
  '/over-ons': 'yearly',
  '/adverteren': 'monthly',
  '/contact': 'yearly',
  '/privacybeleid': 'yearly',
  '/algemene-voorwaarden': 'yearly',
  '/affiliate-disclosure': 'yearly',
  '/artikelen/top-5-magnesium-supplementen-belgie': 'monthly',
  '/artikelen/whey-vs-plantaardig-eiwit': 'monthly',
  '/artikelen/beste-vitamine-d-supplement-vergeleken': 'monthly',
  '/koopgidsen/creatine-koopgids': 'monthly',
  '/koopgidsen/hoe-kies-je-het-juiste-supplement': 'monthly',
  '/koopgidsen/supplementen-voor-beginners': 'monthly',
  '/ingredienten/magnesiumcitraat-vs-magnesiumoxide': 'monthly',
  '/ingredienten/vitamine-b12-vormen': 'monthly',
  '/ingredienten/whey-concentraat-vs-isolaat-vs-hydrolisaat': 'monthly',
  '/supplement-quiz': 'monthly',
  '/vergelijkingstabel': 'weekly',
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
