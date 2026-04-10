import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const categoryLinks = [
  { label: 'Vitamines', to: '/vitamines' },
  { label: 'Mineralen', to: '/mineralen' },
  { label: 'Proteïne', to: '/proteine' },
  { label: 'Omega-3', to: '/omega-3' },
];

const infoLinks = [
  { label: 'Over ons', to: '/over-ons' },
  { label: 'Contact', to: '/contact' },
  { label: 'Adverteren', to: '/adverteren' },
  { label: 'Privacybeleid', to: '/privacybeleid' },
  { label: 'Affiliate disclosure', to: '/affiliate-disclosure' },
  { label: 'Algemene voorwaarden', to: '/algemene-voorwaarden' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <Link to="/" className="footer-logo">supplementenvergelijken.be</Link>
            <p className="footer-desc">
              Onafhankelijk supplementen vergelijken voor Belgen. Wij verdienen een kleine
              commissie bij aankoop — dit beïnvloedt onze reviews nooit.
            </p>
            <p className="affiliate-notice">⚠️ Affiliate disclosure: sommige links zijn gesponsord.</p>
          </div>
          <div className="footer-col">
            <h4>Categorieën</h4>
            <ul>
              {categoryLinks.map(({ label, to }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Over ons</h4>
            <ul>
              {infoLinks.map(({ label, to }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
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
