const STEPS = [
  {
    n: "01",
    title: "Anfrage",
    text: "Schick uns deine Idee, Referenzbilder & Wunsch-Körperstelle — ganz unverbindlich über das Formular. Je mehr wir wissen, desto besser können wir dich beraten.",
  },
  {
    n: "02",
    title: "Beratung",
    text: "Persönliches Gespräch im Atelier oder per Nachricht. Wir klären Motiv, Größe, Platzierung und Preis — ehrlich und ohne Druck.",
  },
  {
    n: "03",
    title: "Design",
    text: "Dein individueller Entwurf entsteht. Anpassungen sind inklusive, bis sich dein Motiv zu 100 % richtig anfühlt.",
  },
  {
    n: "04",
    title: "Dein Termin",
    text: "Wir buchen deinen Slot — privat, ungestört und ohne Zeitdruck. Eine kleine Anzahlung sichert den Termin und wird mit dem Endpreis verrechnet.",
  },
  {
    n: "05",
    title: "Aftercare",
    text: "Du bekommst eine ausführliche Pflege-Anleitung für eine schöne Heilung — und wir bleiben für Fragen erreichbar.",
  },
];

export function Ablauf() {
  return (
    <section id="ablauf" className="bg-[#0d0d0b] py-[clamp(3rem,8vw,6rem)]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">So funktioniert&apos;s</p>
          <h2 className="mt-2 font-display text-[clamp(1.6rem,1rem+2.6vw,2.6rem)] text-cream">Von der Idee zum Tattoo</h2>
          <p className="mx-auto mt-3 max-w-[50ch] font-light text-cream-dim">
            Kein Druck, kein Stress — nur deine Idee und unsere Zeit. Tipp auf einen Schritt für die Details.
          </p>
        </div>

        <div className="mt-[clamp(1.5rem,4vw,2.5rem)]">
          {STEPS.map((s, i) => (
            <details
              key={s.n}
              name="ablauf"
              open={i === 0}
              className="group mb-3 overflow-hidden rounded-xl border border-cream/15 bg-[#121210] transition-colors duration-300 open:border-gold/50"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-[clamp(1rem,3vw,1.2rem)] font-display text-[clamp(1.05rem,1rem+.5vw,1.2rem)] text-cream [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-sm text-gold">{s.n}</span>
                <span>{s.title}</span>
                <span className="ml-auto text-xl text-gold transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <div className="px-[clamp(1rem,3vw,1.2rem)] pb-[clamp(1rem,3vw,1.2rem)] pl-[clamp(2.8rem,6vw,3.4rem)] font-light leading-relaxed text-cream-dim">
                {s.text}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#kontakt"
            className="inline-block rounded-sm border border-gold bg-gold px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[.14em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            Jetzt Anfrage starten
          </a>
        </div>
      </div>
    </section>
  );
}
