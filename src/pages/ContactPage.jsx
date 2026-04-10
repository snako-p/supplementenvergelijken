import React, { useState } from 'react';
import '../styles/Legal.css';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [form, setForm] = useState({ naam: '', email: '', bericht: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
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
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Er ging iets mis.');
        setStatus('error');
      } else {
        setStatus('success');
        setForm({ naam: '', email: '', bericht: '' });
      }
    } catch {
      setError('Verbindingsfout. Probeer het opnieuw.');
      setStatus('error');
    }
  };

  return (
    <div className="legal-page">
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
            <div className="form-group">
              <label htmlFor="naam">Naam</label>
              <input
                id="naam"
                name="naam"
                type="text"
                placeholder="Jouw naam"
                value={form.naam}
                onChange={handleChange}
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
                required
              />
            </div>
            {error && <div className="form-error">{error}</div>}
            <button type="submit" className="form-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Verzenden...' : 'Stuur bericht →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
