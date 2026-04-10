import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Whey vs Plantaardig Eiwit — Wat Past Bij Jou?',
  description: 'Vergelijking van whey proteïne en plantaardig eiwit. Ontdek welk type het beste bij jouw doel, dieet en budget past.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-01-15',
  dateModified: '2026-04-10',
};

const comparison = [
  { criteria: 'Eiwitgehalte per portie', whey: '24–26g', plant: '20–24g', winner: 'whey' },
  { criteria: 'BCAA profiel', whey: 'Uitstekend', plant: 'Goed (mits mix)', winner: 'whey' },
  { criteria: 'Opnamesnelheid', whey: 'Snel (30 min)', plant: 'Trager', winner: 'whey' },
  { criteria: 'Vegan/vegetarisch', whey: '✗', plant: '✓', winner: 'plant' },
  { criteria: 'Duurzaamheid', whey: 'Matig', plant: 'Uitstekend', winner: 'plant' },
  { criteria: 'Maagvriendelijkheid', whey: 'Kan problemen geven', plant: 'Goed', winner: 'plant' },
  { criteria: 'Prijs per portie', whey: '€0,70–1,20', plant: '€0,90–1,50', winner: 'whey' },
  { criteria: 'Smaak/mengeigenschappen', whey: 'Uitstekend', plant: 'Goed', winner: 'whey' },
];

