import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "How Azael Works — From Capital Need to Funding Case",
  description: "See how Azael turns a business capital need into a credible funding case and explores suitable capital providers.",
  alternates: { canonical: "/how-azael-works" },
};

const stages = [
  ["01", "Understand the business and its goal", "We begin with how the business works, where it is trying to go and why capital is being considered.", "A clear business goal and the problem standing in its way."],
  ["02", "Work out the capital requirement", "We determine whether capital can help and what the money would need to accomplish.", "The purpose, amount, timing and possible form of capital."],
  ["03", "Prepare the case", "We bring together the information that explains the business, the need and what supports it.", "A credible case, with important information gaps made clear."],
  ["04", "Engage suitable providers", "We compare the need with providers able and willing to finance it.", "A clearer view of which providers may fit and what they will assess."],
] as const;

export default function HowAzaelWorksPage() {
  return (
    <main>
      <section className="approved-section pt-32 md:pt-40">
        <Header />
        <div className="container-page">
          <p className="kicker">HOW AZAEL WORKS</p>
          <h1 className="approved-title mt-4 max-w-5xl">From a capital need to a credible funding case.</h1>
          <p className="approved-copy mt-7">Azael begins with the business, works out what funding is needed, prepares the case and then explores suitable capital providers.</p>
        </div>
      </section>

      <section className="journey !bg-azael-cream">
        <div className="container-page">
          <div className="steps">
            {stages.map(([number, heading, copy, outcome]) => (
              <article className="step" key={number}>
                <div className="n">{number}</div><h3>{heading}</h3><p>{copy}</p>
                <p className="mt-5 border-t border-azael-navy/10 pt-4"><strong>Outcome:</strong> {outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHERE PROVIDERS ENTER</p>
          <h2 className="approved-title mt-4">A prepared opportunity—not just a request for money.</h2>
          <p className="approved-copy mt-7">Azael compares the business need with a provider&apos;s mandate, including sector, location, size and type of capital.</p>
          <p className="approved-copy mt-5">The business controls what information is shared. The provider carries out its own assessment and makes its own funding decision.</p>
          <div className="mt-12 border-t border-azael-navy/10 pt-8">
            <p className="kicker">CHOOSE YOUR PATH</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/for-businesses" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-azael-navy hover:!text-white">For Businesses <Arrow className="h-4 w-4" /></Link>
              <Link className="text-link" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
