import React from 'react';
import ProductCard from '../components/ProductCard';
import { magnesium } from '../data/products';
import '../styles/Page.css';

const extra = [
  {
    id: 'zn-1', rank: 1, emoji: '⚡', name: 'Vitakruid Zink Bisglycinaat', brand: 'Vitakruid',
    category: 'Zink', price: 14.95, priceDisplay: '€14,95', dosage: '15 mg per capsule',
    servings: 60, rating: 4.7, reviewCount: 143, isBest: true, accentColor: '#EDF2FB',
    features: ['Hoge absorptie', 'Immuunsysteem & huid', 'Made in Belgium'],
    link: '#',
  },
  {
    id: 'fe-1', rank: 2, emoji: '🩸', name: 'Solgar Chelated Iron', brand: 'Solgar',
    category: 'IJzer', price: 12.50, priceDisplay: '€12,50', dosage: '25 mg per tablet',
    servings: 90, rating: 4.5, reviewCount: 98, isBest: false, accentColor: 'var(--orange-pale)',
    features: ['Geen constipatie', 'Gentle Chelated vorm', 'Vegetarisch'],
    link: '#',
  },
];

const products = [...extra, ...magnesium.slice(0, 2)];

export default function MineralenPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Mineralen</h1>
        <p className="page-sub">Zink, ijzer, magnesium en meer — vergelijk de beste mineralen-supplementen voor Belgen.</p>
      </div>
      <div className="page-grid">
        {products.map(p => <ProductCard key={p.id} {...p} reviewCount={p.reviewCount} />)}
      </div>
    </div>
  );
}
