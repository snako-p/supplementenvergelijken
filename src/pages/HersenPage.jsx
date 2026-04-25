import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import '../styles/Page.css';

export default function HersenPage() {
  return (
    <div className="page">
      <SEO
        title="Beste Hersenen & Focus Supplementen België 2026"
        description="Vergelijk de beste nootropics en hersensupplementen in België: Bacopa, Rhodiola, Ginseng en meer. Onafhankelijke reviews op focus en concentratie."
        canonical="/hersenen"
      />
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Hersenen & Focus</h1>
        <p className="page-sub">Nootropics en cognitieve supplementen — verbeter je focus, geheugen en concentratie.</p>
      </div>
      <ProductGrid
        categorieën={['Hersenen']}
        defaultCategorie="Alle"
      />
    </div>
  );
}
