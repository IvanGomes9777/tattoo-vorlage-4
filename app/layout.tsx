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
      sameAs: ["https://www.instagram.com/dogdays_tattoo/", "https://www.google.com/search?kgmid=/g/11y4kxt5gd"],
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "14",
        bestRating: "5",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Ju Lia" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Joey hat mich tätowiert und ich bin rundum glücklich! Ein sehr sympathischer Mensch, der sehr gute Arbeit macht.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Stephan S." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Echt ne dufte Bude! Rundum ein Ort zum Wohlfühlen! Top Beratung, Tattoos und noch'n guten Schnack oben drauf!",
        },
      ],
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
