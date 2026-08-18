import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Azael — Enterprise Intelligence for African Capital Markets",
  description:
    "Azael is building Enterprise Intelligence that helps businesses and capital providers begin with a structured understanding of the enterprise.",
  alternates: { canonical: "/about" },
};

const principles = [
  [
    "01 · PRINCIPLE",
    "Understanding before capital.",
    "Begin with how the business operates, what it is trying to achieve and what may stand in the way—not with an assumed funding solution.",
  ],
  [
    "02 · PRINCIPLE",
    "Understand the need before deciding the solution.",
    "Capital's role should be based on what the business is trying to achieve, what is holding it back and what the money must accomplish.",
  ],
  [
    "03 · PRINCIPLE",
    "Evidence built progressively.",
    "Ask for evidence when it serves a clear decision, and distinguish between what management says, what the evidence shows and what Azael concludes.",
  ],
  [
    "04 · PRINCIPLE",
    "Alignment should be explained.",
    "Potential alignment should show how the business's need compares with what the provider finances and requires, including what does not fit and what remains unclear.",
  ],
] as const;

const trustPrinciples = [
  [
    "Claims and evidence are separated.",
    "What management reports, what available evidence supports and what Azael judges should not be treated as the same thing.",
  ],
  [
    "Uncertainty remains visible.",
    "Missing information, contradictions and unresolved questions remain part of the intelligence rather than being hidden.",
  ],
  [
    "Enterprises control sharing.",
    "Enterprise information is shared for a defined purpose and only with appropriate authorization.",
  ],
  [
    "Providers retain decisions.",
    "Capital providers conduct their own verification, diligence, underwriting or investment assessment and make the final decision.",
  ],
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image="https://images.pexels.com/photos/30677714/pexels-photo-30677714.jpeg?auto=compress&cs=tinysrgb&w=2200"
        eyebrow="ABOUT AZAEL"
        title="The capital gap is also an intelligence gap."
        body="Businesses need to understand what their journeys require before they pursue capital. Capital providers need enough context to decide where serious assessment is worthwhile. Azael exists to build the intelligence between those decisions."
      />

      <section className="about-editorial-approved">
        <div className="container-page">
          <div className="about-lead-approved">
            <h2>Azael exists to make useful enterprise understanding easier to build, strengthen and reuse.</h2>
            <div>
              <p>
                Azael starts with Enterprise Discovery—a focused process that builds an initial understanding of the business and identifies what should be understood next.
              </p>
              <p className="mt-5">
                We are developing a system through which that understanding can be strengthened over time and, with the enterprise&apos;s permission, used for a specific capital conversation.
              </p>
            </div>
          </div>
          <div className="beliefs-approved">
            {principles.map(([number, heading, copy]) => (
              <div className="belief-approved" key={number}>
                <div className="num">{number}</div>
                <div>
                  <h3>{heading}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-band-approved">
        <div className="container-page">
          <p className="kicker">HOW AZAEL BUILDS TRUST</p>
          <h2>Trust depends on showing the limits of the intelligence.</h2>
          <p className="approved-copy">
            Azael&apos;s value does not depend on every enterprise appearing attractive or every provider appearing suitable. It depends on representing what is understood, what supports that understanding and what remains unresolved.
          </p>
          <div className="trust-grid-approved">
            {trustPrinciples.map(([heading, copy]) => (
              <article className="trust-item-approved" key={heading}>
                <h3>{heading}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHAT WE ARE BUILDING</p>
          <h2 className="approved-title mt-4">Enterprise Discovery today. Reusable intelligence over time.</h2>
          <p className="approved-copy mt-7">
            Today, Enterprise Discovery gives a business an initial understanding, Azael&apos;s first judgment about what matters most, a concise Discovery Brief and a clear next step.
          </p>
          <p className="approved-copy mt-5">
            Azael is building a system that can strengthen and reuse this understanding, relate it to what capital providers finance and require, and explain where alignment may—or may not—exist. Where appropriate, this may support an introduction made with the enterprise&apos;s authorization.
          </p>
          <Link href="/how-azael-works" className="text-link mt-8">
            See How Azael Works <Arrow className="arrow h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
