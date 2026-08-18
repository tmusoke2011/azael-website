import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Capital Providers — Enterprise Intelligence",
  description: "Explore how Azael is building reusable, evidence-aware Enterprise Intelligence for banks and alternative capital providers.",
  alternates: { canonical: "/for-capital-providers" },
};

const mandateQuestions = [
  ["Mandate", "Which businesses and business journeys are relevant to you?"],
  ["Instruments", "How can your capital be structured and used?"],
  ["Requirements", "What must be present before you can seriously assess an opportunity?"],
  ["Constraints", "What conditions would prevent you from proceeding?"],
] as const;

const enterpriseView = [
  ["Business today", "How the business operates, earns money and serves customers."],
  ["What it is trying to achieve", "The change management is pursuing and what success would require."],
  ["Initial Strategic Judgment", "Azael's current view of the most important issue to address."],
  ["Evidence and open questions", "What is supported, what remains uncertain and what should be understood next."],
  ["Purpose of capital", "What capital would need to accomplish for the business."],
] as const;

export default function ForCapitalProvidersPage() {
  return (
    <main>
      <PageHero
        image="https://www.tunnellingnigeria.org/modern-city-skyline-nigeria-aerial-view-urban-infr.jpg"
        eyebrow="FOR CAPITAL PROVIDERS"
        title="Understand relevant enterprises without restarting from zero."
        lead="Azael is building reusable, evidence-aware Enterprise Intelligence for banks and alternative capital providers."
        body="Explore how that intelligence could strengthen enterprise discovery, qualification and origination—without replacing your own assessment or decision-making."
        primaryAction={{ href: "/explore-the-fit", label: "Explore a Partnership" }}
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">PARTNERSHIP TODAY</p>
          <h2 className="approved-title mt-4">For providers financing established African businesses.</h2>
          <p className="approved-copy mt-7">Azael is inviting banks and alternative capital providers to explore how Enterprise Intelligence could support their existing enterprise discovery, qualification and origination processes.</p>
          <p className="approved-copy mt-5">A partnership begins with understanding your mandate, the information you need and how a useful, consented handoff should work.</p>
        </div>
      </section>

      <section className="mandate !bg-azael-cream">
        <div className="container-page mandate-grid">
          <div>
            <p className="kicker">CAPITAL INTELLIGENCE</p>
            <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Start with what you finance and require.</h2>
            <p>A provider&apos;s mandate is more than sector, geography and ticket size. Azael is developing Capital Intelligence to structure what a provider finances, how its capital can be used, what must be present and which constraints matter.</p>
          </div>
          <div className="signal-list">
            {mandateQuestions.map(([label, question]) => (
              <div className="signal" key={label}>
                <label>{label}</label>
                <div>{question}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="assessment !bg-white">
        <div className="container-page assess-shell">
          <div className="assess-copy">
            <p className="kicker">ENTERPRISE INTELLIGENCE</p>
            <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Begin with more than a profile or pitch deck.</h2>
            <p>Enterprise Discovery creates an initial, structured understanding of the business. That understanding can be deepened over time as additional information and evidence become relevant.</p>
            <p>Enterprise information would only be shared with a provider with the enterprise&apos;s consent.</p>
          </div>
          <div className="assess-panel">
            <div className="profile-head-approved">
              <b>Enterprise Intelligence</b>
              <span>STRUCTURED VIEW</span>
            </div>
            {enterpriseView.map(([label, copy]) => (
              <div className="metric-approved" key={label}>
                <label>{label}</label>
                <div>{copy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">POTENTIAL ALIGNMENT</p>
          <h2 className="approved-title mt-4">Bring enterprise understanding and provider requirements together.</h2>
          <p className="approved-copy mt-7">Azael is developing a system designed to relate Enterprise Intelligence to Capital Intelligence. The aim is to show where there may be alignment, where there may not be, and why.</p>
          <div className="approved-grid2">
            <article className="approved-card">
              <p className="kicker">ENTERPRISE SIDE</p>
              <h3>What does the business need?</h3>
              <p>Understand the business, its intended change, what stands in the way and what capital should accomplish.</p>
            </article>
            <article className="approved-card">
              <p className="kicker">PROVIDER SIDE</p>
              <h3>What can the provider support?</h3>
              <p>Understand the mandate, available instruments, requirements and genuine constraints.</p>
            </article>
          </div>
          <p className="reassure-approved">Possible alignment is an explanation—not a funding decision, credit decision or investment recommendation.</p>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">EXPLORE A PARTNERSHIP</p>
          <h2 className="approved-title mt-4">Explore how Enterprise Intelligence could strengthen your process.</h2>
          <p className="approved-copy mt-7">A partnership conversation can examine how you currently qualify opportunities, what information matters before a serious assessment, which mandate requirements can be structured and how consented introductions should work.</p>
          <p className="approved-copy mt-5">Azael does not replace underwriting, credit assessment, investment committee decisions or provider judgment. Each provider retains its own requirements, assessment process and final decision.</p>
          <Link href="/explore-the-fit" className="text-link mt-8">
            Explore a Partnership <Arrow className="arrow h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
