import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hoe Kies Je Het Juiste Supplement voor Jouw Doel? — Gids 2026',
  description: 'Stap-voor-stap gids om het juiste supplement te kiezen op basis van jouw doel, leeftijd en dieet. Voor Belgen, bijgewerkt 2026.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-02-01',
  dateModified: '2026-04-10',
};

const goalMap = [
  { goal: 'Spieropbouw', supplements: ['Creatine monohydraat', 'Whey proteïne', 'Magnesium malaat'], icon: '💪' },
  { goal: 'Gewichtscontrole', supplements: ['Proteïne (verzadigend)', 'Groene thee extract', 'Vezels (psyllium)'], icon: '⚖️' },
  { goal: 'Energie & focus', supplements: ['Vitamine B-complex', 'Magnesium L-threönaat', 'Coenzym Q10'], icon: '⚡' },
  { goal: 'Betere slaap', supplements: ['Magnesium bisglycinaat', 'Melatonine', 'Ashwagandha'], icon: '😴' },
  { goal: 'Algemene gezondheid', supplements: ['Vitamine D3 + K2', 'Omega-3 visolie', 'Multivitamine'], icon: '🌿' },
  { goal: 'Immuunsysteem', supplements: ['Vitamine C', 'Vitamine D3', 'Zink'], icon: '🛡️' },
];

