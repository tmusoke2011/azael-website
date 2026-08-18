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
    "Diagnosis before prescription.",
    "The role of capital should follow from the enterprise journey, the main constraint and what the business actually needs to accomplish.",
  ],
  [
    "03 · PRINCIPLE",
    "Evidence built progressively.",
    "Request information and analysis when they serve a decision, while keeping clear what is reported, observed, documented, verified, inferred or judged.",
  ],
  [
    "04 · PRINCIPLE",
    "Alignment should be explained.",
    "Potential fit should show where an enterprise need and a provider mandate may align, where they may not, and what remains uncertain.",
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
            <h2>Azael exists to change the economics of understanding enterprises.</h2>
            <div>
              <p>
                Understanding an enterprise can require repeated conversations, applications and analysis before either side knows whether a capital discussion is worth pursuing.
              </p>
              <p className="mt-5">
                Azael begins with Enterprise Discovery and is building toward Enterprise Intelligence that can deepen over time, support an informed initial judgment and be shared for a defined purpose with the enterprise&apos;s authorization.
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
            Today, Enterprise Discovery develops initial Enterprise Intelligence, an Initial Strategic Judgment, an Enterprise Discovery Brief and a clear view of what should be understood next.
          </p>
          <p className="approved-copy mt-5">
            Azael is building toward reusable Enterprise Intelligence that can be related to what capital providers finance and require, helping explain potential Capital Fit and support an authorized provider introduction where appropriate.
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
