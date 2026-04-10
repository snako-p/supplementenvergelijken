import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { vitamineD, magnesium, omega3, vitamines } from '../data/products.js';
import '../styles/FilterTable.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Supplement Vergelijkingstabel — Filteren op Categorie & Prijs',
  description: 'Vergelijk supplementen op categorie, prijs, beoordeling en score. Filter en sorteer naar jouw wensen.',
  applicationCategory: 'HealthApplication',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
};

const allProducts = [
  ...vitamineD.map(p => ({ ...p, mainCategory: 'Vitamine D' })),
  ...magnesium.map(p => ({ ...p, mainCategory: 'Magnesium' })),
  ...omega3.map(p => ({ ...p, mainCategory: 'Omega-3' })),
  ...vitamines.filter(p => !vitamineD.find(v => v.id === p.id)).map(p => ({ ...p, mainCategory: 'Vitamines' })),
];

const CATEGORIES = ['Alle categorieën', 'Vitamine D', 'Magnesium', 'Omega-3', 'Vitamines'];
const SORTS = [
  { value: 'score-desc', label: 'Score (hoog → laag)' },
  { value: 'price-asc', label: 'Prijs (laag → hoog)' },
  { value: 'price-desc', label: 'Prijs (hoog → laag)' },
  { value: 'rating-desc', label: 'Beoordeling' },
];

export default function FilterTablePage() {
  const [category, setCategory] = useState('Alle categorieën');
  const [maxPrice, setMaxPrice] = useState(50);
  const [veganOnly, setVeganOnly] = useState(false);
  const [sortBy, setSortBy] = useState('score-desc');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = allProducts.filter(p => {
      if (category !== 'Alle categorieën' && p.mainCategory !== category) return false;
      if (p.price > maxPrice) return false;
      if (veganOnly && !p.vegan) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.brand.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sortBy === 'score-desc') return (b.score || 0) - (a.score || 0);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      return 0;
    });

    return list;
  }, [category, maxPrice, veganOnly, sortBy, search]);

  return (
    <div className="ft-page">
      <SEO
        title="Supplement Vergelijkingstabel — Filter & Vergelijk (2026)"
        description="Vergelijk alle supplementen op categorie, prijs en beoordeling. Filter op vegan, prijs en categorie. Altijd bijgewerkt 2026."
        canonical="/vergelijkingstabel"
        schema={schema}
      />

      <div className="ft-hero">
        <div className="ft-hero-inner">
          <div className="section-label">Interactief · 2026</div>
          <h1>Supplement Vergelijkingstabel</h1>
          <p>Filter en sorteer alle supplementen op jouw criteria.</p>
        </div>
      </div>

      <div className="ft-layout">
        {/* Filters sidebar */}
        <aside className="ft-filters">
          <h3 className="ft-filters-title">Filters</h3>

          <div className="ft-filter-group">
            <label className="ft-filter-label">Zoeken</label>
            <input
              type="text"
              className="ft-search-input"
              placeholder="Naam of merk..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="ft-filter-group">
            <label className="ft-filter-label">Categorie</label>
            <div className="ft-cat-btns">
              {CATEGORIES.map(c => (
                <button
                  key={c}
                  className={`ft-cat-btn${category === c ? ' active' : ''}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="ft-filter-group">
            <label className="ft-filter-label">Max. prijs: <strong>€{maxPrice}</strong></label>
            <input
              type="range"
              min={5}
              max={50}
              step={5}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="ft-range"
            />
            <div className="ft-range-labels"><span>€5</span><span>€50</span></div>
          </div>

          <div className="ft-filter-group">
            <label className="ft-filter-toggle">
              <input
                type="checkbox"
                checked={veganOnly}
                onChange={e => setVeganOnly(e.target.checked)}
              />
              <span className="ft-toggle-track" />
              <span className="ft-toggle-label">Alleen vegan</span>
            </label>
          </div>

          <div className="ft-filter-group">
            <label className="ft-filter-label">Sorteren op</label>
            <select className="ft-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              {SORTS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div className="ft-filter-result-count">
            {filtered.length} product{filtered.length !== 1 ? 'en' : ''} gevonden
          </div>
        </aside>

        {/* Results */}
        <div className="ft-results">
          {filtered.length === 0 ? (
            <div className="ft-empty">
              <span>😔</span>
              <p>Geen producten gevonden met deze filters.</p>
              <button onClick={() => { setCategory('Alle categorieën'); setMaxPrice(50); setVeganOnly(false); setSearch(''); }}>
                Filters wissen
              </button>
            </div>
          ) : (
            <>
              <div className="ft-table-wrap">
                <table className="ft-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Categorie</th>
                      <th>Dosering</th>
                      <th>Prijs</th>
                      <th>Score</th>
                      <th>Beoordeling</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(p => (
                      <tr key={p.id} className={p.isBest ? 'ft-best-row' : ''}>
                        <td>
                          <div className="ft-product-cell">
                            <span className="ft-product-emoji">{p.emoji}</span>
                            <div>
                              <div className="ft-product-name">
                                {p.name}
                                {p.isBest && <span className="ft-best-badge">Beste keuze</span>}
                              </div>
                              <div className="ft-product-brand">{p.brand}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className="ft-cat-tag">{p.mainCategory}</span></td>
                        <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{p.dosage}</td>
                        <td><strong style={{ color: 'var(--brown)' }}>€{p.price.toFixed(2).replace('.', ',')}</strong></td>
                        <td>
                          {p.score ? (
                            <span className="ft-score-pill">{p.score}</span>
                          ) : (
                            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>—</span>
                          )}
                        </td>
                        <td>
                          <span style={{ color: 'var(--orange)' }}>{'★'.repeat(Math.floor(p.rating))}</span>
                          <small style={{ color: 'var(--text-muted)', fontSize: 12 }}> {p.rating}</small>
                        </td>
                        <td>
                          <a href={p.link} className="ft-buy-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">
                            Bekijk →
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="ft-cards">
                {filtered.map(p => (
                  <div key={p.id} className={`ft-card${p.isBest ? ' ft-card-best' : ''}`}>
                    <div className="ft-card-top">
                      <span className="ft-card-emoji">{p.emoji}</span>
                      <div className="ft-card-info">
                        <div className="ft-card-name">
                          {p.name}
                          {p.isBest && <span className="ft-best-badge">Beste keuze</span>}
                        </div>
                        <div className="ft-card-brand">{p.brand} · <span className="ft-cat-tag">{p.mainCategory}</span></div>
                      </div>
                    </div>
                    <div className="ft-card-details">
                      <div><span className="ft-detail-label">Prijs</span> <strong>€{p.price.toFixed(2).replace('.', ',')}</strong></div>
                      <div><span className="ft-detail-label">Dosering</span> {p.dosage}</div>
                      {p.score && <div><span className="ft-detail-label">Score</span> <span className="ft-score-pill">{p.score}</span></div>}
                      <div><span className="ft-detail-label">Reviews</span> <span style={{ color: 'var(--orange)' }}>{'★'.repeat(Math.floor(p.rating))}</span> {p.rating}</div>
                    </div>
                    <a href={p.link} className="ft-card-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">
                      Bekijk prijs →
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="ft-cta">
        <p>Weet je niet welk supplement je nodig hebt?</p>
        <Link to="/supplement-quiz" className="ft-cta-btn">Doe de supplement quiz →</Link>
      </div>
    </div>
  );
}
