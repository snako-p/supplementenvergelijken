import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/BestVitamineDPage.css';

const products = [
  {
    rank: 1,
    emoji: '🌞',
    name: "Nature's Best Vitamine D3 5000IU",
    brand: "Nature's Best",
    price: '€18,95',
    pricePerDay: '€0,21',
    servings: 90,
    dosage: '5000 IU',
    form: 'Capsule',
    vegan: true,
    glutenFree: true,
    score: 9.4,
    isBest: true,
    accentColor: 'var(--orange-pale)',
    pros: ['Hoogste biologische beschikbaarheid', 'Beste prijs per portie', 'Gecertificeerde ingrediënten'],
    cons: ['Hoge dosis — niet voor iedereen'],
    link: '#',
  },
  {
    rank: 2,
    emoji: '💊',
    name: 'Vitakruid Vitamine D3 75mcg',
    brand: 'Vitakruid',
    price: '€14,95',
    pricePerDay: '€0,25',
    servings: 60,
    dosage: '3000 IU',
    form: 'Tablet',
    vegan: false,
    glutenFree: true,
    score: 8.9,
    isBest: false,
    accentColor: '#E8F5EC',
    pros: ['Made in Belgium', 'Betrouwbaar merk', 'Goed gedoseerd'],
    cons: ['Bevat gelatine (niet vegan)', 'Minder porties per pot'],
    link: '#',
  },
  {
    rank: 3,
    emoji: '🌿',
    name: 'Garden of Life Vitamine D3 Vegan',
    brand: 'Garden of Life',
    price: '€24,99',
    pricePerDay: '€0,28',
    servings: 90,
    dosage: '2000 IU',
    form: 'Capsule',
    vegan: true,
    glutenFree: true,
    score: 8.6,
    isBest: false,
    accentColor: '#EDF2FB',
    pros: ['100% plantaardig', 'Bio-gecertificeerd', 'Uit korstmos (lichen)'],
    cons: ['Lagere dosering', 'Hogere prijs'],
    link: '#',
  },
  {
    rank: 4,
    emoji: '🔆',
    name: 'Solgar Vitamine D3 1000IU',
    brand: 'Solgar',
    price: '€12,50',
    pricePerDay: '€0,13',
    servings: 100,
    dosage: '1000 IU',
    form: 'Softgel',
    vegan: false,
    glutenFree: true,
    score: 8.2,
    isBest: false,
    accentColor: 'var(--orange-pale)',
    pros: ['Goedkoopste per dag', 'Geschikt als onderhoud', 'Vertrouwd merk'],
    cons: ['Lage dosis bij tekort', 'Niet vegan'],
    link: '#',
  },
];

const reviews = [
  { name: 'Lien V.', location: 'Gent', rating: 5, text: "Na 3 maanden Nature's Best D3 zijn mijn waarden eindelijk normaal. Makkelijk te slikken en de prijs is echt correct voor de kwaliteit.", product: "Nature's Best D3 5000IU", date: 'maart 2025' },
  { name: 'Thomas D.', location: 'Antwerpen', rating: 5, text: 'Vitakruid is mijn vaste merk. Betrouwbaar, Belgisch en snel geleverd. Merk duidelijk verschil in energieniveau tijdens de winter.', product: 'Vitakruid D3 75mcg', date: 'februari 2025' },
  { name: 'Sara M.', location: 'Brussel', rating: 4, text: 'Als vegan was Garden of Life de enige goede optie. Iets duurder maar het geeft me een gerust gevoel dat het echt plantaardig is.', product: 'Garden of Life Vegan D3', date: 'januari 2025' },
];

const tableHeaders = ['', 'Product', 'Dosering', 'Porties', 'Prijs/dag', 'Vegan', 'Score', ''];

