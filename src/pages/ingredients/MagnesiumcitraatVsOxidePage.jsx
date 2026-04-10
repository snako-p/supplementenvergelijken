import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Magnesiumcitraat vs Magnesiumoxide — Wat is Beter?',
  description: 'Vergelijking van magnesiumcitraat en magnesiumoxide op opname, bijwerkingen en prijs. Wetenschappelijk onderbouwd, bijgewerkt 2026.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-02-01',
  dateModified: '2026-04-10',
};

const comparison = [
  { criteria: 'Biologische beschikbaarheid', citraat: '~30%', oxide: '~4%', winner: 'citraat' },
  { criteria: 'Laxerend effect', citraat: 'Licht (bij hoge dosis)', oxide: 'Sterk', winner: 'citraat' },
  { criteria: 'Prijs per mg magnesium', citraat: 'Gemiddeld', oxide: 'Goedkoopst', winner: 'oxide' },
  { criteria: 'Maagvriendelijkheid', citraat: 'Goed', oxide: 'Matig', winner: 'citraat' },
  { criteria: 'Elementair magnesium per tablet', citraat: 'Minder (16%)', oxide: 'Meer (60%)', winner: 'oxide' },
  { criteria: 'Aanbevolen voor dagelijks gebruik', citraat: '✓ Ja', oxide: '✗ Nee', winner: 'citraat' },
];

export default function MagnesiumcitraatVsOxidePage() {
  return (
    <div className="article-page">
      <SEO
        title="Magnesiumcitraat vs Magnesiumoxide — Wat is Beter? (2026)"
        description="Magnesiumcitraat of magnesiumoxide? Vergelijking op opname, bijwerkingen en prijs. Leer waarom de goedkoopste optie zelden de beste is. Bijgewerkt 2026."
        canonical="/ingredienten/magnesiumcitraat-vs-magnesiumoxide"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Ingrediënt uitleg · April 2026</div>
          <h1>Magnesiumcitraat vs<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Magnesiumoxide</em></h1>
          <p className="article-hero-sub">Magnesiumoxide is de goedkoopste vorm en zit in veel supplementen. Maar heeft je lichaam er ook wat aan? Vergelijking op biologische beschikbaarheid, bijwerkingen en dagelijkse bruikbaarheid.</p>
          <div className="article-meta">
            <span>✓ Opname vergeleken</span>
            <span>✓ Bijwerkingen uitgelegd</span>
            <span>✓ Welke te kiezen</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Het grote verschil</h2>
        <p>Beide vormen leveren magnesium aan je lichaam, maar op een fundamenteel verschillende manier. <strong>Magnesiumcitraat</strong> is gebonden aan citroenzuur — een organische verbinding die je darm goed kan opnemen. <strong>Magnesiumoxide</strong> is een anorganische verbinding met een hoog magnesiumgehalte op papier, maar een zeer lage biologische beschikbaarheid in de praktijk.</p>

        <div className="info-box">
          <p>💡 <strong>Kernfeit:</strong> Magnesiumoxide heeft slechts ~4% biologische beschikbaarheid. Bij 500mg oxide krijg je effectief ~20mg bruikbaar magnesium. Bij citraat is dat ~150mg uit dezelfde dosis.</p>
        </div>

        <h2>Vergelijkingstabel</h2>
        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th>Criterium</th><th>Citraat</th><th>Oxide</th><th>Winnaar</th></tr>
            </thead>
            <tbody>
              {comparison.map(r => (
                <tr key={r.criteria}>
                  <td><strong>{r.criteria}</strong></td>
                  <td style={{ color: r.winner === 'citraat' ? 'var(--green)' : 'inherit', fontWeight: r.winner === 'citraat' ? 700 : 400 }}>{r.citraat}</td>
                  <td style={{ color: r.winner === 'oxide' ? 'var(--green)' : 'inherit', fontWeight: r.winner === 'oxide' ? 700 : 400 }}>{r.oxide}</td>
                  <td>{r.winner === 'citraat' ? '🍋 Citraat' : '🪨 Oxide'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Magnesiumcitraat in detail</h2>
        <p>Magnesiumcitraat bestaat uit magnesium gebonden aan citroenzuur. De biologische beschikbaarheid ligt op <strong>25–30%</strong> — significant hoger dan oxide. Het lost goed op in water en wordt door de dunne darm effectief opgenomen.</p>
        <p><strong>Voordelen:</strong></p>
        <ul>
          <li>Hoge opname vergeleken met oxide</li>
          <li>Goed verdraagbaar voor de meeste mensen</li>
          <li>Licht laxerend effect bij hogere doses (soms gewenst bij obstipatie)</li>
          <li>Verkrijgbaar als poeder (oplosbaar in water) of capsules</li>
        </ul>
        <p><strong>Nadelen:</strong></p>
        <ul>
          <li>Bij &gt;400mg/dag kan diarree optreden</li>
          <li>Duurder dan oxide</li>
          <li>Lager elementair magnesiumgehalte per gram dan oxide</li>
        </ul>

        <h2>Magnesiumoxide in detail</h2>
        <p>Magnesiumoxide bevat het meeste elementaire magnesium per gram (~60%), maar dit getal is misleidend. De biologische beschikbaarheid is slechts <strong>~4%</strong> — het grootste deel verlaat het lichaam ongebruikt via de ontlasting.</p>
        <p>Het laxerende effect van oxide is sterker dan citraat. Hierdoor wordt het weleens medisch gebruikt bij obstipatie, maar voor dagelijkse magnesiumsuppletie is het <strong>geen geschikte keuze</strong>.</p>

        <div className="verdict-box">
          <strong>Conclusie</strong>
          <p>Kies <strong>magnesiumcitraat</strong> voor dagelijkse supplementatie. De lagere prijs van oxide is een valstrik: je absorbeert zo weinig dat je per geabsorbeerd milligram meer betaalt. Wil je nóg betere opname? Kies dan voor <strong>magnesium bisglycinaat of malaat</strong>.</p>
        </div>

        <h2>Wanneer is oxide zinvol?</h2>
        <p>Magnesiumoxide heeft wél een medische toepassing: als laxeermiddel bij tijdelijke obstipatie. Het trekt water aan in de darmen, wat de stoelgang versoepelt. Voor dit doel, en uitsluitend kortdurend, is oxide acceptabel.</p>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/artikelen/top-5-magnesium-supplementen-belgie">Top 5 magnesium supplementen België 2026</Link></li>
            <li><Link to="/magnesium">Alle magnesium supplementen vergelijken</Link></li>
            <li><Link to="/koopgidsen/hoe-kies-je-het-juiste-supplement">Hoe kies je het juiste supplement?</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
