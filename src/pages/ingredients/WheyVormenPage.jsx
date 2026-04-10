import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Whey Concentraat vs Isolaat vs Hydrolisaat — Welke Kies Je?',
  description: 'Vergelijking van de drie whey vormen op eiwitgehalte, lactose, opname en prijs. Met aanbeveling per doelgroep.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-02-01',
  dateModified: '2026-04-10',
};

const comparison = [
  { criteria: 'Eiwitgehalte per 100g', concentraat: '70–80%', isolaat: '90–95%', hydrolisaat: '~90%' },
  { criteria: 'Lactosegehalte', concentraat: 'Laag (1–3g)', isolaat: 'Zeer laag (<0,5g)', hydrolisaat: 'Zeer laag' },
  { criteria: 'Vetgehalte', concentraat: 'Laag', isolaat: 'Minimaal', hydrolisaat: 'Minimaal' },
  { criteria: 'Opnamesnelheid', concentraat: 'Snel', isolaat: 'Snel', hydrolisaat: 'Zeer snel' },
  { criteria: 'Prijs per portie', concentraat: '€0,60–0,90', isolaat: '€0,90–1,30', hydrolisaat: '€1,20–2,00' },
  { criteria: 'Geschikt bij lactose-intolerantie', concentraat: 'Mogelijk', isolaat: '✓ Ja', hydrolisaat: '✓ Ja' },
];

export default function WheyVormenPage() {
  return (
    <div className="article-page">
      <SEO
        title="Whey Concentraat vs Isolaat vs Hydrolisaat — Welke Kies Je? (2026)"
        description="Whey concentraat, isolaat of hydrolisaat? Vergelijking op eiwitgehalte, lactose, prijs en opnamesnelheid. Met aanbeveling per doelgroep. Bijgewerkt 2026."
        canonical="/ingredienten/whey-concentraat-vs-isolaat-vs-hydrolisaat"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Ingrediënt uitleg · April 2026</div>
          <h1>Whey Concentraat vs Isolaat<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>vs Hydrolisaat</em></h1>
          <p className="article-hero-sub">Alle whey is niet gelijk. Concentraat, isolaat en hydrolisaat verschillen op eiwitgehalte, lactose en prijs. Ontdek welke vorm het beste bij jouw doel past.</p>
          <div className="article-meta">
            <span>✓ 3 vormen vergeleken</span>
            <span>✓ Lactose-intolerantie</span>
            <span>✓ Aanbeveling per doel</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Hoe wordt whey gemaakt?</h2>
        <p>Whey is een bijproduct van de kaasproductie. Wanneer melk stolt tot kaas, blijft de vloeistof (wei) over. Die wei wordt gefiltreerd, geconcentreerd en gedroogd tot wheypoeder. Het bewerkingsproces bepaalt welke vorm ontstaat.</p>

        <div className="info-box">
          <p>💡 <strong>Weetje:</strong> Alle drie de vormen hebben een compleet aminozuurprofiel met hoog leucinegehalte — de triggerstof voor spierproteïnesynthese. Het verschil zit in zuiverheid, lactose en opnamesnelheid.</p>
        </div>

        <h2>Whey Concentraat — de standaard</h2>
        <p>Whey concentraat is de minst bewerkte en goedkoopste vorm. Het filtratieproces verwijdert water, maar laat vet, lactose en bioactieve stoffen (zoals immunoglobulinen en lactoferrine) grotendeels intact.</p>
        <p><strong>Eiwitgehalte:</strong> 70–80% per 100g drooggewicht.</p>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Goedkoopst per portie</li>
          <li>Bevat meer bioactieve componenten</li>
          <li>Rijkere smaak door restvet en lactose</li>
        </ul>
        <p><strong>Nadelen:</strong></p>
        <ul>
          <li>Meer lactose (kan problematisch zijn voor intolerantie)</li>
          <li>Meer vet en koolhydraten per portie</li>
          <li>Lager eiwitpercentage</li>
        </ul>

        <h2>Whey Isolaat — de premium keuze</h2>
        <p>Whey isolaat ondergaat een extra filtratieronde (iono-uitwisseling of cross-flow microfiltratie). Resultaat: &gt;90% eiwit, minimaal vet, en vrijwel geen lactose.</p>
        <p><strong>Eiwitgehalte:</strong> 90–95% per 100g drooggewicht.</p>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Hoog eiwitgehalte per portie</li>
          <li>Geschikt bij lactose-intolerantie</li>
          <li>Lager in vet en koolhydraten</li>
          <li>Goed voor calorie-bewuste sporters</li>
        </ul>
        <p><strong>Nadelen:</strong></p>
        <ul>
          <li>Duurder dan concentraat</li>
          <li>Minder bioactieve stoffen door intensievere bewerking</li>
        </ul>

        <h2>Whey Hydrolisaat — de snelste vorm</h2>
        <p>Hydrolisaat is voorverteerd: enzymen breken de eiwitkettingen op in kortere peptiden. Dit versnelt de opname aanzienlijk. Gebruikt in medische voeding, pre-surgery supplementen en door topsporters die snel herstel nodig hebben.</p>
        <p><strong>Eiwitgehalte:</strong> ~90%, maar verwerking varieert sterk per product.</p>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Snelste opname van alle whey-vormen</li>
          <li>Minimale allergeniciteit</li>
          <li>Geschikt bij ernstige lactose-intolerantie of allergie</li>
        </ul>
        <p><strong>Nadelen:</strong></p>
        <ul>
          <li>Significant duurder</li>
          <li>Bitterder van smaak</li>
          <li>Voordeel vs isolaat marginaal voor recreatieve sporters</li>
        </ul>

        <h2>Vergelijkingstabel</h2>
        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th>Criterium</th><th>Concentraat</th><th>Isolaat</th><th>Hydrolisaat</th></tr>
            </thead>
            <tbody>
              {comparison.map(r => (
                <tr key={r.criteria}>
                  <td><strong>{r.criteria}</strong></td>
                  <td>{r.concentraat}</td>
                  <td>{r.isolaat}</td>
                  <td>{r.hydrolisaat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Welke kies jij?</h2>
        <ul>
          <li><strong>Recreatieve sporter, geen lactose-problemen:</strong> Concentraat — beste prijs-kwaliteit</li>
          <li><strong>Lactose-intolerant of caloriecontrol:</strong> Isolaat — goed eiwitpercentage, weinig lactose</li>
          <li><strong>Topsporter of snel herstel vereist:</strong> Hydrolisaat — snelste opname, maar hogere kosten</li>
          <li><strong>Budget bewust:</strong> Concentraat van een kwaliteitsmerk (bijv. Creapure® equivalent voor whey: Lacprodan® van Arla)</li>
        </ul>

        <div className="verdict-box">
          <strong>Conclusie</strong>
          <p>Voor <strong>de meeste sporters is whey concentraat</strong> de beste keuze: effectief, bewezen en goedkoopst. Heb je lactose-problemen of wil je maximaal eiwit per calorie? Kies isolaat. Hydrolisaat is alleen zinvol voor topsporters of specifieke medische toepassingen.</p>
        </div>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/artikelen/whey-vs-plantaardig-eiwit">Whey vs plantaardig eiwit — wat past bij jou?</Link></li>
            <li><Link to="/proteine">Alle proteïne supplementen vergelijken</Link></li>
            <li><Link to="/koopgidsen/supplementen-voor-beginners">Supplementen voor beginners — complete gids</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
