"use client";
import Link from "next/link";
import { brand } from "@/lib/data";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count, wish } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-brand-primary md:text-xl">
          {brand.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-3 text-sm text-brand-muted md:gap-5">
          <Link className="hover:text-brand-fg transition" href="/shop">Shop</Link>
          <Link className="hidden sm:inline hover:text-brand-fg transition" href="/guide">Care guide</Link>
          <Link className="hidden md:inline hover:text-brand-fg transition" href="/about">About</Link>
          <Link className="hover:text-brand-fg transition" href="/wishlist">
            Wishlist{wish.length ? ` (${wish.length})` : ""}
          </Link>
          <Link className="relative font-medium text-brand-primary hover:opacity-80 transition" href="/cart">
            Cart{count ? ` (${count})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}
