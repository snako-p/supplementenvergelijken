import React, { useState } from 'react';
import '../styles/ComparisonPage.css';

const allProducts = [
  {
    id: 1,
    emoji: '🌞',
    name: "Nature's Best D3 5000IU",
    brand: "Nature's Best",
    category: 'Vitamine D3',
    price: 18.95,
    dosage: '5000 IU per capsule',
    servings: 90,
    rating: 4.8,
    reviews: 312,
    ingredients: ['Cholecalciferol (D3)', 'Olijfolie', 'Gelatine capsule'],
    pros: ['Hoge biologische beschikbaarheid', 'Glutenvrij & vegan', 'Gecertificeerde ingrediënten'],
    cons: ['Hoge dosis, niet voor iedereen'],
    score: { kwaliteit: 92, prijskwaliteit: 88, ingredienten: 95, veiligheid: 90 },
    accentColor: 'var(--orange-pale)',
  },
  {
    id: 2,
    emoji: '🪨',
    name: 'Vitakruid Magnesium Malaat',
    brand: 'Vitakruid',
    category: 'Magnesium',
    price: 21.50,
    dosage: '200 mg per tablet',
    servings: 120,
    rating: 4.7,
    reviews: 198,
    ingredients: ['Magnesiummalaat', 'Rijstmeel', 'HPMC capsule'],
    pros: ['Snelle opname', 'Ondersteunt spieren & slaap', 'Made in Belgium'],
    cons: ['Iets duurder per portie'],
    score: { kwaliteit: 89, prijskwaliteit: 84, ingredienten: 91, veiligheid: 93 },
    accentColor: '#E8F5EC',
  },
  {
    id: 3,
    emoji: '🐟',
    name: 'Nordic Naturals Ultimate Omega',
    brand: 'Nordic Naturals',
    category: 'Omega-3',
    price: 29.95,
    dosage: '1280 mg per softgel',
    servings: 60,
    rating: 4.6,
    reviews: 145,
    ingredients: ['Visolie concentrate', 'EPA 650mg', 'DHA 450mg', 'Tocoferol'],
    pros: ['Gecertificeerde visserij', 'Hoge EPA/DHA verhouding', 'Geen visgeur'],
    cons: ['Hogere prijs', 'Niet vegan'],
    score: { kwaliteit: 91, prijskwaliteit: 80, ingredienten: 94, veiligheid: 92 },
    accentColor: '#EDF2FB',
  },
  {
    id: 4,
    emoji: '🅱️',
    name: 'Solgar Methylcobalamine B12',
    brand: 'Solgar',
    category: 'Vitamine B12',
    price: 14.50,
    dosage: '1000 mcg per tablet',
    servings: 60,
    rating: 4.7,
    reviews: 224,
    ingredients: ['Methylcobalamine', 'Mannitol', 'Aardbeiensmaak'],
    pros: ['Actieve vorm methylcobalamine', 'Energie & zenuwstelsel', 'Vegan'],
    cons: ['Smaak niet voor iedereen'],
    score: { kwaliteit: 88, prijskwaliteit: 90, ingredienten: 89, veiligheid: 95 },
    accentColor: '#EDF2FB',
  },
  {
    id: 5,
    emoji: '🍊',
    name: 'NOW Foods Vitamine C-1000',
    brand: 'NOW Foods',
    category: 'Vitamine C',
    price: 12.95,
    dosage: '1000 mg per tablet',
    servings: 100,
    rating: 4.6,
    reviews: 187,
    ingredients: ['Ascorbinezuur', 'Bioflavonoïden 250mg', 'Cellulose'],
    pros: ['Beste prijs/portie', 'Met bioflavonoïden', 'Immuunsysteem'],
    cons: ['Grote tabletten'],
    score: { kwaliteit: 85, prijskwaliteit: 95, ingredienten: 86, veiligheid: 92 },
    accentColor: '#FFF8ED',
  },
  {
    id: 6,
    emoji: '🌿',
    name: 'Vegetology Opti3 Algenolie',
    brand: 'Vegetology',
    category: 'Omega-3 Vegan',
    price: 34.95,
    dosage: '500 mg per softgel',
    servings: 60,
    rating: 4.7,
    reviews: 98,
    ingredients: ['Algenolie', 'EPA 150mg', 'DHA 300mg', 'Zonnebloemolie'],
    pros: ['100% plantaardig', 'Geen visgeur', 'Duurzaam gewonnen'],
    cons: ['Lagere EPA verhouding', 'Hogere prijs'],
    score: { kwaliteit: 90, prijskwaliteit: 78, ingredienten: 96, veiligheid: 94 },
    accentColor: '#E8F5EC',
  },
];

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
        {allProducts.filter(p => p.id !== exclude).map(p => (
          <option key={p.id} value={p.id}>{p.emoji} {p.name}</option>
        ))}
      </select>
    </div>
  );
}

export default function ComparisonPage() {
  const [idA, setIdA] = useState(1);
  const [idB, setIdB] = useState(3);

  const A = allProducts.find(p => p.id === idA);
  const B = allProducts.find(p => p.id === idB);

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
          {/* Product headers */}
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

          {/* Quick stats */}
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

          {/* Score bars */}
          <div className="score-section">
            <div className="score-section-title">Scores vergelijking</div>
            {Object.entries(scoreLabels).map(([key, label]) => (
              <ScoreBar key={key} label={label} valueA={A.score[key]} valueB={B.score[key]} />
            ))}
          </div>

          {/* Ingredients */}
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

          {/* Pros & cons */}
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

          {/* CTA */}
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