export default function BestVitamineDPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'Hoeveel vitamine D heb ik nodig?', a: 'De aanbevolen dagelijkse inname in België is 400–800 IU voor volwassenen. Bij een vastgesteld tekort adviseert de arts vaak 1000–4000 IU. Overleg altijd met een arts voor persoonlijk advies.' },
    { q: 'Wat is het verschil tussen D2 en D3?', a: 'Vitamine D3 (cholecalciferol) is de vorm die je huid aanmaakt bij zonlicht en wordt beter opgenomen door je lichaam. D2 (ergocalciferol) is plantaardig maar minder effectief in het verhogen van je vitamine D-spiegel.' },
    { q: 'Wanneer is de beste tijd om vitamine D te nemen?', a: "Vitamine D is vetoplosbaar. Neem het bij een maaltijd met vet (bijv. ontbijt met avocado of noten) voor de beste opname." },
    { q: 'Kan ik te veel vitamine D innemen?', a: 'Ja, vitamine D-toxiciteit is mogelijk bij langdurig gebruik van zeer hoge doses (>10.000 IU/dag). Blijf bij de aanbevolen dosering en laat je waarden jaarlijks controleren via een bloedtest.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="vd-page">
      <SEO
        title="Beste Vitamine D Supplement België 2025 — Vergelijking & Reviews"
        description="Welk vitamine D supplement is het beste in België? Wij testten 18 producten. Bekijk onze vergelijkingstabel, scores en eerlijke reviews. Bijgewerkt april 2025."
        canonical="/beste-vitamine-d-supplement-belgie"
        type="article"
        schema={faqSchema}
      />

      {/* Hero */}
      <div className="vd-hero">
        <div className="vd-hero-inner">
          <div className="section-label">Vergelijking · Bijgewerkt april 2025</div>
          <h1>Beste Vitamine D supplement<br /><em>België 2025</em></h1>
          <p className="vd-hero-sub">
            Ons team testte 18 vitamine D-supplementen op dosering, zuiverheid,
            biologische beschikbaarheid en prijs. Dit zijn de 4 beste keuzes voor Belgen.
          </p>
          <div className="vd-trust-row">
            <span>✓ 18 producten getest</span>
            <span>✓ Onafhankelijk onderzoek</span>
            <span>✓ Bijgewerkt april 2025</span>
          </div>
        </div>
      </div>

      <div className="vd-content">

        {/* Affiliate disclosure */}
        <div className="vd-disclosure">
          <span>⚠️</span>
          <p>
            <strong>Affiliate disclosure:</strong> Sommige links op deze pagina zijn affiliate links.
            Als je via onze link koopt, ontvangen wij een kleine commissie — zonder extra kosten voor jou.
            Dit beïnvloedt onze beoordelingen nooit. <a href="/affiliate-disclosure">Meer info →</a>
          </p>
        </div>

        {/* Winner spotlight */}
        <section className="vd-winner">
          <div className="vd-winner-badge">🏆 Beste keuze 2025</div>
          <div className="vd-winner-inner">
            <div className="vd-winner-left">
              <div className="vd-winner-emoji">🌞</div>
              <div>
                <div className="vd-winner-name">Nature's Best Vitamine D3 5000IU</div>
                <div className="vd-winner-brand">Nature's Best · 90 capsules</div>
                <div className="vd-winner-score">Score: <strong>9.4 / 10</strong></div>
              </div>
            </div>
            <div className="vd-winner-right">
              <div className="vd-winner-price">€18,95</div>
              <div className="vd-winner-ppd">€0,21 per dag</div>
              <a href="#" className="vd-winner-btn">Bekijk beste prijs →</a>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="vd-section">
          <h2>Vergelijkingstabel</h2>
          <div className="vd-table-wrap">
            <table className="vd-table">
              <thead>
                <tr>
                  {tableHeaders.map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.rank} className={p.isBest ? 'row-best' : ''}>
                    <td className="td-rank">#{p.rank}</td>
                    <td className="td-product">
                      <span className="td-emoji">{p.emoji}</span>
                      <div>
                        <div className="td-name">{p.name}</div>
                        <div className="td-brand">{p.brand}</div>
                      </div>
                      {p.isBest && <span className="td-badge">Beste keuze</span>}
                    </td>
                    <td>{p.dosage}</td>
                    <td>{p.servings}</td>
                    <td className="td-ppd">{p.pricePerDay}</td>
                    <td>{p.vegan ? '✓' : '✗'}</td>
                    <td className="td-score">
                      <span className={p.isBest ? 'score-best' : ''}>{p.score}</span>
                    </td>
                    <td><a href={p.link} className="td-btn">Bekijk →</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Product reviews */}
        <section className="vd-section">
          <h2>Uitgebreide productbespreking</h2>
          {products.map((p) => (
            <div className="vd-product-block" key={p.rank} style={{ borderLeftColor: p.rank === 1 ? 'var(--orange)' : 'var(--beige-dark)' }}>
              <div className="vpb-header" style={{ background: p.accentColor }}>
                <div className="vpb-rank">#{p.rank}</div>
                <div className="vpb-emoji">{p.emoji}</div>
                <div className="vpb-info">
                  <div className="vpb-name">{p.name}</div>
                  <div className="vpb-meta">{p.brand} · {p.dosage} · {p.form}</div>
                </div>
                <div className="vpb-score-wrap">
                  <div className="vpb-score">{p.score}</div>
                  <div className="vpb-score-label">/ 10</div>
                </div>
              </div>
              <div className="vpb-body">
                <div className="vpb-cols">
                  <div>
                    <div className="vpb-col-title green">Voordelen</div>
                    {p.pros.map(pro => (
                      <div className="vpb-point" key={pro}><span className="green">✓</span>{pro}</div>
                    ))}
                  </div>
                  <div>
                    <div className="vpb-col-title red">Nadelen</div>
                    {p.cons.map(con => (
                      <div className="vpb-point" key={con}><span className="red">✗</span>{con}</div>
                    ))}
                  </div>
                  <div>
                    <div className="vpb-col-title">Details</div>
                    <div className="vpb-detail"><span>Prijs</span><strong>{p.price}</strong></div>
                    <div className="vpb-detail"><span>Per dag</span><strong>{p.pricePerDay}</strong></div>
                    <div className="vpb-detail"><span>Porties</span><strong>{p.servings}</strong></div>
                    <div className="vpb-detail"><span>Vegan</span><strong>{p.vegan ? 'Ja' : 'Nee'}</strong></div>
                    <div className="vpb-detail"><span>Glutenvrij</span><strong>{p.glutenFree ? 'Ja' : 'Nee'}</strong></div>
                  </div>
                </div>
                <a href={p.link} className="vpb-btn">Bekijk beste prijs →</a>
              </div>
            </div>
          ))}
        </section>

        {/* User reviews */}
        <section className="vd-section">
          <h2>Ervaringen van gebruikers</h2>
          <div className="vd-reviews">
            {reviews.map(r => (
              <div className="vd-review" key={r.name}>
                <div className="vdr-header">
                  <div className="vdr-avatar">{r.name[0]}</div>
                  <div>
                    <div className="vdr-name">{r.name} <span className="vdr-location">— {r.location}</span></div>
                    <div className="vdr-stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                  </div>
                  <div className="vdr-date">{r.date}</div>
                </div>
                <p className="vdr-text">"{r.text}"</p>
                <div className="vdr-product">Over: {r.product}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="vd-section">
          <h2>Veelgestelde vragen</h2>
          <div className="vd-faq">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom disclosure */}
        <div className="vd-disclosure vd-disclosure-bottom">
          <span>📋</span>
          <p>
            De informatie op deze pagina is uitsluitend bedoeld voor informatieve doeleinden
            en vormt geen medisch advies. Raadpleeg een arts of apotheker bij twijfel.
            Zie ook onze <a href="/algemene-voorwaarden">algemene voorwaarden</a> en <a href="/privacybeleid">privacybeleid</a>.
          </p>
        </div>

      </div>
    </div>
  );
}
