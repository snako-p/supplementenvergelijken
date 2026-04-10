import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/Quiz.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Supplement Quiz — Welk Supplement Past Bij Jou?',
  description: 'Beantwoord 5 vragen en ontdek welke supplementen het beste bij jouw doel, dieet en budget passen.',
  applicationCategory: 'HealthApplication',
  author: { '@type': 'Organization', name: 'SupplementenVergelijken.be' },
};

const questions = [
  {
    id: 'goal',
    question: 'Wat is je voornaamste doel?',
    emoji: '🎯',
    options: [
      { value: 'spieropbouw', label: 'Spieropbouw & kracht', emoji: '💪' },
      { value: 'energie', label: 'Meer energie & focus', emoji: '⚡' },
      { value: 'slaap', label: 'Betere slaap & ontspanning', emoji: '😴' },
      { value: 'immuun', label: 'Sterker immuunsysteem', emoji: '🛡️' },
      { value: 'gezondheid', label: 'Algemene gezondheid', emoji: '🌿' },
      { value: 'gewicht', label: 'Gewichtscontrole', emoji: '⚖️' },
    ],
  },
  {
    id: 'diet',
    question: 'Wat is je dieet?',
    emoji: '🥗',
    options: [
      { value: 'omnivoor', label: 'Ik eet alles', emoji: '🍖' },
      { value: 'pescetarier', label: 'Geen vlees, wel vis', emoji: '🐟' },
      { value: 'vegetarisch', label: 'Vegetarisch', emoji: '🥦' },
      { value: 'vegan', label: 'Vegan', emoji: '🌱' },
    ],
  },
  {
    id: 'activity',
    question: 'Hoe actief ben je?',
    emoji: '🏃',
    options: [
      { value: 'sedentair', label: 'Weinig beweging', emoji: '🛋️' },
      { value: 'licht', label: 'Licht actief (wandelen)', emoji: '🚶' },
      { value: 'matig', label: 'Matig actief (2–3x/week)', emoji: '🚴' },
      { value: 'intensief', label: 'Intensief sportend (4+x/week)', emoji: '🏋️' },
    ],
  },
  {
    id: 'complaint',
    question: 'Heb je specifieke klachten?',
    emoji: '🩺',
    options: [
      { value: 'vermoeidheid', label: 'Vermoeidheid & futloosheid', emoji: '😴' },
      { value: 'spieren', label: 'Spierpijn of krampen', emoji: '🦵' },
      { value: 'concentratie', label: 'Concentratieproblemen', emoji: '🧠' },
      { value: 'geen', label: 'Geen specifieke klachten', emoji: '✓' },
    ],
  },
  {
    id: 'budget',
    question: 'Wat is je maandbudget voor supplementen?',
    emoji: '💶',
    options: [
      { value: 'laag', label: 'Tot €15/maand', emoji: '💰' },
      { value: 'gemiddeld', label: '€15–€30/maand', emoji: '💰💰' },
      { value: 'hoog', label: '€30–€60/maand', emoji: '💰💰💰' },
      { value: 'geen', label: 'Geen limiet', emoji: '💳' },
    ],
  },
];

function getRecommendations(answers) {
  const recs = [];
  const { goal, diet, activity, complaint, budget } = answers;
  const isVegan = diet === 'vegan' || diet === 'vegetarisch';
  const isSporter = activity === 'matig' || activity === 'intensief';

  // Always recommend vitamin D for Belgium
  recs.push({
    priority: 1,
    emoji: '☀️',
    name: 'Vitamine D3',
    reason: 'Meer dan 50% van de Belgen heeft een vitamine D-tekort. Essentieel voor immuniteit, energie en botgezondheid.',
    product: isVegan ? 'Garden of Life D3 Vegan (korstmos)' : "Nature's Best D3 5000IU",
    price: '€0,13–0,28/dag',
    link: '/artikelen/beste-vitamine-d-supplement-vergeleken',
  });

  // Magnesium recommendations
  if (goal === 'slaap' || complaint === 'spieren' || goal === 'spieropbouw') {
    recs.push({
      priority: 2,
      emoji: '🪨',
      name: 'Magnesium Bisglycinaat',
      reason: goal === 'slaap' ? 'Magnesium bisglycinaat ondersteunt ontspanning en diepe slaap.' : 'Magnesium is essentieel voor spierherstel en het voorkomen van krampen.',
      product: 'Pure Encapsulations Mg Bisglycinaat',
      price: '€0,22–0,35/dag',
      link: '/artikelen/top-5-magnesium-supplementen-belgie',
    });
  } else if (goal === 'energie' || complaint === 'vermoeidheid') {
    recs.push({
      priority: 2,
      emoji: '🪨',
      name: 'Magnesium Malaat',
      reason: 'Magnesiummalaat ondersteunt energieproductie en helpt bij chronische vermoeidheid.',
      product: 'Vitakruid Magnesium Malaat',
      price: '€0,18/dag',
      link: '/artikelen/top-5-magnesium-supplementen-belgie',
    });
  }

  // Omega-3
  if (goal === 'gezondheid' || goal === 'immuun' || activity !== 'sedentair') {
    recs.push({
      priority: 3,
      emoji: '🐟',
      name: isVegan ? 'Omega-3 Algenolie' : 'Omega-3 Visolie',
      reason: 'Omega-3 vetzuren (EPA + DHA) ondersteunen hart, hersenen en ontstekingsregulatie. Vrijwel iedereen krijgt te weinig binnen.',
      product: isVegan ? 'Vegetology Opti3 Algenolie' : 'Nordic Naturals Ultimate Omega',
      price: '€0,50–0,60/dag',
      link: '/omega-3',
    });
  }

  // Creatine for sporters
  if (isSporter && (goal === 'spieropbouw' || goal === 'energie')) {
    recs.push({
      priority: 4,
      emoji: '💪',
      name: 'Creatine Monohydraat',
      reason: 'Het meest bewezen sportsupplement. Verhoogt kracht, spiermassa en herstel significant bij vrijwel alle sporters.',
      product: 'Bulk Creapure® Creatine Monohydraat',
      price: '€0,03–0,05/dag',
      link: '/koopgidsen/creatine-koopgids',
    });
  }

  // Protein for sporters
  if (activity === 'intensief' && goal === 'spieropbouw') {
    recs.push({
      priority: 5,
      emoji: isVegan ? '🌱' : '🥛',
      name: isVegan ? 'Plantaardig Proteïne' : 'Whey Proteïne',
      reason: 'Bij intensief sporten is extra eiwit zinvol als je de 1,6–2g/kg via voeding niet haalt.',
      product: isVegan ? 'Vivo Life Perform Vegan Proteïne' : 'Optimum Nutrition Gold Standard Whey',
      price: '€0,70–1,20/portie',
      link: '/artikelen/whey-vs-plantaardig-eiwit',
    });
  }

  // B12 for vegans
  if (isVegan) {
    recs.push({
      priority: isVegan ? 2 : 6,
      emoji: '🅱️',
      name: 'Vitamine B12 Methylcobalamine',
      reason: 'B12 zit uitsluitend in dierlijke producten. Als vegan/vegetariër is suppletie absoluut noodzakelijk.',
      product: 'Solgar Methylcobalamine B12',
      price: '€0,25/dag',
      link: '/ingredienten/vitamine-b12-vormen',
    });
  }

  // Focus/concentration
  if (complaint === 'concentratie' || goal === 'energie') {
    recs.push({
      priority: 5,
      emoji: '🧠',
      name: 'Magnesium L-Threönaat',
      reason: 'De enige magnesiumvorm die de bloed-hersenbarrière passeert. Wetenschappelijk onderbouwd voor geheugen en cognitie.',
      product: 'Magtein Magnesium L-Threönaat',
      price: '€0,44/dag',
      link: '/artikelen/top-5-magnesium-supplementen-belgie',
    });
  }

  // Filter by budget
  const filtered = recs.sort((a, b) => a.priority - b.priority);
  if (budget === 'laag') return filtered.slice(0, 2);
  if (budget === 'gemiddeld') return filtered.slice(0, 3);
  return filtered.slice(0, 5);
}

