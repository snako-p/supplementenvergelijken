import React from 'react';
import '../styles/Legal.css';

export default function TermsAndConditions() {
  return (
    <div className="legal-page">
      <div className="legal-inner">
        <h1>Algemene voorwaarden</h1>
        <p className="legal-date">Laatst bijgewerkt: april 2025</p>

        <section>
          <h2>1. Over deze website</h2>
          <p>
            SupplementenVergelijken.be is een onafhankelijke informatieve website.
            Wij verkopen zelf geen producten maar verwijzen door naar externe webshops
            via affiliate links.
          </p>
        </section>

        <section>
          <h2>2. Gebruik van de website</h2>
          <p>Door gebruik te maken van deze website ga je akkoord met:</p>
          <ul>
            <li>Het feit dat informatie uitsluitend informatief is en geen medisch advies vormt</li>
            <li>Het respecteren van intellectuele eigendomsrechten</li>
            <li>Geen misbruik maken van de website of haar diensten</li>
          </ul>
        </section>

        <section>
          <h2>3. Geen medisch advies</h2>
          <p>
            De informatie op SupplementenVergelijken.be is uitsluitend bedoeld voor
            informatieve doeleinden. Het vormt geen medisch advies. Raadpleeg altijd
            een arts of apotheker voor persoonlijk gezondheidsadvies.
          </p>
        </section>

        <section>
          <h2>4. Affiliate links & commissies</h2>
          <p>
            Onze website bevat affiliate links. Wij ontvangen een commissie wanneer
            je via onze links een aankoop doet. Dit heeft geen invloed op de prijs
            die jij betaalt, noch op onze onafhankelijke beoordelingen.
          </p>
        </section>

        <section>
          <h2>5. Nauwkeurigheid van informatie</h2>
          <p>
            Wij streven ernaar alle informatie correct en up-to-date te houden.
            Prijzen en beschikbaarheid van producten kunnen echter wijzigen.
            Controleer altijd de actuele prijs op de website van de verkoper.
          </p>
        </section>

        <section>
          <h2>6. Aansprakelijkheid</h2>
          <p>
            SupplementenVergelijken.be is niet aansprakelijk voor schade die
            voortvloeit uit het gebruik van informatie op deze website of
            aankopen gedaan via affiliate links.
          </p>
        </section>

        <section>
          <h2>7. Intellectuele eigendom</h2>
          <p>
            Alle content op deze website (teksten, afbeeldingen, vergelijkingen)
            is eigendom van SupplementenVergelijken.be en mag niet worden
            gekopieerd zonder schriftelijke toestemming.
          </p>
        </section>

        <section>
          <h2>8. Toepasselijk recht</h2>
          <p>
            Op deze voorwaarden is het Belgisch recht van toepassing.
            Bij geschillen zijn de rechtbanken van België bevoegd.
          </p>
        </section>
      </div>
    </div>
  );
}
