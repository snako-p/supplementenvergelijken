import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import '../styles/Page.css';

export default function StressSlaapPage() {
  return (
    <div className="page">
      <SEO
        title="Beste Stress & Slaap Supplementen België 2026"
        description="Vergelijk de beste stress- en slaafsupplementen in België: Ashwagandha, Valeriaan, Melatonine en meer. Onafhankelijke reviews op werking en prijs."
        canonical="/stress-slaap"
      />
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Stress & Slaap</h1>
        <p className="page-sub">Adaptogenen en slaapondersteuners — verminder stress en verbeter je slaapkwaliteit.</p>
      </div>
      <ProductGrid
        categorieën={['Stress & Slaap']}
        defaultCategorie="Alle"
      />
    </div>
  );
}
