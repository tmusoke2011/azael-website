import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ClearProviderDraft } from "./ClearProviderDraft";

export const metadata: Metadata = {
  title: "Provider Enquiry Received",
  robots: { index: false, follow: false },
};

const nextSteps = [
  ["01", "We review your mandate", "We will look at what your organisation finances, the businesses you support and where your team needs help."],
  ["02", "We identify a practical starting point", "This could be a defined sourcing mandate, an early screening need or a focused pilot."],
  ["03", "We discuss how to work together", "Before any work begins or information is shared, we will agree the purpose, scope and necessary authorisations."],
] as const;

export default function PartnershipThankYouPage() {
  return (
    <main>
      <ClearProviderDraft />
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">PROVIDER ENQUIRY RECEIVED</p>
          <h1 className="approved-title mt-4 max-w-4xl">Thank you. We have received your mandate.</h1>
          <p className="approved-copy mt-7">Azael will review what your organisation finances, the businesses you want to reach and where your team needs support. We will contact you to discuss a suitable starting point.</p>
          <div className="mt-12 grid gap-8 border-t border-azael-navy/10 pt-9 md:grid-cols-3">
            {nextSteps.map(([number, heading, copy]) => <article key={number}><p className="kicker">{number}</p><h2 className="mt-3 font-display text-xl font-semibold text-azael-navy">{heading}</h2><p className="mt-3 text-[16px] leading-7 text-azael-slate">{copy}</p></article>)}
          </div>
          <div className="reassure-approved mt-10">Your organisation retains its own due diligence, assessment and final decision.</div>
          <Link className="text-link mt-9" href="/for-capital-providers">Return to For Capital Providers <Arrow className="arrow h-4 w-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
