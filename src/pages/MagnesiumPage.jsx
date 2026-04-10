import React from 'react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { magnesium } from '../data/products';
import '../styles/Page.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Beste Magnesium Supplementen België 2025',
  description: 'Vergelijk de beste magnesiumvormen: malaat, bisglycinaat, citraat en L-threönaat.',
  url: 'https://www.supplementenvergelijken.be/magnesium',
};

export default function MagnesiumPage() {
  return (
    <div className="page">
      <SEO
        title="Beste Magnesium Supplement België 2025"
        description="Welke magnesiumvorm past het beste bij jou? Vergelijk malaat, bisglycinaat en citraat op prijs, opname en kwaliteit. Onafhankelijke reviews voor Belgen."
        canonical="/magnesium"
        schema={schema}
      />
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
