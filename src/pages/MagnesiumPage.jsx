import React from 'react';
import ProductCard from '../components/ProductCard';
import { magnesium } from '../data/products';
import '../styles/Page.css';

export default function MagnesiumPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Magnesium</h1>
        <p className="page-sub">Welke magnesiumvorm past het best bij jouw doel? Wij vergelijken het voor jou.</p>
      </div>
      <div className="page-grid">
        {magnesium.map(p => (
          <ProductCard key={p.id} {...p} reviewCount={p.reviewCount} />
        ))}
      </div>
    </div>
  );
}
