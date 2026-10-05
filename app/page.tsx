import Link from "next/link";
import { brand } from "@/lib/data";
import { SymptomTriageWizard } from "@/components/SymptomTriageWizard";
import { CategoryPanels } from "@/components/CategoryPanels";
import { Newsletter } from "@/components/Newsletter";
import { CareClarity } from "@/components/CareClarity";
import { HeroCinema } from "@/components/HeroCinema";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#d7e2ec] swiss-grid">
        <HeroCinema video={brand.heroVideo} image={brand.heroImage} className="hero-film-clinical" />
        <div className="relative mx-auto grid max-w-6xl gap-0 px-4 md:grid-cols-12 md:px-6">
          <div className="border-r border-[#d7e2ec] py-14 md:col-span-7 md:pr-10 animate-rise">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-[#0b5fff]">01 / Care desk</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">{brand.name}</h1>
            <p className="mt-4 max-w-md text-lg text-[#3a5166]">{brand.tagline}</p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#5a7186]">{brand.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/guide" className="btn-primary">Start triage</Link>
              <Link href="/shop" className="border border-[#0b1f33] px-4 py-2 text-sm font-semibold">Browse OTC</Link>
            </div>
          </div>
          <div className="relative py-14 md:col-span-5 md:pl-8 animate-rise-delay">
            <dl className="stagger-children space-y-6">
              {brand.stats.map(([n, l], i) => (
                <div key={l} className="grid grid-cols-[48px_1fr] gap-3 border-t border-[#d7e2ec] pt-4">
                  <dt className="mono text-xs text-[#0b5fff]">{String(i + 2).padStart(2, "0")}</dt>
                  <dd>
                    <p className="font-display text-3xl">{n}</p>
                    <p className="text-xs uppercase tracking-wider text-[#5a7186]">{l}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <SymptomTriageWizard />
      <CareClarity />
      <CategoryPanels />
      <Newsletter />
    </>
  );
}
