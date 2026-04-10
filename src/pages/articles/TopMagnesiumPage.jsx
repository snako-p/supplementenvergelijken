import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const products = [
  { rank: 1, emoji: '🪨', name: 'Vitakruid Magnesium Malaat', brand: 'Vitakruid', price: '€21,50', rating: 4.7, reviews: 198, score: '9.2', pros: ['Snelle opname', 'Made in Belgium', 'Goed gedoseerd'], link: '#', best: true },
  { rank: 2, emoji: '💊', name: 'Pure Encapsulations Mg Bisglycinaat', brand: 'Pure Encapsulations', price: '€29,95', rating: 4.8, reviews: 156, score: '8.9', pros: ['Geen laxerend effect', 'Ultra pure kwaliteit', 'Beste tolerantie'], link: '#', best: false },
  { rank: 3, emoji: '🧂', name: 'Natural Calm Magnesium Citraat', brand: 'Natural Calm', price: '€16,95', rating: 4.5, reviews: 211, score: '8.5', pros: ['Poedervorm', 'Goedkoopste optie', 'Rustgevend effect'], link: '#', best: false },
  { rank: 4, emoji: '🌊', name: 'Magtein Magnesium L-Threönaat', brand: 'Magtein', price: '€39,95', rating: 4.6, reviews: 89, score: '8.3', pros: ['Voor hersenfunctie', 'Wetenschappelijk onderbouwd', 'Unieke vorm'], link: '#', best: false },
  { rank: 5, emoji: '🥛', name: 'Solgar Magnesium Citraat', brand: 'Solgar', price: '€18,50', rating: 4.4, reviews: 134, score: '7.9', pros: ['Betrouwbaar merk', 'Goede prijs', 'Breed beschikbaar'], link: '#', best: false },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Top 5 Magnesium Supplementen België 2026',
  description: 'Onafhankelijke vergelijking van de 5 beste magnesium supplementen in België. Getest op opname, kwaliteit en prijs.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  publisher: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-01-01',
  dateModified: '2026-04-10',
};

