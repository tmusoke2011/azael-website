import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Azael — Better Capital Decisions",
  description: "Azael helps African businesses prepare for capital and helps capital providers find and understand suitable businesses.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["01", "Start with the business", "Understand what the business does, where it is going and what is holding it back."],
  ["02", "Follow the evidence", "Build the case from what the available information supports and make important gaps clear."],
  ["03", "Pursue capital that fits", "Look for providers whose mandate aligns with the business and what the money needs to accomplish."],
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image="https://images.pexels.com/photos/30677714/pexels-photo-30677714.jpeg?auto=compress&cs=tinysrgb&w=2200"
        eyebrow="ABOUT AZAEL"
        title="Better-prepared businesses. Better-informed capital decisions."
        lead="Azael helps businesses prepare for capital and helps capital providers find and understand businesses that may fit."
      />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">THE PROBLEM</p>
          <h2 className="approved-title mt-4">The gap is not only a shortage of capital.</h2>
          <p className="approved-copy mt-7">Businesses can struggle to explain what they need, why they need it and what makes the request credible.</p>
          <p className="approved-copy mt-5">Capital providers can spend significant time reconstructing that picture before they can decide whether an opportunity is worth assessing—especially for smaller transactions.</p>
          <p className="approved-copy mt-5">Azael helps close that information gap.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">WHAT AZAEL DOES</p>
          <h2 className="approved-title mt-4">Work with both sides of the capital conversation.</h2>
          <div className="audience-editorial mt-10">
            <article className="audience-editorial-item"><p className="kicker">FOR BUSINESSES</p><h3>Prepare a credible capital case.</h3><p>Clarify the goal, the funding need and the information a provider will need to understand.</p></article>
            <article className="audience-editorial-item"><p className="kicker">FOR PROVIDERS</p><h3>Find and understand potential fit.</h3><p>Identify businesses aligned with the mandate and begin with clearer information before due diligence.</p></article>
          </div>
        </div>
      </section>

      <section className="trust-band-approved">
        <div className="container-page">
          <p className="kicker">TECHNOLOGY + JUDGEMENT</p>
          <h2>Use technology to reduce repetition—not replace judgement.</h2>
          <p className="approved-copy">Azael combines advisory work and technology to organise information, preserve what has already been established and avoid unnecessary repetition.</p>
          <p className="approved-copy mt-5">Human judgement provides the context. A business should not be reduced to a single score.</p>
        </div>
      </section>

      <section className="journey !bg-white">
        <div className="container-page">
          <div className="journey-head"><div><p className="kicker mb-4">HOW WE WORK</p><h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Clear principles for each capital case.</h2></div></div>
          <div className="steps !grid-cols-1 md:!grid-cols-3">
            {principles.map(([number, heading, copy]) => <article className="step" key={number}><div className="n">{number}</div><h3>{heading}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">OUR AMBITION</p>
          <h2 className="approved-title mt-4">Make more African businesses visible and credible to the right capital.</h2>
          <p className="approved-copy mt-7">Better-quality information should make it easier for businesses to explain their needs and for funders to assess whether those needs fit.</p>
          <p className="approved-copy mt-5"><strong>Do not lower the standard. Improve the information available to make the decision.</strong></p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4"><Link className="text-link" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link><Link className="text-link" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
