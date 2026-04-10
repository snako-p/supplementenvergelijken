import React from 'react';
import '../styles/Legal.css';

export default function AffiliateDisclosure() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <h1>Affiliate disclosure</h1>
        <p className="legal-date">Laatst bijgewerkt: april 2025</p>

        <div className="disclosure-highlight">
          <span>💡</span>
          <p>
            SupplementenVergelijken.be maakt gebruik van affiliate links.
            Dit betekent dat wij een kleine commissie ontvangen als je via
            onze links een product koopt — zonder extra kosten voor jou.
          </p>
        </div>

        <section>
          <h2>Hoe werkt het?</h2>
          <p>
            Wanneer je op een "Bekijk deal" knop klikt, word je doorgestuurd
            naar een externe webshop via een affiliate link. Als je daar iets
            koopt, ontvangen wij een commissie van gemiddeld 5 tot 15%.
          </p>
        </section>

        <section>
          <h2>Beïnvloedt dit onze reviews?</h2>
          <p>
            Absoluut niet. Onze vergelijkingen en beoordelingen zijn volledig
            onafhankelijk. Een product dat slecht scoort zetten wij niet bovenaan,
            ook al betaalt dat merk een hogere commissie.
          </p>
        </section>

        <section>
          <h2>Welke netwerken gebruiken we?</h2>
          <ul>
            <li><strong>Awin</strong></li>
            <li><strong>Daisycon</strong></li>
          </ul>
        </section>

        <section>
          <h2>Vragen?</h2>
          <p>
            Heb je vragen over onze affiliate samenwerking?
            Neem gerust contact op via ons contactformulier.
          </p>
        </section>
      </div>
    </div>
  );
}
