import React, { useState } from 'react';
import '../styles/SearchBar.css';

const popularTags = ['Vitamine D','Magnesium','Omega-3','Proteïne','Zink','Collageen'];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  return (
    <div className="search-section">
      <div className="search-inner">
        <div className="search-title">Waar zoek je naar?</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Bijv. magnesium, omega-3, proteïne..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-btn">Zoeken</button>
        </div>
        <div className="search-tags">
          {popularTags.map(tag => (
            <span key={tag} className="tag" onClick={() => setQuery(tag)}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
