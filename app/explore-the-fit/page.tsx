import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Start with Azael — Choose the Right Starting Point",
  description:
    "Choose how to start with Azael: Enterprise Discovery for established African businesses or a partnership conversation for capital providers.",
  alternates: { canonical: "/explore-the-fit" },
};

const businessSteps = [
  "Complete a short initial form about the business, its goals and what capital may need to accomplish.",
  "Azael reviews the information and determines whether Enterprise Discovery is an appropriate next step.",
  "Where appropriate, a focused conversation develops an initial understanding and identifies what should be understood next.",
] as const;

const providerSteps = [
  "Tell us about your mandate, markets, instruments and the origination or assessment problem you are trying to solve.",
  "Azael reviews whether Enterprise Intelligence could support a useful partnership or pilot.",
  "Where there is a relevant use case, we discuss the information required and how an authorized enterprise handoff should work.",
] as const;

function NextSteps({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="mt-6 border-t border-azael-navy/10">
      {steps.map((step, index) => (
        <li className="grid grid-cols-[28px_1fr] gap-3 border-b border-azael-navy/10 py-4 last:border-b-0" key={step}>
          <span className="text-xs font-bold tracking-wider text-azael-gold">0{index + 1}</span>
          <span className="text-[15px] leading-6 text-azael-slate">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function StartWithAzaelPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">START WITH AZAEL</p>
          <h1 className="approved-title mt-4">Choose the right starting point.</h1>
          <p className="approved-copy mt-7">
            Azael works with established African businesses and with banks and alternative capital providers. Choose the path that best describes why you are here.
          </p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <div className="approved-grid2 !mt-0">
            <article className="approved-card">
              <p className="kicker">FOR BUSINESSES</p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">
                Start with Enterprise Discovery.
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-azael-slate">
                For businesses with customers and active sales that are preparing to grow, expand, strengthen their management and systems, recover or make a major change.
              </p>
              <p className="kicker mt-8">WHAT HAPPENS NEXT</p>
              <NextSteps steps={businessSteps} />
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link className="text-link" href="/start-discovery">
                  Start Enterprise Discovery
                </Link>
              </div>
            </article>

            <article className="approved-card">
              <p className="kicker">FOR CAPITAL PROVIDERS</p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">
                Explore an Enterprise Intelligence partnership.
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-azael-slate">
                For banks and alternative capital providers exploring how structured enterprise understanding could support discovery, qualification or origination.
              </p>
              <p className="kicker mt-8">WHAT HAPPENS NEXT</p>
              <NextSteps steps={providerSteps} />
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link className="text-link" href="/explore-a-partnership">
                  Explore a Partnership
                </Link>
              </div>
            </article>
          </div>

          <div className="reassure-approved mt-10">
            <h2 className="font-display text-2xl font-semibold text-azael-navy">A starting point—not a promise of capital or pipeline.</h2>
            <p className="mt-4 max-w-4xl">
              Enterprise Discovery is not a funding application or guarantee of funding. A provider enquiry does not create a partnership or a right to access enterprise information. Any future introduction requires appropriate enterprise authorization, and every provider retains its own assessment and final decision.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
