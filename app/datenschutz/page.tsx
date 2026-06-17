import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Dog Days Tattoo, Münster — DSGVO-konform.",
};

export default function Datenschutz() {
  return (
    <LegalShell title="Datenschutzerklärung" updated="Juni 2026">
      <section>
        <h2 className="font-display text-xl text-cream">1. Verantwortlicher</h2>
        <p>
          Dog Days Tattoo, [Inhaber:in], Weseler Str. 47, 48151 Münster · E-Mail: [E-Mail-Adresse]
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">2. Kontakt- &amp; Anfrageformular</h2>
        <p>
          Bei einer Anfrage verarbeiten wir Name, E-Mail, ggf. Telefon sowie deine Angaben zum Wunsch-Tattoo, um deine
          Anfrage zu bearbeiten. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Speicherdauer:
          bis zur Erledigung, danach Löschung gemäß gesetzlicher Fristen.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">3. Gesundheitsdaten</h2>
        <p>
          Vor einem Tattoo erheben wir im persönlichen Aufklärungsgespräch ggf. besondere Kategorien personenbezogener
          Daten (Art. 9 DSGVO, z. B. Allergien, Vorerkrankungen). Diese werden vertraulich behandelt, sicher aufbewahrt
          und nur auf Grundlage deiner ausdrücklichen Einwilligung verarbeitet.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">4. Kundenfotos</h2>
        <p>
          Fotos deines Tattoos veröffentlichen wir (z. B. auf Instagram) ausschließlich mit deiner vorherigen
          schriftlichen Einwilligung. Diese kannst du jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
      </section>
      <section id="cookies">
        <h2 className="font-display text-xl text-cream">5. Cookies</h2>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb erforderlich sind
          (z. B. Sicherheit). Es werden <strong>keine Analyse-, Tracking- oder Marketing-Cookies</strong> gesetzt und
          keine Daten zu Werbezwecken an Dritte weitergegeben. Daher ist keine Cookie-Einwilligung erforderlich.
          Externe Inhalte wie Google Maps werden erst nach deinem aktiven Klick geladen (siehe Punkt 6).
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">6. Google Maps</h2>
        <p>
          Die Karte wird erst nach deinem aktiven Klick geladen. Dabei werden Daten an Google übertragen.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Klick).
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">7. Hosting</h2>
        <p>
          Diese Website wird bei [Hosting-Provider, z. B. Vercel] gehostet. Beim Aufruf werden technisch notwendige
          Server-Logs (z. B. IP-Adresse) verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl text-cream">8. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch
          (Art. 15–21 DSGVO) sowie ein Beschwerderecht bei der Aufsichtsbehörde. Anfragen an: [E-Mail-Adresse].
        </p>
      </section>
    </LegalShell>
  );
}
