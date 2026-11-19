import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = { title: "Capital Provider Enquiry Received", robots: { index: false, follow: false } };
export default function Page() { return <main><Header/><section className="approved-section pt-32 md:pt-40"><div className="container-page"><p className="kicker">ENQUIRY RECEIVED</p><h1 className="approved-title mt-4">Thank you for sharing your financing mandate.</h1><p className="approved-copy mt-6">Our team will review your submission and contact you about the next steps. A submitted enquiry is reviewed before its mandate becomes active for matching.</p></div></section><Footer/></main>; }
