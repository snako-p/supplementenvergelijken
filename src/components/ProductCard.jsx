import React from 'react';
import '../styles/ProductCard.css';

export default function ProductCard({ rank, emoji, category, title, subtitle, rating, reviewCount, features, price, priceDisplay, isBest, accentColor, link }) {
  const displayPrice = priceDisplay || price;
  const href = link && link !== '#' ? link : null;

  const schema = href ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    description: subtitle,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: rating ? {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviewCount || 1,
      bestRating: 5,
    } : undefined,
  } : null;

  return (
    <div className="prod-card" style={{ position: 'relative' }}>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      {isBest && <div className="badge-best">#1 Beste keuze</div>}
      <div className="prod-header" style={{ background: accentColor || 'var(--orange-pale)' }}>
        <div className="prod-emoji" role="img" aria-label={category}>{emoji}</div>
        <div className="prod-rank">{category}</div>
      </div>
      <div className="prod-body">
        <div className="prod-title">{title}</div>
        {subtitle && <div className="prod-sub">{subtitle}</div>}
        {rating && (
          <div className="prod-rating">
            <span className="rating-stars" aria-label={`${rating} van 5 sterren`}>
              {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
            </span>
            <span className="rating-num">{rating} ({reviewCount} reviews)</span>
          </div>
        )}
        {features && (
          <div className="prod-features">
            {features.map(f => <div className="feat" key={f}>{f}</div>)}
          </div>
        )}
        <div className="prod-footer">
          <div className="prod-price">{displayPrice}</div>
          {href ? (
            <a
              href={href}
              className="prod-btn"
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label={`Bekijk de beste prijs voor ${title}`}
            >
              Bekijk prijs →
            </a>
          ) : (
            <button className="prod-btn" disabled style={{ opacity: 0.5, cursor: 'default' }}>
              Binnenkort →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
