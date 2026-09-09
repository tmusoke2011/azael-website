import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Capital Providers — See the Business Clearly Enough to Decide",
  description: "Azael helps banks and alternative capital providers assess African businesses with context around how they work, why capital is needed and what the evidence supports.",
  alternates: { canonical: "/for-capital-providers" },
};

export default function ForCapitalProvidersPage() {
  return (
    <main>
      <PageHero image="https://www.tunnellingnigeria.org/modern-city-skyline-nigeria-aerial-view-urban-infr.jpg" eyebrow="FOR CAPITAL PROVIDERS" title="See the business clearly enough to decide." lead="Azael helps banks and alternative capital providers assess African businesses with more context around how they work, why capital is needed, what the evidence supports and what remains uncertain." primaryAction={{ href: "/explore-a-partnership", label: "Partner with Azael" }} />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHY IT MATTERS</p>
          <h2 className="approved-title mt-4">Smaller transactions can be expensive to assess.</h2>
          <p className="approved-copy mt-7">Business information is often fragmented. Verification takes time. And much of the same work may be repeated as a business moves from one provider to another.</p>
          <p className="approved-copy mt-5">For smaller transactions, those costs can determine whether an opportunity receives serious attention at all.</p>
        </div>
      </section>

      <section className="assessment !bg-azael-cream">
        <div className="container-page assess-shell">
          <div className="assess-copy">
            <p className="kicker">ENTERPRISE INTELLIGENCE</p>
            <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Don&apos;t start from zero.</h2>
            <p>Azael builds a structured picture of how the business works, what it is trying to achieve, why it may need capital, what the evidence supports and what remains uncertain.</p>
            <p><strong>The aim is not to replace diligence. It is to reduce how much has to be rediscovered before serious assessment can begin.</strong></p>
          </div>
          <div className="assess-panel">
            <div className="profile-head-approved"><b>Enterprise Intelligence</b><span>WHAT YOU CAN SEE</span></div>
            <div className="metric-approved"><label>The business</label><div>How it operates, earns money and serves customers.</div></div>
            <div className="metric-approved"><label>The ambition</label><div>What management is trying to change or achieve.</div></div>
            <div className="metric-approved"><label>The role of capital</label><div>What money needs to accomplish for the business.</div></div>
            <div className="metric-approved"><label>The evidence</label><div>What is supported, what is reported and what remains uncertain.</div></div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">CAPITAL FIT</p>
          <h2 className="approved-title mt-4">See where the fit may be.</h2>
          <p className="approved-copy mt-7">Capital Fit compares what the business needs with what the provider is designed to support—and makes the rationale, evidence and remaining questions visible.</p>
          <div className="fit-editorial">
            <article className="fit-editorial-item"><p className="kicker">THE BUSINESS</p><h3>What does the capital need to accomplish?</h3><p>Start from the actual constraint, purpose, amount, timing and conditions.</p></article>
            <article className="fit-editorial-item"><p className="kicker">THE PROVIDER</p><h3>What is your capital designed to support?</h3><p>Consider the mandate, instruments, requirements and constraints that determine genuine fit.</p></article>
          </div>
          <p className="reassure-approved">Capital Fit is a reason to investigate further—not a credit, investment or funding decision.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">BANKS + ALTERNATIVE CAPITAL</p>
          <h2 className="approved-title mt-4">Different capital. The same need to see the business clearly.</h2>
          <p className="approved-copy mt-7">Azael is designed to work across banks and alternative providers while preserving each institution&apos;s own requirements, underwriting, diligence and decision processes.</p>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-2xl font-semibold text-azael-navy">Spend your attention where it matters.</h3>
            <p className="approved-copy mt-5">The aim is to spend less effort reconstructing the basic picture and more effort on the questions that determine whether the opportunity fits your mandate and warrants deeper assessment.</p>
            <Link href="/explore-a-partnership" className="primary-cta mt-7 !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">Partner with Azael <Arrow className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
