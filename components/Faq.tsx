// Server Component — rendert FAQ + FAQPage-JSON-LD direkt ins initiale HTML
// (wichtig für Google Rich Results & KI-Zitate / GEO). Natives <details>:
// barrierearm, funktioniert ohne JS.

const FAQ = [
  {
    q: "Tut Tätowieren weh?",
    a: "Ehrlich: Es ist unangenehm, aber gut auszuhalten. Wie stark, hängt von der Körperstelle und dir ab. In unserem ruhigen Atelier nehmen wir uns Zeit und machen Pausen, wann immer du sie brauchst.",
  },
  {
    q: "Was kostet ein Tattoo bei Dog Days?",
    a: "Der Preis hängt von Größe, Motiv und Aufwand ab. Kleine Arbeiten starten im unteren zweistelligen Bereich, größere berechnen wir fair pro Sitzung. Den genauen Preis nennen wir transparent nach der Beratung — ohne Überraschungen.",
  },
  {
    q: "Muss ich volljährig sein?",
    a: "Ja. Wir tätowieren ausschließlich Personen ab 18 Jahren — mit gültigem Ausweis. Keine Ausnahmen.",
  },
  {
    q: "Wie bekomme ich einen Termin?",
    a: "Dog Days ist ein privates Atelier — wir arbeiten ausschließlich nach Vereinbarung. Stell einfach eine Anfrage über das Formular, dann melden wir uns persönlich und finden gemeinsam einen Termin.",
  },
  {
    q: "Kann ich mein eigenes Design mitbringen?",
    a: "Unbedingt. Bring deine Ideen und Referenzen mit — wir verfeinern sie gemeinsam zu einem individuellen Design, das wirklich zu dir gehört.",
  },
  {
    q: "Wie hygienisch wird gearbeitet?",
    a: "Sehr sorgfältig: sterile Einweg-Materialien, EU-konforme Farben und Hygiene nach den gesetzlichen Vorgaben. Deine Gesundheit ist die Grundlage unserer Arbeit.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="bg-[#0d0d0b] py-[clamp(3rem,8vw,6rem)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto grid max-w-6xl gap-[clamp(1.5rem,4vw,3rem)] px-6 lg:grid-cols-[.8fr_1.2fr]">
        {/* Sticky Lead */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Gut zu wissen</p>
          <h2 className="mt-2 font-display text-[clamp(1.6rem,1rem+2.6vw,2.6rem)] leading-[1.05] text-cream">
            Häufige
            <br />
            Fragen
          </h2>
          <p className="mt-4 max-w-[34ch] font-light leading-relaxed text-cream-dim">
            Noch eine Frage offen? Schreib uns einfach — wir antworten persönlich.
          </p>
          <a
            href="#kontakt"
            className="mt-5 inline-block rounded-sm border border-gold px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[.14em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
          >
            Frage stellen
          </a>
        </div>

        {/* Fragen */}
        <div>
          {FAQ.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0} className="group border-b border-cream/14">
              <summary className="flex cursor-pointer list-none items-center gap-3 py-[clamp(.9rem,2.5vw,1.1rem)] text-[clamp(1rem,1rem+.3vw,1.1rem)] font-semibold text-cream [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="ml-auto text-xl text-gold transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="pb-[clamp(1rem,3vw,1.2rem)] pr-4 font-light leading-relaxed text-cream-dim">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
