import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { products } from '../data/products';
import '../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Beste Proteïne Supplementen België 2026',
  description: 'Vergelijk de beste eiwitpoeders en creatine in België op kwaliteit, prijs en ingrediënten.',
  url: 'https://www.supplementenvergelijken.be/proteine',
};

const proteineProducts = products.filter(p => ['Proteïne', 'Sport'].includes(p.categorie));

const typesData = [
  { type: 'Whey Proteïne', eiwit: '24–26g', opname: 'Snel (30 min)', vegan: '✗', prijs: '€0,70–1,20', best: 'Na training, spieropbouw' },
  { type: 'Vegan Proteïne', eiwit: '20–24g', opname: 'Trager', vegan: '✓', prijs: '€0,90–1,50', best: 'Veganisten, lactose-intolerantie' },
  { type: 'Caseine', eiwit: '22–24g', opname: 'Traag (6–8u)', vegan: '✗', prijs: '€0,80–1,30', best: 'Voor het slapengaan' },
  { type: 'Creatine', eiwit: '—', opname: 'Direct', vegan: '✓', prijs: '€0,20–0,40', best: 'Kracht, explosiviteit' },
];

const faqs = [
  { q: 'Hoeveel eiwit heb ik per dag nodig?', a: 'Voor spieropbouw wordt 1,6–2,2g per kg lichaamsgewicht aanbevolen. Bij een gewicht van 75kg is dat 120–165g eiwit per dag. Een proteïneshake helpt om dit dagdoel makkelijker te halen.' },
  { q: 'Wanneer kan ik het beste een proteïneshake nemen?', a: 'Na de training — binnen 30 tot 60 minuten — is ideaal voor spierherstel. Maar totale dagelijkse eiwitinname telt meer dan het exacte tijdstip.' },
  { q: 'Is creatine veilig voor dagelijks gebruik?', a: 'Ja, creatine is een van de veiligste en meest onderzochte sportvoedsupplementen. Dagelijks 3–5g is effectief en veilig voor gezonde volwassenen. Drink wel voldoende water.' },
  { q: 'Kan ik proteïneshakes combineren met creatine?', a: 'Absoluut. Creatine en whey complementeren elkaar: creatine ondersteunt kracht en explosiviteit, whey zorgt voor herstel en spieropbouw. Neem creatine gewoon dagelijks bij je shake.' },
  { q: 'Verschil whey concentraat, isolaat en hydrolisaat?', a: 'Concentraat bevat 70–80% eiwit, is betaalbaar maar bevat lactose. Isolaat is 90%+ eiwit, lactosevrij en snel opneembaar. Hydrolisaat is voorverteerd voor snelste opname. Een mix van alle drie geeft het beste resultaat.' },
];

