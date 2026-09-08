import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Azael — Better Business Understanding for Better Capital Decisions",
  description: "Azael is building a better way for African businesses and capital providers to reach informed capital decisions without repeatedly starting from zero.",
  alternates: { canonical: "/about" },
};

const principles = [
  "Understand before assessing.",
  "Don't assume capital is the answer.",
  "Evidence before conclusions.",
  "Fit before introduction.",
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image="https://images.pexels.com/photos/30677714/pexels-photo-30677714.jpeg?auto=compress&cs=tinysrgb&w=2200"
        eyebrow="ABOUT AZAEL"
        title="Better capital decisions begin with seeing the business clearly."
        body="Too many productive African businesses are difficult and expensive for capital providers to assess. Azael is building a better way to bridge that gap."
      />

      <section className="about-editorial-approved">
        <div className="container-page">
          <div className="about-lead-approved">
            <h2>The cost of getting to know a business matters.</h2>
            <div>
              <p>For smaller transactions, the work required to discover, interpret and verify a business can become large relative to the capital involved.</p>
              <p className="mt-5">Azael is working to make that picture easier to build, carry forward and use again.</p>
            </div>
          </div>
          <div className="mt-14">
            <p className="kicker">WHAT WE BELIEVE</p>
            <h2 className="approved-title mt-4">Don&apos;t lower the standard. Improve the intelligence.</h2>
            <div className="beliefs-approved mt-9">
              {principles.map((principle, index) => (
                <div className="belief-approved" key={principle}>
                  <div className="num">0{index + 1} · PRINCIPLE</div>
                  <div><h3>{principle}</h3></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trust-band-approved">
        <div className="container-page">
          <p className="kicker">TECHNOLOGY + JUDGMENT</p>
          <h2>Make good judgment more economical—not less human.</h2>
          <p className="approved-copy">Technology helps Azael organise information, preserve evidence and avoid unnecessary repetition. Professional judgment provides the context needed to make sense of it.</p>
          <p className="approved-copy mt-5"><strong>A complex business should not be reduced to a single score.</strong></p>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">OUR AMBITION</p>
          <h2 className="approved-title mt-4">Bring more productive businesses within reach of capital.</h2>
          <p className="approved-copy mt-7">By making the work of understanding a business increasingly reusable, Azael aims to reduce unnecessary repetition and make more African businesses economical for capital providers to consider.</p>
          <Link href="/how-azael-works" className="text-link mt-8">How Azael Works <Arrow className="arrow h-4 w-4" /></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
