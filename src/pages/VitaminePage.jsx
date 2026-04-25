import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';
import '../styles/Page.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Beste Vitamine Supplementen België 2025',
  description: 'Vergelijk de beste vitamine supplementen op prijs, kwaliteit en ingrediënten.',
  url: 'https://www.supplementenvergelijken.be/vitamines',
};

export default function VitaminePage() {
  return (
    <div className="page">
      <SEO
        title="Beste Vitamine Supplementen België 2025"
        description="Vergelijk de beste vitamine supplementen in België. Onafhankelijke reviews van vitamine D, B12, C en K2 op prijs, kwaliteit en ingrediënten."
        canonical="/vitamines"
        schema={schema}
      />
      <div className="page-header">
        <div className="section-label">Categorie</div>
        <h1 className="page-title">Vitamines</h1>
        <p className="page-sub">Vergelijk de beste vitamine-supplementen op prijs, kwaliteit en ingrediënten.</p>
      </div>
      <ProductGrid
        categorieën={['Vitamines']}
        defaultCategorie="Alle"
      />
    </div>
  );
}
