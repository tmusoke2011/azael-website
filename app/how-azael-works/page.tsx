import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "How Azael Works — Understand First, Then Decide",
  description: "Azael starts with the business, determines what it needs and only then establishes where capital may fit.",
  alternates: { canonical: "/how-azael-works" },
};

const stages = [
  ["01", "Understand", "Start with how the business really works.", "Begin with a light Discovery and focused conversation. No exhaustive document pack upfront."],
  ["02", "Determine", "Find the real constraint.", "Work out what is holding the business back and whether capital can address it."],
  ["03", "Build", "Go deeper where it matters.", "Develop the evidence needed to answer the questions that can change what happens next."],
  ["04", "Connect", "Explore capital only when the need is clear.", "Where capital makes sense, identify suitable pathways with the business need, purpose of capital, evidence and remaining questions already established. Each provider retains its own diligence and final decision."],
] as const;

export default function HowAzaelWorksPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">HOW AZAEL WORKS</p>
          <h1 className="approved-title mt-4 max-w-5xl">Understand first. Decide what comes next.</h1>
          <p className="approved-copy mt-7">Azael starts with the business, works out what it needs and only then determines where capital may fit.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <div className="grid gap-px overflow-hidden border border-azael-navy/10 bg-azael-navy/10 md:grid-cols-2 xl:grid-cols-4">
            {stages.map(([number, title, heading, copy]) => (
              <article className="bg-white p-7" key={number}>
                <p className="kicker">{number} · {title}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-azael-navy">{heading}</h3>
                <p className="mt-4 text-[16px] leading-7 text-azael-slate">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy py-20 md:py-24">
        <div className="container-page">
          <p className="eyebrow-light">THE INTELLIGENCE SYSTEM</p>
          <h2 className="max-w-3xl font-display text-[clamp(2.3rem,4.8vw,4rem)] font-semibold leading-[1.08] tracking-[-.045em]">One business. One capital need. Different possible providers.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div><h3 className="font-display text-xl font-semibold">Enterprise Intelligence</h3><p className="mt-3 text-white/70">What does the business really need?</p></div>
            <div><h3 className="font-display text-xl font-semibold">Capital Intelligence</h3><p className="mt-3 text-white/70">What is the provider designed to support?</p></div>
            <div><h3 className="font-display text-xl font-semibold">Capital Fit</h3><p className="mt-3 text-white/70">Where do they genuinely align?</p></div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">THE PRINCIPLE</p>
          <h2 className="approved-title mt-4">Capital should follow understanding.</h2>
          <p className="approved-copy mt-7">Azael does not assume every business needs capital or that every apparent fit should become a transaction. The business must make sense first. The role of capital must be clear. The provider then makes its own decision.</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <Link className="text-link" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link>
            <Link className="text-link" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
