import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Page.css';

const products = [
  {
    id: 'pr-1', rank: 1, emoji: '💪', name: 'MyProtein Impact Whey', brand: 'MyProtein',
    category: 'Whey Proteïne', price: 34.99, priceDisplay: '€34,99', dosage: '25g per portie',
    servings: 40, rating: 4.7, reviewCount: 521, isBest: true, accentColor: 'var(--orange-pale)',
    features: ['21g eiwit per portie', 'Beste prijs/kwaliteit', '40+ smaken'],
    link: '#',
  },
  {
    id: 'pr-2', rank: 2, emoji: '🌱', name: 'Vivo Life Perform Vegan', brand: 'Vivo Life',
    category: 'Vegan Proteïne', price: 44.95, priceDisplay: '€44,95', dosage: '25g per portie',
    servings: 30, rating: 4.6, reviewCount: 187, isBest: false, accentColor: '#E8F5EC',
    features: ['100% plantaardig', 'Erwten + rijst proteïne', 'Geen kunstmatige zoetstoffen'],
    link: '#',
  },
  {
    id: 'pr-3', rank: 3, emoji: '🥛', name: 'Optimum Nutrition Gold Standard', brand: 'ON',
    category: 'Whey Proteïne', price: 59.99, priceDisplay: '€59,99', dosage: '24g per portie',
    servings: 74, rating: 4.8, reviewCount: 893, isBest: false, accentColor: '#EDF2FB',
    features: ['Meest verkocht wereldwijd', '24g eiwit per portie', 'Lage vetten & suikers'],
    link: '#',
  },
  {
    id: 'pr-4', rank: 4, emoji: '🧀', name: 'Bulk Caseine Proteïne', brand: 'Bulk',
    category: 'Caseine', price: 29.99, priceDisplay: '€29,99', dosage: '25g per portie',
    servings: 36, rating: 4.4, reviewCount: 134, isBest: false, accentColor: 'var(--orange-pale)',
    features: ['Langzame opname', 'Ideaal voor de nacht', 'Satiating effect'],
    link: '#',
  },
];

export default function ProteinePage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Proteïne</h1>
        <p className="page-sub">Whey, vegan of caseine — vind het beste eiwitpoeder voor jouw doel en budget.</p>
      </div>
      <div className="page-grid">
        {products.map(p => <ProductCard key={p.id} {...p} reviewCount={p.reviewCount} />)}
      </div>
    </div>
  );
}
