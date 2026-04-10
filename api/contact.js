const rateLimit = new Map();

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

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, 1000).replace(/[<>]/g, '');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';

  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Te veel verzoeken. Probeer later opnieuw.' });
  }

  const naam = sanitize(req.body?.naam);
  const email = sanitize(req.body?.email);
  const bericht = sanitize(req.body?.bericht);

  if (!naam || naam.length < 2) {
    return res.status(400).json({ error: 'Naam is verplicht (minimaal 2 tekens).' });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Vul een geldig e-mailadres in.' });
  }

  if (!bericht || bericht.length < 10) {
    return res.status(400).json({ error: 'Bericht is verplicht (minimaal 10 tekens).' });
  }

  // Hier kun je later een e-mailservice (bijv. Resend of SendGrid) koppelen
  console.log('Nieuw contactbericht:', { naam, email, bericht: bericht.slice(0, 100) });

  return res.status(200).json({ success: true, message: 'Je bericht is ontvangen. We nemen snel contact op.' });
};
