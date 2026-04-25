import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { products } from '../data/products';
import '../styles/CategoriesPage.css';

const CATEGORIE_META = [
  { naam: 'Vitamines',      emoji: '🌞', kleur: 'var(--orange-pale)', beschrijving: 'Vitamine D, K2, multivitamines en meer' },
  { naam: 'Omega-3',        emoji: '🐟', kleur: '#EDF2FB',             beschrijving: 'Visolie, algenolie en krillolie' },
  { naam: 'Magnesium',      emoji: '🪨', kleur: '#E8F5EC',             beschrijving: 'Malaat, citraat, bisglycinaat en oxide' },
  { naam: 'Mineralen',      emoji: '⚡', kleur: '#EDF2FB',             beschrijving: 'Zink, ijzer, selenium en calcium' },
  { naam: 'Proteïne',       emoji: '🥛', kleur: '#E8F5EC',             beschrijving: 'Whey proteïne en eiwitpoeders' },
  { naam: 'Sport',          emoji: '💪', kleur: '#E8F5EC',             beschrijving: 'Creatine en sportvoeding' },
  { naam: 'Hersenen',       emoji: '🧠', kleur: '#EDF2FB',             beschrijving: 'Nootropics en focus supplementen' },
  { naam: 'Stress & Slaap', emoji: '🌿', kleur: '#E8F5EC',             beschrijving: 'Ashwagandha en ontspanningssupp.' },
  { naam: 'Huid & Haar',    emoji: '✨', kleur: 'var(--orange-pale)', beschrijving: 'Collageen en huidverzorging' },
  { naam: 'Energie',        emoji: '⚡', kleur: 'var(--orange-pale)', beschrijving: 'Co-enzym Q10 en energieboosters' },
  { naam: 'Antioxidanten',  emoji: '🌿', kleur: '#FFF3E0',             beschrijving: 'Curcumine, piperine en vrije-radicalenvangers' },
];

export default function CategoriesPage() {
  return (
    <>
      <SEO
        title="Alle Supplementen per Categorie — SupplementenVergelijken.be"
        description="Bekijk alle supplementen geordend per categorie: vitamines, omega-3, magnesium, proteïne, mineralen en meer. Echte affiliate producten met eerlijke vergelijking."
        canonical="/categorieen"
      />

      <div className="cats-page">
        {/* Hero */}
        <div className="cats-hero">
          <div className="section-label">Overzicht</div>
          <h1 className="cats-hero-title">Alle supplementen per categorie</h1>
          <p className="cats-hero-sub">Blader door {products.length} producten van onze partnermerken, geordend per categorie.</p>

          {/* Snelle navigatie */}
          <div className="cats-nav">
            {CATEGORIE_META.map(cat => {
              const count = products.filter(p => p.categorie === cat.naam).length;
              if (count === 0) return null;
              return (
                <a key={cat.naam} href={`#${cat.naam.toLowerCase().replace(/[^a-z]/g, '-')}`} className="cats-nav-pill">
                  {cat.emoji} {cat.naam} <span>({count})</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Categorieën met producten */}
        <div className="cats-body">
          {CATEGORIE_META.map(cat => {
            const catProducts = products.filter(p => p.categorie === cat.naam);
            if (catProducts.length === 0) return null;
            const anchorId = cat.naam.toLowerCase().replace(/[^a-z]/g, '-');

            return (
              <section key={cat.naam} id={anchorId} className="cats-section">
                <div className="cats-section-header" style={{ background: cat.kleur }}>
                  <div className="cats-section-emoji">{cat.emoji}</div>
                  <div>
                    <h2 className="cats-section-title">{cat.naam}</h2>
                    <p className="cats-section-desc">{cat.beschrijving}</p>
                  </div>
                  <div className="cats-section-count">{catProducts.length} product{catProducts.length !== 1 ? 'en' : ''}</div>
                </div>

                <div className="cats-grid">
                  {catProducts.map(product => (
                    <article key={product.id} className="cats-card">
                      {product.afbeelding ? (
                        <div className="cats-card-img-wrap" style={{ background: cat.kleur }}>
                          <img src={product.afbeelding} alt={product.naam} className="cats-card-img" loading="lazy" />
                        </div>
                      ) : (
                        <div className="cats-card-img-wrap" style={{ background: cat.kleur }}>
                          <span className="cats-card-emoji">{cat.emoji}</span>
                        </div>
                      )}
                      <div className="cats-card-body">
                        <span className="cats-card-merk">{product.merk}</span>
                        <h3 className="cats-card-naam">{product.naam}</h3>
                        <p className="cats-card-desc">{product.beschrijving}</p>
                        <div className="cats-card-footer">
                          <span className="cats-card-prijs">{product.prijs}</span>
                          <a
                            href={product.url}
                            className="cats-card-btn"
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                            aria-label={`Bekijk aanbieding voor ${product.naam}`}
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
          })}
        </div>

        {/* CTA onderaan */}
        <div className="cats-cta">
          <p>Wil je twee producten naast elkaar vergelijken?</p>
          <Link to="/vergelijken" className="cats-cta-btn">Start vergelijken →</Link>
        </div>
      </div>
    </>
  );
}
