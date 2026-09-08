import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Get Started with Azael",
  description: "Choose the Azael path that fits you: For Businesses or For Capital Providers.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">GET STARTED</p>
          <h1 className="approved-title mt-4">How can Azael help?</h1>
          <p className="approved-copy mt-7">Choose the path that best describes why you are here.</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page approved-grid2 !mt-0">
          <article className="approved-card">
            <p className="kicker">I RUN A BUSINESS</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">Know what your ambition requires.</h2>
            <p className="mt-5 text-[16px] leading-7 text-azael-slate">Understand what is holding the business back, whether capital can help and what must be established before pursuing it.</p>
            <Link className="text-link mt-7" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link>
          </article>

          <article className="approved-card">
            <p className="kicker">I PROVIDE CAPITAL</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.35rem)] font-semibold leading-tight text-azael-navy">See the business clearly enough to decide.</h2>
            <p className="mt-5 text-[16px] leading-7 text-azael-slate">Explore how Azael can help your institution assess African businesses with more of the context that matters already established.</p>
            <Link className="text-link mt-7" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
