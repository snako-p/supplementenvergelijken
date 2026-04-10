import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Sluit menu bij route-wissel
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Blokkeer scrollen wanneer menu open is
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { label: 'Vitamines', to: '/vitamines' },
    { label: 'Magnesium', to: '/magnesium' },
    { label: 'Omega-3', to: '/omega-3' },
    { label: 'Vergelijken', to: '/vergelijken' },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        supplementen<span>vergelijken</span>.be
      </Link>

      {/* Desktop links */}
      <ul className="nav-links">
        {navItems.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? 'nav-active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
        <li><span className="nav-link-soon">Blog</span></li>
      </ul>

      <Link to="/vergelijken" className="nav-cta">Beste keuze vinden →</Link>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menu openen"
      >
        <span /><span /><span />
      </button>

      {/* Mobile overlay */}
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Mobile drawer */}
      <div className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}>
        <div className="nav-drawer-header">
          <Link to="/" className="logo">supplementen<span>vergelijken</span>.be</Link>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Menu sluiten">✕</button>
        </div>
        <ul className="drawer-links">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className={location.pathname === to ? 'nav-active' : ''}>{label}</Link>
            </li>
          ))}
          <li><span className="nav-link-soon">Blog (binnenkort)</span></li>
        </ul>
        <Link to="/vergelijken" className="drawer-cta">Beste keuze vinden →</Link>
      </div>
    </nav>
  );
}
