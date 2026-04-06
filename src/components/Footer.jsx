import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">supplementenvergelijken.be</div>
            <p className="footer-desc">Onafhankelijk supplementen vergelijken voor Belgen. Wij verdienen een kleine commissie bij aankoop — dit beïnvloedt onze reviews nooit.</p>
            <p className="affiliate-notice">⚠️ Affiliate disclosure: sommige links zijn gesponsord.</p>
          </div>
          <div className="footer-col">
            <h4>Categorieën</h4>
            <ul>
              {['Vitamines','Mineralen','Proteïne','Omega-3'].map(i => <li key={i}><a href="#">{i}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Over ons</h4>
            <ul>
              {['Over ons','Blog','Contact','Privacybeleid'].map(i => <li key={i}><a href="#">{i}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 supplementenvergelijken.be</span>
          <span>Gemaakt met ♥ in België</span>
        </div>
      </div>
    </footer>
  );
}
