/**
 * Dog Days Tattoo — Logo
 *
 * SWAP-TO-REAL-LOGO:
 * 1. Lege dein echtes Logo unter `public/logo.png` (oder `public/logo.svg`) ab.
 * 2. Setze unten `USE_REAL_ASSET = true`.
 *    -> Dann wird das echte File via next/image gerendert (mit transparentem BG flexibel einsetzbar).
 *
 * Bis dahin: originalgetreuer SVG-Nachbau (Olive-Quadrat + galoppierende Windhunde +
 * "DOG DAYS" Western-Gold mit schwarzer Kontur + "TATTOO"-Banner).
 * Vorteil SVG: verlustfrei skalierbar (Header, Footer, Favicon, Retina).
 */
import Image from "next/image";

const USE_REAL_ASSET = true;

type LogoProps = {
  /** Höhe in px (responsive über CSS möglich). */
  size?: number;
  /** Mit grünem Quadrat-Hintergrund (wie Original) oder freigestellt. */
  framed?: boolean;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = 64, framed = true, className, priority }: LogoProps) {
  if (USE_REAL_ASSET) {
    // Echtes Logo (quadratisch 150×150, enthält Olive-Quadrat + Schrift).
    return (
      <Image
        src="/dogdaytattoo-logo.png"
        alt="Dog Days Tattoo — Logo"
        width={size}
        height={size}
        priority={priority}
        className={className}
        style={{ height: size, width: size, borderRadius: framed ? size * 0.16 : 0, objectFit: "contain" }}
      />
    );
  }

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: 1,
        gap: 1,
        padding: framed ? "8px 14px 9px" : 0,
        borderRadius: framed ? 16 : 0,
        background: framed ? "#9DA17E" : "transparent",
        boxShadow: framed ? "0 6px 20px rgba(0,0,0,.35)" : "none",
        border: framed ? "1px solid rgba(20,20,20,.12)" : "none",
      }}
      role="img"
      aria-label="Dog Days Tattoo — Logo"
    >
      <svg
        viewBox="0 0 260 128"
        style={{ height: size * 0.5, width: "auto" }}
        aria-hidden="true"
        className="animate-run"
      >
        {/* zwei galoppierende Windhunde, überlagert: schwarz hinten, gold vorne */}
        <path d={GREYHOUND} transform="translate(12 5)" fill="#141414" />
        <path d={GREYHOUND} fill="#E0A53C" stroke="#141414" strokeWidth="2.4" strokeLinejoin="round" />
      </svg>
      <span
        className="font-western"
        style={{
          fontSize: size * 0.34,
          color: "#E0A53C",
          WebkitTextStroke: `${Math.max(1, size * 0.02)}px #141414`,
          paintOrder: "stroke fill",
          textShadow: `${size * 0.03}px ${size * 0.03}px 0 #141414`,
          letterSpacing: ".01em",
          marginTop: size * 0.04,
        }}
      >
        Dog Days
      </span>
      <span
        className="font-sans"
        style={{
          fontWeight: 800,
          fontSize: size * 0.115,
          letterSpacing: ".42em",
          color: "#141414",
          background: "transparent",
          marginTop: size * 0.02,
          paddingLeft: ".42em",
        }}
      >
        TATTOO
      </span>
    </span>
  );
}

/**
 * Galoppierender Windhund, nach links springend (Double-Suspension-Gallop).
 * viewBox-Bezug: 0 0 240 120. Wird zweifach gerendert (schwarz versetzt + gold).
 */
const GREYHOUND =
  "M12,58 C18,52 24,49 30,46 C34,43 40,39 44,42 C47,44 46,47 44,49 " +
  "C50,50 54,50 58,50 C66,49 72,48 78,48 C98,43 116,32 132,37 " +
  "C150,41 162,46 172,49 C178,44 196,33 214,34 C221,34 224,39 221,43 " +
  "C214,49 204,51 196,54 C190,56 185,59 182,64 C192,76 206,86 213,100 " +
  "C215,104 210,106 207,102 C199,90 190,80 183,72 C184,82 186,92 186,101 " +
  "C186,105 181,105 180,101 C178,91 176,82 174,74 C156,84 132,88 112,82 " +
  "C92,88 76,96 62,106 C58,109 54,106 57,102 C70,92 82,84 94,77 " +
  "C86,82 74,92 64,101 C60,104 55,102 58,98 C66,89 76,81 86,74 " +
  "C72,72 56,72 44,70 C32,69 20,66 12,58 Z";
