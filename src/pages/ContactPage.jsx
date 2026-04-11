import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/Legal.css';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [form, setForm] = useState({ naam: '', email: '', bericht: '', website: '' });
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    // Client-side honeypot check
    if (form.website) {
      setStatus('success');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: form.naam,
          email: form.email,
          bericht: form.bericht,
          website: form.website,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Er ging iets mis.');
        setStatus('error');
      } else {
        setStatus('success');
        setForm({ naam: '', email: '', bericht: '', website: '' });
      }
    } catch {
      setError('Verbindingsfout. Probeer het opnieuw.');
      setStatus('error');
    }
  };

  return (
    <div className="legal-page">
      <SEO
        title="Contact — SupplementenVergelijken.be"
        description="Neem contact op met SupplementenVergelijken.be. Vragen over supplementen, samenwerkingen of onze reviews? We reageren binnen 1-2 werkdagen."
        canonical="/contact"
      />
      <div className="legal-inner">
        <h1>Contact</h1>
        <p className="legal-date">We reageren doorgaans binnen 1-2 werkdagen.</p>

        {status === 'success' ? (
          <div className="contact-success">
            <div className="contact-success-icon">✓</div>
            <h2>Bericht verzonden!</h2>
            <p>Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot — hidden from users, bots fill this in */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="website">Website (laat leeg)</label>
              <input
                id="website"
                name="website"
                type="text"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="naam">Naam</label>
              <input
                id="naam"
                name="naam"
                type="text"
                placeholder="Jouw naam"
                value={form.naam}
                onChange={handleChange}
                maxLength={100}
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mailadres</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jouw@email.be"
                value={form.email}
                onChange={handleChange}
                maxLength={254}
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bericht">Bericht</label>
              <textarea
                id="bericht"
                name="bericht"
                placeholder="Hoe kunnen we je helpen?"
                value={form.bericht}
                onChange={handleChange}
                rows={6}
                maxLength={2000}
                autoComplete="off"
                required
              />
              <small className="form-char-count">{form.bericht.length}/2000</small>
            </div>
            {error && <div className="form-error" role="alert">{error}</div>}
            <button type="submit" className="form-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Verzenden...' : 'Stuur bericht →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
