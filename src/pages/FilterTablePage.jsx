import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { products } from '../data/products.js';
import '../styles/FilterTable.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Supplement Vergelijkingstabel — Filteren op Categorie',
  description: 'Vergelijk supplementen op categorie en merk. Filter en sorteer naar jouw wensen.',
  applicationCategory: 'HealthApplication',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
};

const CATEGORIES = ['Alle categorieën', 'Vitamines', 'Omega-3', 'Proteïne', 'Sport', 'Hersenen', 'Stress & Slaap', 'Huid & Haar', 'Energie'];

export default function FilterTablePage() {
  const [category, setCategory] = useState('Alle categorieën');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (category !== 'Alle categorieën' && p.categorie !== category) return false;
      if (search && !p.naam.toLowerCase().includes(search.toLowerCase()) && !p.merk.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [category, search]);

  return (
    <div className="ft-page">
      <SEO
        title="Supplement Vergelijkingstabel — Filter & Vergelijk (2026)"
        description="Vergelijk alle supplementen op categorie en merk. Filter op categorie en vind het juiste supplement. Altijd bijgewerkt 2026."
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

          <div className="ft-filter-result-count">
            {filtered.length} product{filtered.length !== 1 ? 'en' : ''} gevonden
          </div>
        </aside>

        <div className="ft-results">
          {filtered.length === 0 ? (
            <div className="ft-empty">
              <span>😔</span>
              <p>Geen producten gevonden met deze filters.</p>
              <button onClick={() => { setCategory('Alle categorieën'); setSearch(''); }}>
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
                      <th>Beschrijving</th>
                      <th>Netwerk</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(p => (
                      <tr key={p.id}>
                        <td>
                          <div className="ft-product-cell">
                            <div>
                              <div className="ft-product-name">{p.naam}</div>
                              <div className="ft-product-brand">{p.merk}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className="ft-cat-tag">{p.categorie}</span></td>
                        <td style={{ color: 'var(--text-muted)', fontSize: 13, maxWidth: 260 }}>{p.beschrijving}</td>
                        <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{p.netwerk}</td>
                        <td>
                          <a href={p.url} className="ft-buy-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">
                            Bekijk →
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="ft-cards">
                {filtered.map(p => (
                  <div key={p.id} className="ft-card">
                    <div className="ft-card-top">
                      <div className="ft-card-info">
                        <div className="ft-card-name">{p.naam}</div>
                        <div className="ft-card-brand">{p.merk} · <span className="ft-cat-tag">{p.categorie}</span></div>
                      </div>
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 14, lineHeight: 1.6 }}>{p.beschrijving}</div>
                    <a href={p.url} className="ft-card-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">
                      Bekijk aanbieding →
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
