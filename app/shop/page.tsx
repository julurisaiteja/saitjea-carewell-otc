"use client";
import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { brand, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

function ShopInner() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") || "");
  const [cat, setCat] = useState(sp.get("cat") || "All");
  const [sort, setSort] = useState("featured");

  const cats = ["All", ...brand.categories];

  const list = useMemo(() => {
    let out = products.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okQ = !q || (p.name + p.description + p.category).toLowerCase().includes(q.toLowerCase());
      return okCat && okQ;
    });
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [q, cat, sort]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="border-b border-[#d7e2ec] pb-8">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-[#0b5fff]">02 / Catalog</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Shop OTC</h1>
        <p className="mt-2 max-w-lg text-sm text-brand-muted">{brand.niche} — dose-clear SKUs with filter, search, and sort.</p>
      </div>

      <div className="filter-chrome mt-8 grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-center md:p-5">
        <input
          className="input md:max-w-sm"
          placeholder="Search cold care, vitamins…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="flex flex-wrap items-center gap-2">
          <select className="input !w-auto" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="rating">Top rated</option>
          </select>
          {(q || cat !== "All") && (
            <button type="button" className="shop-chip" onClick={() => { setQ(""); setCat("All"); }}>
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="listbox" aria-label="Categories">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            role="option"
            aria-selected={cat === c}
            data-active={cat === c}
            className="shop-chip"
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mono mt-6 text-[11px] uppercase tracking-[0.18em] text-brand-muted">
        Results {String(list.length).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
        {cat !== "All" ? ` · ${cat}` : ""}
        {q ? ` · query “${q}”` : ""}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {!list.length && (
        <p className="mt-10 border border-dashed border-[#d7e2ec] px-4 py-8 text-center text-brand-muted">
          No matches — adjust aisle or clear filters.
        </p>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-16 text-brand-muted">Loading catalog…</div>}>
      <ShopInner />
    </Suspense>
  );
}
