import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import '../styles/Page.css';

export default function MineralenPage() {
  return (
    <div className="page">
      <SEO
        title="Beste Mineralen Supplementen België 2025"
        description="Vergelijk de beste mineralen supplementen in België: zink, ijzer, magnesium en meer. Onafhankelijke reviews op kwaliteit, opname en prijs."
        canonical="/mineralen"
      />
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Mineralen</h1>
        <p className="page-sub">Mineralen producten worden binnenkort toegevoegd. Bekijk ondertussen ons volledige aanbod.</p>
      </div>
      <ProductGrid defaultCategorie="Alle" />
    </div>
  );
}
