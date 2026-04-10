const { vitamines, magnesium, omega3, vitamineD, allComparableProducts } = require('../src/data/products.js');

const ALLOWED_CATEGORIES = ['vitamines', 'magnesium', 'omega3', 'vitamineD', 'all'];

module.exports = function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { category } = req.query;

  if (category && !ALLOWED_CATEGORIES.includes(category)) {
    return res.status(400).json({ error: 'Ongeldige categorie' });
  }

  const dataMap = {
    vitamines,
    magnesium,
    omega3,
    vitamineD,
    all: allComparableProducts,
  };

  const data = category ? dataMap[category] : dataMap;

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  return res.status(200).json({ success: true, data });
};
