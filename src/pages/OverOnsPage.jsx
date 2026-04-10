import React from 'react';
import '../styles/Legal.css';

export default function OverOnsPage() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <h1>Over ons</h1>
        <p className="legal-date">SupplementenVergelijken.be — opgericht in 2024</p>

        <section>
          <h2>Wie zijn wij?</h2>
          <p>
            SupplementenVergelijken.be is een onafhankelijke vergelijkingssite voor supplementen,
            opgericht door een team van gezondheidsenthousiastelingen in België. Ons doel is simpel:
            jou helpen de beste supplementkeuze te maken zonder verborgen agenda.
          </p>
        </section>

        <section>
          <h2>Onze missie</h2>
          <p>
            De supplementenmarkt is onoverzichtelijk. Merken beloven van alles, maar onafhankelijke
            informatie is schaars. Wij testen, vergelijken en analyseren producten op basis van
            wetenschappelijke criteria — en publiceren alleen eerlijke conclusies.
          </p>
        </section>

        <section>
          <h2>Hoe we testen</h2>
          <p>Elk product wordt beoordeeld op:</p>
          <ul>
            <li>Kwaliteit en zuiverheid van ingrediënten</li>
            <li>Dosering (clinisch relevant of niet?)</li>
            <li>Prijs per portie vergeleken met alternatieven</li>
            <li>Certificeringen (GMP, ISO, NSF, etc.)</li>
            <li>Gebruikerservaringen van echte kopers</li>
          </ul>
        </section>

        <section>
          <h2>Transparantie</h2>
          <p>
            Sommige links op onze site zijn affiliate links. Wij ontvangen een kleine commissie
            als je via onze link koopt — zonder extra kosten voor jou. Dit beïnvloedt onze
            scores of aanbevelingen nooit. Lees meer in onze{' '}
            <a href="/affiliate-disclosure">affiliate disclosure</a>.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Vragen, opmerkingen of wil je een product laten testen? Ga naar onze{' '}
            <a href="/contact">contactpagina</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
