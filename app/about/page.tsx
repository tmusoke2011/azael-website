import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Azael — Better Business Understanding for Better Capital Decisions",
  description: "Azael is building intelligence that makes African businesses more credible, reusable and economical for capital providers to understand.",
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
        body="Too many productive African businesses are difficult and expensive for capital providers to understand. Azael is building the intelligence needed to make that understanding more credible, reusable and economical."
      />

      <section className="about-editorial-approved">
        <div className="container-page">
          <div className="about-lead-approved">
            <h2>The cost of getting to know a business matters.</h2>
            <div>
              <p>For smaller transactions, the work required to discover, interpret and verify a business can become large relative to the capital involved.</p>
              <p className="mt-5">When that happens, an otherwise productive business may become uneconomic for a provider to consider.</p>
              <p className="mt-5">Azael is working to make that understanding easier to establish, carry forward and use again.</p>
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
          <p className="approved-copy">Technology helps Azael organise information, preserve what has been established and avoid unnecessary repetition. Professional judgment provides the context needed to make sense of it.</p>
          <p className="approved-copy mt-5"><strong>A complex business should not be reduced to a single score.</strong></p>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">OUR AMBITION</p>
          <h2 className="approved-title mt-4">Expand the boundary of what capital can economically consider.</h2>
          <p className="approved-copy mt-7">By making the work of understanding a business increasingly reusable, Azael aims to reduce unnecessary repetition and make more African businesses economical for capital providers to consider.</p>
          <p className="approved-copy mt-5"><strong>Not by lowering the standard for capital decisions, but by improving the intelligence available to make them.</strong></p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
