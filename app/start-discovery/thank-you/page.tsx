import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Enterprise Discovery Enquiry Received",
  robots: { index: false, follow: false },
};

export default function DiscoveryThankYouPage() {
  return (
    <main>
      <section className="approved-section min-h-[70vh] pt-32 md:pt-40">
        <Header />
        <div className="container-page max-w-4xl">
          <p className="kicker">ENQUIRY RECEIVED</p>
          <h1 className="approved-title mt-4">Thank you. Your Enterprise Discovery enquiry has been submitted.</h1>
          <p className="approved-copy mt-7">
            Azael will review the information and determine whether Enterprise Discovery is an appropriate next step. Where appropriate, we will contact you to arrange a focused conversation.
          </p>
          <div className="reassure-approved mt-10">
            Submission does not constitute a funding application, offer or guarantee of funding.
          </div>
          <Link className="text-link mt-8" href="/">
            Return to Azael <Arrow className="arrow h-4 w-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
