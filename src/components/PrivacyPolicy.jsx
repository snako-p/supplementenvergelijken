import React from 'react';
import '../styles/Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <h1>Privacybeleid</h1>
        <p className="legal-date">Laatst bijgewerkt: april 2025</p>

        <section>
          <h2>1. Wie zijn wij?</h2>
          <p>
            SupplementenVergelijken.be is een onafhankelijke vergelijkingssite voor supplementen,
            gericht op Belgische consumenten. Je kan ons bereiken via het contactformulier op onze site.
          </p>
        </section>

        <section>
          <h2>2. Welke gegevens verzamelen we?</h2>
          <p>Wij verzamelen de volgende gegevens:</p>
          <ul>
            <li>Bezoekersstatistieken via Google Analytics (geanonimiseerd IP-adres, paginabezoeken)</li>
            <li>Cookievoorkeuren</li>
            <li>Gegevens die je zelf invult via het contactformulier (naam, e-mailadres)</li>
          </ul>
        </section>

        <section>
          <h2>3. Waarvoor gebruiken we je gegevens?</h2>
          <ul>
            <li>Om onze website te verbeteren op basis van bezoekersgedrag</li>
            <li>Om je vragen te beantwoorden via het contactformulier</li>
            <li>Om te voldoen aan wettelijke verplichtingen</li>
          </ul>
        </section>

        <section>
          <h2>4. Affiliate links</h2>
          <p>
            Onze website bevat affiliate links. Wanneer je via deze links een aankoop doet,
            ontvangen wij een kleine commissie van de verkoper. Dit kost jou niets extra en
            beïnvloedt onze reviews of aanbevelingen nooit.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>Wij gebruiken de volgende cookies:</p>
          <ul>
            <li><strong>Functionele cookies:</strong> noodzakelijk voor het werken van de site</li>
            <li><strong>Analytische cookies:</strong> Google Analytics om bezoekersgedrag te meten</li>
            <li><strong>Marketing cookies:</strong> alleen met jouw toestemming</li>
          </ul>
          <p>Je kan cookies weigeren of verwijderen via je browserinstellingen.</p>
        </section>

        <section>
          <h2>6. Jouw rechten (GDPR)</h2>
          <p>Op basis van de GDPR heb je het recht om:</p>
          <ul>
            <li>Inzage te vragen in je persoonsgegevens</li>
            <li>Je gegevens te laten corrigeren of verwijderen</li>
            <li>Bezwaar te maken tegen verwerking</li>
            <li>Je toestemming in te trekken</li>
          </ul>
          <p>Neem contact op via ons contactformulier om deze rechten uit te oefenen.</p>
        </section>

        <section>
          <h2>7. Bewaartermijn</h2>
          <p>
            Contactformuliergegevens bewaren we maximaal 1 jaar.
            Analytische gegevens worden geanonimiseerd bewaard.
          </p>
        </section>

        <section>
          <h2>8. Klachten</h2>
          <p>
            Heb je een klacht over hoe wij met je gegevens omgaan? Je kan terecht bij de
            Belgische Gegevensbeschermingsautoriteit via <strong>gegevensbeschermingsautoriteit.be</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
