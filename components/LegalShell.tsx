import Link from "next/link";
import Image from "next/image";
import { Footer } from "./Footer";

export function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-cream/12 bg-[#0d0d0b]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Zur Startseite" className="flex items-center gap-3">
            <Image src="/dogdaytattoo-logo.png" alt="Dog Days Tattoo" width={44} height={44} className="h-11 w-11 rounded-lg" />
            <span className="font-display text-lg text-cream">Dog Days Tattoo</span>
          </Link>
          <Link href="/" className="font-sans text-sm text-gold transition-colors hover:text-cream">
            ← Zurück
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-[clamp(2.5rem,6vw,4.5rem)]">
        <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Rechtliches</p>
        <h1 className="mt-2 font-display text-[clamp(1.8rem,1rem+3vw,3rem)] text-cream">{title}</h1>
        <p className="mt-2 font-mono text-xs text-cream-dim">Stand: {updated}</p>

        <div className="legal-prose mt-8 space-y-6 font-light leading-relaxed text-cream/85">{children}</div>

        <p className="mt-12 rounded-lg border border-gold/30 bg-[#121210] p-4 font-mono text-[.7rem] leading-relaxed text-cream-dim">
          ⚠️ Platzhalter-Vorlage. Vor dem Live-Gang mit echten Daten füllen und idealerweise anwaltlich prüfen lassen
          (siehe WEBSECURITY_GDPR_GUIDE.md).
        </p>
      </main>

      <Footer />
    </>
  );
}
