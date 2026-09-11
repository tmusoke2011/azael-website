import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Get Started with Azael",
  description: "Tell Azael whether you are looking for capital for a business or provide capital to African businesses.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">GET STARTED</p>
          <h1 className="approved-title mt-4">What brings you to Azael?</h1>
          <p className="approved-copy mt-7">Choose the path that best describes what you are trying to do.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <div className="border-t border-azael-navy/15">
            <Link href="/start-discovery" className="group grid gap-5 border-b border-azael-navy/15 py-10 md:grid-cols-[0.75fr_1.25fr_auto] md:items-center md:gap-10 md:py-12">
              <div><p className="kicker">I&apos;M LOOKING FOR CAPITAL</p><h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">I need capital for a business.</h2></div>
              <p className="text-[17px] leading-7 text-azael-slate">Tell us about the business, what you are trying to achieve and what you believe the money needs to accomplish. We&apos;ll start there and work out what needs to be established before suitable sources of capital can be explored.</p>
              <span className="text-link whitespace-nowrap">Start <Arrow className="arrow h-4 w-4" /></span>
            </Link>

            <Link href="/explore-a-partnership" className="group grid gap-5 border-b border-azael-navy/15 py-10 md:grid-cols-[0.75fr_1.25fr_auto] md:items-center md:gap-10 md:py-12">
              <div><p className="kicker">I PROVIDE CAPITAL</p><h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">I want to find and understand businesses that may fit.</h2></div>
              <p className="text-[17px] leading-7 text-azael-slate">Tell us what kinds of businesses and financing needs you support. We&apos;ll explore how Azael can help identify potential fit and begin with more of the business already understood.</p>
              <span className="text-link whitespace-nowrap">Explore a Partnership <Arrow className="arrow h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
