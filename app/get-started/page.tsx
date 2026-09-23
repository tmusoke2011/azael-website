import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Get Started with Azael",
  description: "Choose whether you are looking for capital for a business or want to find businesses aligned with what your organisation finances.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">GET STARTED</p>
          <h1 className="approved-title mt-4">How would you like to work with Azael?</h1>
          <p className="approved-copy mt-7">Choose the option that best describes what you need.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <div className="border-t border-azael-navy/15">
            <Link href="/capital-enquiry" className="group grid gap-5 border-b border-azael-navy/15 py-10 md:grid-cols-[0.75fr_1.25fr_auto] md:items-center md:gap-10 md:py-12">
              <div><p className="kicker">I&apos;M LOOKING FOR CAPITAL</p><h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">I need capital for my business.</h2></div>
              <p className="text-[17px] leading-7 text-azael-slate">Tell us what your business does, what you are trying to achieve and how you believe funding could help. No documents are required to begin.</p>
              <span className="text-link whitespace-nowrap">Start Your Capital Enquiry <Arrow className="arrow h-4 w-4" /></span>
            </Link>

            <Link href="/capital-provider-enquiry" className="group grid gap-5 border-b border-azael-navy/15 py-10 md:grid-cols-[0.75fr_1.25fr_auto] md:items-center md:gap-10 md:py-12">
              <div><p className="kicker">I PROVIDE CAPITAL</p><h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">I want to find businesses aligned with what we finance.</h2></div>
              <p className="text-[17px] leading-7 text-azael-slate">Tell us about your mandate, the businesses and capital needs you support, and the opportunities you want to reach.</p>
              <span className="text-link whitespace-nowrap">Tell Us About Your Mandate <Arrow className="arrow h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
