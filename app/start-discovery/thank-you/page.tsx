import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Information Received — Azael",
  robots: { index: false, follow: false },
};

export default function DiscoveryThankYouPage() {
  return (
    <main>
      <section className="approved-section min-h-[70vh] pt-32 md:pt-40">
        <Header />
        <div className="container-page max-w-4xl">
          <p className="kicker">INFORMATION RECEIVED</p>
          <h1 className="approved-title mt-4">Thank you. We&apos;ve received your information.</h1>
          <p className="approved-copy mt-7">Azael will review what you&apos;ve shared and contact you about the appropriate next step.</p>
          <div className="reassure-approved mt-10">We will not share your information with a capital provider without your agreement.</div>
          <Link className="text-link mt-8" href="/">Return to Home <Arrow className="arrow h-4 w-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
