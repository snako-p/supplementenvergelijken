import React from 'react';
import { products } from '../data/products';
import '../styles/TopProducts.css';

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

const featured = [
  products.find(p => p.id === 1),
  products.find(p => p.id === 3),
  products.find(p => p.id === 7),
];

export default function TopProducts() {
  return (
    <div className="top-products">
      <div className="top-inner">
        <div className="section-label">Uitgelicht</div>
        <div className="section-title">Aanbevolen supplementen</div>
        <p className="section-sub">Geselecteerde producten van onze partnermerken.</p>
        <div className="product-grid">
          {featured.map(p => (
            <div key={p.id} className="prod-card" style={{ position: 'relative' }}>
              <div className="prod-header" style={{ background: ACCENT[p.categorie] || 'var(--orange-pale)' }}>
                <div className="prod-rank">{p.categorie}</div>
              </div>
              <div className="prod-body">
                <div className="prod-title">{p.naam}</div>
                <div className="prod-sub">{p.merk}</div>
                <div className="prod-features">
                  <div className="feat">{p.beschrijving}</div>
                </div>
                <div className="prod-footer">
                  <a
                    href={p.url}
                    className="prod-btn"
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    aria-label={`Bekijk aanbieding voor ${p.naam}`}
                  >
                    Bekijk aanbieding →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
