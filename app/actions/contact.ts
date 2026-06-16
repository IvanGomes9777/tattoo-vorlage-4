"use server";

import { headers } from "next/headers";

export type InquiryState = { ok: boolean; message: string };

// Einfaches In-Memory-Rate-Limit (pro Server-Instanz). Für mehr Robustheit
// später Vercel KV / Upstash nutzen (siehe WEBSECURITY_GDPR_GUIDE.md).
const hits = new Map<string, number[]>();
function rateLimit(id: string, max = 5, windowMs = 3600_000): boolean {
  const now = Date.now();
  const recent = (hits.get(id) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) return false;
  recent.push(now);
  hits.set(id, recent);
  return true;
}

function sanitize(v: FormDataEntryValue | null): string {
  return String(v ?? "").replace(/[<>]/g, "").trim();
}
function validEmail(e: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 254;
}

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  // 1. Honeypot — Bots füllen das versteckte Feld aus. Stillschweigend "ok".
  if (sanitize(formData.get("website"))) {
    return { ok: true, message: "Danke! Wir melden uns persönlich bei dir." };
  }

  // 2. Rate-Limit pro IP
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(ip)) {
    return { ok: false, message: "Zu viele Anfragen. Bitte versuch es später erneut." };
  }

  // 3. Einwilligung (DSGVO)
  if (formData.get("consent") !== "on") {
    return { ok: false, message: "Bitte stimme der Datenschutzerklärung zu." };
  }

  // 4. Validierung & Sanitizing
  const name = sanitize(formData.get("name"));
  const email = sanitize(formData.get("email")).toLowerCase();
  const idee = sanitize(formData.get("idee"));
  if (name.length < 2 || name.length > 100) return { ok: false, message: "Bitte gib deinen Namen an." };
  if (!validEmail(email)) return { ok: false, message: "Bitte gib eine gültige E-Mail-Adresse an." };
  if (idee.length < 5) return { ok: false, message: "Bitte beschreib kurz deine Idee." };

  // 5. TODO: Anfrage versenden (z. B. Resend / SMTP) + Admin-Benachrichtigung.
  // Aktuell wird die Anfrage validiert & angenommen; E-Mail-Anbindung folgt mit Zugangsdaten.
  const inquiry = {
    name,
    email,
    phone: sanitize(formData.get("phone")),
    stil: sanitize(formData.get("stil")),
    koerperstelle: sanitize(formData.get("koerperstelle")),
    idee,
    at: new Date().toISOString(),
  };
  console.log("[Dog Days] Neue Anfrage:", inquiry);

  return { ok: true, message: "Danke für deine Anfrage! Wir melden uns persönlich bei dir." };
}
