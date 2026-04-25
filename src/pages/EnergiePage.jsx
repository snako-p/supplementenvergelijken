import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import '../styles/Page.css';

export default function EnergiePage() {
  return (
    <div className="page">
      <SEO
        title="Beste Energie Supplementen België 2026"
        description="Vergelijk de beste energiesupplementen in België: Co-enzym Q10, B-vitamines en meer. Onafhankelijke reviews op kwaliteit en prijs."
        canonical="/energie"
      />
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Energie Supplementen</h1>
        <p className="page-sub">Co-enzym Q10 en andere energieboosters — ondersteun je cellen en verminder vermoeidheid.</p>
      </div>
      <ProductGrid
        categorieën={['Energie']}
        defaultCategorie="Alle"
      />
    </div>
  );
}
