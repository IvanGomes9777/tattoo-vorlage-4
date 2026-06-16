import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Dog Days Tattoo, privates Tattoo-Atelier in Münster.",
};

export default function Impressum() {
  return (
    <LegalShell title="Impressum" updated="Juni 2026">
      <section>
        <h2 className="font-display text-xl text-cream">Angaben gemäß § 5 TMG</h2>
        <p>
          [Inhaber:in / Name]
          <br />
          Dog Days Tattoo
          <br />
          Weseler Str. 47
          <br />
          48151 Münster
          <br />
          Deutschland
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">Kontakt</h2>
        <p>
          Telefon: [Telefonnummer]
          <br />
          E-Mail: [E-Mail-Adresse]
          <br />
          Instagram: @dogdays_tattoo
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">Umsatzsteuer-ID</h2>
        <p>[USt-IdNr., falls vorhanden]</p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">Gewerbeanzeige / Aufsicht</h2>
        <p>
          Das Tätowieren wird gemäß § 36 Infektionsschutzgesetz (IfSG) beim zuständigen Gesundheitsamt der Stadt Münster
          angezeigt. Es werden ausschließlich EU-konforme, zugelassene Farben (REACH) verwendet.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">Haftung für Inhalte &amp; Links</h2>
        <p>
          Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt
          verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">Urheberrecht</h2>
        <p>
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede
          Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.
        </p>
      </section>
    </LegalShell>
  );
}
