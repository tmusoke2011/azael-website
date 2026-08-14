import Link from "next/link";
import { Wordmark } from "./Wordmark";

const links = [
  ["Enterprise Intelligence", "/enterprise-intelligence"],
  ["Capital Intelligence", "/capital-intelligence"],
  ["How Azael Works", "/how-azael-works"],
  ["About", "/about"],
] as const;

export function Footer() {
  return (
    <footer className="border-t-2 border-azael-gold bg-azael-navy-deep text-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.25fr_2fr_1fr] md:gap-8">
          <div>
            <Wordmark inverse />
            <p className="mt-4 text-sm text-white/65">Enterprise &amp; Capital Intelligence</p>
            <p className="mt-5 text-sm font-medium text-azael-gold-bright">See clearly. Decide well.</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/75">
            {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
          </nav>
          <div className="flex gap-6 text-sm text-white/75 md:justify-end">
            <a href="https://www.linkedin.com" rel="noreferrer" target="_blank" className="hover:text-white">LinkedIn</a>
            <span>Email</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© Azael Consulting 2026</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
