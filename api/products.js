const { vitamines, magnesium, omega3, vitamineD, allComparableProducts } = require('../src/data/products.js');

const ALLOWED_CATEGORIES = ['vitamines', 'magnesium', 'omega3', 'vitamineD', 'all'];
const ALLOWED_ORIGIN = 'https://www.supplementenvergelijken.be';

const rateLimit = new Map();

setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimit.entries()) {
    if (now > record.resetAt) rateLimit.delete(key);
  }
}, 5 * 60 * 1000);

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minuut
  const max = 30; // max 30 requests/min per IP

  const record = rateLimit.get(ip);
  if (!record) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= max) return false;
  record.count++;
  return true;
}

module.exports = function handler(req, res) {
  // CORS
  const origin = req.headers.origin;
  if (origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0].trim() : req.socket?.remoteAddress || 'unknown';

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Te veel verzoeken.' });
  }

  const { category } = req.query;

  if (category && !ALLOWED_CATEGORIES.includes(category)) {
    return res.status(400).json({ error: 'Ongeldige categorie.' });
  }

  const dataMap = { vitamines, magnesium, omega3, vitamineD, all: allComparableProducts };
  const data = category ? dataMap[category] : dataMap;

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  return res.status(200).json({ success: true, data });
};
