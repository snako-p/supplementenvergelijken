import React, { useState } from 'react';
import { products } from '../data/products';
import SEO from '../components/SEO';
import '../styles/ComparisonPage.css';

const ACCENT = {
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

function ProductSelector({ label, selected, onChange, exclude }) {
  return (
    <div className="selector">
      <div className="selector-label">{label}</div>
      <select value={selected ?? ''} onChange={e => onChange(Number(e.target.value))}>
        <option value="" disabled>Kies een supplement...</option>
        {products.filter(p => p.id !== exclude).map(p => (
          <option key={p.id} value={p.id}>{p.naam} — {p.merk}</option>
        ))}
      </select>
    </div>
  );
}

export default function ComparisonPage() {
  const [idA, setIdA] = useState(1);
  const [idB, setIdB] = useState(14);

  const A = products.find(p => p.id === idA);
  const B = products.find(p => p.id === idB);

  return (
    <div className="comparison-page">
      <SEO
        title="Supplementen Vergelijken — SupplementenVergelijken.be"
        description="Vergelijk twee supplementen naast elkaar op prijs, voordelen, nadelen en dosering. Kies het product dat het beste bij jou past."
        canonical="/vergelijken"
      />

      <div className="comp-header">
        <div className="section-label">Vergelijker</div>
        <h1 className="page-title">Vergelijk supplementen</h1>
        <p className="page-sub">Kies twee producten en zie in één oogopslag welk het beste bij jou past.</p>
      </div>

      <div className="selectors">
        <ProductSelector label="Product A" selected={idA} onChange={setIdA} exclude={idB} />
        <div className="vs-badge">VS</div>
        <ProductSelector label="Product B" selected={idB} onChange={setIdB} exclude={idA} />
      </div>

      {A && B && (
        <>
          {/* Hero cards */}
          <div className="comp-grid comp-hero-grid">
            <div className="comp-card" style={{ background: ACCENT[A.categorie] || 'var(--orange-pale)' }}>
              <span className="comp-cat-badge">{A.categorie}</span>
              <div className="comp-name">{A.naam}</div>
              <div className="comp-brand">{A.merk}</div>
              <div className="comp-price">{A.prijs}</div>
              <div className="comp-netwerk-tag">{A.netwerk}</div>
            </div>
            <div className="comp-divider-col" />
            <div className="comp-card" style={{ background: ACCENT[B.categorie] || 'var(--orange-pale)' }}>
              <span className="comp-cat-badge">{B.categorie}</span>
              <div className="comp-name">{B.naam}</div>
              <div className="comp-brand">{B.merk}</div>
              <div className="comp-price">{B.prijs}</div>
              <div className="comp-netwerk-tag">{B.netwerk}</div>
            </div>
          </div>

          {/* Snelle feiten */}
          <div className="quick-stats">
            <div className="quick-stats-title">Snelle vergelijking</div>
            {[
              { label: 'Prijs', a: A.prijs, b: B.prijs },
              { label: 'Dosering', a: A.dosering, b: B.dosering },
              { label: 'Merk', a: A.merk, b: B.merk },
              { label: 'Netwerk', a: A.netwerk, b: B.netwerk },
            ].map(({ label, a, b }) => (
              <div className="stat-row" key={label}>
                <div className="stat-cell">{a}</div>
                <div className="stat-row-label">{label}</div>
                <div className="stat-cell right">{b}</div>
              </div>
            ))}
          </div>

          {/* Beschrijving */}
          <div className="comp-section-label">Beschrijving</div>
          <div className="comp-grid ingredients-grid">
            <div className="ing-block">
              <p className="comp-desc-text">{A.beschrijving}</p>
            </div>
            <div className="comp-divider-col" />
            <div className="ing-block">
              <p className="comp-desc-text">{B.beschrijving}</p>
            </div>
          </div>

          {/* Voordelen & Nadelen */}
          <div className="comp-section-label">Voordelen & Nadelen</div>
          <div className="comp-grid">
            <div className="pros-cons">
              <div className="pc-block">
                <div className="pc-title green">Voordelen</div>
                {A.voordelen.map(v => (
                  <div className="pc-item" key={v}>
                    <span className="pc-icon green">✓</span>{v}
                  </div>
                ))}
              </div>
              <div className="pc-block">
                <div className="pc-title red">Nadelen</div>
                {A.nadelen.map(n => (
                  <div className="pc-item" key={n}>
                    <span className="pc-icon red">✗</span>{n}
                  </div>
                ))}
              </div>
            </div>
            <div className="comp-divider-col" />
            <div className="pros-cons">
              <div className="pc-block">
                <div className="pc-title green">Voordelen</div>
                {B.voordelen.map(v => (
                  <div className="pc-item" key={v}>
                    <span className="pc-icon green">✓</span>{v}
                  </div>
                ))}
              </div>
              <div className="pc-block">
                <div className="pc-title red">Nadelen</div>
                {B.nadelen.map(n => (
                  <div className="pc-item" key={n}>
                    <span className="pc-icon red">✗</span>{n}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="comp-grid cta-grid">
            <div className="cta-block">
              <div className="cta-product-name">{A.naam}</div>
              <div className="cta-price">{A.prijs}</div>
              <a
                href={A.url}
                className="cta-btn"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
              >
                Bekijk aanbieding →
              </a>
            </div>
            <div className="comp-divider-col" />
            <div className="cta-block">
              <div className="cta-product-name">{B.naam}</div>
              <div className="cta-price">{B.prijs}</div>
              <a
                href={B.url}
                className="cta-btn"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
              >
                Bekijk aanbieding →
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
