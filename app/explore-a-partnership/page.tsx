import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CapitalProviderForm } from "./CapitalProviderForm";

export const metadata: Metadata = {
  title: "Explore an Enterprise Intelligence Partnership",
  description:
    "Tell Azael about your capital mandate, requirements and the enterprise discovery, qualification or origination problem you want to solve.",
  alternates: { canonical: "/explore-a-partnership" },
};

export default function ExploreAPartnershipPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,.75fr)] lg:items-start">
          <div>
            <p className="kicker">FOR CAPITAL PROVIDERS</p>
            <h1 className="approved-title mt-4">Explore an Enterprise Intelligence partnership.</h1>
            <p className="approved-copy mt-7">
              Tell us about your capital mandate, what must be present before serious assessment and the discovery, qualification or origination problem you want to solve.
            </p>
          </div>
          <aside className="approved-card">
            <p className="kicker">A LIGHT FIRST STEP</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-azael-navy">Before you begin</h2>
            <ul className="mt-5 space-y-3 text-[15px] leading-6 text-azael-slate">
              <li>This form is intended for banks and alternative capital providers.</li>
              <li>Short, practical answers are enough for an initial review.</li>
              <li>Azael does not share enterprise information without appropriate authorization.</li>
              <li>Your organisation retains its own assessment and final decision.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page max-w-5xl">
          <CapitalProviderForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
