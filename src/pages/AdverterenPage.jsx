import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/Legal.css';
import '../styles/AdverterenPage.css';

const samenwerkingen = [
  {
    icon: '📝',
    title: 'Gesponsorde productreview',
    desc: 'Wij schrijven een eerlijke, uitgebreide review van jouw product. Geplaatst op een relevante categoriepagina met affiliate link.',
  },
  {
    icon: '🏆',
    title: 'Vermelding in vergelijkingstabel',
    desc: 'Jouw product verschijnt in onze vergelijkingstabellen naast concurrenten. Inclusief score, prijs en koopknop.',
  },
  {
    icon: '🔝',
    title: 'Featured positie',
    desc: 'Jouw product krijgt een prominente "Aanbevolen" of "Beste keuze" positie op een categorievergelijkingspagina.',
  },
  {
    icon: '📧',
    title: 'Nieuwsbrief vermelding',
    desc: 'Vermelding in onze maandelijkse nieuwsbrief naar actieve supplementengebruikers in België.',
  },
];

export default function AdverterenPage() {
  const [form, setForm] = useState({ naam: '', email: '', bedrijf: '', bericht: '' });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam: form.naam, email: form.email, bericht: `Bedrijf: ${form.bedrijf}\n\n${form.bericht}` }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Er ging iets mis.'); setStatus('error'); }
      else { setStatus('success'); setForm({ naam: '', email: '', bedrijf: '', bericht: '' }); }
    } catch {
      setError('Verbindingsfout. Probeer opnieuw.');
      setStatus('error');
    }
  };

  return (
    <div className="legal-page">
      <SEO
        title="Adverteren & Samenwerken — SupplementenVergelijken.be"
        description="Wil je jouw supplement promoten bij Belgische consumenten? Ontdek de samenwerkingsmogelijkheden op SupplementenVergelijken.be: reviews, vergelijkingen en banners."
        canonical="/adverteren"
      />
      <div className="legal-inner adv-inner">

        <div className="adv-hero">
          <div className="section-label">Samenwerken</div>
          <h1>Bereik duizenden Belgische supplementenkopers</h1>
          <p className="adv-hero-sub">
            SupplementenVergelijken.be is hét onafhankelijke vergelijkingsplatform voor supplementen in België.
            Wij verbinden merken met bewuste consumenten die actief op zoek zijn naar de beste producten.
          </p>
        </div>

        {/* Stats */}
        <div className="adv-stats">
          <div className="adv-stat">
            <div className="adv-stat-num">5.000+</div>
            <div className="adv-stat-label">Maandelijkse bezoekers</div>
          </div>
          <div className="adv-stat">
            <div className="adv-stat-num">68%</div>
            <div className="adv-stat-label">Belgische gebruikers</div>
          </div>
          <div className="adv-stat">
            <div className="adv-stat-num">4,2 min</div>
            <div className="adv-stat-label">Gemiddelde sessieduur</div>
          </div>
          <div className="adv-stat">
            <div className="adv-stat-num">62%</div>
            <div className="adv-stat-label">Koopintentie bezoekers</div>
          </div>
        </div>

        {/* Doelgroep */}
        <section>
          <h2>Onze doelgroep</h2>
          <p>Onze bezoekers zijn actieve supplementengebruikers in België en Nederland die bewust kiezen:</p>
          <ul>
            <li><strong>Leeftijd:</strong> 25–45 jaar, gezondheids- en fitnessbewust</li>
            <li><strong>Aankoopfase:</strong> actief vergelijkend, hoge koopintentie</li>
            <li><strong>Interesses:</strong> sport, gezonde voeding, preventieve gezondheid</li>
            <li><strong>Apparaten:</strong> 58% mobiel, 42% desktop</li>
          </ul>
        </section>

        {/* Samenwerkingen */}
        <section>
          <h2>Samenwerkingsmogelijkheden</h2>
          <div className="adv-grid">
            {samenwerkingen.map(s => (
              <div className="adv-card" key={s.title}>
                <div className="adv-card-icon">{s.icon}</div>
                <h3 className="adv-card-title">{s.title}</h3>
                <p className="adv-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="adv-disclaimer">
          <strong>Onze onafhankelijkheid staat voorop.</strong> Gesponsorde content wordt altijd duidelijk gemarkeerd.
          Wij plaatsen alleen producten die voldoen aan onze kwaliteitsnormen.
        </div>

        {/* Contactformulier */}
        <section>
          <h2>Neem contact op</h2>
          <p>Stuur ons een bericht en we reageren binnen 2 werkdagen met een voorstel op maat.</p>

          {status === 'success' ? (
            <div className="contact-success" style={{ marginTop: '24px' }}>
              <div className="contact-success-icon">✓</div>
              <h2>Bericht ontvangen!</h2>
              <p>We nemen zo snel mogelijk contact met je op.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="adv-form-row">
                <div className="form-group">
                  <label htmlFor="naam">Naam</label>
                  <input id="naam" name="naam" type="text" placeholder="Jouw naam" value={form.naam} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="bedrijf">Bedrijf / Merk</label>
                  <input id="bedrijf" name="bedrijf" type="text" placeholder="Jouw bedrijfsnaam" value={form.bedrijf} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mailadres</label>
                <input id="email" name="email" type="email" placeholder="jouw@bedrijf.be" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="bericht">Bericht</label>
                <textarea id="bericht" name="bericht" placeholder="Beschrijf kort wat je zoekt (productreview, vergelijking, banner...)" value={form.bericht} onChange={handleChange} rows={5} required />
              </div>
              {error && <div className="form-error">{error}</div>}
              <button type="submit" className="form-submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Verzenden...' : 'Stuur aanvraag →'}
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}
