// Google-Bewertungen — "Wall of Love" (Option 10): zwei vertikal gegenläufig
// scrollende Spalten, Pause bei Hover. Server Component (CSS-Animationen, SSG).

// TODO: echten Google-Eintrag/Place-Link eintragen
const WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=PLACEHOLDER";

type Review = { name: string; meta: string; time: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Ju Lia",
    meta: "Local Guide · 29 Rezensionen",
    time: "vor einem Monat",
    text: "Joey hat mich tätowiert und ich bin rundum glücklich! Ein sehr sympathischer Mensch, der sehr gute Arbeit macht. Danke dafür! :)",
  },
  {
    name: "Janik D.",
    meta: "Google-Rezension",
    time: "vor 2 Jahren",
    text: "Rad tattoos from even more rad guys… I'm in love with my new piece! And with Among Traitors' caring attitude it didn't even hurt. Great prices and great art – super well translated into tattoos. ♥",
  },
  {
    name: "Stephan S.",
    meta: "2 Rezensionen",
    time: "vor 2 Jahren",
    text: "Echt ne dufte Bude! Rundum ein Ort zum Wohlfühlen! Top Beratung, Tattoos und noch'n guten Schnack oben drauf! Wat will man mehr.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="#E0A53C" aria-hidden="true">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.5l1.6-7L2 9.8l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2-1.9 3.3-4.7 3.3-7.9z" />
      <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.5-2.7c-1 .7-2.3 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.6H2v2.8A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.7 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2a11 11 0 0 0 0 9.8z" />
      <path fill="#EA4335" d="M12 5.4c1.6 0 3 .6 4.2 1.6l3.1-3.1A11 11 0 0 0 2 7.1l3.7 2.8C6.6 7.4 9.1 5.4 12 5.4z" />
    </svg>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <div className="rounded-xl border border-cream/14 bg-[#121210] p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-olive-dark font-bold text-cream">{r.name[0]}</span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-cream">{r.name}</div>
          <div className="truncate text-xs text-cream-dim">{r.meta}</div>
        </div>
        <span className="ml-auto">
          <GoogleIcon />
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Stars />
        <span className="font-mono text-[.66rem] text-olive-deep">{r.time}</span>
      </div>
      <p className="mt-2 text-sm font-light leading-relaxed text-cream/80">{r.text}</p>
    </div>
  );
}

const MASK = "linear-gradient(transparent, #000 12%, #000 88%, transparent)";

function Column({ direction, reviews }: { direction: "up" | "down"; reviews: Review[] }) {
  const items = [...reviews, ...reviews];
  return (
    <div className="group">
      <div
        className={`flex flex-col gap-4 ${direction === "up" ? "animate-vscroll-up" : "animate-vscroll-down"} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {items.map((r, i) => (
          <Card key={i} r={r} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="bewertungen" className="bg-[#0d0d0b] py-[clamp(3rem,8vw,6rem)]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Summary + CTA */}
        <div data-reveal="up" className="mb-[clamp(1.5rem,4vw,2.5rem)] text-center">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Das sagen unsere Kund:innen</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <span className="font-display text-[clamp(2.2rem,1rem+4vw,3.2rem)] leading-none text-cream">5,0</span>
            <div className="text-left">
              <Stars />
              <span className="mt-1 flex items-center gap-1.5 text-sm text-cream-dim">
                <GoogleIcon /> 14 Google-Rezensionen
              </span>
            </div>
          </div>
          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-sm border border-gold bg-gold px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[.12em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            <GoogleIcon /> Bewertung abgeben
          </a>
        </div>

        {/* Wall of Love — vertikale Spalten */}
        <div
          data-reveal="up"
          className="grid h-[440px] grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        >
          <Column direction="up" reviews={REVIEWS} />
          <div className="hidden sm:block">
            <Column direction="down" reviews={[...REVIEWS].reverse()} />
          </div>
        </div>
      </div>
    </section>
  );
}
