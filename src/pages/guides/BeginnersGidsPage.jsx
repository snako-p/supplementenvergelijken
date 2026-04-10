import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import '../../styles/Article.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Supplementen voor Beginners — Complete Gids 2026',
  description: 'Nieuw met supplementen? Deze complete gids legt uit welke supplementen je écht nodig hebt, wat je kunt overslaan en hoe je veilig begint.',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
  datePublished: '2026-02-15',
  dateModified: '2026-04-10',
};

const essentials = [
  { name: 'Vitamine D3', why: 'Belgische zon geeft onvoldoende aanmaak', dose: '1000–2000 IU/dag', icon: '☀️' },
  { name: 'Omega-3 visolie', why: 'Te weinig vette vis in gemiddeld dieet', dose: '1–2g EPA+DHA/dag', icon: '🐟' },
  { name: 'Magnesium', why: 'Moderne voeding levert te weinig', dose: '200–400mg/dag', icon: '🪨' },
];

export default function BeginnersGidsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    { q: 'Met welk supplement begin ik het best?', a: 'Start met de basis: vitamine D3, omega-3 en magnesium. Deze drie zijn in België het meest zinvol vanwege structurele tekorten in de bevolking.' },
    { q: 'Heb ik als beginner eiwitpoeder nodig?', a: 'Alleen als je consistent moeite hebt om genoeg eiwit te eten via voeding. Richt je eerst op 1,6–2g eiwit per kg lichaamsgewicht via gewone voeding.' },
    { q: 'Zijn supplementen gevaarlijk?', a: 'Bij normale doses zijn de supplementen in deze gids veilig. Overdosering van vetoplosbare vitamines (A, D, E, K) kan schadelijk zijn. Volg altijd de aanbevolen doses.' },
    { q: 'Hoeveel geld moet ik maandelijks aan supplementen besteden?', a: 'De basisdriehoek (D3 + omega-3 + magnesium) kost minder dan €20/maand als je slim koopt. Meer is zelden beter.' },
    { q: 'Moet ik supplementen nemen als ik gezond eet?', a: 'Vitamine D is de uitzondering: zelfs bij een perfect dieet maakt de Belgische zon niet genoeg aan. Voor de rest: een gevarieerd, vol voedingspatroon is altijd de basis.' },
  ];

  return (
    <div className="article-page">
      <SEO
        title="Supplementen voor Beginners — Complete Gids België 2026"
        description="Welke supplementen heb je als beginner écht nodig? Ontdek de basisdriehoek, wat je kunt overslaan en hoe je veilig en budgetvriendelijk begint. Bijgewerkt 2026."
        canonical="/koopgidsen/supplementen-voor-beginners"
        type="article"
        schema={schema}
      />

      <div className="article-hero">
        <div className="article-hero-inner">
          <div className="section-label">Koopgids · April 2026</div>
          <h1>Supplementen voor Beginners<br /><em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Complete Gids 2026</em></h1>
          <p className="article-hero-sub">Overweldigd door het supplementenaanbod? Deze gids vertelt je precies wat je écht nodig hebt, wat je veilig kunt overslaan en hoe je slim begint zonder je budget te verspillen.</p>
          <div className="article-meta">
            <span>✓ Beginnersvriendelijk</span>
            <span>✓ Budgetvriendelijk</span>
            <span>✓ Wetenschappelijk onderbouwd</span>
          </div>
        </div>
      </div>

      <div className="article-body">
        <div className="article-disclosure">
          <span>⚠️</span>
          <p><strong>Affiliate disclosure:</strong> Sommige links zijn gesponsord. <Link to="/affiliate-disclosure">Meer info</Link></p>
        </div>

        <h2>De gouden regel voor beginners</h2>
        <p>Supplementen zijn een <em>aanvulling</em> op een goed voedingspatroon — geen vervanging. De eerste stap is altijd: zorg voor voldoende slaap, beweging, water en gevarieerde voeding.</p>
        <p>Daarna komt de vraag: <strong>welke tekorten zijn in België structureel?</strong> Dat is het startpunt voor slimme supplementatie.</p>

        <div className="info-box">
          <p>💡 <strong>Belgisch feit:</strong> Door ons klimaat (bewolkt, weinig zon) hebben meer dan 50% van de Belgen een vitamine D-tekort in de wintermaanden. Dit is het #1 supplement voor vrijwel elke Belg.</p>
        </div>

        <h2>De basisdriehoek — start hier</h2>
        <p>Als beginner zijn dit de <strong>drie supplementen met de meeste wetenschappelijke onderbouwing</strong> voor de gemiddelde Belg:</p>

        <div className="art-table-wrap">
          <table className="art-table">
            <thead>
              <tr><th></th><th>Supplement</th><th>Waarom?</th><th>Dosering</th></tr>
            </thead>
            <tbody>
              {essentials.map(e => (
                <tr key={e.name}>
                  <td style={{ fontSize: 24 }}>{e.icon}</td>
                  <td><strong>{e.name}</strong></td>
                  <td style={{ color: 'var(--text-muted)' }}>{e.why}</td>
                  <td><strong>{e.dose}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Stap 1: Vitamine D3 — het #1 supplement voor Belgen</h2>
        <p>Vitamine D maakt je lichaam zelf aan via zonlicht op de huid. In België is er van oktober tot april onvoldoende UVB-straling voor adequate aanmaak. Resultaat: bijna iedereen heeft een tekort.</p>
        <p>Kies <strong>D3 (cholecalciferol)</strong> — niet D2. D3 verhoogt je bloedwaarden tot 87% effectiever. Een dosis van 1000–2000 IU/dag is veilig voor de meeste volwassenen.</p>

        <div className="art-product">
          <div className="art-product-left">
            <span className="art-product-emoji">☀️</span>
            <span className="art-product-rank">Aanbevolen</span>
          </div>
          <div className="art-product-info">
            <div className="art-product-name">Vitakruid Vitamine D3 75mcg</div>
            <div className="art-product-brand">Vitakruid · 365 capsules</div>
            <div className="art-product-stars">★★★★★ <small style={{ color: 'var(--text-muted)' }}>(312 reviews)</small></div>
            <ul className="art-product-pros">
              <li>3000 IU per capsule</li>
              <li>Ideale dosis voor dagelijks gebruik</li>
              <li>Jaar voorraad voor €14,95</li>
            </ul>
            <div className="art-product-footer">
              <span className="art-product-price">€14,95</span>
              <a href="#" className="art-product-btn" target="_blank" rel="nofollow sponsored noopener noreferrer">Bekijk prijs →</a>
            </div>
          </div>
        </div>

        <h2>Stap 2: Omega-3 visolie</h2>
        <p>Omega-3 vetzuren (EPA en DHA) zijn essentieel voor hart, hersenen en ontstekingsregulatie. Ons lichaam kan ze niet zelf aanmaken — je moet ze eten of supplementeren.</p>
        <p>De meeste Belgen eten niet de aanbevolen 2 porties vette vis per week. Een <strong>kwaliteitsvisolie</strong> met minimaal 500mg EPA+DHA per capsule is dan de oplossing.</p>
        <p>Let op: kies voor IFOS- of Friend of the Sea-gecertificeerde producten voor garantie op zuiverheid (vrij van kwiksporen).</p>

        <h2>Stap 3: Magnesium</h2>
        <p>Magnesium speelt een rol in meer dan 300 enzymreacties. Moderne landbouwgrond bevat minder magnesium dan vroeger, waardoor zelfs een gevarieerd dieet tekort kan schieten.</p>
        <p>Als beginner: kies <strong>magnesium malaat of bisglycinaat</strong> — niet oxide. Oxide wordt nauwelijks opgenomen en werkt voornamelijk als laxeermiddel.</p>

        <h2>Wat je als beginner kunt overslaan</h2>
        <ul>
          <li><strong>Pre-workout formules</strong> — hoge cafeïne, onnodige additieven, duur</li>
          <li><strong>Testosteron boosters</strong> — werken niet voor gezonde mannen met normale waarden</li>
          <li><strong>Fatburners</strong> — geen vervanger voor caloriereductie; minimaal effect</li>
          <li><strong>Dure multivitamines</strong> — bij gevarieerde voeding zelden zinvol; goedkope varianten zijn prima</li>
          <li><strong>Collageen supplementen</strong> — onvoldoende bewijs voor de meeste claims</li>
        </ul>

        <h2>Als je sport: voeg creatine toe</h2>
        <p>Sporten? Dan is creatine monohydraat het <strong>meest bewezen sportsupplement ter wereld</strong>. 3–5g per dag verhoogt kracht, spiermassa en herstel. Veilig, goedkoop en effectief bij verreweg de meeste sporters.</p>
        <p>Proteïnepoeder is alleen nodig als je structureel te weinig eiwit via voeding binnenkrijgt. Streef naar 1,6–2g per kg lichaamsgewicht via voeding eerste.</p>

        <div className="verdict-box">
          <strong>Beginners checklist</strong>
          <p>Start met <strong>vitamine D3 + omega-3 + magnesium</strong>. Dit kost je minder dan €20/maand en heeft de meeste impact voor de gemiddelde Belg. Voeg pas nieuwe supplementen toe als je merkt dat voeding tekortschiet voor een specifiek doel.</p>
        </div>

        <div className="related-links">
          <h4>Lees ook</h4>
          <ul>
            <li><Link to="/koopgidsen/hoe-kies-je-het-juiste-supplement">Hoe kies je het juiste supplement voor jouw doel?</Link></li>
            <li><Link to="/artikelen/beste-vitamine-d-supplement-vergeleken">Beste vitamine D supplementen vergeleken</Link></li>
            <li><Link to="/artikelen/top-5-magnesium-supplementen-belgie">Top 5 magnesium supplementen België</Link></li>
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
