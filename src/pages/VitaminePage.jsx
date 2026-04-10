import React from 'react';
import ProductCard from '../components/ProductCard';
import { vitamines } from '../data/products';
import '../styles/Page.css';

export default function VitaminePage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Vitamines</h1>
        <p className="page-sub">Vergelijk de beste vitamine-supplementen op prijs, kwaliteit en ingrediënten.</p>
      </div>
      <div className="page-grid">
        {vitamines.map(p => (
          <ProductCard key={p.id} {...p} reviewCount={p.reviewCount} />
        ))}
      </div>
    </div>
  );
}
