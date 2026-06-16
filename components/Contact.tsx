"use client";

import { useActionState, useState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions/contact";
import { PhoneIcon } from "./PhoneIcon";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const MAP_SRC = "https://www.google.com/maps?q=Weseler%20Str.%2047,%2048151%20M%C3%BCnster&output=embed";
const initial: InquiryState = { ok: false, message: "" };

export function Contact() {
  const [state, formAction, pending] = useActionState(submitInquiry, initial);

  return (
    <section id="kontakt" className="bg-[#0d0d0b] py-[clamp(3rem,8vw,6rem)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-[clamp(1.5rem,4vw,2.5rem)] text-center">
          <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">Lass uns reden</p>
          <h2 className="mt-2 font-display text-[clamp(1.6rem,1rem+2.6vw,2.6rem)] text-cream">Dein Tattoo beginnt hier</h2>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-cream/14 lg:grid-cols-2">
          {/* Formular */}
          <div className="p-[clamp(1.6rem,4vw,2.6rem)]">
            {state.ok ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold text-2xl text-gold">✓</div>
                <p className="max-w-[34ch] font-light text-cream">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Field name="name" label="Name" placeholder="Dein Name" required />
                  <Field name="phone" label="Telefon" type="tel" placeholder="Optional" />
                </div>
                <Field name="email" label="E-Mail" type="email" placeholder="du@example.de" required />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Field name="stil" label="Wunsch-Stil" placeholder="z. B. Fine-Line" />
                  <Field name="koerperstelle" label="Körperstelle" placeholder="z. B. Unterarm" />
                </div>
                <label className="mt-1 block">
                  <span className="mb-1 block font-mono text-[.64rem] uppercase tracking-[.12em] text-cream-dim">Deine Idee</span>
                  <textarea
                    name="idee"
                    rows={3}
                    required
                    placeholder="Beschreib dein Wunsch-Tattoo, Größe, Referenzen…"
                    className="w-full rounded-md border border-cream/20 bg-[#0d0d0b] px-3 py-2.5 text-sm text-cream transition-colors focus:border-gold focus:outline-none"
                  />
                </label>

                {/* Honeypot — für Menschen unsichtbar */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />

                <label className="mt-3 flex items-start gap-2 text-xs font-light text-cream-dim">
                  <input type="checkbox" name="consent" required className="mt-0.5 accent-gold" />
                  <span>
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-gold underline">Datenschutzerklärung</a>{" "}
                    gelesen und stimme der Verarbeitung meiner Anfrage zu.
                  </span>
                </label>

                {!state.ok && state.message && <p className="mt-3 text-sm text-[#ff6b6b]">{state.message}</p>}

                <button
                  type="submit"
                  disabled={pending}
                  className="mt-4 rounded-sm border border-gold bg-gold px-7 py-3 font-sans text-sm font-semibold uppercase tracking-[.14em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold disabled:opacity-60"
                >
                  {pending ? "Wird gesendet…" : "Anfrage senden"}
                </button>
                <p className="mt-3 font-mono text-[.6rem] text-olive-deep">
                  🔒 Honeypot · Rate-Limit · Einwilligung · keine Weitergabe an Dritte
                </p>
              </form>
            )}
          </div>

          {/* Info + Karte */}
          <div className="flex flex-col bg-[#121210] p-[clamp(1.6rem,4vw,2.6rem)]">
            <p className="font-mono text-xs uppercase tracking-[.3em] text-gold">So erreichst du uns</p>
            <ul className="mt-4 space-y-4">
              <InfoLine icon="📍" label="Adresse">Weseler Str. 47, 48151 Münster</InfoLine>
              <InfoLine icon="✦" label="Termine">Nach Vereinbarung · Privates Atelier</InfoLine>
              <InfoLine icon="☎" label="Telefon">
                <a href={PHONE_HREF} className="text-gold hover:underline">{PHONE_DISPLAY}</a>
              </InfoLine>
              <InfoLine icon="◐" label="Instagram">
                <a href="https://www.instagram.com/dogdays_tattoo/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  @dogdays_tattoo
                </a>
              </InfoLine>
            </ul>

            {/* Anruf-Button */}
            <a
              href={PHONE_HREF}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm border border-gold px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[.14em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
            >
              <PhoneIcon /> Jetzt anrufen
            </a>

            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, required }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[.64rem] uppercase tracking-[.12em] text-cream-dim">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-cream/20 bg-[#0d0d0b] px-3 py-2.5 text-sm text-cream transition-colors focus:border-gold focus:outline-none"
      />
    </label>
  );
}

function InfoLine({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-gold">{icon}</span>
      <span className="font-light text-cream/85">
        <span className="block font-mono text-[.62rem] uppercase tracking-[.12em] text-cream">{label}</span>
        {children}
      </span>
    </li>
  );
}

// DSGVO: Google-Karte lädt erst nach Klick (keine Datenübertragung vorher).
function MapEmbed() {
  const [load, setLoad] = useState(false);
  return (
    <div className="mt-5 flex-1 overflow-hidden rounded-lg border border-cream/14">
      {load ? (
        <iframe
          src={MAP_SRC}
          title="Karte: Dog Days Tattoo, Weseler Str. 47, Münster"
          loading="lazy"
          className="h-full min-h-[220px] w-full [filter:grayscale(.4)_contrast(1.1)]"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoad(true)}
          className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-2 bg-olive-dark/30 p-4 text-center transition-colors hover:bg-olive-dark/50"
        >
          <span className="text-2xl">🗺️</span>
          <span className="font-sans text-sm font-semibold text-cream">Google-Karte laden</span>
          <span className="max-w-[36ch] font-mono text-[.6rem] text-cream-dim">
            Erst nach Klick — dabei werden Daten an Google übertragen (DSGVO).
          </span>
        </button>
      )}
    </div>
  );
}
