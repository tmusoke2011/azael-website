import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Businesses — Start with Enterprise Discovery",
  description: "Enterprise Discovery helps established African businesses understand what their journey requires, the responsible role of capital and what must be understood next.",
  alternates: { canonical: "/for-businesses" },
};

const discoveryQuestions = [
  ["01", "How does the business actually work?", "Build an initial understanding of the operating reality, commercial activity and capabilities already in place."],
  ["02", "What journey are you pursuing?", "Clarify the transition management is seeking and what a credible outcome would require."],
  ["03", "What is standing in the way?", "Identify the decisive constraint or question that must be understood before the business moves forward."],
  ["04", "What role should capital play?", "Determine what capital should accomplish—and whether capital is the responsible response at this stage."],
] as const;

const briefContents = [
  ["Enterprise today", "How Azael currently understands the business and its operating reality."],
  ["Intended transition", "The journey management is pursuing and the change it is trying to create."],
  ["Strategic Judgment", "Azael's initial judgment about what matters most at this stage."],
  ["Decisive question", "The question that must be resolved before the capital pathway becomes clearer."],
  ["What remains uncertain", "The limits of the current understanding and where additional evidence may be required."],
  ["Next intelligence", "What needs to be understood or evidenced next, and why."],
] as const;

export default function ForBusinessesPage() {
  return (
    <main>
      <PageHero
        image="https://pbs.twimg.com/media/FeIW5bpWQAE8kUH.jpg"
        eyebrow="FOR BUSINESSES"
        title="Understand what your journey requires before you pursue capital."
        lead="Azael works with established African businesses whose operating reality, transition and capital requirements cannot be understood through a conventional application alone."
        body="Enterprise Discovery helps you clarify what the journey requires, determine the responsible role of capital and identify what must be understood next."
        primaryAction={{ href: "/explore-the-fit", label: "Start Enterprise Discovery" }}
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHO IT IS FOR</p>
          <h2 className="approved-title mt-4">For businesses already creating value.</h2>
          <p className="approved-copy mt-7">
            Enterprise Discovery is designed for established businesses with customers and real commercial activity that are navigating a defined growth, expansion, professionalisation, recovery or transformation journey.
          </p>
        </div>
      </section>

      <section className="journey approved-alt">
        <div className="container-page">
          <div className="journey-head">
            <div>
              <p className="kicker mb-4">ENTERPRISE DISCOVERY</p>
              <h2>Start with Enterprise Discovery.</h2>
            </div>
            <p>Enterprise Discovery is a focused first step—not an exhaustive funding application. Azael begins with a light intake and focused conversation.</p>
          </div>
          <div className="steps">
            {discoveryQuestions.map(([number, heading, copy]) => (
              <article className="step" key={number}>
                <div className="n">{number}</div>
                <h3>{heading}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="assessment !bg-white">
        <div className="container-page assess-shell">
          <div className="assess-copy">
            <p className="kicker">THE ENTERPRISE DISCOVERY BRIEF</p>
            <h2>Leave with a clearer understanding of what comes next.</h2>
            <p>The Brief records Azael's initial understanding and prescribes the intelligence that should be built next.</p>
            <p>It is not a funding application, investment-readiness certificate or due-diligence report.</p>
          </div>
          <div className="assess-panel">
            <div className="profile-head-approved">
              <b>Enterprise Discovery Brief</b>
              <span>WHAT IT EXPLAINS</span>
            </div>
            {briefContents.map(([label, copy]) => (
              <div className="metric-approved" key={label}>
                <label>{label}</label>
                <div>{copy}</div>
              </div>
            ))}
            <p className="reassure-approved">The Brief makes the current judgment, uncertainty and next questions visible.</p>
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">AFTER DISCOVERY</p>
          <h2 className="approved-title mt-4">Build only the intelligence the journey requires.</h2>
          <p className="approved-copy mt-7">If deeper work is needed, Azael prescribes the next Enterprise Intelligence to build—progressively and for a defined purpose. Evidence is requested as it becomes relevant, not all at once.</p>
          <div className="approved-flow">
            <span>Enterprise Discovery</span><b>→</b><span>Initial Strategic Judgment</span><b>→</b><span>Prescribed intelligence</span><b>→</b><span>Potential capital fit</span><b>→</b><span>Consented handoff</span>
          </div>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-2xl font-semibold text-azael-navy">A clearer path through capital—not a promise of capital.</h3>
            <p className="approved-copy mt-5">Azael does not guarantee funding or replace provider underwriting. Where suitable alignment exists, Azael can support a consented handoff to a relevant provider, whose own assessment and decision-making remain independent.</p>
            <Link href="/explore-the-fit" className="text-link mt-7">
              Start Enterprise Discovery <Arrow className="arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
