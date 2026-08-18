import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "How Azael Works — From Enterprise Discovery to Potential Capital Fit",
  description:
    "See how Azael starts with Enterprise Discovery and is building toward explainable alignment between enterprise needs and capital-provider requirements.",
  alternates: { canonical: "/how-azael-works" },
};

const discoveryStages = [
  ["01", "Enterprise Discovery", "A short initial form and focused conversation."],
  ["02", "Initial Enterprise Intelligence", "How the business works, what it is trying to achieve and what may stand in the way."],
  ["03", "Initial Strategic Judgment", "Azael's current view of the question or issue that matters most."],
  ["04", "Enterprise Discovery Brief", "A concise record of what is understood, what remains uncertain and why it matters."],
  ["05", "Next intelligence", "The information or analysis needed for the next decision."],
] as const;

const futureStages = [
  ["01", "Reusable Enterprise Intelligence", "A structured understanding that can be deepened as relevant evidence is developed."],
  ["02", "Capital Requirement", "What the enterprise needs capital to accomplish, including timing and structure."],
  ["03", "Enterprise Passport", "A purpose-specific, consent-controlled view of the intelligence relevant to a particular use."],
  ["04", "Capital Intelligence", "What a provider finances, how its capital can be used and what it requires."],
  ["05", "Potential Capital Fit", "A reasoned view of where alignment may or may not exist, including uncertainty."],
  ["06", "Provider Handoff", "Relevant context shared with an appropriate provider when the enterprise authorizes it."],
] as const;

export default function HowAzaelWorksPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">HOW AZAEL WORKS</p>
          <h1 className="approved-title mt-4 max-w-5xl">From Enterprise Discovery to potential Capital Fit.</h1>
          <p className="approved-copy mt-7">
            Azael starts by understanding how a business operates, what it is trying to achieve, what may stand in the way and what capital should accomplish. We are building toward a system that can relate this Enterprise Intelligence to what capital providers finance and require.
          </p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">AVAILABLE NOW · BEING TESTED</p>
          <h2 className="approved-title mt-4">Start with the enterprise.</h2>
          <p className="approved-copy mt-7">
            Enterprise Discovery is the starting point for Enterprise Intelligence. It develops an initial understanding of the business and identifies what should be understood next—without beginning with an exhaustive funding application.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden border border-azael-navy/10 bg-azael-navy/10 md:grid-cols-2 xl:grid-cols-5">
            {discoveryStages.map(([number, title, copy]) => (
              <article className="bg-white p-6" key={number}>
                <p className="kicker">{number}</p>
                <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-azael-navy">{title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-azael-slate">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">BUILDING TOWARD</p>
          <h2 className="approved-title mt-4 max-w-4xl">Relate enterprise understanding to capital requirements.</h2>
          <p className="approved-copy mt-7">
            Azael is developing a system designed to structure and build on Enterprise Intelligence over time, understand what capital providers finance and require, and explain where the two may or may not align.
          </p>
          <div className="approved-grid2 !mt-10 lg:!grid-cols-3">
            {futureStages.map(([number, title, copy]) => (
              <article className="approved-card" key={number}>
                <p className="kicker">{number}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="reassure-approved">
            The Enterprise Passport is being designed for a defined purpose and audience. It is not an open profile, and enterprise information would only be shared with appropriate authorization.
          </p>
        </div>
      </section>

      <section className="filter-system">
        <div className="container-page">
          <p className="eyebrow-light">THE QUESTION AT THE CENTRE</p>
          <h2>Is the enterprise understood well enough, and does its capital need align with what the provider finances and requires?</h2>
          <p className="intro">
            Potential Capital Fit is Azael&apos;s conditional explanation of that alignment. It should make the reasons for alignment or misalignment visible, show what remains uncertain and identify what the provider still needs to assess. It is not a financing approval or investment recommendation.
          </p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">WHERE AZAEL STOPS</p>
          <h2 className="approved-title mt-4 max-w-4xl">A structured handoff—not a replacement for provider judgment.</h2>
          <p className="approved-copy mt-7">
            Where potential alignment exists, Azael may support an introduction with the enterprise&apos;s authorization and relevant context. The provider then conducts its own verification, due diligence, regulatory checks, underwriting or investment assessment, and makes the final decision.
          </p>
          <div className="approved-grid2">
            <article className="approved-card">
              <p className="kicker">THE ENTERPRISE CONTROLS SHARING</p>
              <h3>Information is shared for an agreed purpose.</h3>
              <p>Azael does not provide enterprise information to capital providers without appropriate authorization.</p>
            </article>
            <article className="approved-card">
              <p className="kicker">THE PROVIDER DECIDES</p>
              <h3>Every provider retains its own process.</h3>
              <p>Azael&apos;s intelligence does not replace the provider&apos;s requirements, assessment or final decision.</p>
            </article>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-azael-navy/10 pt-8">
            <Link className="text-link" href="/explore-the-fit">
              Start Enterprise Discovery <Arrow className="arrow h-4 w-4" />
            </Link>
            <Link className="text-link" href="/explore-the-fit">
              Explore a Partnership <Arrow className="arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
