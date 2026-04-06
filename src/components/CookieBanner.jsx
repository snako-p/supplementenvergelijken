import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-inner">
        <div className="cookie-text">
          <span className="cookie-icon">🍪</span>
          <div>
            <strong>Wij gebruiken cookies</strong>
            <p>
              We gebruiken cookies om je ervaring te verbeteren en bezoekersstatistieken
              bij te houden. Lees ons{' '}
              <a href="/privacybeleid">privacybeleid</a> voor meer info.
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-secondary" onClick={acceptNecessary}>
            Alleen noodzakelijk
          </button>
          <button className="cookie-btn-primary" onClick={acceptAll}>
            Alles accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
