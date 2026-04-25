import React, { useState } from 'react';
import { products } from '../data/products';
import SEO from '../components/SEO';
import '../styles/ComparisonPage.css';

const ACCENT = {
  Vitamines: 'var(--orange-pale)',
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
  const [idB, setIdB] = useState(3);

  const A = products.find(p => p.id === idA);
  const B = products.find(p => p.id === idB);

  return (
    <div className="comparison-page">
      <SEO
        title="Supplementen Vergelijken — SupplementenVergelijken.be"
        description="Vergelijk twee supplementen naast elkaar op categorie, merk en beschrijving. Kies het product dat het beste bij jou past."
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
          <div className="comp-grid">
            <div className="comp-card" style={{ background: ACCENT[A.categorie] || 'var(--orange-pale)' }}>
              <div className="comp-category">{A.categorie}</div>
              <div className="comp-name">{A.naam}</div>
              <div className="comp-brand">{A.merk}</div>
            </div>
            <div className="comp-divider-col" />
            <div className="comp-card" style={{ background: ACCENT[B.categorie] || 'var(--orange-pale)' }}>
              <div className="comp-category">{B.categorie}</div>
              <div className="comp-name">{B.naam}</div>
              <div className="comp-brand">{B.merk}</div>
            </div>
          </div>

          <div className="quick-stats">
            {[
              { label: 'Merk', a: A.merk, b: B.merk },
              { label: 'Categorie', a: A.categorie, b: B.categorie },
              { label: 'Netwerk', a: A.netwerk, b: B.netwerk },
            ].map(({ label, a, b }) => (
              <div className="stat-row" key={label}>
                <div className="stat-cell">{a}</div>
                <div className="stat-row-label">{label}</div>
                <div className="stat-cell right">{b}</div>
              </div>
            ))}
          </div>

          <div className="comp-grid ingredients-grid">
            <div className="ing-block">
              <div className="ing-title">Beschrijving</div>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{A.beschrijving}</p>
            </div>
            <div className="comp-divider-col" />
            <div className="ing-block">
              <div className="ing-title">Beschrijving</div>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{B.beschrijving}</p>
            </div>
          </div>

          <div className="comp-grid cta-grid">
            <div className="cta-block">
              <a
                href={A.url}
                className="prod-btn cta-btn"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
              >
                Bekijk aanbieding →
              </a>
            </div>
            <div className="comp-divider-col" />
            <div className="cta-block">
              <a
                href={B.url}
                className="prod-btn cta-btn"
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
