import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        {/* Hero-Platzhalter, damit die Navbar im Kontext sichtbar ist.
            Die echte Hero-Section folgt als nächste freigegebene Sektion. */}
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
          <picture>
            <img
              src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1920&q=70"
              alt="Tattoo-Atelier Atmosphäre"
              className="absolute inset-0 h-full w-full animate-kenburns object-cover"
              style={{ filter: "sepia(.22) contrast(1.02) brightness(.78)" }}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0b]/40 via-[#0d0d0b]/60 to-[#0d0d0b]" />
          <div className="relative z-10 px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[.3em] text-gold animate-fade-up">
              Privates Atelier · Münster · Termine nach Vereinbarung
            </p>
            <h1
              className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2.2rem,1rem+7vw,5rem)] leading-[1.02] text-cream animate-fade-up"
              style={{ animationDelay: ".1s" }}
            >
              Deine Haut. Unsere Kunst.
            </h1>
            <p
              className="mx-auto mt-5 max-w-xl text-[clamp(1rem,.95rem+.4vw,1.2rem)] font-light text-cream-dim animate-fade-up"
              style={{ animationDelay: ".2s" }}
            >
              Individuelle Custom-Tattoos in ruhiger, stilvoller Atmosphäre.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: ".3s" }}>
              <a
                href="#kontakt"
                className="rounded-sm border border-gold bg-gold px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[.14em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold"
              >
                Termin anfragen
              </a>
              <a
                href="#werke"
                className="font-sans text-sm font-semibold uppercase tracking-[.14em] text-cream-dim transition-colors hover:text-gold"
              >
                Werke ansehen ↓
              </a>
            </div>
          </div>
        </section>

        {/* Platzhalter-Blöcke für Scroll-Test der Navbar */}
        <section id="atelier" className="mx-auto max-w-3xl px-6 py-32 text-center text-cream-dim">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Nächste Sektion</p>
          <h2 className="mt-3 font-display text-3xl text-cream">Atelier-Section folgt nach Freigabe</h2>
          <p className="mt-4">Sag „Weiter" und ich baue die nächste Sektion mit 5 Design-Optionen.</p>
        </section>
      </main>
    </>
  );
}
