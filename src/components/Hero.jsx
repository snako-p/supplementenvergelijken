import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
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
            <button className="btn-primary">Start vergelijken</button>
            <button className="btn-secondary">Bekijk top 10</button>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">400+</div><div className="stat-label">Producten vergeleken</div></div>
            <div><div className="stat-num">12</div><div className="stat-label">Categorieën</div></div>
            <div><div className="stat-num">100%</div><div className="stat-label">Onafhankelijk</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-main">
            <div className="product-img">🌞</div>
            <div className="product-name">Vitamine D3 5000IU</div>
            <div className="product-brand">Nature's Best · 90 capsules</div>
            <div className="stars">★★★★★ <span>4.8 (312 reviews)</span></div>
            <div className="price-row">
              <div>
                <div className="price">€18,95</div>
                <div className="price-old">€24,99</div>
              </div>
              <div className="score-badge">Beste keuze</div>
            </div>
          </div>
          <div className="hero-card-small">
            <div className="small-label">Onze score</div>
            {[['Kwaliteit','92%',92],['Prijs/kwaliteit','88%',88],['Ingrediënten','95%',95]].map(([label,val,w])=>(
              <div key={label}>
                <div className="mini-row"><span>{label}</span><span>{val}</span></div>
                <div className="mini-bar"><div className="mini-fill" style={{width:`${w}%`}}></div></div>
              </div>
            ))}
          </div>
          <div className="hero-tag">🌿 Natuurlijke ingrediënten</div>
        </div>
      </section>
    </div>
  );
}
