import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Ablauf } from "@/components/Ablauf";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

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
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
