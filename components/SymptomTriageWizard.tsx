"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { brand, products, formatPrice, type Product } from "@/lib/data";
import { useCart } from "@/lib/cart";

const TRIAGE = [
  { key: "Cold", label: "Cold & flu", hint: "Sore throat, congestion, fever care", code: "01" },
  { key: "Allergy", label: "Allergy", hint: "Itchy eyes, seasonal sniffles", code: "02" },
  { key: "Pain", label: "Pain relief", hint: "Aches, minor injuries", code: "03" },
  { key: "First aid", label: "First aid", hint: "Cuts, thermometers, kits", code: "04" },
] as const;

const AGE_BANDS = ["2+", "6+", "12+", "Adult"] as const;

export function SymptomTriageWizard() {
  const [symptom, setSymptom] = useState<string | null>(null);
  const [age, setAge] = useState<string>("Adult");
  const { add } = useCart();

  const picks = useMemo(() => {
    if (!symptom) return [];
    return products
      .filter((p) => {
        const s = String(p.symptoms || "");
        const band = String(p.ageBand || p.specs?.Ages || "");
        return s === symptom && (age === "Adult" ? band === "Adult" || band === "12+" : band === age);
      })
      .slice(0, 4);
  }, [symptom, age]);

  const active = TRIAGE.find((t) => t.key === symptom);

  return (
    <section className="hero-care relative min-h-[100svh] w-full overflow-hidden">
      <div className="hero-film" aria-hidden>
        <img className="hero-film-img" src={brand.heroImage} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#e8f4f2ee] via-[#e8f4f2cc] to-transparent" />
      <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-gradient-to-l from-[#0d948820] to-transparent lg:block" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl gap-10 px-4 py-24 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-primary">
            Care desk · Symptom triage
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] text-brand-fg md:text-5xl lg:text-[3.4rem]">
            What are you caring for today?
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-muted">
            Educational routing only — not medical advice. Pick a lane, set an age band, and we surface labeled OTC SKUs with dose clarity on every PDP.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn-primary">
              Shop OTC essentials
            </Link>
            <Link href="/guide" className="btn-ghost">
              Open care guide
            </Link>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-brand-border/80 pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-brand-muted">Pickup</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-brand-fg">Same-day</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-brand-muted">Chat</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-brand-fg">Mon–Sat</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-brand-muted">Label</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-brand-fg">Dose-first</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-sm border border-brand-border bg-white/90 shadow-[0_24px_60px_rgba(13,148,136,0.12)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-brand-border px-5 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand-muted">Route · OTC console</p>
            <p className="font-mono text-[10px] text-brand-primary">{active ? `LANE ${active.code}` : "SELECT LANE"}</p>
          </div>
          <div className="divide-y divide-brand-border">
            {TRIAGE.map((t) => {
              const on = symptom === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setSymptom(t.key)}
                  className={`flex w-full items-start gap-4 px-5 py-4 text-left transition ${
                    on ? "bg-brand-primary/8" : "hover:bg-brand-bg/80"
                  }`}
                >
                  <span className="font-mono text-xs text-brand-primary">{t.code}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold text-brand-fg">{t.label}</span>
                    <span className="mt-0.5 block text-xs text-brand-muted">{t.hint}</span>
                  </span>
                  <span
                    className={`mt-1 h-3 w-3 shrink-0 rounded-full border-2 ${
                      on ? "border-brand-primary bg-brand-primary" : "border-brand-border"
                    }`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          {symptom && (
            <div className="border-t border-brand-border bg-brand-bg/50 px-5 py-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-muted">Age band</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {AGE_BANDS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAge(a)}
                    className={`rounded-sm border px-3 py-2 font-mono text-xs ${
                      age === a
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-brand-border bg-white text-brand-fg hover:border-brand-primary/50"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {(picks.length ? picks : products.filter((p) => String(p.symptoms) === symptom).slice(0, 4)).map(
                  (p: Product) => (
                    <article key={p.id} className="overflow-hidden rounded-sm border border-brand-border bg-white">
                      <div className="relative aspect-[5/3] bg-brand-bg">
                        <Image src={p.image} alt={p.name} fill className="object-cover" sizes="200px" />
                      </div>
                      <div className="p-3">
                        <p className="line-clamp-1 text-sm font-semibold text-brand-fg">{p.name}</p>
                        <p className="mt-1 text-xs text-brand-muted">{formatPrice(p.price)}</p>
                        <button
                          type="button"
                          className="btn-primary mt-3 !w-full !py-2 text-xs"
                          onClick={() => add(p, 1)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
