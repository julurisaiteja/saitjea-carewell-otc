"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWish, wish } = useCart();
  const liked = wish.includes(product.id);
  return (
    <article className="group flex flex-col gap-3 animate-rise">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-surface">
        <Link href={`/product/${product.id}`}>
          <Image src={product.image} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="(max-width:768px) 50vw, 25vw" />
        </Link>
        {product.badge && (
          <span className="absolute left-2 top-2 bg-brand-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-fg">{product.badge}</span>
        )}
        <button type="button" aria-label="Wishlist" onClick={() => toggleWish(product.id)}
          className="absolute right-2 top-2 rounded-sm bg-brand-bg/80 px-2 py-1 text-xs backdrop-blur">{liked ? <span className="inline-flex" aria-hidden><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.2-4.6-9.5-8.2A5.5 5.5 0 0 1 12 5.1a5.5 5.5 0 0 1 9.5 7.7C19.2 16.4 12 21 12 21z"/></svg></span> : <span className="inline-flex" aria-hidden><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></span>}</button>
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wider text-brand-muted">{product.category}</p>
          <Link className="font-display text-lg leading-tight hover:underline" href={`/product/${product.id}`}>{product.name}</Link>
          <p className="mt-1 text-xs text-brand-muted">★ {product.rating.toFixed(1)} · {product.reviewCount}</p>
        </div>
        <p className="shrink-0 text-sm font-semibold">{formatPrice(product.price)}</p>
      </div>
      <button type="button" className="btn-ghost !py-2 text-xs" onClick={() => add(product)}>Add to cart</button>
    </article>
  );
}