export default function WheyVsPlantaardigPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: 'Kan ik spieren kweken met plantaardig eiwit?', a: 'Ja, absoluut. Studies tonen aan dat erwten-rijst combinaties even effectief zijn als whey voor spieropbouw, mits je genoeg totaal eiwit binnenkrijgt.' },
    { q: 'Is whey beter dan plantaardig eiwit?', a: 'Whey heeft een iets beter aminozuurprofiel en wordt sneller opgenomen. Maar voor de meeste mensen maakt het weinig verschil als de totale eiwitinname klopt.' },
    { q: 'Hoeveel eiwit heb ik nodig per dag?', a: 'Voor spieropbouw: 1,6–2,2g per kg lichaamsgewicht. Voor onderhoud: 0,8–1,2g per kg.' },
    { q: 'Welk plantaardig eiwit is het beste?', a: 'Een combinatie van erwteneiwit en rijsteiwit geeft het meest complete aminozuurprofiel. Kijk naar producten zoals Vivo Life Perform.' },
  ];

  return (
    <div className="article-page">
      <SEO
        title="Whey vs Plantaardig Eiwit — Wat Past Bij Jou?"
        description="Whey of plantaardig eiwit? Vergelijking op eiwitgehalte, opname, prijs en geschiktheid. Met aanbeveling per doelgroep. Bijgewerkt 2026."
        canonical="/artikelen/whey-vs-plantaardig-eiwit"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Vergelijking · April 2026</div>
          <h1>Whey vs Plantaardig Eiwit<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Wat past bij jou?</em></h1>
          <p className="article-hero-sub">De twee populairste eiwitsoorten naast elkaar. Wij vergelijken op kwaliteit, opname, prijs en geschiktheid — zodat jij de juiste keuze maakt.</p>
          <div className="article-meta">
            <span>✓ Wetenschappelijk onderbouwd</span>
            <span>✓ Per doelgroep aanbeveling</span>
            <span>✓ April 2026</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Snelle vergelijking</h2>
        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th>Criterium</th><th>🥛 Whey</th><th>🌱 Plantaardig</th><th>Winnaar</th></tr>
            </thead>
            <tbody>
              {comparison.map(r => (
                <tr key={r.criteria}>
                  <td><strong>{r.criteria}</strong></td>
                  <td style={{ color: r.winner === 'whey' ? 'var(--orange)' : 'inherit', fontWeight: r.winner === 'whey' ? 700 : 400 }}>{r.whey}</td>
                  <td style={{ color: r.winner === 'plant' ? 'var(--green)' : 'inherit', fontWeight: r.winner === 'plant' ? 700 : 400 }}>{r.plant}</td>
                  <td>{r.winner === 'whey' ? '🥛 Whey' : '🌱 Plantaardig'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Wanneer kies je voor whey?</h2>
        <p>Whey is een bijproduct van kaasproductie en bevat alle essentiële aminozuren in hoge concentraties. Het wordt snel opgenomen, heeft een uitstekend leucine-gehalte (belangrijk voor spieraanmaak) en smaakt goed.</p>
        <p><strong>Kies whey als je:</strong></p>
        <ul>
          <li>Maximale spieropbouw wil</li>
          <li>Direct na training een snelle eiwitboost zoekt</li>
          <li>Geen melkintolerantie of vegan dieet hebt</li>
          <li>Budget bewust bent (goedkoopste per portie)</li>
        </ul>

        <div className="art-product">
          <div className="art-product-left">
            <span className="art-product-emoji">💪</span>
            <span className="art-product-rank">Beste whey</span>
          </div>
          <div className="art-product-info">
            <div className="art-product-name">Optimum Nutrition Gold Standard Whey</div>
            <div className="art-product-brand">Optimum Nutrition · 74 porties</div>
            <div className="art-product-stars">★★★★★ <small style={{ color: 'var(--text-muted)' }}>4.8 (893 reviews)</small></div>
            <ul className="art-product-pros">
              <li>24g eiwit per portie</li>
              <li>Meest verkochte whey ter wereld</li>
              <li>Lage vetten en suikers</li>
            </ul>
            <div className="art-product-footer">
              <span className="art-product-price">€59,99</span>
              <a href="#" className="art-product-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk prijs →</a>
            </div>
          </div>
        </div>

        <h2>Wanneer kies je voor plantaardig eiwit?</h2>
        <p>Plantaardig eiwit wordt gewonnen uit erwten, rijst, hennep, soja of een combinatie. De technologie is de afgelopen jaren sterk verbeterd — goede plantaardige eiwitten presteren nauwelijks onder voor whey.</p>
        <p><strong>Kies plantaardig als je:</strong></p>
        <ul>
          <li>Vegan of vegetarisch bent</li>
          <li>Lactose-intolerant bent</li>
          <li>Duurzaamheid belangrijk vindt</li>
          <li>Spijsverteringsproblemen hebt bij zuivel</li>
        </ul>

        <div className="art-product">
          <div className="art-product-left">
            <span className="art-product-emoji">🌱</span>
            <span className="art-product-rank">Beste vegan</span>
          </div>
          <div className="art-product-info">
            <div className="art-product-name">Vivo Life Perform Vegan Proteïne</div>
            <div className="art-product-brand">Vivo Life · 30 porties</div>
            <div className="art-product-stars">★★★★½ <small style={{ color: 'var(--text-muted)' }}>4.6 (187 reviews)</small></div>
            <ul className="art-product-pros">
              <li>Erwten + rijst = compleet aminozuurprofiel</li>
              <li>Geen kunstmatige zoetstoffen</li>
              <li>Bio-gecertificeerd</li>
            </ul>
            <div className="art-product-footer">
              <span className="art-product-price">€44,95</span>
              <a href="#" className="art-product-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk prijs →</a>
            </div>
          </div>
        </div>

        <h2>Conclusie — wat past bij jou?</h2>
        <div className="verdict-box">
          <strong>Onze aanbeveling</strong>
          <p>Voor spiergroei en prestaties is <strong>whey</strong> licht superieur en goedkoper. Voor veganisten, bij lactose-intolerantie of duurzaamheidsbewustzijn is een goede <strong>erwten-rijst mix</strong> een volwaardig alternatief. Het maakt minder uit dan veel mensen denken — totale eiwitinname telt het meest.</p>
        </div>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/proteine">← Alle proteïne supplementen vergelijken</Link></li>
            <li><Link to="/artikelen/whey-concentraat-vs-isolaat-vs-hydrolisaat">Whey concentraat vs isolaat vs hydrolisaat</Link></li>
            <li><Link to="/koopgidsen/supplementen-voor-beginners">Supplementen voor beginners — complete gids</Link></li>
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
