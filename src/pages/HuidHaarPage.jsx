import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import '../styles/Page.css';

export default function HuidHaarPage() {
  return (
    <div className="page">
      <SEO
        title="Beste Huid & Haar Supplementen België 2026"
        description="Vergelijk de beste huid- en haarsupplementen in België: Collageen, Biotine, Hyaluronzuur en meer. Onafhankelijke reviews op werking en kwaliteit."
        canonical="/huid-haar"
      />
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Huid & Haar</h1>
        <p className="page-sub">Collageen en schoonheidssupplementen — ondersteun huid, haar en nagels van binnenuit.</p>
      </div>
      <ProductGrid
        categorieën={['Huid & Haar']}
        defaultCategorie="Alle"
      />
    </div>
  );
}
