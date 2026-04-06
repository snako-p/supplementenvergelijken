import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import TopProducts from '../components/TopProducts';
import HowItWorks from '../components/HowItWorks';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <TopProducts />
      <HowItWorks />
    </>
  );
}
