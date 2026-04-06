import React from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({ rank, emoji, category, title, subtitle, rating, reviewCount, features, price, isBest, accentColor }) {
  return (
    <div className="prod-card" style={{ position: 'relative' }}>
      {isBest && <div className="badge-best">#1 Beste keuze</div>}
      <div className="prod-header" style={{ background: accentColor || 'var(--orange-pale)' }}>
        <div className="prod-emoji">{emoji}</div>
        <div className="prod-rank">{category}</div>
      </div>
      <div className="prod-body">
        <div className="prod-title">{title}</div>
        <div className="prod-sub">{subtitle}</div>
        <div className="prod-rating">
          <span className="rating-stars">{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
          <span className="rating-num">{rating} ({reviewCount})</span>
        </div>
        <div className="prod-features">
          {features.map(f => <div className="feat" key={f}>{f}</div>)}
        </div>
        <div className="prod-footer">
          <div className="prod-price">{price}</div>
          <button className="prod-btn">Bekijk deal →</button>
        </div>
      </div>
    </div>
  );
}
