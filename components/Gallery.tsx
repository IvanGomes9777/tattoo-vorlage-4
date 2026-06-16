"use client";

import { useCallback, useEffect, useState } from "react";

type Work = { thumb: string; full: string; style: string; alt: string };

// Platzhalter (Unsplash) — später echte Dog-Days-Werke (nur mit schriftlicher
// Einwilligung der Kund:innen veröffentlichen, Art. 9 DSGVO).
const IDS = [
  "1611501275019-9b5cda994e8d",
  "1565058379802-bbe93b2f703a",
  "1542856391-010fb87dcfed",
  "1598371839696-5c5bb00bdc28",
  "1590246814883-57c511e76523",
  "1607779097040-26e80aa78e66",
  "1612459284970-e8f027596582",
];
const STYLES = ["Blackwork", "Fine-Line", "Realism", "Geometric", "Lettering", "Custom", "Dotwork"];

const WORKS: Work[] = IDS.map((id, i) => ({
  thumb: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=60`,
  full: `https://images.unsplash.com/photo-${id}?auto=format&q=85`,
  style: STYLES[i % STYLES.length],
  alt: `Tattoo-Werk – ${STYLES[i % STYLES.length]}, Dog Days Tattoo Münster`,
}));

function Row({ works, direction, onOpen }: { works: Work[]; direction: "left" | "right"; onOpen: (w: Work) => void }) {
  // Inhalt verdoppeln für nahtlosen Loop; Reihe pausiert bei Hover (group).
  const items = [...works, ...works];
  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-3 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {items.map((w, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onOpen(w)}
            aria-label={`${w.style}-Werk vergrößern`}
            className="group/it relative h-[clamp(150px,26vw,210px)] aspect-[3/4] flex-none overflow-hidden rounded-lg transition-transform duration-300 hover:z-10 hover:scale-[1.06] focus-visible:scale-[1.06]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={w.thumb}
              alt={w.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-500 group-hover/it:grayscale-0"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[#0d0d0b]/90 to-transparent px-3 py-2 text-left font-mono text-[.6rem] uppercase tracking-[.12em] text-gold transition-transform duration-300 group-hover/it:translate-y-0">
              {w.style} · Custom
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<Work | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <section id="werke" className="bg-[#0d0d0b] py-[clamp(3rem,8vw,6rem)]">
      <div className="mx-auto mb-[clamp(1.5rem,4vw,2.5rem)] max-w-6xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Ausgewählte Arbeiten</p>
        <h2 className="mt-2 font-display text-[clamp(1.6rem,1rem+2.6vw,2.6rem)] text-cream">Unsere Werke</h2>
        <p className="mx-auto mt-3 max-w-[52ch] font-light text-cream-dim">
          Fahr mit der Maus über die Reihe, um sie anzuhalten — und klick ein Werk für die volle Ansicht.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Row works={WORKS} direction="left" onOpen={setOpen} />
        <Row works={[...WORKS].reverse()} direction="right" onOpen={setOpen} />
      </div>

      {/* Lightbox — Bild in Originalgröße */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${open.style}-Werk in Originalansicht`}
          onClick={close}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0b]/95 p-4 backdrop-blur-sm animate-[fade-up_.3s_ease]"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Schließen"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold text-xl text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={open.full}
            alt={open.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-[0_20px_60px_rgba(0,0,0,.6)]"
          />
          <div className="mt-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[.16em] text-gold">{open.style} · Custom</p>
            <a
              href="#kontakt"
              onClick={close}
              className="mt-3 inline-block rounded-sm border border-gold bg-gold px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[.14em] text-ink transition-colors hover:bg-transparent hover:text-gold"
            >
              Ähnliches Tattoo anfragen
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
