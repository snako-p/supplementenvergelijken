import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/Categories.css';

const cats = [
  { icon: '🌞', name: 'Vitamines',      to: '/vitamines'   },
  { icon: '🪨', name: 'Magnesium',      to: '/magnesium'   },
  { icon: '🐟', name: 'Omega-3',        to: '/omega-3'     },
  { icon: '⚡', name: 'Mineralen',      to: '/mineralen'   },
  { icon: '🥛', name: 'Proteïne',       to: '/proteine'    },
  { icon: '💪', name: 'Sport',          to: '/proteine'    },
  { icon: '🧠', name: 'Hersenen',       to: '/hersenen'    },
  { icon: '🌿', name: 'Stress & Slaap', to: '/stress-slaap'},
  { icon: '✨', name: 'Huid & Haar',    to: '/huid-haar'   },
  { icon: '⚡', name: 'Energie',        to: '/energie'     },
  { icon: '🌿', name: 'Antioxidanten',  to: '/categorieen#antioxidanten' },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="section-label">Categorieën</div>
      <div className="section-title">Wat wil jij verbeteren?</div>
      <p className="section-sub">Kies een categorie en ontdek de beste supplementen.</p>
      <div className="cat-grid">
        {cats.map(cat => {
          const count = products.filter(p => p.categorie === cat.name).length;
          return (
            <Link className="cat-card" key={cat.name} to={cat.to}>
              <span className="cat-icon">{cat.icon}</span>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">{count} product{count !== 1 ? 'en' : ''}</div>
              <span className="cat-arrow">→</span>
            </Link>
          );
        })}
      </div>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Link to="/categorieen" style={{
          display: 'inline-block',
          background: 'var(--orange)',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: 10,
          fontWeight: 600,
          fontSize: 15,
          textDecoration: 'none',
        }}>
          Bekijk alle producten per categorie →
        </Link>
      </div>
    </section>
  );
}
