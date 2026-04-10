import React, { useState } from 'react';
import { allComparableProducts } from '../data/products';
import '../styles/ComparisonPage.css';

const scoreLabels = { kwaliteit: 'Kwaliteit', prijskwaliteit: 'Prijs/kwaliteit', ingredienten: 'Ingrediënten', veiligheid: 'Veiligheid' };

function ScoreBar({ label, valueA, valueB }) {
  const winner = valueA > valueB ? 'a' : valueB > valueA ? 'b' : 'tie';
  return (
    <div className="score-row">
      <div className={`score-val ${winner === 'a' ? 'score-winner' : ''}`}>{valueA}%</div>
      <div className="score-label-center">{label}</div>
      <div className={`score-val right ${winner === 'b' ? 'score-winner' : ''}`}>{valueB}%</div>
      <div className="score-bars">
        <div className="bar-left-wrap">
          <div className="bar-fill-left" style={{ width: `${valueA}%`, background: winner === 'a' ? 'var(--orange)' : 'var(--beige-dark)' }} />
        </div>
        <div className="bar-right-wrap">
          <div className="bar-fill-right" style={{ width: `${valueB}%`, background: winner === 'b' ? 'var(--orange)' : 'var(--beige-dark)' }} />
        </div>
      </div>
    </div>
  );
}

function ProductSelector({ label, selected, onChange, exclude }) {
  return (
    <div className="selector">
      <div className="selector-label">{label}</div>
      <select value={selected ?? ''} onChange={e => onChange(Number(e.target.value))}>
        <option value="" disabled>Kies een supplement...</option>
        {allComparableProducts.filter(p => p.id !== exclude).map(p => (
          <option key={p.id} value={p.id}>{p.emoji} {p.name}</option>
        ))}
      </select>
    </div>
  );
}

export default function ComparisonPage() {
  const [idA, setIdA] = useState(1);
  const [idB, setIdB] = useState(3);

  const A = allComparableProducts.find(p => p.id === idA);
  const B = allComparableProducts.find(p => p.id === idB);

  const pricePerServing = p => (p.price / p.servings).toFixed(2);
  const totalWinner = p => Object.values(p.score).reduce((a, b) => a + b, 0);

  return (
    <div className="comparison-page">
      <div className="comp-header">
        <div className="section-label">Vergelijker</div>
        <h1 className="page-title">Vergelijk supplementen</h1>
        <p className="page-sub">Kies twee producten en zie in één oogopslag welk het beste bij jou past.</p>
      </div>

      <div className="selectors">
        <ProductSelector label="Product A" selected={idA} onChange={setIdA} exclude={idB} />
        <div className="vs-badge">VS</div>
        <ProductSelector label="Product B" selected={idB} onChange={setIdB} exclude={idA} />
      </div>

      {A && B && (
        <>
          <div className="comp-grid">
            <div className="comp-card" style={{ background: A.accentColor }}>
              <div className="comp-emoji">{A.emoji}</div>
              <div className="comp-category">{A.category}</div>
              <div className="comp-name">{A.name}</div>
              <div className="comp-brand">{A.brand}</div>
              {totalWinner(A) > totalWinner(B) && <div className="winner-tag">Winnaar</div>}
            </div>
            <div className="comp-divider-col" />
            <div className="comp-card" style={{ background: B.accentColor }}>
              <div className="comp-emoji">{B.emoji}</div>
              <div className="comp-category">{B.category}</div>
              <div className="comp-name">{B.name}</div>
              <div className="comp-brand">{B.brand}</div>
              {totalWinner(B) > totalWinner(A) && <div className="winner-tag">Winnaar</div>}
            </div>
          </div>

          <div className="quick-stats">
            {[
              { label: 'Prijs', a: `€${A.price.toFixed(2).replace('.', ',')}`, b: `€${B.price.toFixed(2).replace('.', ',')}`, winnerFn: () => A.price < B.price ? 'a' : B.price < A.price ? 'b' : 'tie' },
              { label: 'Prijs per portie', a: `€${pricePerServing(A).replace('.', ',')}`, b: `€${pricePerServing(B).replace('.', ',')}`, winnerFn: () => pricePerServing(A) < pricePerServing(B) ? 'a' : 'b' },
              { label: 'Porties per verpakking', a: A.servings, b: B.servings, winnerFn: () => A.servings > B.servings ? 'a' : 'b' },
              { label: 'Dosering', a: A.dosage, b: B.dosage, winnerFn: () => 'tie' },
              { label: 'Beoordeling', a: `${A.rating} ★`, b: `${B.rating} ★`, winnerFn: () => A.rating > B.rating ? 'a' : B.rating > A.rating ? 'b' : 'tie' },
              { label: 'Aantal reviews', a: A.reviews, b: B.reviews, winnerFn: () => A.reviews > B.reviews ? 'a' : 'b' },
            ].map(({ label, a, b, winnerFn }) => {
              const w = winnerFn();
              return (
                <div className="stat-row" key={label}>
                  <div className={`stat-cell ${w === 'a' ? 'cell-winner' : ''}`}>{a}</div>
                  <div className="stat-row-label">{label}</div>
                  <div className={`stat-cell right ${w === 'b' ? 'cell-winner' : ''}`}>{b}</div>
                </div>
              );
            })}
          </div>

          <div className="score-section">
            <div className="score-section-title">Scores vergelijking</div>
            {Object.entries(scoreLabels).map(([key, label]) => (
              <ScoreBar key={key} label={label} valueA={A.score[key]} valueB={B.score[key]} />
            ))}
          </div>

          <div className="comp-grid ingredients-grid">
            <div className="ing-block">
              <div className="ing-title">Ingrediënten</div>
              <ul>{A.ingredients.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="comp-divider-col" />
            <div className="ing-block">
              <div className="ing-title">Ingrediënten</div>
              <ul>{B.ingredients.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>

          <div className="comp-grid">
            <div className="pros-cons">
              <div className="pros">
                <div className="pc-title green">Voordelen</div>
                {A.pros.map(p => <div className="pc-item" key={p}><span className="pc-icon green">✓</span>{p}</div>)}
              </div>
              <div className="cons">
                <div className="pc-title red">Nadelen</div>
                {A.cons.map(c => <div className="pc-item" key={c}><span className="pc-icon red">✗</span>{c}</div>)}
              </div>
            </div>
            <div className="comp-divider-col" />
            <div className="pros-cons">
              <div className="pros">
                <div className="pc-title green">Voordelen</div>
                {B.pros.map(p => <div className="pc-item" key={p}><span className="pc-icon green">✓</span>{p}</div>)}
              </div>
              <div className="cons">
                <div className="pc-title red">Nadelen</div>
                {B.cons.map(c => <div className="pc-item" key={c}><span className="pc-icon red">✗</span>{c}</div>)}
              </div>
            </div>
          </div>

          <div className="comp-grid cta-grid">
            <div className="cta-block">
              <button className="prod-btn cta-btn">Bekijk deal {A.emoji} →</button>
            </div>
            <div className="comp-divider-col" />
            <div className="cta-block">
              <button className="prod-btn cta-btn">Bekijk deal {B.emoji} →</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
