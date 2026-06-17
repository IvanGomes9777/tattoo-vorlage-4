"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-Reveal-Wrapper: blendet Inhalt beim Reinscrollen elegant ein
 * (Aufsteigen + leichtes Entschärfen von Scale & Blur). Einmalig pro Element.
 * Respektiert prefers-reduced-motion über die globale CSS-Regel.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
}
