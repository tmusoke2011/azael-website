import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Capital Providers — Find Mandate-Aligned Businesses",
  description: "Find better-prepared African businesses whose capital needs align with what your organisation finances.",
  alternates: { canonical: "/for-capital-providers" },
};

const providerBenefits = [
  ["01", "Define what fits", "Make the sectors, markets, business profile, capital type and size you support clear."],
  ["02", "Identify aligned opportunities", "Find businesses whose needs appear to fit your mandate."],
  ["03", "Begin with better information", "Start with a clearer account of the business, its goal and what the capital needs to accomplish."],
  ["04", "Focus your assessment", "Spend more time testing and verifying what matters for your own decision."],
] as const;

export default function ForCapitalProvidersPage() {
  return (
    <main>
      <PageHero
        image="https://www.tunnellingnigeria.org/modern-city-skyline-nigeria-aerial-view-urban-infr.jpg"
        eyebrow="FOR CAPITAL PROVIDERS"
        title="Find businesses whose capital needs align with your mandate."
        lead="Azael helps banks, funds, investors and other capital providers find better-prepared businesses and begin with clearer information before due diligence."
        primaryAction={{ href: "/capital-provider-enquiry", label: "Tell Us About Your Mandate" }}
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">A BETTER PIPELINE</p>
          <h2 className="approved-title mt-4">Start with a prepared opportunity—not only a request for money.</h2>
          <p className="approved-copy mt-7">Business information is often fragmented, so provider teams spend time reconstructing the business before they can assess the opportunity.</p>
          <p className="approved-copy mt-5">Azael helps the business prepare its capital case before a serious provider conversation begins.</p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="journey-head"><div><p className="kicker mb-4">WHAT AZAEL HELPS YOUR TEAM DO</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Spend your attention where it matters.</h2></div></div>
          <div className="steps">
            {providerBenefits.map(([number, heading, copy]) => <article className="step" key={number}><div className="n">{number}</div><h3>{heading}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WORKING WITH AZAEL</p>
          <h2 className="approved-title mt-4">Begin with a defined mandate or focused pilot.</h2>
          <p className="approved-copy mt-7">A partnership can focus on a specific sector, market, transaction size, instrument or business profile.</p>
          <p className="approved-copy mt-5">That creates a practical way to test the quality, usefulness and alignment of the opportunities Azael prepares.</p>
          <p className="approved-copy mt-5">The business controls what information is shared. Your team retains its own due diligence and funding decision.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">EXPLORE A PARTNERSHIP</p>
          <h2 className="approved-title mt-4">Tell us what your organisation finances.</h2>
          <p className="approved-copy mt-7">Share your mandate, the businesses you support and where your team needs help finding or screening opportunities.</p>
          <Link href="/capital-provider-enquiry" className="primary-cta mt-7 !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">Tell Us About Your Mandate <Arrow className="h-4 w-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
