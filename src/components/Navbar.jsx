import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const categories = [
  { label: 'Vitamines', to: '/vitamines' },
  { label: 'Magnesium', to: '/magnesium' },
  { label: 'Omega-3', to: '/omega-3' },
  { label: 'Mineralen', to: '/mineralen' },
  { label: 'Proteïne', to: '/proteine' },
  { label: 'Energie', to: '/energie' },
  { label: 'Hersenen & Focus', to: '/hersenen' },
  { label: 'Stress & Slaap', to: '/stress-slaap' },
  { label: 'Huid & Haar', to: '/huid-haar' },
  { label: 'Alle categorieën', to: '/categorieen' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActiveCategory = categories.some(c => c.to === location.pathname);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/logo.png.png" alt="Supplementen Vergelijken" className="logo-img" />
      </Link>

      {/* Desktop links */}
      <ul className="nav-links">
        {/* Categorieën dropdown */}
        <li className="nav-dropdown-wrap" ref={dropdownRef}>
          <button
            className={`nav-dropdown-toggle${isActiveCategory ? ' nav-active' : ''}`}
            onClick={() => setDropdownOpen(o => !o)}
            aria-expanded={dropdownOpen}
          >
            Categorieën <span className="nav-chevron">{dropdownOpen ? '▴' : '▾'}</span>
          </button>
          {dropdownOpen && (
            <ul className="nav-dropdown">
              {categories.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={location.pathname === to ? 'nav-active' : ''}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/vergelijken"
            className={location.pathname === '/vergelijken' ? 'nav-active' : ''}
          >
            Vergelijken
          </Link>
        </li>
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
          <Link to="/" className="logo">
            <img src="/logo.png.png" alt="Supplementen Vergelijken" className="logo-img" />
          </Link>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Menu sluiten">✕</button>
        </div>
        <div className="drawer-section-label">Categorieën</div>
        <ul className="drawer-links">
          {categories.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className={location.pathname === to ? 'nav-active' : ''}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="drawer-section-label">Navigatie</div>
        <ul className="drawer-links">
          <li>
            <Link to="/vergelijken" className={location.pathname === '/vergelijken' ? 'nav-active' : ''}>Vergelijken</Link>
          </li>
          <li><span className="nav-link-soon">Blog (binnenkort)</span></li>
        </ul>
        <Link to="/vergelijken" className="drawer-cta">Beste keuze vinden →</Link>
      </div>
    </nav>
  );
}
