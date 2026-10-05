import Link from "next/link";
import { brand } from "@/lib/data";

const PANELS = [
  { cat: "Cold & Flu", icon: "cross" },
  { cat: "Vitamins", icon: "hex" },
  { cat: "First Aid", icon: "plus" },
  { cat: "Personal Care", icon: "circle" },
  { cat: "Home", icon: "square" },
] as const;

function PanelIcon({ type }: { type: string }) {
  const stroke = "currentColor";
  if (type === "cross")
    return (
      <svg viewBox="0 0 40 40" className="h-12 w-12 text-brand-primary" aria-hidden>
        <path d="M8 20h24M20 8v24" stroke={stroke} strokeWidth="2.5" />
      </svg>
    );
  if (type === "hex")
    return (
      <svg viewBox="0 0 40 40" className="h-12 w-12 text-brand-primary" aria-hidden>
        <polygon points="20,4 34,12 34,28 20,36 6,28 6,12" fill="none" stroke={stroke} strokeWidth="2" />
      </svg>
    );
  if (type === "plus")
    return (
      <svg viewBox="0 0 40 40" className="h-12 w-12 text-brand-primary" aria-hidden>
        <rect x="6" y="6" width="28" height="28" rx="2" fill="none" stroke={stroke} strokeWidth="2" />
        <path d="M20 14v12M14 20h12" stroke={stroke} strokeWidth="2.5" />
      </svg>
    );
  if (type === "circle")
    return (
      <svg viewBox="0 0 40 40" className="h-12 w-12 text-brand-primary" aria-hidden>
        <circle cx="20" cy="20" r="14" fill="none" stroke={stroke} strokeWidth="2" />
        <circle cx="20" cy="20" r="4" fill={stroke} />
      </svg>
    );
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12 text-brand-primary" aria-hidden>
      <rect x="8" y="8" width="24" height="24" fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

export function CategoryPanels() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h2 className="font-display text-2xl font-semibold md:text-3xl">Shop by aisle</h2>
      <p className="mt-2 text-sm text-brand-muted">Clear categories with label-forward product cards in shop.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PANELS.map(({ cat, icon }) => (
          <Link
            key={cat}
            href={`/shop?cat=${encodeURIComponent(cat)}`}
            className="card-clinic group flex min-h-[140px] items-center gap-5 p-6 transition hover:border-brand-primary/60"
          >
            <PanelIcon type={icon} />
            <div>
              <p className="font-display text-xl font-semibold group-hover:text-brand-primary">{cat}</p>
              <p className="mt-1 text-xs text-brand-muted">Browse {cat.toLowerCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
