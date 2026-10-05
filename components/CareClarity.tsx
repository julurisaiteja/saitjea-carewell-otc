import Link from "next/link";
import { brand } from "@/lib/data";
import { HeroCinema } from "@/components/HeroCinema";

export function CareClarity() {
  return (
    <section className="border-y border-brand-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="animate-rise">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Care desk clarity</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Labels first. Guesswork last.</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              Dose, age band, and form on every card — skip the spinning bottle gimmick. Triage guides you; the pharmacist chat
              covers product questions (not diagnosis).
            </p>
            <Link href="/guide" className="btn-primary mt-6 inline-flex">
              Open care guide
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-brand-border bg-brand-bg p-6 shadow-lg animate-rise-delay">
            <div className="relative min-h-[220px] overflow-hidden rounded-lg">
              <HeroCinema
                video={brand.heroVideo}
                image={brand.heroImage}
                className="!relative !inset-auto min-h-[220px] rounded-lg opacity-80"
              />
            </div>
            <ul className="mt-5 grid gap-3 text-sm">
              <li className="flex justify-between border-b border-brand-border pb-2">
                <span className="text-brand-muted">Age band</span>
                <span className="font-semibold">12+</span>
              </li>
              <li className="flex justify-between border-b border-brand-border pb-2">
                <span className="text-brand-muted">Form</span>
                <span className="font-semibold">Tablet · liquid · topical</span>
              </li>
              <li className="flex justify-between">
                <span className="text-brand-muted">Pickup window</span>
                <span className="font-semibold">{brand.stats[3]?.[0]} same-day</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
