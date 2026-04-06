import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Page.css';

const products = [
  {
    emoji: '🪨', category: 'Magnesium Malaat', title: 'Vitakruid Magnesium Malaat',
    subtitle: '120 tabletten · Hoge absorptie',
    rating: 4.7, reviewCount: 198,
    features: ['Snelle opname', 'Ondersteunt spieren & slaap', 'Made in Belgium'],
    price: '€21,50', isBest: true, accentColor: '#E8F5EC',
  },
  {
    emoji: '💊', category: 'Magnesium Bisglycinaat', title: 'Pure Encapsulations Mg Bisglycinaat',
    subtitle: '90 capsules · Zacht voor de maag',
    rating: 4.8, reviewCount: 156,
    features: ['Beste tolerantie', 'Geen laxerend effect', 'Ultra pure kwaliteit'],
    price: '€29,95', isBest: false, accentColor: '#EDF2FB',
  },
  {
    emoji: '🧂', category: 'Magnesium Citraat', title: 'Natural Calm Magnesium Citraat',
    subtitle: '250g poeder · Framboossmaak',
    rating: 4.5, reviewCount: 211,
    features: ['Poedervorm', 'Snel opneembaar', 'Rustgevend voor avond'],
    price: '€16,95', isBest: false, accentColor: 'var(--orange-pale)',
  },
  {
    emoji: '🌊', category: 'Magnesium L-Threönaat', title: 'Magtein Magnesium L-Threönaat',
    subtitle: '90 capsules · Geoptimaliseerd voor hersenen',
    rating: 4.6, reviewCount: 89,
    features: ['Passeert bloed-hersenbarrière', 'Geheugen & focus', 'Wetenschappelijk onderbouwd'],
    price: '€39,95', isBest: false, accentColor: '#E8F5EC',
  },
];

export default function MagnesiumPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Magnesium</h1>
        <p className="page-sub">Welke magnesiumvorm past het best bij jouw doel? Wij vergelijken het voor jou.</p>
      </div>
      <div className="page-grid">
        {products.map(p => <ProductCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}
