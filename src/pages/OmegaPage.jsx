import React from 'react';
import ProductCard from '../components/ProductCard';
import { omega3 } from '../data/products';
import '../styles/Page.css';

export default function OmegaPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Omega-3</h1>
        <p className="page-sub">Van visolie tot algenolie — vind de beste omega-3 voor jouw levensstijl.</p>
      </div>
      <div className="page-grid">
        {omega3.map(p => (
          <ProductCard key={p.id} {...p} reviewCount={p.reviewCount} />
        ))}
      </div>
    </div>
  );
}
