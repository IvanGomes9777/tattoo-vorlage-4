import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Platzhalter für die nächste Sektion (Scroll-Test der Navbar). */}
        <section id="atelier" className="mx-auto max-w-3xl px-6 py-32 text-center text-cream-dim">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Nächste Sektion</p>
          <h2 className="mt-3 font-display text-3xl text-cream">Atelier-Section folgt nach Freigabe</h2>
          <p className="mt-4">Sag „Weiter" und ich baue die nächste Sektion mit 5 Design-Optionen.</p>
        </section>
      </main>
    </>
  );
}
