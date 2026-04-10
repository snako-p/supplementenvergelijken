import React from 'react';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { omega3 } from '../data/products';
import '../styles/Page.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Beste Omega-3 Supplementen België 2025',
  description: 'Vergelijk de beste omega-3 supplementen: visolie en algenolie voor Belgen.',
  url: 'https://www.supplementenvergelijken.be/omega-3',
};

export default function OmegaPage() {
  return (
    <div className="page">
      <SEO
        title="Beste Omega-3 Supplement België 2025"
        description="Van visolie tot algenolie — vergelijk de beste omega-3 supplementen in België op EPA/DHA gehalte, zuiverheid en prijs. Inclusief vegan opties."
        canonical="/omega-3"
        schema={schema}
      />
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
