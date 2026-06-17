"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PhoneIcon } from "./PhoneIcon";
import { PHONE_HREF } from "@/lib/site";

const LEFT_LINKS = [
  { label: "Atelier", href: "#atelier" },
  { label: "Werke", href: "#werke" },
  { label: "Bewertungen", href: "#bewertungen" },
];

const RIGHT_LINKS = [
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Termin", href: "#kontakt", cta: true },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [heroOut, setHeroOut] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navbar nur im Hero zeigen; danach verschwindet sie und nur Anruf+Termin bleiben.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setHeroOut(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Body-Scroll sperren, wenn das Mobile-Overlay offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Overlay schließen, sobald wir aus dem Hero raus sind (Navbar verschwindet).
  useEffect(() => {
    if (heroOut) setOpen(false);
  }, [heroOut]);

  return (
    <>
      {/* Normale Navbar — nur sichtbar im Hero */}
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-[transform,opacity,background-color,border-color,padding] duration-500 ${
          heroOut ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${solid ? "bg-[#0d0d0b]/92 border-b border-gold/30 py-2" : "bg-[#0d0d0b]/30 border-b border-gold/20 py-3"}`}
      >
        <nav
          aria-label="Hauptnavigation"
          className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-[clamp(1rem,3vw,2.2rem)]"
        >
          <div className="flex items-center justify-self-start">
            <ul className="hidden items-center gap-[clamp(.8rem,2vw,1.7rem)] lg:flex">
              {LEFT_LINKS.map((l) => (
                <li key={l.href}>
                  <NavLink {...l} />
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className={`h-[1.5px] w-6 bg-cream transition-transform duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] w-6 bg-cream transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-[1.5px] w-6 bg-cream transition-transform duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </button>
          </div>

          <a href="#top" className="justify-self-center" aria-label="Dog Days Tattoo — Startseite">
            <Logo size={solid ? 52 : 58} framed priority />
          </a>

          <div className="flex items-center justify-end justify-self-end">
            <ul className="hidden items-center gap-[clamp(.8rem,2vw,1.7rem)] lg:flex">
              {RIGHT_LINKS.map((l) => (
                <li key={l.href}>
                  <NavLink {...l} />
                </li>
              ))}
              <li>
                <a
                  href={PHONE_HREF}
                  aria-label="Anrufen"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
                >
                  <PhoneIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Handy: Fullscreen-Overlay (Burger) */}
        <div
          className={`fixed inset-0 -z-10 flex flex-col items-center justify-center gap-5 bg-[#0d0d0b]/97 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
            open ? "z-40 opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {ALL_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.06 + i * 0.06}s` : "0s" }}
              className={`font-western text-3xl transition-all duration-500 ${
                "cta" in l && l.cta ? "text-gold" : "text-cream-dim hover:text-gold"
              } ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${0.06 + ALL_LINKS.length * 0.06}s` : "0s" }}
            className={`mt-2 inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-sans text-base font-semibold uppercase tracking-[.12em] text-gold transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <PhoneIcon /> Anrufen
          </a>
        </div>
      </header>

      {/* Nach dem Hero: nur noch Anruf + Termin (schwebend) */}
      <div
        className={`fixed right-3 top-3 z-50 flex items-center gap-2 transition-all duration-500 sm:right-5 sm:top-5 ${
          heroOut ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <a
          href={PHONE_HREF}
          aria-label="Anrufen"
          className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-[#0d0d0b]/85 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[.1em] text-gold shadow-[0_8px_24px_rgba(0,0,0,.4)] backdrop-blur-md transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          <PhoneIcon />
          <span className="hidden sm:inline">Anrufen</span>
        </a>
        <a
          href="#kontakt"
          className="rounded-full border border-gold bg-gold px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[.1em] text-ink shadow-[0_8px_24px_rgba(0,0,0,.4)] transition-colors duration-300 hover:bg-transparent hover:text-gold"
        >
          Termin
        </a>
      </div>
    </>
  );
}

function NavLink({ label, href, cta }: { label: string; href: string; cta?: boolean }) {
  return (
    <a
      href={href}
      className={`group relative font-sans text-[.78rem] font-semibold uppercase tracking-[.1em] transition-colors duration-300 ${
        cta ? "text-gold" : "text-cream-dim hover:text-gold"
      }`}
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] origin-center scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}
