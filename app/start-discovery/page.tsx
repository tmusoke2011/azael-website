import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { EnterpriseDiscoveryForm } from "./EnterpriseDiscoveryForm";

export const metadata: Metadata = {
  title: "Start Enterprise Discovery",
  description: "Begin Enterprise Discovery with a short initial enquiry about your business, its intended transition and what capital may need to accomplish.",
  alternates: { canonical: "/start-discovery" },
};

const nextSteps = [
  "Azael reviews whether Enterprise Discovery is an appropriate next step.",
  "Where appropriate, we arrange a focused conversation to develop an initial understanding.",
  "The process identifies the decisive questions and what should be understood next.",
] as const;

export default function StartDiscoveryPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">ENTERPRISE DISCOVERY</p>
          <h1 className="approved-title mt-4">Help us understand where the business is going.</h1>
          <p className="approved-copy mt-7">
            This short initial enquiry helps Azael understand the enterprise today, the transition you are pursuing and what capital may need to accomplish.
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-azael-slate">Guided enquiry · 5 steps · Approximately 5–7 minutes · No documents required</p>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-16">
          <div className="border border-azael-navy/10 bg-white p-6 md:p-10">
            <EnterpriseDiscoveryForm />
          </div>

          <aside className="lg:sticky lg:top-28">
            <p className="kicker">WHAT HAPPENS NEXT</p>
            <ol className="mt-5 border-t border-azael-navy/10">
              {nextSteps.map((step, index) => (
                <li className="grid grid-cols-[30px_1fr] gap-3 border-b border-azael-navy/10 py-5" key={step}>
                  <span className="text-xs font-bold tracking-wider text-azael-gold">0{index + 1}</span>
                  <span className="text-[15px] leading-6 text-azael-slate">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-l-2 border-azael-gold pl-5">
              <h2 className="font-display text-xl font-semibold text-azael-navy">A light first step.</h2>
              <p className="mt-3 text-[15px] leading-7 text-azael-slate">
                We do not ask for financial statements or a data room at this stage. Additional evidence is requested only when it becomes relevant to a defined question.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
