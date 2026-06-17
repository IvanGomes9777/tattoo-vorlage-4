"use client";

import { useEffect } from "react";

/**
 * Globaler Scroll-Reveal: beobachtet alle [data-reveal]-Elemente und blendet sie
 * beim Reinscrollen ein (einmalig). Richtung & Stagger werden per data-reveal /
 * inline transition-delay gesteuert. Läuft auf allen Seiten.
 */
export function RevealInit() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
