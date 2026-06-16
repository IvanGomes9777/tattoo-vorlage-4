import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />

        {/* Platzhalter für die nächste Sektion. */}
        <section id="ablauf" className="mx-auto max-w-3xl px-6 py-32 text-center text-cream-dim">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Nächste Sektion</p>
          <h2 className="mt-3 font-display text-3xl text-cream">Ablauf / FAQ / Kontakt folgt nach Freigabe</h2>
          <p className="mt-4">Sag „Weiter" und ich baue die nächste Sektion mit 5 Design-Optionen.</p>
        </section>
      </main>
    </>
  );
}
