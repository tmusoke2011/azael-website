import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Businesses — Prepare for a Credible Capital Conversation",
  description: "Azael helps African businesses establish the case behind a capital need, determine what the money must accomplish and explore where the need may fit.",
  alternates: { canonical: "/for-businesses" },
};

const steps = [
  ["01", "Understand", "Establish how the business works today and what management is trying to achieve."],
  ["02", "Determine", "Work out what is standing in the way and whether capital can address it."],
  ["03", "Prepare", "If capital makes sense, establish what the money needs to accomplish and build the information needed to support the case."],
  ["04", "Fit", "Explore where the need may fit with providers able and willing to finance it."],
] as const;

const briefItems = [
  ["The business today", "How we currently understand the business and how it operates."],
  ["What you are trying to achieve", "Where management wants to take the business and why it matters now."],
  ["What may be standing in the way", "Our initial view of the problem and the possible role of capital."],
  ["What needs to happen next", "The questions, information or work needed before the case can progress."],
] as const;

export default function ForBusinessesPage() {
  return (
    <main>
      <PageHero
        image="https://pbs.twimg.com/media/FeIW5bpWQAE8kUH.jpg"
        eyebrow="FOR BUSINESSES"
        title="Prepare your business for a credible capital conversation."
        lead="You may already know what you want to achieve and how much capital you believe you need. Before a capital provider can make a serious decision, it needs to understand the business behind that request—how it works, what you are trying to accomplish, what the money needs to do and what supports the case. Azael helps establish that picture."
        primaryAction={{ href: "/start-discovery", label: "Start Your Capital Journey" }}
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">GETTING STARTED</p>
          <h2 className="approved-title mt-4">Start with the business behind the funding request.</h2>
          <p className="approved-copy mt-7">Tell us about the business, what you are trying to achieve and how you believe capital could help.</p>
          <p className="approved-copy mt-5">We begin with a few questions and then focus on what matters for your particular situation.</p>
          <p className="approved-copy mt-5"><strong>No documents are required to begin.</strong></p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="journey-head">
            <div><p className="kicker mb-4">WHAT HAPPENS NEXT</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Follow the questions a capital provider will need answered.</h2></div>
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
            <p className="kicker">YOUR INITIAL VIEW</p>
            <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Know what needs to happen next.</h2>
            <p>After reviewing the business, Azael gives you an initial view of the business, the journey management is pursuing, what may be standing in the way and what needs to happen next.</p>
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
          <p className="approved-copy mt-7">If capital can address the problem, we work out what the money needs to accomplish, how much the business can use effectively and what kind of financing may be suitable.</p>
          <p className="approved-copy mt-5">We may find that the amount, timing or type of capital needed is different from what was first expected. Only then does it make sense to explore suitable providers.</p>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-2xl font-semibold text-azael-navy">A credible capital case starts with the business.</h3>
            <p className="approved-copy mt-5">Azael does not simply take a funding request and start making introductions. We first establish the business behind it, what capital needs to accomplish and what must be demonstrated before a provider can make its own decision.</p>
            <p className="approved-copy mt-5">The business controls what is shared. Capital providers retain their own assessment and funding decisions.</p>
            <Link href="/start-discovery" className="primary-cta mt-7 !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">Start Your Capital Journey <Arrow className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
