import Image from "next/image";

/**
 * „Über uns / Atelier" — Option 03 „Layered Overlap" (Vintage)
 * Foto + überlappende Creme-Textkarte auf Oliv-Wand, mit dem Logo als
 * zentralem Medaillon, das Foto und Karte verbindet.
 */
export function About() {
  return (
    <section id="atelier" className="relative overflow-hidden bg-olive-dark px-[clamp(1.25rem,5vw,4rem)] py-[clamp(3rem,8vw,6rem)]">
      {/* dezente vertikale Struktur auf der Oliv-Wand */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[.05]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,#000 0 2px,transparent 2px 26px)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-y-0 lg:grid-cols-2">
        {/* Foto (rechts, im Layout zuerst auf Mobile) */}
        <div data-reveal="right" className="order-1 lg:order-2 lg:pl-16">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-lg shadow-[0_24px_50px_rgba(0,0,0,.45)]">
            <Image
              src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=70"
              alt="Arbeit im Dog Days Tattoo Atelier, Münster"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="animate-clip-up object-cover [filter:sepia(.18)]"
            />
          </div>
        </div>

        {/* Textkarte (links), überlappt zur Mitte */}
        <div className="order-2 -mt-12 lg:order-1 lg:-mr-16 lg:mt-0">
          <div data-reveal="left" className="relative z-[2] max-w-[460px] rounded-xl bg-cream p-[clamp(1.6rem,4vw,2.6rem)] text-ink shadow-[0_18px_40px_rgba(0,0,0,.35)]">
            <p className="font-mono text-xs uppercase tracking-[.28em] text-olive-dark">Kein Studio. Ein Atelier.</p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,1rem+2.6vw,2.4rem)] leading-[1.06] text-gold-deep">
              Persönlich.
              <br />
              Von Anfang an.
            </h2>
            <p className="mt-4 leading-[1.75] text-[#3a3a30]">
              Dog Days Tattoo ist ein privates Tattoo-Atelier in Münster — wir arbeiten ausschließlich nach Vereinbarung.
              Kein Trubel, kein Großraum-Stechen. Nur du, deine Idee und die Ruhe, die gute Arbeit braucht.
            </p>
            <p className="mt-3 leading-[1.75] text-[#3a3a30]">
              Jedes Motiv entsteht individuell — wir nehmen uns die Zeit, die dein Tattoo verdient.
            </p>
            <a
              href="#kontakt"
              className="mt-6 inline-block rounded-sm border border-ink bg-ink px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[.14em] text-gold transition-colors duration-300 hover:bg-transparent hover:text-ink"
            >
              Termin anfragen
            </a>
          </div>
        </div>

        {/* Logo-Medaillon — zentral, verbindet Karte & Foto */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[3] hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <LogoMedallion />
        </div>
      </div>

      {/* Mobile: Logo-Medaillon zentriert über der Naht */}
      <div className="relative z-[3] mx-auto -mt-10 flex w-fit justify-center lg:hidden">
        <LogoMedallion />
      </div>
    </section>
  );
}

function LogoMedallion() {
  return (
    <div className="animate-seal-in rounded-full bg-cream p-2 shadow-[0_12px_30px_rgba(0,0,0,.45)] ring-1 ring-gold">
      <Image
        src="/dogdaytattoo-logo.png"
        alt="Dog Days Tattoo — Logo"
        width={104}
        height={104}
        className="h-[clamp(80px,9vw,104px)] w-[clamp(80px,9vw,104px)] rounded-full object-cover"
      />
    </div>
  );
}
