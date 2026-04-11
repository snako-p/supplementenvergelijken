const rateLimit = new Map();

// Periodically clean up expired rate limit entries to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimit.entries()) {
    if (now > record.resetAt) rateLimit.delete(key);
  }
}, 5 * 60 * 1000);

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minuten
  const max = 5;

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

function sanitize(str, maxLen = 1000) {
  if (typeof str !== 'string') return '';
  // Remove null bytes, trim, limit length, strip HTML tags
  return str.replace(/\0/g, '').trim().slice(0, maxLen).replace(/<[^>]*>/g, '');
}

function isValidEmail(email) {
  if (email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const ALLOWED_ORIGIN = 'https://www.supplementenvergelijken.be';

module.exports = function handler(req, res) {
  // CORS — only allow requests from own domain
  const origin = req.headers.origin;
  if (origin === ALLOWED_ORIGIN) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Require JSON content type
  const contentType = req.headers['content-type'] || '';
  if (!contentType.includes('application/json')) {
    return res.status(415).json({ error: 'Content-Type moet application/json zijn.' });
  }

  // Extract real IP (take first value from x-forwarded-for chain)
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded
    ? forwarded.split(',')[0].trim()
    : req.socket?.remoteAddress || 'unknown';

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Te veel verzoeken. Probeer het later opnieuw.' });
  }

  const body = req.body || {};

  // Honeypot check — bots fill this in, humans don't
  if (body.website !== undefined && body.website !== '') {
    // Silently accept to not tip off bots
    return res.status(200).json({ success: true, message: 'Je bericht is ontvangen.' });
  }

  const naam = sanitize(body.naam, 100);
  const email = sanitize(body.email, 254);
  const bericht = sanitize(body.bericht, 2000);

  if (!naam || naam.length < 2) {
    return res.status(400).json({ error: 'Naam is verplicht (minimaal 2 tekens).' });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Vul een geldig e-mailadres in.' });
  }

  if (!bericht || bericht.length < 10) {
    return res.status(400).json({ error: 'Bericht is verplicht (minimaal 10 tekens).' });
  }

  // Log without full bericht content for privacy
  console.log('Nieuw contactbericht:', { naam, email: email.replace(/(.{2}).+(@.+)/, '$1***$2'), berichtLen: bericht.length });

  return res.status(200).json({ success: true, message: 'Je bericht is ontvangen. We nemen snel contact op.' });
};
