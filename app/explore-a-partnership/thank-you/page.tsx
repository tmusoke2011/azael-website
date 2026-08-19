import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Partnership Enquiry Received",
  robots: { index: false, follow: false },
};

export default function PartnershipThankYouPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page max-w-4xl">
          <p className="kicker">ENQUIRY RECEIVED</p>
          <h1 className="approved-title mt-4">Thank you. Azael will review your partnership enquiry.</h1>
          <p className="approved-copy mt-7">
            We will consider your mandate, early assessment requirements and the use case you would like to explore. If there appears to be a relevant starting point, we will contact you to arrange a focused conversation.
          </p>
          <div className="reassure-approved mt-10">
            <h2 className="font-display text-2xl font-semibold text-azael-navy">What this means</h2>
            <p className="mt-4 max-w-3xl">
              This enquiry does not create a partnership, guarantee pipeline or provide access to enterprise information. Any future enterprise handoff would require appropriate authorization, and your organisation retains its own assessment and final decision.
            </p>
          </div>
          <Link className="text-link mt-9" href="/for-capital-providers">
            Return to For Capital Providers <Arrow className="arrow h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
