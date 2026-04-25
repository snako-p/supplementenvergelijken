import React from 'react';
import SEO from '../components/SEO';
import ProductGrid from '../components/ProductGrid';

export default function ProductsPage() {
  return (
    <>
      <SEO
        title="Alle Supplementen — SupplementenVergelijken.be"
        description="Bekijk ons aanbod supplementen van BioProphyl, Vital Nutrition en Holland & Barrett. Filter op categorie en vind het juiste supplement."
        canonical="/producten"
      />
      <ProductGrid
        title="Alle Supplementen"
        subtitle="Filter op categorie en ontdek de beste producten van onze partnermerken."
      />
    </>
  );
}
