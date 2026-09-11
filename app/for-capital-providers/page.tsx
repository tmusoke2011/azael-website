import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Capital Providers — See the Business Clearly Enough to Decide",
  description: "Azael helps investors and other capital providers identify businesses whose needs may fit and understand the business before deciding whether to investigate further.",
  alternates: { canonical: "/for-capital-providers" },
};

export default function ForCapitalProvidersPage() {
  return (
    <main>
      <PageHero image="https://www.tunnellingnigeria.org/modern-city-skyline-nigeria-aerial-view-urban-infr.jpg" eyebrow="FOR CAPITAL PROVIDERS" title="See the business clearly enough to decide." lead="Azael helps investors and other capital providers identify businesses whose needs may fit and understand the business before deciding whether to investigate further." primaryAction={{ href: "/explore-a-partnership", label: "Partner with Azael" }} />

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHY IT MATTERS</p>
          <h2 className="approved-title mt-4">Smaller transactions can be expensive to assess.</h2>
          <p className="approved-copy mt-7">Business information is often fragmented. Understanding and checking it takes time. Much of that work may then be repeated as a business moves from one provider to another.</p>
          <p className="approved-copy mt-5">For smaller transactions, those costs can determine whether an otherwise productive business is economical to consider at all.</p>
        </div>
      </section>

      <section className="assessment !bg-azael-cream">
        <div className="container-page assess-shell">
          <div className="assess-copy">
            <p className="kicker">A BETTER STARTING POINT</p>
            <h2 className="!text-[clamp(2.25rem,4.5vw,3.65rem)] !leading-[1.08] !tracking-[-.04em]">Don&apos;t start from zero.</h2>
            <p>Azael builds a structured picture of the business, what management is trying to achieve, why capital may be needed, what the available information supports and what still needs to be understood.</p>
            <p><strong>The aim is not to replace your own assessment. It is to reduce how much has to be rediscovered before serious consideration can begin.</strong></p>
          </div>
          <div className="assess-panel">
            <div className="profile-head-approved"><b>A structured picture of the business</b><span>WHAT AZAEL ESTABLISHES</span></div>
            <div className="metric-approved"><label>The business</label><div>How does it operate, earn money and serve customers?</div></div>
            <div className="metric-approved"><label>What management is trying to do</label><div>Where is the business trying to go?</div></div>
            <div className="metric-approved"><label>The capital need</label><div>What does the money need to accomplish?</div></div>
            <div className="metric-approved"><label>What supports the case</label><div>What information already exists, and what still needs to be established?</div></div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">FINDING POTENTIAL FIT</p>
          <h2 className="approved-title mt-4">See where the need may fit.</h2>
          <p className="approved-copy mt-7">Different providers finance different kinds of businesses and different needs. Azael compares what the business needs with what a provider is able and willing to finance.</p>
          <div className="fit-editorial">
            <article className="fit-editorial-item"><p className="kicker">THE BUSINESS</p><h3>What does the money need to accomplish?</h3><p>Understand the purpose, amount, timing and circumstances of the need.</p></article>
            <article className="fit-editorial-item"><p className="kicker">THE PROVIDER</p><h3>What are you able and willing to finance?</h3><p>Understand the businesses and financing needs your institution is designed to support.</p></article>
          </div>
          <p className="reassure-approved">Potential fit is a reason to investigate further—not a credit, investment or funding decision.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <p className="kicker">INVESTORS &amp; FUNDS · BANKS · MFIs &amp; SACCOS · OTHER CAPITAL PROVIDERS</p>
          <h2 className="approved-title mt-4">Different capital. The same need to understand the business.</h2>
          <p className="approved-copy mt-7">Different providers finance different businesses, needs and risks. Azael is designed to work alongside each provider&apos;s own assessment and decision process.</p>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <h3 className="font-display text-2xl font-semibold text-azael-navy">Spend your attention where it matters.</h3>
            <p className="approved-copy mt-5">Azael helps establish the business and capital need before a potential opportunity reaches serious assessment. That allows your team to focus on what still needs to be tested, verified or understood.</p>
            <p className="approved-copy mt-5"><strong>Azael does not replace your assessment or funding decision.</strong></p>
            <Link href="/explore-a-partnership" className="primary-cta mt-7 !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">Partner with Azael <Arrow className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
