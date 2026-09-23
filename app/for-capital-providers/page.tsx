import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Capital Providers — Find Mandate-Aligned Businesses",
  description: "Originate relevant, better-understood African businesses whose capital needs may align with your mandate.",
  alternates: { canonical: "/for-capital-providers" },
};

const providerBenefits = [
  ["01", "Define what fits", "Make the sectors, markets, business profile, capital type and size you support clear."],
  ["02", "Identify relevant businesses", "Find businesses whose circumstances and capital needs appear to align with your mandate."],
  ["03", "Understand why they may fit", "See the business goal, what capital needs to accomplish and what supports the case."],
  ["04", "See what remains", "Know what is established and what still needs to be tested, verified or resolved."],
] as const;

export default function ForCapitalProvidersPage() {
  return (
    <main>
      <PageHero
        image="https://www.tunnellingnigeria.org/modern-city-skyline-nigeria-aerial-view-urban-infr.jpg"
        eyebrow="FOR CAPITAL PROVIDERS"
        title="Relevant businesses. Better understood from the start."
        lead="Azael helps capital providers—from SACCOs and smaller lenders to banks, funds and institutional investors—originate businesses relevant to their mandates."
        primaryAction={{ href: "/capital-provider-enquiry", label: "Tell Us About Your Mandate" }}
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">A BETTER PIPELINE</p>
          <h2 className="approved-title mt-4">Improve origination before due diligence begins.</h2>
          <p className="approved-copy mt-7">Business information is often fragmented, so provider teams spend time reconstructing the business before they can assess the opportunity.</p>
          <p className="approved-copy mt-5">Azael develops a structured view of the business and its capital need, helping your team see why it may fit and what remains to be resolved.</p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="journey-head"><div><p className="kicker mb-4">WHAT AZAEL HELPS YOUR TEAM DO</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">From mandate to better-understood pipeline.</h2></div></div>
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
          <p className="approved-copy mt-5">The depth of information is proportionate to the business, its capital requirement and the relevant capital pathway.</p>
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
