import React, { useState } from 'react';
import { products } from '../data/products';
import '../styles/ProductGrid.css';

const CATEGORIES = [
  'Alle', 'Vitamines', 'Magnesium', 'Mineralen', 'Omega-3',
  'Proteïne', 'Sport', 'Hersenen', 'Stress & Slaap', 'Huid & Haar', 'Energie',
];

const ACCENT_COLORS = {
  Vitamines: 'var(--orange-pale)',
  Magnesium: '#E8F5EC',
  Mineralen: '#EDF2FB',
  'Omega-3': '#EDF2FB',
  Proteïne: '#E8F5EC',
  Sport: '#E8F5EC',
  Hersenen: '#EDF2FB',
  'Stress & Slaap': '#E8F5EC',
  'Huid & Haar': 'var(--orange-pale)',
  Energie: 'var(--orange-pale)',
};

const EMOJI = {
  Vitamines: '🌞', Magnesium: '🪨', Mineralen: '⚡', 'Omega-3': '🐟',
  Proteïne: '🥛', Sport: '💪', Hersenen: '🧠', 'Stress & Slaap': '🌿',
  'Huid & Haar': '✨', Energie: '⚡',
};

export default function ProductGrid({ title, subtitle, defaultCategorie = 'Alle', categorieën }) {
  const [activeCategory, setActiveCategory] = useState(defaultCategorie);

  const visibleCategories = categorieën ? ['Alle', ...categorieën] : CATEGORIES;
  const pool = categorieën ? products.filter(p => categorieën.includes(p.categorie)) : products;
  const filtered = activeCategory === 'Alle' ? pool : pool.filter(p => p.categorie === activeCategory);

  return (
    <section className="pg-section">
      {(title || subtitle) && (
        <div className="pg-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>
      )}

      <div className="pg-filters" role="group" aria-label="Filter op categorie">
        {visibleCategories.map(cat => (
          <button
            key={cat}
            className={`pg-filter-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pg-grid">
        {filtered.length === 0 && (
          <div className="pg-empty">Geen producten gevonden in deze categorie.</div>
        )}
        {filtered.map(product => (
          <article key={product.id} className="pg-card">
            <div
              className="pg-card-img-wrap"
              style={{ background: ACCENT_COLORS[product.categorie] || 'var(--orange-pale)' }}
            >
              {product.afbeelding ? (
                <img
                  src={product.afbeelding}
                  alt={product.naam}
                  className="pg-card-img"
                  loading="lazy"
                />
              ) : (
                <span className="pg-card-emoji">{EMOJI[product.categorie] || '💊'}</span>
              )}
            </div>
            <div className="pg-card-body">
              <span className="pg-cat-tag">{product.categorie}</span>
              <h3 className="pg-card-naam">{product.naam}</h3>
              <div className="pg-card-merk">{product.merk}</div>
              <p className="pg-card-desc">{product.beschrijving}</p>
              <div className="pg-card-footer">
                <div className="pg-price-row">
                  <span className="pg-prijs">{product.prijs}</span>
                  <span className="pg-network-tag">{product.netwerk}</span>
                </div>
                <a
                  href={product.url}
                  className="pg-offer-btn"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  aria-label={`Bekijk aanbieding voor ${product.naam} van ${product.merk}`}
                >
                  Bekijk aanbieding →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
