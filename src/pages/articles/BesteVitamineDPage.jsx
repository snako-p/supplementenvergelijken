import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Beste Vitamine D Supplement Vergeleken — 2026',
  description: 'Vergelijking van de beste vitamine D supplementen op dosering, vorm en prijs voor Belgen.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-02-01',
  dateModified: '2026-04-10',
};

const products = [
  { rank: 1, emoji: '🌞', name: "Nature's Best Vitamine D3 5000IU", brand: "Nature's Best", price: '€18,95', ppd: '€0,21', dosage: '5000 IU', vegan: true, score: '9.4', rating: 4.8, reviews: 312, pros: ['Beste prijs per portie', 'Hoge dosis', 'Glutenvrij & vegan'], best: true, link: '#' },
  { rank: 2, emoji: '💊', name: 'Vitakruid D3 75mcg', brand: 'Vitakruid', price: '€14,95', ppd: '€0,25', dosage: '3000 IU', vegan: false, score: '8.9', rating: 4.7, reviews: 198, pros: ['Made in Belgium', 'Betrouwbaar', 'Goed gedoseerd'], best: false, link: '#' },
  { rank: 3, emoji: '🌿', name: 'Garden of Life D3 Vegan', brand: 'Garden of Life', price: '€24,99', ppd: '€0,28', dosage: '2000 IU', vegan: true, score: '8.6', rating: 4.6, reviews: 145, pros: ['100% vegan', 'Bio-gecertificeerd', 'Uit korstmos'], best: false, link: '#' },
];

export default function BesteVitamineDPage() {
  return (
    <div className="article-page">
      <SEO
        title="Beste Vitamine D Supplement Vergeleken — België 2026"
        description="Welk vitamine D supplement is het beste? Onze vergelijking van D3 supplementen op dosering, biologische beschikbaarheid en prijs. Onafhankelijk & bijgewerkt 2026."
        canonical="/artikelen/beste-vitamine-d-supplement-vergeleken"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Vergelijking · April 2026</div>
          <h1>Beste Vitamine D Supplement<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Vergeleken 2026</em></h1>
          <p className="article-hero-sub">Wij vergelijken de populairste vitamine D3 supplementen op dosering, biologische beschikbaarheid, vegan-geschiktheid en prijs per dag.</p>
          <div className="article-meta">
            <span>✓ D2 vs D3 uitgelegd</span>
            <span>✓ Vegan opties</span>
            <span>✓ Prijs per dag vergeleken</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Waarom vitamine D zo belangrijk is in België</h2>
        <p>België heeft gemiddeld slechts 1.600 zonuren per jaar — ver onder wat nodig is voor voldoende vitamine D-aanmaak via de huid. Uit onderzoek blijkt dat <strong>meer dan 50% van de Belgen</strong> een vitamine D-tekort heeft in de wintermaanden.</p>

        <div className="info-box">
          <p>💡 <strong>Wist je dat?</strong> Vitamine D3 (cholecalciferol) wordt 87% beter opgenomen dan D2. Kies altijd voor D3.</p>
        </div>

        <h2>Vergelijkingstabel</h2>
        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th>#</th><th>Product</th><th>Dosering</th><th>Prijs/dag</th><th>Vegan</th><th>Score</th><th></th></tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.rank} className={p.best ? 'best-row' : ''}>
                  <td><strong>#{p.rank}</strong></td>
                  <td><strong>{p.name}</strong><br /><small style={{ color: 'var(--text-muted)' }}>{p.brand}</small></td>
                  <td>{p.dosage}</td>
                  <td><strong>{p.ppd}</strong></td>
                  <td style={{ color: p.vegan ? 'var(--green)' : 'var(--text-muted)' }}>{p.vegan ? '✓ Ja' : '✗ Nee'}</td>
                  <td><span className="score-pill">{p.score}</span></td>
                  <td><a href={p.link} className="buy-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk →</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Onze top 3 uitgebreid besproken</h2>
        {products.map(p => (
          <div className="art-product" key={p.rank}>
            <div className="art-product-left">
              <span className="art-product-emoji">{p.emoji}</span>
              <span className="art-product-rank">#{p.rank}{p.best ? ' — Beste keuze' : ''}</span>
            </div>
            <div className="art-product-info">
              <div className="art-product-name">{p.name}</div>
              <div className="art-product-brand">{p.brand} · {p.dosage}</div>
              <div className="art-product-stars">{'★'.repeat(Math.floor(p.rating))} <small style={{ color: 'var(--text-muted)' }}>({p.reviews} reviews)</small></div>
              <ul className="art-product-pros">{p.pros.map(pr => <li key={pr}>{pr}</li>)}</ul>
              <div className="art-product-footer">
                <span className="art-product-price">{p.price}</span>
                <a href={p.link} className="art-product-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk prijs →</a>
              </div>
            </div>
          </div>
        ))}

        <h2>Hoeveel vitamine D heb je nodig?</h2>
        <p>De aanbevolen dagelijkse inname in België is <strong>400–800 IU</strong>. Bij een vastgesteld tekort (bloedtest) adviseert een arts vaak <strong>1000–4000 IU</strong> tijdelijk. Hoge doses (&gt;5000 IU) zijn voor personen met ernstig tekort.</p>

        <div className="verdict-box">
          <strong>Onze aanbeveling</strong>
          <p>Voor de meeste Belgen is <strong>Nature's Best D3 5000IU</strong> de beste combinatie van kwaliteit en prijs (€0,21/dag). Veganisten kiezen beter voor <strong>Garden of Life</strong> op basis van korstmos.</p>
        </div>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/beste-vitamine-d-supplement-belgie">← Uitgebreide vitamine D vergelijking met reviews</Link></li>
            <li><Link to="/vitamines">Alle vitamine supplementen vergelijken</Link></li>
            <li><Link to="/koopgidsen/hoe-kies-je-het-juiste-supplement">Hoe kies je het juiste supplement?</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