export default function SupplementQuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const handleAnswer = (qId, value) => {
    const newAnswers = { ...answers, [qId]: value };
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers({});
    setDone(false);
  };

  const recommendations = done ? getRecommendations(answers) : [];
  const progress = done ? 100 : Math.round((currentQ / questions.length) * 100);

  return (
    <div className="quiz-page">
      <SEO
        title="Supplement Quiz — Welk Supplement Past Bij Jou? (2026)"
        description="Beantwoord 5 vragen en ontdek welke supplementen het beste bij jouw doel, dieet en budget passen. Gratis supplement advies op maat."
        canonical="/supplement-quiz"
        schema={schema}
      />

      <div className="quiz-hero">
        <div className="quiz-hero-inner">
          <div className="section-label">Interactieve tool · 2026</div>
          <h1>Supplement Quiz</h1>
          <p>5 vragen. Persoonlijk advies op maat.</p>
        </div>
      </div>

      <div className="quiz-container">
        {!done ? (
          <>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="quiz-step-label">Vraag {currentQ + 1} van {questions.length}</div>

            <div className="quiz-card">
              <div className="quiz-q-emoji">{questions[currentQ].emoji}</div>
              <h2 className="quiz-q-text">{questions[currentQ].question}</h2>
              <div className="quiz-options">
                {questions[currentQ].options.map(opt => (
                  <button
                    key={opt.value}
                    className="quiz-option"
                    onClick={() => handleAnswer(questions[currentQ].id, opt.value)}
                  >
                    <span className="quiz-option-emoji">{opt.emoji}</span>
                    <span className="quiz-option-label">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {currentQ > 0 && (
              <button className="quiz-back-btn" onClick={() => setCurrentQ(currentQ - 1)}>
                ← Vorige vraag
              </button>
            )}
          </>
        ) : (
          <div className="quiz-results">
            <div className="quiz-results-header">
              <div className="quiz-results-icon">🎉</div>
              <h2>Jouw persoonlijk advies</h2>
              <p>Op basis van jouw antwoorden raden wij de volgende supplementen aan:</p>
            </div>

            <div className="quiz-recs">
              {recommendations.map((rec, i) => (
                <div className="quiz-rec-card" key={i}>
                  <div className="quiz-rec-left">
                    <span className="quiz-rec-emoji">{rec.emoji}</span>
                    <span className="quiz-rec-badge">#{i + 1}</span>
                  </div>
                  <div className="quiz-rec-body">
                    <div className="quiz-rec-name">{rec.name}</div>
                    <div className="quiz-rec-reason">{rec.reason}</div>
                    <div className="quiz-rec-footer">
                      <span className="quiz-rec-product">→ {rec.product}</span>
                      <span className="quiz-rec-price">{rec.price}</span>
                    </div>
                    <Link to={rec.link} className="quiz-rec-link">Meer info & vergelijking →</Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="quiz-disclaimer">
              <p>⚠️ Dit advies is informatief en vervangt geen medisch consult. Laat bij twijfel je bloedwaarden testen door een arts.</p>
            </div>

            <div className="quiz-actions">
              <button className="quiz-restart-btn" onClick={restart}>Quiz opnieuw doen</button>
              <Link to="/vergelijken" className="quiz-compare-btn">Supplementen vergelijken →</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
