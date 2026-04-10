import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';

const cats = [
  { icon: '🌞', name: 'Vitamines', count: 48, to: '/vitamines' },
  { icon: '🪨', name: 'Mineralen', count: 36, to: '/mineralen' },
  { icon: '💪', name: 'Proteïne', count: 24, to: '/proteine' },
  { icon: '🐟', name: 'Omega-3', count: 18, to: '/omega-3' },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="section-label">Categorieën</div>
      <div className="section-title">Wat wil jij verbeteren?</div>
      <p className="section-sub">Kies een categorie en ontdek de beste supplementen.</p>
      <div className="cat-grid">
        {cats.map(cat => (
          <Link className="cat-card" key={cat.name} to={cat.to}>
            <span className="cat-icon">{cat.icon}</span>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-count">{cat.count} producten</div>
            <span className="cat-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
