import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { EnterpriseDiscoveryForm } from "../start-discovery/EnterpriseDiscoveryForm";

export const metadata: Metadata = {
  title: "Start Your Capital Enquiry",
  description: "Tell Azael about your business, what you are trying to achieve and how you believe capital could help. No documents are required to begin.",
  alternates: { canonical: "/capital-enquiry" },
};

export default function StartDiscoveryPage() {
  return (
    <main>
      <section className="min-h-screen bg-azael-cream pt-28 pb-20 md:pt-36 md:pb-28">
        <Header />
        <div className="container-page">
          <EnterpriseDiscoveryForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
