import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Businesses — Start with Enterprise Discovery",
  description: "Enterprise Discovery helps established African businesses understand what they are trying to achieve, what it will take, what capital should accomplish and what needs to be understood next.",
  alternates: { canonical: "/for-businesses" },
};

const discoveryQuestions = [
  ["01", "How does the business actually work?", "We look at how the business operates, earns money and serves customers."],
  ["02", "What are you trying to achieve?", "We clarify the goal and what success would look like."],
  ["03", "What is standing in the way?", "We identify the main issue or unanswered question that could affect the plan."],
  ["04", "What should capital accomplish?", "We consider what capital would need to achieve—and whether it is needed now."],
] as const;

const briefContents = [
  ["Business today", "How the business works today."],
  ["What you are trying to achieve", "The goal management is pursuing and the change it is trying to create."],
  ["Initial Strategic Judgment", "Azael's initial view of the most important issue to address."],
  ["Key question", "The question that must be answered before the next step becomes clearer."],
  ["What is not yet clear", "The limits of the current understanding and where more evidence may be needed."],
  ["What should be understood next", "The information or analysis that should be developed next, and why."],
] as const;

export default function ForBusinessesPage() {
  return (
    <main>
      <PageHero
        image="https://pbs.twimg.com/media/FeIW5bpWQAE8kUH.jpg"
        eyebrow="FOR BUSINESSES"
        title="Understand what your business needs before you pursue capital."
        lead="Azael works with established African businesses whose goals, operations and funding needs cannot be fully understood from an application form and financial statements alone."
        body="Enterprise Discovery helps you clarify what the business is trying to achieve, what it will take, what capital should accomplish and what needs to be understood next."
        primaryAction={{ href: "/explore-the-fit", label: "Start Enterprise Discovery" }}
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHO IT IS FOR</p>
          <h2 className="approved-title mt-4">For businesses already creating value.</h2>
          <p className="approved-copy mt-7">
            Enterprise Discovery is designed for businesses that already have customers and active sales, and are preparing to grow, expand, strengthen their management and systems, recover or make a major change.
          </p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="journey-head">
            <div>
              <p className="kicker mb-4">ENTERPRISE DISCOVERY</p>
              <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Start with Enterprise Discovery.</h2>
            </div>
            <p>Enterprise Discovery is a focused first step—not an exhaustive funding application. It begins with a short initial form and focused conversation.</p>
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
            <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Leave with a clearer understanding of what comes next.</h2>
            <p>The Enterprise Discovery Brief summarizes how Azael currently understands the business and sets out what information or analysis is needed next.</p>
            <p>It is not a funding application, proof that the business is investment-ready or a substitute for a provider&apos;s full assessment.</p>
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
            <p className="reassure-approved">The Brief makes Azael&apos;s current view, the open questions and the next step clear.</p>
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">AFTER DISCOVERY</p>
          <h2 className="approved-title mt-4">Build only what the next decision requires.</h2>
          <p className="approved-copy mt-7">If more work is needed, Azael sets out the information and analysis to develop next, for a clear purpose. We ask for evidence only when it becomes relevant—not all at once.</p>
          <div className="approved-flow">
            <span>Enterprise Discovery</span><b>→</b><span>Initial Strategic Judgment</span><b>→</b><span>Next information and analysis</span><b>→</b><span>Possible provider alignment</span><b>→</b><span>Introduction with your consent</span>
          </div>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-2xl font-semibold text-azael-navy">A clearer path through capital—not a promise of capital.</h3>
            <p className="approved-copy mt-5">Azael does not guarantee funding or make decisions for banks, investors or other capital providers. If there appears to be suitable alignment, Azael can make an introduction with your consent. The provider then carries out its own assessment and makes its own decision.</p>
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