export default function JuistSupplementPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: 'Hoe weet ik welk supplement ik nodig heb?', a: 'Begin met een bloedtest bij je huisarts om tekorten vast te stellen. Vitamine D en magnesiumtekort zijn in België zeer veelvoorkomend. Supplement pas wat je echt nodig hebt.' },
    { q: 'Zijn duurdere supplementen beter?', a: 'Niet altijd. De prijs zegt meer over marketing dan kwaliteit. Let op de vorm (bijv. bisglycinaat vs oxide voor magnesium), het certificeringslabel en de zuiverheid.' },
    { q: 'Kan ik meerdere supplementen tegelijk nemen?', a: 'Ja, maar sommige combinaties interageren. Vitamine D verbetert calcium-opname; vitamine C helpt ijzer opnemen. Vraag een apotheker bij twijfel.' },
    { q: 'Hoe lang duurt het voor supplementen effect hebben?', a: 'Vetoplosbare vitamines (D, K, E) bouwen langzamer op (4–8 weken). Magnesium werkt voor slaap al binnen 1–2 weken. Creatine heeft 3–4 weken nodig voor volledige saturatie.' },
  ];

  return (
    <div className="article-page">
      <SEO
        title="Hoe Kies Je Het Juiste Supplement? — Complete Gids 2026"
        description="Welk supplement past bij jouw doel? Van spieropbouw tot betere slaap: onze stap-voor-stap gids helpt je de juiste keuze maken. Bijgewerkt 2026."
        canonical="/koopgidsen/hoe-kies-je-het-juiste-supplement"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Koopgids · April 2026</div>
          <h1>Hoe Kies Je Het<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Juiste Supplement?</em></h1>
          <p className="article-hero-sub">Met honderden supplementen op de markt is de keuze overweldigend. Deze gids helpt je stap voor stap het supplement te vinden dat écht bij jouw doel en situatie past.</p>
          <div className="article-meta">
            <span>✓ Per doel aanbeveling</span>
            <span>✓ Kwaliteitslabels uitgelegd</span>
            <span>✓ Zonder onnodige kosten</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Stap 1: Bepaal je doel</h2>
        <p>De meest gemaakte fout is supplementen kopen zonder een duidelijk doel. Stel jezelf de vraag: <strong>wat wil ik bereiken?</strong> Hieronder vind je een overzicht per doelstelling.</p>

        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th>Doel</th><th>Aanbevolen supplementen</th></tr>
            </thead>
            <tbody>
              {goalMap.map(g => (
                <tr key={g.goal}>
                  <td><strong>{g.icon} {g.goal}</strong></td>
                  <td>{g.supplements.join(' · ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Stap 2: Controleer op tekorten</h2>
        <p>Supplementen zijn geen vervanging voor een gezond voedingspatroon. Maar in België zijn bepaalde tekorten structureel:</p>
        <ul>
          <li><strong>Vitamine D:</strong> meer dan 50% van de Belgen heeft een tekort in de winter</li>
          <li><strong>Magnesium:</strong> moderne voeding levert gemiddeld minder dan de aanbevolen dagelijkse hoeveelheid</li>
          <li><strong>Omega-3:</strong> te weinig vette vis in het gemiddelde Belgische dieet</li>
          <li><strong>Vitamine B12:</strong> risico bij vegetariërs, veganisten en ouderen (&gt;50 jaar)</li>
        </ul>

        <div className="info-box">
          <p>💡 <strong>Tip:</strong> Vraag je huisarts een bloedtest voor vitamine D, B12 en ferritine. Dit is de enige manier om zeker te weten of supplementen nodig zijn.</p>
        </div>

        <h2>Stap 3: Let op kwaliteitslabels</h2>
        <p>Niet alle supplementen zijn gelijk. Kijk naar:</p>
        <ul>
          <li><strong>Creapure®</strong> — voor creatine (Duits kwaliteitslabel, &gt;99,9% zuiver)</li>
          <li><strong>IFOS of Friend of the Sea</strong> — voor omega-3 visolie (duurzaam en vrij van zware metalen)</li>
          <li><strong>NSF Certified for Sport</strong> — voor sporters die dopingtests ondergaan</li>
          <li><strong>GMP-gecertificeerd</strong> — fabriek voldoet aan farmaceutische productiestandaarden</li>
          <li><strong>Vegan Society keurmerk</strong> — gegarandeerd diervrij</li>
        </ul>

        <h2>Stap 4: Vergelijk de vorm</h2>
        <p>De chemische vorm van een supplement bepaalt voor een groot deel hoe goed het wordt opgenomen:</p>

        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th>Supplement</th><th>Beste vorm</th><th>Vermijd</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Magnesium</strong></td><td>Bisglycinaat, Malaat</td><td>Oxide (slecht opgenomen)</td></tr>
              <tr><td><strong>Vitamine B12</strong></td><td>Methylcobalamine</td><td>Cyanocobalamine (inferieur)</td></tr>
              <tr><td><strong>Vitamine D</strong></td><td>D3 (cholecalciferol)</td><td>D2 (87% minder effectief)</td></tr>
              <tr><td><strong>IJzer</strong></td><td>Bisglycinaat, Gluconaat</td><td>Sulfaat (maagklachten)</td></tr>
              <tr><td><strong>Zink</strong></td><td>Picolinaat, Bisglycinaat</td><td>Oxide (minimale opname)</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Stap 5: Bereken de prijs per dag</h2>
        <p>Een grote verpakking ziet er duurder uit, maar is bijna altijd goedkoper per portie. Deel de totaalprijs door het aantal porties voor de <strong>echte prijs per dag</strong>.</p>
        <p>Richtprijzen voor kwalitatieve supplementen in België:</p>
        <ul>
          <li>Vitamine D3: €0,05–0,15/dag</li>
          <li>Magnesium: €0,20–0,40/dag</li>
          <li>Omega-3: €0,30–0,60/dag</li>
          <li>Creatine: €0,03–0,08/dag</li>
          <li>Whey proteïne: €0,70–1,20/portie</li>
        </ul>

        <div className="verdict-box">
          <strong>Samenvatting</strong>
          <p>Begin bij je doel, laat tekorten controleren via een bloedtest, kies de juiste chemische vorm en vergelijk op prijs per dag. De goedkoopste optie per dag wint bijna altijd — kwaliteitsverschillen zitten in de vorm, niet het merk.</p>
        </div>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/koopgidsen/supplementen-voor-beginners">Supplementen voor beginners — complete gids</Link></li>
            <li><Link to="/koopgidsen/creatine-koopgids">Creatine koopgids — waar let je op?</Link></li>
            <li><Link to="/vergelijken">Supplementen vergelijken</Link></li>
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
