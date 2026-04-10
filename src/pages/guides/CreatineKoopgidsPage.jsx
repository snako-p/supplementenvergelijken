import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Waar moet je op letten bij het kopen van creatine? — Koopgids 2026',
  description: 'Alles wat je moet weten voor je creatine koopt: vorm, dosering, kwaliteit en prijs. Complete koopgids voor Belgen.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-02-01',
  dateModified: '2026-04-10',
};

export default function CreatineKoopgidsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: 'Welke creatine is het beste?', a: 'Creatine monohydraat is de meest onderzochte en kostenefficiënte vorm. Kies voor Creapure®-gecertificeerd voor de hoogste zuiverheid.' },
    { q: 'Hoe veel creatine moet ik nemen?', a: '3–5g per dag is de standaard onderhoudsdosis. Een laadkuur (20g/dag gedurende 5-7 dagen) versnelt het resultaat maar is niet noodzakelijk.' },
    { q: 'Wanneer neem ik creatine het beste?', a: 'Timing maakt weinig uit. Consistentie is het belangrijkste. Veel sporters nemen het na de training of bij een maaltijd.' },
    { q: 'Is creatine veilig?', a: 'Ja, creatine monohydraat is een van de meest onderzochte supplementen ter wereld. Honderden studies bevestigen de veiligheid bij normale doses.' },
    { q: 'Moet ik creatine cyclisch nemen?', a: 'Nee, je kunt creatine continu nemen. Er is geen bewijs dat cycli noodzakelijk of voordelig zijn.' },
  ];

  return (
    <div className="article-page">
      <SEO
        title="Creatine Kopen — Waar Let Je Op? Koopgids 2026"
        description="Welke creatine kopen? Ontdek het verschil tussen monohydraat, HCL en Kre-Alkalyn. Met dosering, kwaliteitslabels en prijsvergelijking. Bijgewerkt 2026."
        canonical="/koopgidsen/creatine-koopgids"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Koopgids · April 2026</div>
          <h1>Waar Let Je Op Bij<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Creatine Kopen?</em></h1>
          <p className="article-hero-sub">Creatine is het best onderzochte sportssupplement ter wereld. Maar welke vorm kies je, hoeveel neem je en op welke kwaliteitskenmerken let je? Deze gids geeft antwoord.</p>
          <div className="article-meta">
            <span>✓ Vormen vergeleken</span>
            <span>✓ Dosering uitgelegd</span>
            <span>✓ Kwaliteitslabels</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>Wat is creatine en waarom werkt het?</h2>
        <p>Creatine is een natuurlijk stof die je lichaam aanmaakt uit aminozuren en ook in vlees en vis zit. In je spieren wordt het opgeslagen als fosfocreatine — brandstof voor korte, explosieve inspanningen.</p>
        <p>Door extra creatine te supplementeren, vul je de voorraden aan. Het resultaat: meer kracht, meer herhalingen, sneller herstel. De wetenschap is duidelijk: <strong>creatine werkt bij verreweg de meeste sporters</strong>.</p>

        <div className="info-box">
          <p>💡 <strong>Wetenschapsfeit:</strong> Van meer dan 500 studies concludeerden meta-analyses dat creatine de krachtsport prestaties met gemiddeld 5–15% verbetert bij kortdurende, hoge-intensiteit activiteiten.</p>
        </div>

        <h2>Welke creatine soorten zijn er?</h2>

        <h3>Creatine Monohydraat — de gouden standaard</h3>
        <p>De meest bestudeerde en bewezen effectieve vorm. Goedkoop, effectief en veilig. Kies altijd voor <strong>Creapure®</strong>-kwaliteit: een Duits kwaliteitslabel dat zuiverheid garandeert (&gt;99,9% creatine monohydraat, vrij van verontreinigingen).</p>

        <h3>Creatine HCL — hogere oplosbaarheid</h3>
        <p>Gebonden aan zoutzuur voor betere oplosbaarheid in water. Lagere doses nodig (1–2g vs 3–5g), maar significant duurder. Niet aantoonbaar beter dan monohydraat.</p>

        <h3>Kre-Alkalyn — gebufferde pH</h3>
        <p>Claimit stabieler te zijn in de maag. Wetenschappelijk bewijs hiervoor ontbreekt echter. Geen voordeel boven monohydraat aangetoond.</p>

        <div className="verdict-box">
          <strong>Onze aanbeveling</strong>
          <p><strong>Creatine monohydraat</strong> is de enige keuze die je nodig hebt. Goedkoper, beter onderzocht en net zo effectief als duurdere alternatieven. Let op het Creapure®-label voor gegarandeerde zuiverheid.</p>
        </div>

        <h2>Checklist: waar let je op bij aankoop?</h2>
        <ul>
          <li><strong>Creapure® certificaat</strong> — garandeert zuiverheid en is geproduceerd in Duitsland</li>
          <li><strong>Minimaal 3g per portie</strong> — effectieve onderhoudsdosis start bij 3g</li>
          <li><strong>Geen onnodige toevoegingen</strong> — suikers, kleurstoffen en smaakstoffen zijn overbodig</li>
          <li><strong>Prijs per gram</strong> — monohydraat kost €0,02–0,05/g; alles duurder is marketing</li>
          <li><strong>Poeder vs capsules</strong> — poeder is goedkoper; capsules makkelijker onderweg</li>
        </ul>

        <h2>Aanbevolen producten</h2>

        <div className="art-product">
          <div className="art-product-left">
            <span className="art-product-emoji">🏆</span>
            <span className="art-product-rank">#1 — Beste keuze</span>
          </div>
          <div className="art-product-info">
            <div className="art-product-name">Bulk Creapure® Creatine Monohydraat</div>
            <div className="art-product-brand">Bulk · 500g poeder</div>
            <div className="art-product-stars">★★★★★ <small style={{ color: 'var(--text-muted)' }}>(1.204 reviews)</small></div>
            <ul className="art-product-pros">
              <li>Creapure® gecertificeerd</li>
              <li>Beste prijs per gram</li>
              <li>Smaakloos — mix in alles</li>
            </ul>
            <div className="art-product-footer">
              <span className="art-product-price">€14,99</span>
              <a href="#" className="art-product-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk prijs →</a>
            </div>
          </div>
        </div>

        <div className="art-product">
          <div className="art-product-left">
            <span className="art-product-emoji">💊</span>
            <span className="art-product-rank">#2 — Beste capsules</span>
          </div>
          <div className="art-product-info">
            <div className="art-product-name">MyProtein Creatine Monohydraat Capsules</div>
            <div className="art-product-brand">MyProtein · 250 capsules</div>
            <div className="art-product-stars">★★★★½ <small style={{ color: 'var(--text-muted)' }}>(687 reviews)</small></div>
            <ul className="art-product-pros">
              <li>Handig voor onderweg</li>
              <li>Creapure® kwaliteit</li>
              <li>Geen smaak of kleurstof</li>
            </ul>
            <div className="art-product-footer">
              <span className="art-product-price">€12,99</span>
              <a href="#" className="art-product-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk prijs →</a>
            </div>
          </div>
        </div>

        <h2>Dosering en inname</h2>
        <p>Je hebt twee opties:</p>
        <ol>
          <li><strong>Directe onderhoudsdosis:</strong> 3–5g/dag. Na 3–4 weken zijn je voorraden volledig aangevuld. Simpel en aanbevolen voor de meeste mensen.</li>
          <li><strong>Laadkuur:</strong> 20g/dag (4x 5g) gedurende 5–7 dagen, daarna 3–5g/dag. Snellere aanvulling, maar kan maagklachten geven. Niet noodzakelijk.</li>
        </ol>
        <p>Neem creatine met genoeg water (minimaal 300ml). Op rustdagen 's ochtends, op trainingsdagen direct na de training met een koolhydraatrijke maaltijd voor optimale opname.</p>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/proteine">← Alle proteïne supplementen vergelijken</Link></li>
            <li><Link to="/artikelen/whey-vs-plantaardig-eiwit">Whey vs plantaardig eiwit — wat past bij jou?</Link></li>
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
