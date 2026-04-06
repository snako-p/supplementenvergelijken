import React from 'react';
import ProductCard from './ProductCard';
import '../styles/TopProducts.css';

const products = [
  {
    emoji: '🌞', category: 'Vitamine D3', title: "Nature's Best D3 5000IU",
    subtitle: '90 capsules · Hoge biologische beschikbaarheid',
    rating: 4.8, reviewCount: 312,
    features: ['Gecertificeerde ingrediënten', 'Beste prijs/kwaliteit', 'Glutenvrij & vegan'],
    price: '€18,95', isBest: true, accentColor: 'var(--orange-pale)',
  },
  {
    emoji: '🪨', category: 'Magnesium', title: 'Vitakruid Magnesium Malaat',
    subtitle: '120 tabletten · Hoge absorptie',
    rating: 4.7, reviewCount: 198,
    features: ['Snelle opname', 'Ondersteunt spieren & slaap', 'Made in Belgium'],
    price: '€21,50', isBest: false, accentColor: '#E8F5EC',
  },
  {
    emoji: '🐟', category: 'Omega-3', title: 'Nordic Naturals Ultimate Omega',
    subtitle: '60 softgels · EPA + DHA',
    rating: 4.6, reviewCount: 145,
    features: ['Gecertificeerde visserij', 'Hoge EPA/DHA verhouding', 'Geen visgeur'],
    price: '€29,95', isBest: false, accentColor: '#EDF2FB',
  },
];

export default function TopProducts() {
  return (
    <div className="top-products">
      <div className="top-inner">
        <div className="section-label">Meest vergeleken</div>
        <div className="section-title">Top supplementen van 2025</div>
        <p className="section-sub">Onze redactie test en vergelijkt — jij kiest met vertrouwen.</p>
        <div className="product-grid">
          {products.map(p => <ProductCard key={p.title} {...p} />)}
        </div>
      </div>
    </div>
  );
}
