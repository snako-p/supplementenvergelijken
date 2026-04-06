import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">supplementen<span>vergelijken</span>.be</Link>
      <ul className="nav-links">
        <li><Link to="/vitamines">Vitamines</Link></li>
        <li><Link to="/magnesium">Magnesium</Link></li>
        <li><Link to="/omega-3">Omega-3</Link></li>
        <li><Link to="/vergelijken">Vergelijken</Link></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <Link to="/vergelijken" className="nav-cta">Beste keuze vinden →</Link>
    </nav>
  );
}
