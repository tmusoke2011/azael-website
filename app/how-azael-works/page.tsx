import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "How Azael Works — Understand First, Then Pursue the Right Capital",
  description: "Azael establishes the business behind a capital need, determines what the money must accomplish and explores where the need may fit.",
  alternates: { canonical: "/how-azael-works" },
};

const stages = [
  ["01", "Understand", "Start with the business behind the funding request.", "We begin with how the business works today, what management is trying to achieve and why capital is being considered. We start with a few questions and a focused conversation. You do not need to prepare extensive documents upfront."],
  ["02", "Determine", "Work out what is actually needed.", "We look at what may be standing between the business and what it wants to achieve. If capital can help, we work out what the money needs to accomplish and what we still need to know to support that case."],
  ["03", "Prepare", "Build a case a capital provider can understand.", "Where capital makes sense, we bring together the information needed to explain the business, what it is trying to achieve, why capital is needed and what supports the case. We may find that the amount, timing or type of capital needed is different from what was first expected."],
  ["04", "Fit", "Find where the need may fit.", "Different providers finance different kinds of businesses and different needs. Azael looks for where what the business needs may fit with what a bank, SACCO, fund or other capital provider is able and willing to finance. Where there is potential fit, the business decides what may be shared. The provider carries out its own assessment and makes its own decision."],
] as const;

export default function HowAzaelWorksPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">HOW AZAEL WORKS</p>
          <h1 className="approved-title mt-4 max-w-5xl">Understand first. Then pursue the right capital.</h1>
          <p className="approved-copy mt-7">If you are looking for capital, the people providing it need to understand the business, why the money is needed and whether it makes sense.</p>
          <p className="approved-copy mt-5">Azael helps establish that picture before deciding which sources of capital may be suitable.</p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="steps">
            {stages.map(([number, title, heading, copy]) => (
              <article className="step" key={number}>
                <div className="n">{number} · {title}</div>
                <h3>{heading}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">THE PRINCIPLE</p>
          <h2 className="approved-title mt-4">Capital should follow understanding.</h2>
          <p className="approved-copy mt-7">Azael does not simply take a funding request and start making introductions. We first establish the business behind the request and what the capital needs to accomplish.</p>
          <p className="approved-copy mt-5">If there is a potential fit, the capital provider still carries out its own assessment and decides whether to proceed.</p>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/for-businesses" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">For Businesses <Arrow className="h-4 w-4" /></Link>
              <Link className="text-link" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
