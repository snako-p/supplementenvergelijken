import React from 'react';
import '../styles/HowItWorks.css';

const steps = [
  { num: '1', title: 'Wij testen & onderzoeken', text: 'Ons team analyseert ingrediënten, doseringen en certificeringen van elk product.' },
  { num: '2', title: 'Jij vergelijkt', text: 'Filter op jouw doel, budget en dieetwensen. Zie in één oogopslag welk product het beste scoort.' },
  { num: '3', title: 'Klik naar de beste deal', text: 'Via onze affiliate links kom je direct bij de goedkoopste aanbieder terecht. Jij betaalt niets extra.' },
];

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="section-label">Werkwijze</div>
      <div className="section-title">Hoe vergelijken we?</div>
      <p className="section-sub">Onafhankelijk, eerlijk en wetenschappelijk onderbouwd.</p>
      <div className="steps">
        {steps.map(s => (
          <div className="step" key={s.num}>
            <div className="step-num">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-text">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
