import React from 'react';
import '../styles/Categories.css';

const cats = [
  { icon: '🌞', name: 'Vitamines', count: 48 },
  { icon: '💪', name: 'Sporters', count: 63 },
  { icon: '🧠', name: 'Hersenen & focus', count: 31 },
  { icon: '😴', name: 'Slaap & stress', count: 27 },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="section-label">Categorieën</div>
      <div className="section-title">Wat wil jij verbeteren?</div>
      <p className="section-sub">Kies een categorie en ontdek de beste supplementen.</p>
      <div className="cat-grid">
        {cats.map(cat => (
          <div className="cat-card" key={cat.name}>
            <div className="cat-icon">{cat.icon}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-count">{cat.count} producten</div>
            <span className="cat-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
