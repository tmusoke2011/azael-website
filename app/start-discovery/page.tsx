import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { EnterpriseDiscoveryForm } from "./EnterpriseDiscoveryForm";

export const metadata: Metadata = {
  title: "Start Your Capital Journey — Azael",
  description: "Tell Azael about the business behind your capital need. Begin with a guided business intake; no documents are required at this stage.",
  alternates: { canonical: "/start-discovery" },
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
