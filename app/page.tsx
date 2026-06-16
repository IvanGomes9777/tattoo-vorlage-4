import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Ablauf } from "@/components/Ablauf";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Ablauf />
        <Faq />
        <Contact />

        {/* Platzhalter für den Footer. */}
        <section className="mx-auto max-w-3xl px-6 py-32 text-center text-cream-dim">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Letzte Sektion</p>
          <h2 className="mt-3 font-display text-3xl text-cream">Footer (mit Rechtlichem) folgt nach Freigabe</h2>
        </section>
      </main>
    </>
  );
}
