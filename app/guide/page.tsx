import Link from "next/link";
import { SymptomTriageWizard } from "@/components/SymptomTriageWizard";
import { CareClarity } from "@/components/CareClarity";

export default function GuidePage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-[#0b5fff]">Care guide</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Clinical clarity</h1>
        <p className="mt-2 max-w-xl text-sm text-[#5a7186]">Label-first guidance — no bottle turntables.</p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">Shop OTC</Link>
      </div>
      <CareClarity />
      <SymptomTriageWizard />
    </div>
  );
}
