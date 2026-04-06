import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Page.css';

const products = [
  {
    emoji: '🌞', category: 'Vitamine D3', title: "Nature's Best D3 5000IU",
    subtitle: '90 capsules · Hoge biologische beschikbaarheid',
    rating: 4.8, reviewCount: 312,
    features: ['Gecertificeerde ingrediënten', 'Beste prijs/kwaliteit', 'Glutenvrij & vegan'],
    price: '€18,95', isBest: true, accentColor: 'var(--orange-pale)',
  },
  {
    emoji: '🅱️', category: 'Vitamine B12', title: 'Solgar Methylcobalamine B12',
    subtitle: '60 tabletten · 1000mcg per tablet',
    rating: 4.7, reviewCount: 224,
    features: ['Actieve vorm methylcobalamine', 'Energie & zenuwstelsel', 'Vegan'],
    price: '€14,50', isBest: false, accentColor: '#EDF2FB',
  },
  {
    emoji: '🍊', category: 'Vitamine C', title: 'NOW Foods Vitamine C-1000',
    subtitle: '100 tabletten · Met bioflavonoïden',
    rating: 4.6, reviewCount: 187,
    features: ['1000mg per tablet', 'Antioxidant', 'Immuunsysteem'],
    price: '€12,95', isBest: false, accentColor: '#FFF8ED',
  },
  {
    emoji: '🥚', category: 'Vitamine K2', title: 'Vitakruid K2 + D3',
    subtitle: '60 capsules · MK-7 vorm',
    rating: 4.5, reviewCount: 143,
    features: ['MK-7 meest actieve vorm', 'Ondersteunt botgezondheid', 'Gecombineerd met D3'],
    price: '€22,95', isBest: false, accentColor: 'var(--orange-pale)',
  },
];

export default function VitaminePage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Vitamines</h1>
        <p className="page-sub">Vergelijk de beste vitamine-supplementen op prijs, kwaliteit en ingrediënten.</p>
      </div>
      <div className="page-grid">
        {products.map(p => <ProductCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}
