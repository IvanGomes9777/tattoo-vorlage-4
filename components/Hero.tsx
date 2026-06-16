"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MARQUEE_WORDS = ["Dog Days", "·", "Tattoo", "·", "Münster", "·", "Custom", "·"];

function MarqueeRow({ direction, className }: { direction: "left" | "right"; className?: string }) {
  // Inhalt doppelt rendern, damit der Loop nahtlos ist (-50% Translate).
  const content = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      <div className={`flex w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}>
        {content.map((w, i) => (
          <span
            key={i}
            className="px-[.25em] font-display text-[clamp(3rem,11vw,8rem)] leading-[.95] text-transparent"
            style={{ WebkitTextStroke: direction === "left" ? "1.5px #E0A53C" : "1.5px #5E624A", opacity: 0.45 }}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

type Stat = { value: number; suffix?: string; decimals?: number; label: string; static?: string };

const STATS: Stat[] = [
  { value: 5, decimals: 1, suffix: " ★", label: "Google-Rating" },
  { value: 100, suffix: " %", label: "Custom Designs" },
  { value: 0, static: "n. V.", label: "Termine" },
];

function useCountUp(ref: React.RefObject<HTMLDivElement | null>) {
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return run;
}

function StatValue({ stat, run }: { stat: Stat; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run || stat.static) return;
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, stat]);

  if (stat.static) return <>{stat.static}</>;
  const text = stat.decimals ? n.toFixed(stat.decimals).replace(".", ",") : Math.round(n).toString();
  return (
    <>
      {text}
      {stat.suffix}
    </>
  );
}

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const run = useCountUp(statsRef);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0d0d0b] px-6 py-28 text-center"
    >
      {/* Entsättigtes Hintergrundfoto */}
      <Image
        src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1600&q=70"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover opacity-[.16] grayscale"
        sizes="100vw"
      />

      {/* Gegenläufige Laufschrift-Karussells (von Hero 06) */}
      <MarqueeRow direction="left" className="top-[7%]" />
      <MarqueeRow direction="right" className="bottom-[7%]" />

      {/* Warmer Spotlight-Glow hinter dem Logo */}
      <div
        className="pointer-events-none absolute left-1/2 top-[24%] h-[clamp(220px,40vw,380px)] w-[clamp(220px,40vw,380px)] -translate-x-1/2 animate-glow"
        style={{ background: "radial-gradient(circle, rgba(224,165,60,.28), transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Inhalt (von Hero 08) */}
      <div className="relative z-10 flex flex-col items-center rounded-2xl bg-[#0d0d0b]/55 px-[clamp(1.2rem,4vw,2.8rem)] py-[clamp(1.6rem,4vw,2.6rem)] backdrop-blur-sm">
        <Logo />
        <p className="mt-6 animate-fade-up font-mono text-xs uppercase tracking-[.28em] text-gold">
          Privates Atelier · Termine nach Vereinbarung
        </p>
        <h1
          className="mt-4 animate-fade-up font-display text-[clamp(2rem,1rem+5vw,4rem)] leading-[1.02] text-cream"
          style={{ animationDelay: ".1s" }}
        >
          Deine Haut. Unsere Kunst.
        </h1>
        <p
          className="mt-4 max-w-[34ch] animate-fade-up text-[clamp(1rem,.95rem+.3vw,1.15rem)] font-light text-cream-dim"
          style={{ animationDelay: ".2s" }}
        >
          Individuelle Custom-Tattoos in ruhiger, stilvoller Atmosphäre — mitten in Münster.
        </p>

        {/* Stats / Google-Rating */}
        <div ref={statsRef} className="mt-8 flex flex-wrap items-start justify-center gap-[clamp(1.2rem,5vw,3rem)]">
          {STATS.map((s) => (
            <div key={s.label} className="min-w-[5rem]">
              <div className="font-display text-[clamp(1.5rem,1rem+2.4vw,2.3rem)] text-gold">
                <StatValue stat={s} run={run} />
              </div>
              <div className="mt-1 font-mono text-[.6rem] uppercase tracking-[.18em] text-cream-dim">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: ".3s" }}>
          <a
            href="#kontakt"
            className="rounded-sm border border-gold bg-gold px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[.14em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            Termin anfragen
          </a>
          <a href="#werke" className="font-sans text-sm font-semibold uppercase tracking-[.14em] text-cream-dim transition-colors hover:text-gold">
            Werke ansehen ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function Logo() {
  return (
    <Image
      src="/dogdaytattoo-logo.png"
      alt="Dog Days Tattoo — Logo"
      width={96}
      height={96}
      priority
      className="h-[clamp(72px,12vw,96px)] w-[clamp(72px,12vw,96px)] animate-fade-up rounded-xl"
    />
  );
}
