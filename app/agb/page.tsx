import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von Dog Days Tattoo, Münster.",
};

export default function AGB() {
  return (
    <LegalShell title="Allgemeine Geschäftsbedingungen" updated="Juni 2026">
      <section>
        <h2 className="font-display text-xl text-cream">1. Geltungsbereich</h2>
        <p>Diese AGB gelten für alle Tätowier-Leistungen von Dog Days Tattoo, Weseler Str. 47, 48151 Münster.</p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">2. Termine &amp; Anzahlung</h2>
        <p>
          Termine erfolgen nach Vereinbarung. Zur verbindlichen Reservierung kann eine Anzahlung vereinbart werden, die
          mit dem Endpreis verrechnet wird. Bei kurzfristiger Absage / Nichterscheinen kann die Anzahlung als
          Aufwandsentschädigung einbehalten werden. [Konkrete Fristen ergänzen.]
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">3. Mindestalter</h2>
        <p>Wir tätowieren ausschließlich Personen ab 18 Jahren gegen Vorlage eines gültigen Ausweises. Keine Ausnahmen.</p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">4. Mitwirkung &amp; Gesundheit</h2>
        <p>
          Vor dem Termin ist ein Aufklärungs- und Einwilligungsbogen auszufüllen. Tätowierungen erfolgen nicht bei
          Schwangerschaft, bestimmten Erkrankungen oder unter Einfluss von Alkohol/Drogen.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">5. Widerrufsrecht</h2>
        <p>
          Da es sich um eine individuell auf dich abgestimmte, personalisierte Leistung handelt, ist ein Widerruf gemäß
          § 312g Abs. 2 BGB ausgeschlossen, sobald mit der Leistung begonnen wurde.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">6. Haftung &amp; Aftercare</h2>
        <p>
          Für eine einwandfreie Heilung ist die Einhaltung der ausgehändigten Pflegehinweise erforderlich. Für Schäden
          durch unsachgemäße Pflege übernehmen wir keine Haftung.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">7. Schlussbestimmungen</h2>
        <p>Es gilt deutsches Recht. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen Bestimmungen gültig.</p>
      </section>
    </LegalShell>
  );
}
