import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-wrapper">
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">🌿 100% onafhankelijk vergelijken</div>
          <h1>Vind het <em>beste supplement</em> voor jouw doel</h1>
          <p className="hero-sub">
            Wij vergelijken honderden supplementen op prijs, kwaliteit en
            ingrediënten — zodat jij de slimste keuze maakt.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/vergelijken')}>Start vergelijken</button>
            <button className="btn-secondary" onClick={() => navigate('/producten')}>Bekijk alle producten</button>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">400+</div><div className="stat-label">Producten vergeleken</div></div>
            <div><div className="stat-num">12</div><div className="stat-label">Categorieën</div></div>
            <div><div className="stat-num">100%</div><div className="stat-label">Onafhankelijk</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-main">
            <div className="product-img">💧</div>
            <div className="product-name">Vitamine D3 Druppels 1000 I.E.</div>
            <div className="product-brand">BioProphyl · 750 druppels per fles</div>
            <div className="stars">★★★★★ <span>Topkwaliteit · Awin</span></div>
            <div className="price-row">
              <div>
                <div className="price">€19,95</div>
              </div>
              <div className="score-badge">Aanbevolen</div>
            </div>
          </div>
          <div className="hero-card-small">
            <div className="small-label">Voordelen</div>
            {[
              'Vloeibaar & makkelijk te doseren',
              'In olijfolie voor betere opname',
              'Geschikt voor het hele gezin',
            ].map(v => (
              <div key={v} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 8, fontSize: 12, color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {v}
              </div>
            ))}
          </div>
          <div className="hero-tag">🌿 Natuurlijke ingrediënten</div>
        </div>
      </section>
    </div>
  );
}