export default function ProteinePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="article-page">
      <SEO
        title="Beste Proteïne Supplement België 2026 — Whey, Vegan & Creatine"
        description="Vergelijk de beste eiwitpoeders en creatine in België. Onafhankelijke reviews op eiwit per portie, prijs en kwaliteit. Met vergelijkingstabel en koopadvies."
        canonical="/proteine"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Categorie · Bijgewerkt 2026</div>
          <h1>Proteïne Supplementen<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Welk type past bij jou?</em></h1>
          <p className="article-hero-sub">Van whey tot creatine — wij vergelijken de populairste eiwitproducten op kwaliteit, prijs en toepassingsgebied. Met eerlijk advies voor Belgen.</p>
          <div className="article-meta">
            <span>✓ Onafhankelijke vergelijking</span>
            <span>✓ Echte affiliate producten</span>
            <span>✓ Bijgewerkt april 2026</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>ℹ️</span>
          <span>Deze pagina bevat affiliate links. Als je via onze links koopt, ontvangen wij een kleine commissie zonder extra kosten voor jou. <Link to="/affiliate-disclosure">Lees onze disclosure.</Link></span>
        </div>

        <h2>Welke proteïnesoort heb jij nodig?</h2>
        <p>
          Niet elk proteïnesupplement is hetzelfde. Of je nu spiermassa wil opbouwen, wil herstellen na het sporten of gewoon je dagelijkse eiwitinname wil aanvullen — de juiste keuze hangt af van je doel, dieet en budget.
        </p>
        <p>
          De meest populaire opties zijn <strong>whey proteïne</strong> (snel opneembaar, ideaal na training), <strong>vegan proteïne</strong> (plantaardig alternatief) en <strong>creatine</strong> (voor kracht en explosiviteit). Hier vergelijken we ze naast elkaar.
        </p>

        {/* Vergelijkingstabel */}
        <h2>Vergelijking: proteïnesoorten</h2>
        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Eiwit/portie</th>
                <th>Opname</th>
                <th>Vegan</th>
                <th>Prijs/portie</th>
                <th>Beste voor</th>
              </tr>
            </thead>
            <tbody>
              {typesData.map((row, i) => (
                <tr key={row.type} className={i === 0 ? 'best-row' : ''}>
                  <td><strong>{row.type}</strong></td>
                  <td>{row.eiwit}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{row.opname}</td>
                  <td style={{ color: row.vegan === '✓' ? 'var(--green)' : '#c0392b', fontWeight: 700 }}>{row.vegan}</td>
                  <td><strong style={{ color: 'var(--brown)' }}>{row.prijs}</strong></td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="verdict-box">
          <strong>Onze aanbeveling</strong>
          <p>Voor de meeste sporters is <strong>whey proteïne</strong> de beste keuze na de training. Combineer met <strong>creatine</strong> voor maximaal resultaat. Ben je vegan of lactose-intolerant? Kies dan voor een kwalitatieve <strong>vegan proteïne</strong> op basis van erwten en rijst.</p>
        </div>

        {/* Productkaarten */}
        <h2>Aanbevolen producten</h2>
        <p>Onze geselecteerde proteïneproducten van betrouwbare merken, beschikbaar via onze partnernetwerken.</p>

        {proteineProducts.map((p, i) => (
          <div className="art-product" key={p.id}>
            <div className="art-product-left">
              <span className="art-product-emoji">{p.categorie === 'Sport' ? '💪' : '🥛'}</span>
              <div className="art-product-rank">{i === 0 ? '#1 Aanbevolen' : `#${i + 1}`}</div>
            </div>
            <div className="art-product-info">
              <div className="art-product-name">{p.naam}</div>
              <div className="art-product-brand">{p.merk} · {p.categorie}</div>
              <ul className="art-product-pros">
                {p.voordelen.map(v => <li key={v}>{v}</li>)}
              </ul>
              <div className="art-product-footer">
                <div className="art-product-price">{p.prijs}</div>
                <a
                  href={p.url}
                  className="art-product-btn"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                >
                  Bekijk aanbieding →
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Uitleg whey */}
        <h2>Whey proteïne uitgelegd</h2>
        <p>
          Whey is een bijproduct van kaasproductie en bevat een volledig aminozuurprofiel met veel vertakte-keten aminozuren (BCAA's). Het wordt snel opgenomen door het lichaam — ideaal in de 30 minuten na je training.
        </p>
        <p>
          Er zijn drie vormen: <strong>concentraat</strong> (70–80% eiwit, betaalbaar), <strong>isolaat</strong> (90%+ eiwit, lactosevrij) en <strong>hydrolisaat</strong> (voorverteerd, snelste opname). Producten zoals die van <strong>Vital Nutrition</strong> combineren alle drie voor een optimaal effect.
        </p>

        <div className="info-box">
          <p><strong>Wist je dat?</strong> Een eiwitpoeder met 82% eiwit per 30g schep geeft je 24,6g eiwit per portie. Dat is goed voor ongeveer 15% van je dagelijkse eiwitbehoefte bij spieropbouw (75kg).</p>
        </div>

        {/* Creatine */}
        <h2>Creatine: de meest onderbouwde sportvoeding</h2>
        <p>
          Creatine is geen proteïne, maar het hoort thuis in elke serious trainingsroutine. Het vergroot de fosfocreatinereserves in je spieren, waardoor je meer kracht kunt leveren bij korte, intensieve inspanningen zoals gewichtheffen of sprinting.
        </p>
        <p>
          Wetenschappelijk is creatine <strong>het best onderbouwde sportvoedingssupplement ter wereld</strong>. Duizenden studies bevestigen de effectiviteit en veiligheid. Neem dagelijks 3–5g — een laadfase is optioneel.
        </p>

        {/* Hoeveel eiwit */}
        <h2>Hoeveel eiwit heb jij nodig?</h2>
        <p>De aanbevolen dagelijkse eiwitinname verschilt per doel:</p>
        <ul>
          <li><strong>Onderhoud (geen sport):</strong> 0,8–1,0g per kg lichaamsgewicht</li>
          <li><strong>Regelmatig sporten:</strong> 1,2–1,6g per kg lichaamsgewicht</li>
          <li><strong>Spieropbouw (krachtsport):</strong> 1,6–2,2g per kg lichaamsgewicht</li>
          <li><strong>Herstel na blessure:</strong> tot 2,5g per kg lichaamsgewicht</li>
        </ul>
        <p>Een proteïneshake van 25–30g eiwit helpt om het dagdoel te halen, zeker als je druk bent of weinig vlees eet.</p>

        {/* Gerelateerde links */}
        <div className="related-links">
          <h4>Gerelateerde pagina's</h4>
          <ul>
            <li><a href="/artikelen/whey-vs-plantaardig-eiwit">→ Whey vs plantaardig eiwit — uitgebreide vergelijking</a></li>
            <li><a href="/ingredienten/whey-concentraat-vs-isolaat-vs-hydrolisaat">→ Whey concentraat vs isolaat vs hydrolisaat</a></li>
            <li><a href="/koopgidsen/supplementen-voor-beginners">→ Supplementen voor beginners — waar te starten?</a></li>
            <li><Link to="/vergelijken">→ Vergelijk twee proteïneproducten naast elkaar</Link></li>
          </ul>
        </div>

        {/* FAQ */}
        <h2>Veelgestelde vragen</h2>
        <div className="art-faq">
          {faqs.map((faq, i) => (
            <div className="art-faq-item" key={i}>
              <button
                className="art-faq-q"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <span className="art-faq-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <div className="art-faq-a">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
