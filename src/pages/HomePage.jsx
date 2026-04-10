import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import TopProducts from '../components/TopProducts';
import HowItWorks from '../components/HowItWorks';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SupplementenVergelijken.be',
  url: 'https://www.supplementenvergelijken.be',
  description: 'Onafhankelijk supplementen vergelijken voor Belgen. Wij vergelijken honderden supplementen op prijs, kwaliteit en ingrediënten.',
  areaServed: 'BE',
  inLanguage: 'nl-BE',
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Beste Supplementen België 2025 — Onafhankelijk Vergelijken"
        description="Vergelijk de beste supplementen in België op prijs, kwaliteit en ingrediënten. Onafhankelijke reviews van vitamines, magnesium, omega-3 en meer. 100% eerlijk."
        canonical="/"
        schema={schema}
      />
      <Hero />
      <SearchBar />
      <Categories />
      <TopProducts />
      <HowItWorks />
    </>
  );
}