export default function TopMagnesiumPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: 'Welke magnesiumvorm wordt het beste opgenomen?', a: 'Magnesium bisglycinaat en malaat hebben de hoogste biologische beschikbaarheid en worden het best verdragen door de maag.' },
    { q: 'Hoeveel magnesium per dag heb ik nodig?', a: 'De aanbevolen dagelijkse inname is 300–400 mg voor volwassenen. Bij tekort of intensief sporten kan dit hoger liggen.' },
    { q: 'Wanneer neem ik magnesium het best in?', a: "\'s Avonds voor het slapengaan, want magnesium ondersteunt ontspanning en slaap. Neem het bij een maaltijd om maagklachten te vermijden." },
    { q: 'Wat is het verschil tussen malaat en citraat?', a: 'Malaat is beter voor energie en spierherstel. Citraat heeft een licht laxerend effect en is goedkoper.' },
  ];

  return (
    <div className="article-page">
      <SEO
        title="Top 5 Magnesium Supplementen België 2026"
        description="Welk magnesium supplement is het beste in België? Onze experts vergeleken 5 topproducten op opname, kwaliteit en prijs. Bijgewerkt 2026."
        canonical="/artikelen/top-5-magnesium-supplementen-belgie"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Vergelijking · Bijgewerkt april 2026</div>
          <h1>Top 5 Magnesium Supplementen<br /><em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>België 2026</em></h1>
          <p className="article-hero-sub">Ons team testte 12 magnesiumproducten op biologische beschikbaarheid, zuiverheid en prijs-kwaliteitverhouding. Dit zijn de 5 beste keuzes voor Belgen.</p>
          <div className="article-meta">
            <span>✓ 12 producten getest</span>
            <span>✓ Onafhankelijk onderzoek</span>
            <span>✓ Bijgewerkt april 2026</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn affiliate links. Wij ontvangen een kleine commissie bij aankoop — zonder extra kosten voor jou. Dit beïnvloedt onze scores nooit. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Vergelijkingstabel — Top 5 Magnesium</h2>
        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr>
                <th>#</th><th>Product</th><th>Prijs</th><th>Score</th><th>Beoordeling</th><th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.rank} className={p.best ? 'best-row' : ''}>
                  <td><strong>#{p.rank}</strong></td>
                  <td><strong>{p.name}</strong><br /><small style={{ color: 'var(--text-muted)' }}>{p.brand}</small></td>
                  <td><strong>{p.price}</strong></td>
                  <td><span className="score-pill">{p.score}</span></td>
                  <td>{'★'.repeat(Math.floor(p.rating))} <small>({p.reviews})</small></td>
                  <td><a href={p.link} className="buy-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk prijs →</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Uitgebreide productbesprekingen</h2>

        {products.map(p => (
          <div className="art-product" key={p.rank}>
            <div className="art-product-left">
              <span className="art-product-emoji">{p.emoji}</span>
              <span className="art-product-rank">#{p.rank} {p.best ? '— Beste keuze' : ''}</span>
            </div>
            <div className="art-product-info">
              <div className="art-product-name">{p.name}</div>
              <div className="art-product-brand">{p.brand}</div>
              <div className="art-product-stars">{'★'.repeat(Math.floor(p.rating))}{'☆'.repeat(5 - Math.floor(p.rating))} <small style={{ color: 'var(--text-muted)' }}>{p.rating} ({p.reviews} reviews)</small></div>
              <ul className="art-product-pros">{p.pros.map(pr => <li key={pr}>{pr}</li>)}</ul>
              <div className="art-product-footer">
                <span className="art-product-price">{p.price}</span>
                <a href={p.link} className="art-product-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk beste prijs →</a>
              </div>
            </div>
          </div>
        ))}

        <h2>Welke magnesiumvorm kies je?</h2>
        <p>Niet alle magnesium is gelijk. De vorm bepaalt hoe goed je lichaam het opneemt en voor welk doel het het meest geschikt is.</p>

        <h3>Magnesium Malaat — beste voor energie en spieren</h3>
        <p>Gebonden aan appelzuur (malaat). Uitstekende opname en ideaal voor sporters of mensen met chronische vermoeidheid. Onze topaanbeveling voor de meeste Belgen.</p>

        <h3>Magnesium Bisglycinaat — beste voor gevoelige magen</h3>
        <p>Gebonden aan glycine (een aminozuur). Geen laxerend effect, uitstekende tolerantie. Ideaal voor wie magnesiumcitraat niet goed verdraagt.</p>

        <h3>Magnesium Citraat — goedkoopste en populairste</h3>
        <p>Gebonden aan citroenzuur. Goede opname, licht laxerend bij hoge doses. Goede keuze als budgetoptie of bij obstipatie.</p>

        <h3>Magnesium L-Threönaat — beste voor de hersenen</h3>
        <p>De enige vorm die de bloed-hersenbarrière passeert. Wetenschappelijk onderbouwd voor geheugen en cognitie. Duurste optie maar uniek in zijn soort.</p>

        <div className="verdict-box">
          <strong>Onze aanbeveling</strong>
          <p>Voor de meeste Belgen is <strong>Vitakruid Magnesium Malaat</strong> de beste keuze: uitstekende opname, made in Belgium en beste prijs-kwaliteitverhouding. Bij gevoelige maag: kies bisglycinaat.</p>
        </div>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><a href="/magnesium">← Alle magnesium supplementen vergelijken</a></li>
            <li><a href="/artikelen/magnesiumcitraat-vs-magnesiumoxide">Magnesiumcitraat vs magnesiumoxide — wat is beter?</a></li>
            <li><a href="/koopgidsen/hoe-kies-je-het-juiste-supplement">Hoe kies je het juiste supplement voor jouw doel?</a></li>
          </ul>
        </div>

        <h2>Veelgestelde vragen</h2>
        <div className="art-faq">
          {faqs.map((f, i) => (
            <div className="art-faq-item" key={i}>
              <button className="art-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q} <span className="art-faq-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className="art-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
