import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Page.css';

const products = [
  {
    emoji: '🐟', category: 'Omega-3 Visolie', title: 'Nordic Naturals Ultimate Omega',
    subtitle: '60 softgels · EPA + DHA',
    rating: 4.6, reviewCount: 145,
    features: ['Gecertificeerde visserij', 'Hoge EPA/DHA verhouding', 'Geen visgeur'],
    price: '€29,95', isBest: true, accentColor: '#EDF2FB',
  },
  {
    emoji: '🌿', category: 'Omega-3 Vegan', title: 'Vegetology Opti3 Algenolie',
    subtitle: '60 softgels · Uit micro-algen',
    rating: 4.7, reviewCount: 98,
    features: ['100% plantaardig', 'Geen visgeur', 'Duurzaam gewonnen'],
    price: '€34,95', isBest: false, accentColor: '#E8F5EC',
  },
  {
    emoji: '💪', category: 'Omega-3 Sport', title: 'Momentous Omega-3',
    subtitle: '60 capsules · Hoge dosis voor sporters',
    rating: 4.5, reviewCount: 67,
    features: ['2000mg EPA+DHA', 'Herstel na training', 'NSF gecertificeerd'],
    price: '€44,95', isBest: false, accentColor: 'var(--orange-pale)',
  },
  {
    emoji: '🫀', category: 'Omega-3 Hart', title: 'WHC UnoCardio 1000',
    subtitle: '60 softgels · Cardiologisch aanbevolen',
    rating: 4.8, reviewCount: 203,
    features: ['#1 in puurheidstest', 'Hart & bloedvaten', 'Belgisch merk'],
    price: '€38,50', isBest: false, accentColor: '#EDF2FB',
  },
];

export default function OmegaPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Omega-3</h1>
        <p className="page-sub">Van visolie tot algenolie — vind de beste omega-3 voor jouw levensstijl.</p>
      </div>
      <div className="page-grid">
        {products.map(p => <ProductCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}
