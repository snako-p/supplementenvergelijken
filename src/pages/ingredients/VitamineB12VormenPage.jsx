import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Vitamine B12 Vormen — Methylcobalamine vs Cyanocobalamine',
  description: 'Vergelijking van vitamine B12 vormen: methylcobalamine vs cyanocobalamine vs adenosylcobalamine. Welke kies je en waarom?',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-02-01',
  dateModified: '2026-04-10',
};

const comparison = [
  { criteria: 'Biologische beschikbaarheid', methyl: 'Hoog', cyano: 'Gemiddeld', winner: 'methyl' },
  { criteria: 'Conversie nodig', methyl: 'Nee — direct actief', cyano: 'Ja — lever converteert', winner: 'methyl' },
  { criteria: 'Prijs', methyl: 'Hoger', cyano: 'Goedkoopst', winner: 'cyano' },
  { criteria: 'Stabiliteit (houdbaarheid)', methyl: 'Goed', cyano: 'Uitstekend', winner: 'cyano' },
  { criteria: 'Geschikt voor MTHFR-mutatie', methyl: '✓ Ja', cyano: '✗ Beperkt', winner: 'methyl' },
  { criteria: 'Aanbevolen voor veganisten', methyl: '✓ Eerste keuze', cyano: '✓ Acceptabel', winner: 'methyl' },
];

export default function VitamineB12VormenPage() {
  return (
    <div className="article-page">
      <SEO
        title="Vitamine B12 Vormen — Methylcobalamine vs Cyanocobalamine (2026)"
        description="Methylcobalamine of cyanocobalamine? Vergelijking van B12 vormen op opname, activatie en geschiktheid. Welke vorm kies je voor optimale opname? Bijgewerkt 2026."
        canonical="/ingredienten/vitamine-b12-vormen"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Ingrediënt uitleg · April 2026</div>
          <h1>Vitamine B12 Vormen<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Methylcobalamine vs Cyanocobalamine</em></h1>
          <p className="article-hero-sub">Vitamine B12 bestaat in meerdere vormen. De goedkoopste variant (cyanocobalamine) zit in de meeste supplementen — maar is dat ook de beste? Vergelijking op opname, activatie en toepassingen.</p>
          <div className="article-meta">
            <span>✓ 3 vormen uitgelegd</span>
            <span>✓ MTHFR-mutatie besproken</span>
            <span>✓ Veganisten gids</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Waarom vitamine B12 zo belangrijk is</h2>
        <p>Vitamine B12 (cobalamine) is essentieel voor de aanmaak van rode bloedcellen, DNA-synthese en de werking van het zenuwstelsel. Een tekort leidt tot vermoeidheid, tintelingen, geheugenproblemen en in ernstige gevallen onomkeerbare zenuwschade.</p>
        <p><strong>Risicogroepen voor een B12-tekort:</strong></p>
        <ul>
          <li>Veganisten en vegetariërs (B12 zit uitsluitend in dierlijke producten)</li>
          <li>Ouderen (&gt;50 jaar) — verminderde maagzuurproductie beperkt opname</li>
          <li>Mensen die metformine gebruiken (diabetes medicatie)</li>
          <li>Mensen met de MTHFR-genmutatie</li>
        </ul>

        <div className="info-box">
          <p>💡 <strong>Belangrijk:</strong> B12-tekort ontwikkelt zich langzaam (lever heeft een reserve voor 2–5 jaar). Laat je B12-waarden controleren via een bloedtest bij je huisarts, zeker als je tot een risicogroep behoort.</p>
        </div>

        <h2>De 3 belangrijkste B12-vormen</h2>

        <h3>Methylcobalamine — de actieve vorm</h3>
        <p>Methylcobalamine is de <strong>biologisch actieve vorm</strong> van B12 die je lichaam direct kan gebruiken. Er is geen conversie nodig in de lever. Het is de predominante vorm in menselijk bloed en het centrale zenuwstelsel.</p>
        <p>Voor mensen met een MTHFR-genmutatie (schattingsgewijs 10–15% van de bevolking heeft een functionele variant) werkt de conversie van cyanocobalamine minder efficiënt. Voor hen is methylcobalamine de eerste keuze.</p>

        <h3>Cyanocobalamine — de synthetische standaard</h3>
        <p>Cyanocobalamine is de meest gebruikte, stabielste en goedkoopste vorm. Je lever converteert het naar methyl- en adenosylcobalamine. Deze conversie verloopt bij de meeste mensen prima. Voor gezonde volwassenen zonder genetische varianten is cyanocobalamine een effectief en kostenefficiënt alternatief.</p>
        <p>Het bevat een spoortje cyanide (gebonden, niet vrij), dat bij normale doses volledig veilig is. Pas bij extreem hoge doses (&gt;3000mcg/dag langdurig) zou dit theoretisch een rol kunnen spelen — bij normale supplementering absoluut geen probleem.</p>

        <h3>Adenosylcobalamine — voor de mitochondriën</h3>
        <p>Adenosylcobalamine is de tweede actieve vorm, die primair in de mitochondriën functioneert en betrokken is bij energiemetabolisme. Minder gangbaar als standalone supplement, maar aanwezig in combinatieproducten (methyl + adenosyl cobalamine).</p>

        <h2>Vergelijkingstabel</h2>
        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th>Criterium</th><th>Methyl</th><th>Cyano</th><th>Winnaar</th></tr>
            </thead>
            <tbody>
              {comparison.map(r => (
                <tr key={r.criteria}>
                  <td><strong>{r.criteria}</strong></td>
                  <td style={{ color: r.winner === 'methyl' ? 'var(--green)' : 'inherit', fontWeight: r.winner === 'methyl' ? 700 : 400 }}>{r.methyl}</td>
                  <td style={{ color: r.winner === 'cyano' ? 'var(--green)' : 'inherit', fontWeight: r.winner === 'cyano' ? 700 : 400 }}>{r.cyano}</td>
                  <td>{r.winner === 'methyl' ? 'Methylcobalamine' : 'Cyanocobalamine'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Sublinguaal vs. capsule vs. injectie</h2>
        <p>De toedieningsvorm is bijna even belangrijk als de B12-vorm:</p>
        <ul>
          <li><strong>Sublinguaal (onder de tong):</strong> Omzeilt de maagzuur-afhankelijke opname. Ideaal voor ouderen en mensen met maagproblemen.</li>
          <li><strong>Capsule/tablet:</strong> Standaard. Afhankelijk van voldoende maagzuur en intrinsic factor voor opname.</li>
          <li><strong>Injectie (B12-shot):</strong> Medisch toegepast bij ernstig tekort of malabsorptie. 100% opname, ongeacht maagzuurproductie.</li>
        </ul>

        <div className="verdict-box">
          <strong>Onze aanbeveling</strong>
          <p>Voor de meeste mensen: <strong>methylcobalamine 500–1000mcg/dag</strong>, sublinguaal of als capsule. Voor veganisten en ouderen is sublinguaal methylcobalamine de beste keuze. Cyanocobalamine is een acceptabel alternatief bij budget als prioriteit.</p>
        </div>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/vitamines">Alle vitamine supplementen vergelijken</Link></li>
            <li><Link to="/koopgidsen/supplementen-voor-beginners">Supplementen voor beginners — complete gids</Link></li>
            <li><Link to="/koopgidsen/hoe-kies-je-het-juiste-supplement">Hoe kies je het juiste supplement?</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
