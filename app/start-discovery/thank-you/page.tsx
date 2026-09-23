import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ClearDiscoveryDraft } from "./ClearDiscoveryDraft";

export const metadata: Metadata = {
  title: "Capital Enquiry Received",
  robots: { index: false, follow: false },
};

const nextSteps = [
  ["01", "We review your enquiry", "We will look at the business, what you are trying to achieve and how you believe capital could help."],
  ["02", "We contact you", "We may suggest a focused conversation or ask for a small amount of additional information."],
  ["03", "We agree the next step", "If Azael can help, we will explain what we recommend, what it would involve and what should happen next. You can then decide whether you would like to proceed."],
] as const;

export default function DiscoveryThankYouPage() {
  return (
    <main>
      <ClearDiscoveryDraft />
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">CAPITAL ENQUIRY RECEIVED</p>
          <h1 className="approved-title mt-4 max-w-4xl">Thank you. Your enquiry has been submitted.</h1>
          <p className="approved-copy mt-7">Azael will review your business, your goal and the capital need you described. We will contact you using the details you provided.</p>
          <div className="mt-12 grid gap-8 border-t border-azael-navy/10 pt-9 md:grid-cols-3">
            {nextSteps.map(([number, heading, copy]) => <article key={number}><p className="kicker">{number}</p><h2 className="mt-3 font-display text-xl font-semibold text-azael-navy">{heading}</h2><p className="mt-3 text-[16px] leading-7 text-azael-slate">{copy}</p></article>)}
          </div>
          <div className="reassure-approved mt-10">We will not share your information with a capital provider without your agreement.</div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            <Link className="text-link" href="/how-azael-works">See How Azael Works <Arrow className="arrow h-4 w-4" /></Link>
            <Link className="text-link" href="/">Return to Home <Arrow className="arrow h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
