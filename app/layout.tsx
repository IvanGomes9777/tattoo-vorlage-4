import type { Metadata } from "next";
import { Alfa_Slab_One, Rye, Libre_Franklin, Inter, Space_Mono } from "next/font/google";
import { RevealInit } from "@/components/RevealInit";
import "./globals.css";

const alfa = Alfa_Slab_One({ weight: "400", subsets: ["latin"], variable: "--font-alfa", display: "swap" });
const rye = Rye({ weight: "400", subsets: ["latin"], variable: "--font-rye", display: "swap" });
const franklin = Libre_Franklin({ subsets: ["latin"], variable: "--font-franklin", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE_URL = "https://dogdays-tattoo.de"; // TODO: finale Domain eintragen

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dog Days Tattoo — Privates Tattoo-Atelier in Münster",
    template: "%s | Dog Days Tattoo Münster",
  },
  description:
    "Privates Tattoo-Atelier in Münster — Termine nach Vereinbarung. Individuelle Custom-Tattoos in ruhiger, stilvoller Atmosphäre. Weseler Str. 47, 48151 Münster.",
  keywords: ["Tattoo Münster", "Tattoo Atelier Münster", "Custom Tattoo", "Dog Days Tattoo", "Tätowierer Münster"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Dog Days Tattoo",
    title: "Dog Days Tattoo — Privates Tattoo-Atelier in Münster",
    description: "Individuelle Custom-Tattoos in ruhiger, stilvoller Atmosphäre. Termine nach Vereinbarung.",
  },
  twitter: { card: "summary_large_image", title: "Dog Days Tattoo Münster", description: "Privates Tattoo-Atelier — Termine nach Vereinbarung." },
  // Favicon & Apple-Icon via Datei-Konvention: app/icon.png + app/apple-icon.png
  robots: { index: true, follow: true },
};

// JSON-LD: Organization + WebSite + LocalBusiness (TattooParlor) — SEO/GEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Dog Days Tattoo",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
      sameAs: ["https://www.instagram.com/dogdays_tattoo/"],
    },
    {
      "@type": ["LocalBusiness", "TattooParlor"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Dog Days Tattoo",
      image: `${SITE_URL}/icon.svg`,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Weseler Str. 47",
        addressLocality: "Münster",
        postalCode: "48151",
        addressCountry: "DE",
      },
      areaServed: "Münster",
      priceRange: "€€",
      telephone: "+490000000000", // TODO: echte Telefonnummer (siehe lib/site.ts)
      // TODO: Öffnungszeiten ergänzen, sobald vom Kunden bestätigt.
      description: "Privates Tattoo-Atelier in Münster. Custom-Tattoos, Termine nach Vereinbarung.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Dog Days Tattoo",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "de",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${alfa.variable} ${rye.variable} ${franklin.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <RevealInit />
      </body>
    </html>
  );
}
