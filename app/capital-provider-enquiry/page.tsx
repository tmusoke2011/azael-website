import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CapitalProviderForm } from "../explore-a-partnership/CapitalProviderForm";

export const metadata: Metadata = {
  title: "Tell Us About Your Mandate",
  description: "Tell Azael what your organisation finances, the businesses you support and where your team needs help finding or screening opportunities.",
  alternates: { canonical: "/capital-provider-enquiry" },
};

export default function CapitalProviderEnquiryPage() {
  return (
    <main>
      <section className="min-h-screen bg-azael-cream pt-28 pb-20 md:pt-36 md:pb-28">
        <Header />
        <div className="container-page"><CapitalProviderForm /></div>
      </section>
      <Footer />
    </main>
  );
}
