"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Arrow } from "./Arrow";
import { Wordmark } from "./Wordmark";

const links = [
  ["Enterprise Intelligence", "/enterprise-intelligence"],
  ["Capital Intelligence", "/capital-intelligence"],
  ["How Azael Works", "/how-azael-works"],
  ["About", "/about"],
] as const;

export function Header({ inverse = false }: { inverse?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const base = inverse ? "text-white" : "text-azael-navy";

  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${base}`}>
      <div className="container-page flex h-20 items-center justify-between gap-8">
        <Wordmark inverse={inverse} />
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`text-[13px] font-medium transition-opacity hover:opacity-60 ${pathname === href ? "text-azael-gold-bright" : "opacity-90"}`}>
              {label}
            </Link>
          ))}
          <Link href="/explore-the-fit" className={`primary-cta ${inverse ? "" : "!text-azael-navy"}`}>
            Explore the Fit <Arrow className="h-4 w-4" />
          </Link>
        </nav>
        <button className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          Menu <span aria-hidden="true" className="text-azael-gold-bright">{open ? "−" : "+"}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="mx-3 border border-white/15 bg-azael-navy-deep/95 p-6 text-white shadow-2xl backdrop-blur lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="text-lg font-medium">{label}</Link>)}
            <Link href="/explore-the-fit" onClick={() => setOpen(false)} className="primary-cta mt-2 w-full justify-between">Explore the Fit <Arrow className="h-4 w-4" /></Link>
          </div>
        </nav>
      )}
    </header>
  );
}
