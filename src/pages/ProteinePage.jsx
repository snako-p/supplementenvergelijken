import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import '../styles/Page.css';

export default function ProteinePage() {
  return (
    <div className="page">
      <SEO
        title="Beste Proteïne Supplement België 2025"
        description="Vergelijk de beste eiwitpoeders in België: whey, vegan proteïne en caseine. Onafhankelijke reviews op eiwit per portie, prijs en kwaliteit."
        canonical="/proteine"
      />
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Proteïne & Sport</h1>
        <p className="page-sub">Whey, creatine en meer — vind het beste supplement voor jouw doel en budget.</p>
      </div>
      <ProductGrid
        categorieën={['Proteïne', 'Sport']}
        defaultCategorie="Alle"
      />
    </div>
  );
}
