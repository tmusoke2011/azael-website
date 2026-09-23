import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = {
  title: { absolute: "Azael — Helping African Businesses Prepare for Capital" },
  description: "Azael helps African businesses build a reusable capital case and helps capital providers originate relevant, better-understood businesses.",
  alternates: { canonical: "/" },
};

const waysAzaelHelps = [
  ["01", "Build once", "Create a clear, evidence-backed understanding of the business and what capital needs to accomplish."],
  ["02", "Strengthen over time", "Add evidence and deeper understanding as the business and its capital needs develop."],
  ["03", "Connect without starting again", "Use what is already established and add only what a relevant capital pathway requires."],
] as const;

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <Image src="https://images.pexels.com/photos/30380877/pexels-photo-30380877.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Aerial view of Dar es Salaam highway and cityscape" fill priority sizes="100vw" className="hero-image" />
        <Header inverse />
        <div className="container-page hero-content">
          <div className="max-w-[860px]">
            <p className="eyebrow-light">AZAEL</p>
            <h1 className="display-balance font-display text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[1.04] tracking-[-0.055em]">Looking for capital? Find out what it will take.</h1>
            <p className="hero-lead mt-7 max-w-[800px] text-[clamp(1.15rem,1.7vw,1.45rem)] font-semibold leading-[1.5]">Azael helps African businesses build a credible case for the capital they need—then strengthen and reuse it as relevant opportunities emerge.</p>
            <p className="hero-body body-pretty mt-4 max-w-[760px] text-[clamp(1rem,1.35vw,1.14rem)] leading-[1.7]">We also help capital providers find relevant businesses, better understood from the start.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/for-businesses" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-white">I&apos;m Looking for Capital <Arrow className="h-4 w-4" /></Link>
              <Link href="/for-capital-providers" className="primary-cta">I Provide Capital <Arrow className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">A STRONGER CAPITAL CASE</p>
          <h2 className="approved-title mt-4 max-w-4xl">A credible request explains more than the amount.</h2>
          <p className="approved-copy mt-7">It shows what the business is trying to achieve, what is holding it back and what the funding will change.</p>
          <p className="approved-copy mt-5">Azael builds that understanding so the business can strengthen it over time and capital providers can begin from a better-informed position.</p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="journey-head">
            <div><p className="kicker mb-4">A REUSABLE CAPITAL CASE</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Build once. Strengthen over time. Connect to relevant capital.</h2></div>
          </div>
          <div className="steps !grid-cols-1 md:!grid-cols-3">
            {waysAzaelHelps.map(([number, heading, copy]) => (
              <article className="step" key={number}><div className="n">{number}</div><h3>{heading}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page audience-editorial">
          <article className="audience-editorial-item"><p className="kicker">FOR BUSINESSES</p><h3>Build your case without starting again.</h3><p>Start with what matters. Azael builds on what is already known as your business and relevant capital opportunities develop.</p><Link className="text-link mt-5" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link></article>
          <article className="audience-editorial-item"><p className="kicker">FOR CAPITAL PROVIDERS</p><h3>Relevant businesses. Better understood from the start.</h3><p>Define what you finance and begin with a clearer view of why a business may fit your mandate.</p><Link className="text-link mt-5" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
