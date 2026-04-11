import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage not available (private browsing, security policy)
    }
  }, []);

  const save = (value) => {
    try {
      localStorage.setItem('cookieConsent', value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookiemelding" aria-live="polite">
      <div className="cookie-inner">
        <div className="cookie-text">
          <span className="cookie-icon" aria-hidden="true">🍪</span>
          <div>
            <strong>Wij gebruiken cookies</strong>
            <p>
              We gebruiken functionele cookies voor een goede werking van de site. Met je toestemming ook analytische cookies voor bezoekersstatistieken.
              Lees ons <Link to="/privacybeleid">privacybeleid</Link> voor meer info.
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-secondary" onClick={() => save('necessary')}>
            Alleen noodzakelijk
          </button>
          <button className="cookie-btn-primary" onClick={() => save('all')}>
            Alles accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
