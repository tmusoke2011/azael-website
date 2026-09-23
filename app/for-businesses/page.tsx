import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Businesses — Prepare for the Right Capital",
  description: "Work out what your business needs, build a credible funding case and identify suitable sources of capital.",
  alternates: { canonical: "/for-businesses" },
};

const caseSteps = [
  ["01", "Clarify what the business needs", "Understand the goal, what is holding the business back and whether capital can help."],
  ["02", "Structure the capital", "Work out what the money is for, how much is needed, when it is needed and what type may fit."],
  ["03", "Prepare and pursue", "Bring together the right information, identify suitable providers and support the next conversation."],
] as const;

const nextSteps = [
  ["01", "Tell us about your business", "Answer a few guided questions. No documents are required to begin."],
  ["02", "We review the need", "We look at the goal, the obstacle and how capital may help."],
  ["03", "Prepare the capital case", "If capital makes sense, we make the purpose, amount, timing and supporting information clear."],
  ["04", "Engage suitable providers", "We explore providers whose mandate may fit the business and its need."],
] as const;

export default function ForBusinessesPage() {
  return (
    <main>
      <PageHero
        image="https://pbs.twimg.com/media/FeIW5bpWQAE8kUH.jpg"
        eyebrow="FOR BUSINESSES"
        title="Prepare your business for the right capital."
        lead="Azael helps you work out what the business needs, build a credible funding case and identify suitable sources of capital."
        body="You do not need to have every answer or prepare documents before you begin. Tell us what you are trying to achieve and how you believe capital could help."
        primaryAction={{ href: "/capital-enquiry", label: "Start Your Capital Enquiry" }}
      />

      <section className="journey !bg-white">
        <div className="container-page">
          <div className="journey-head"><div><p className="kicker mb-4">FROM NEED TO CASE</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Turn “we need capital” into a plan a funder can assess.</h2></div></div>
          <div className="steps !grid-cols-1 md:!grid-cols-3">
            {caseSteps.map(([number, heading, copy]) => <article className="step" key={number}><div className="n">{number}</div><h3>{heading}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="journey-head"><div><p className="kicker mb-4">WHAT HAPPENS NEXT</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Begin with a few questions. We build from there.</h2></div></div>
          <div className="steps">
            {nextSteps.map(([number, heading, copy]) => <article className="step" key={number}><div className="n">{number}</div><h3>{heading}</h3><p>{copy}</p></article>)}
          </div>
          <p className="approved-copy mt-10">If Azael can help, we will explain what we recommend, what it would involve and what should happen next. You can then decide whether you would like to proceed.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">READY TO BEGIN?</p>
          <h2 className="approved-title mt-4">Tell us what you are trying to achieve.</h2>
          <p className="approved-copy mt-7">Start with what your business does, where you want it to go and how you believe funding could help.</p>
          <Link href="/capital-enquiry" className="primary-cta mt-7 !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">Start Your Capital Enquiry <Arrow className="h-4 w-4" /></Link>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-azael-slate">Submitting an enquiry is not a funding application and does not guarantee that capital will be secured.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
