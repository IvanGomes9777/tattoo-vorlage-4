import Image from "next/image";
import { PhoneIcon } from "./PhoneIcon";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const NAV = [
  { label: "Atelier", href: "#atelier" },
  { label: "Werke", href: "#werke" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const LEGAL = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Cookie-Einstellungen", href: "#" },
];

const INSTAGRAM = "https://www.instagram.com/dogdays_tattoo/";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive-dark text-cream">
      {/* dezente vertikale Struktur */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[.06]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,#000 0 2px,transparent 2px 24px)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-[clamp(2.5rem,6vw,4rem)] text-center">
        {/* Logo-Medaillon */}
        <span data-reveal="scale" className="inline-block rounded-full bg-cream p-[7px] outline outline-1 outline-gold">
          <Image
            src="/dogdaytattoo-logo.png"
            alt="Dog Days Tattoo — Logo"
            width={80}
            height={80}
            className="h-[78px] w-[78px] rounded-full object-cover"
          />
        </span>

        {/* Instagram + Anruf — prominent */}
        <div data-reveal="up" style={{ transitionDelay: "80ms" }} className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/40 px-5 py-2.5 font-sans text-sm font-semibold tracking-[.06em] text-cream transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            @dogdays_tattoo
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/40 px-5 py-2.5 font-sans text-sm font-semibold tracking-[.06em] text-cream transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </div>
        <p className="mt-2 font-mono text-[.62rem] uppercase tracking-[.18em] text-cream/70">
          Täglich neue Werke auf Instagram · Termine nach Vereinbarung
        </p>

        {/* Navigation */}
        <nav data-reveal="up" style={{ transitionDelay: "160ms" }} className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer-Navigation">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="font-light text-cream/90 transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Rechtliches */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-cream/70">
          {LEGAL.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-6 font-mono text-[.7rem] text-cream/60">
          © {new Date().getFullYear()} Dog Days Tattoo · Weseler Str. 47, 48151 Münster · Tätowierungen ab 18 Jahren
        </p>
      </div>
    </footer>
  );
}
