import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Businesses — Understand What Your Ambition Requires",
  description: "Azael helps established African businesses determine what their ambitions require, whether capital can help and what must be established before pursuing it.",
  alternates: { canonical: "/for-businesses" },
};

const steps = [
  ["01", "Understand", "Get a clear picture of the business today."],
  ["02", "Determine", "Work out what is really holding it back and whether capital can help."],
  ["03", "Build", "Go deeper where evidence can change the decision."],
  ["04", "Connect", "If capital makes sense, explore suitable providers."],
] as const;

const briefItems = [
  ["The business", "How Azael currently sees the business and its ambition."],
  ["The constraint", "What appears most likely to stand in the way."],
  ["What remains unclear", "The questions or evidence that could change the decision."],
  ["What happens next", "The work that should be done next, and why."],
] as const;

export default function ForBusinessesPage() {
  return (
    <main>
      <PageHero
        image="https://pbs.twimg.com/media/FeIW5bpWQAE8kUH.jpg"
        eyebrow="FOR BUSINESSES"
        title="Know what your ambition requires before pursuing capital."
        lead="Azael starts with your business—not a funding application—to understand what you are trying to achieve, what stands in the way and whether capital can help."
        primaryAction={{ href: "/start-discovery", label: "Start Discovery" }}
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">DISCOVERY</p>
          <h2 className="approved-title mt-4">You don&apos;t need to arrive with all the answers.</h2>
          <p className="approved-copy mt-7">Tell us what the business does, what you are trying to achieve, what is getting in the way and how you think capital could help.</p>
          <p className="approved-copy mt-5"><strong>No extensive documentation is required to begin.</strong></p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="journey-head">
            <div><p className="kicker mb-4">WHAT HAPPENS NEXT</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Focus on the questions that matter.</h2></div>
            <p>We begin lightly and go deeper only where more information can change what should happen next.</p>
          </div>
          <div className="steps">
            {steps.map(([number, heading, copy]) => (
              <article className="step" key={number}><div className="n">{number}</div><h3>{heading}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="assessment !bg-white">
        <div className="container-page assess-shell">
          <div className="assess-copy">
            <p className="kicker">YOUR DISCOVERY BRIEF</p>
            <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Leave Discovery knowing what comes next.</h2>
            <p>We give you a concise view of what we have learned, what we think is happening, what remains unclear and what needs to be investigated next.</p>
          </div>
          <div className="brief-editorial">
            <div className="brief-editorial-head"><span>WHAT IT MAKES CLEAR</span></div>
            {briefItems.map(([label, copy]) => (
              <div className="brief-editorial-item" key={label}><label>{label}</label><div>{copy}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">WHERE CAPITAL CAN HELP</p>
          <h2 className="approved-title mt-4">Work out the purpose before the amount.</h2>
          <p className="approved-copy mt-7">If capital is appropriate, we determine what it needs to accomplish, how much the business can use productively and what kind of financing may fit.</p>
          <p className="approved-copy mt-5">Only then does it make sense to look for suitable providers.</p>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-2xl font-semibold text-azael-navy">Capital is not the starting assumption.</h3>
            <p className="approved-copy mt-5">Azael does not guarantee funding. We help establish whether capital addresses the real constraint, what it should accomplish and what must be demonstrated before a provider can make its own decision.</p>
            <Link href="/start-discovery" className="primary-cta mt-7 !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">Start Discovery <Arrow className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
