import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <Image
          src="https://images.pexels.com/photos/30380877/pexels-photo-30380877.jpeg?auto=compress&cs=tinysrgb&w=2200"
          alt="Aerial view of Dar es Salaam highway and cityscape"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <Header inverse />
        <div className="container-page hero-content">
          <div className="max-w-[820px]">
            <p className="eyebrow-light">AZAEL</p>
            <h1 className="display-balance font-display text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
              Capital begins with understanding.
            </h1>
            <p className="hero-lead mt-7 max-w-[790px] text-[clamp(1.15rem,1.7vw,1.45rem)] font-semibold leading-[1.5]">
              For businesses, that means knowing what your ambition requires and what role capital should play. For capital providers, it means seeing the business clearly enough to make a better decision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/for-businesses" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-white">
                For Businesses <Arrow className="h-4 w-4" />
              </Link>
              <Link href="/for-capital-providers" className="primary-cta">
                For Capital Providers <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHY AZAEL</p>
          <h2 className="approved-title mt-4 max-w-4xl">The full picture rarely fits into an application.</h2>
          <p className="approved-copy mt-7">Financial statements matter. But they may not show how a business really works, where it is going or what is holding it back.</p>
          <p className="approved-copy mt-5">Getting that picture takes time. For smaller transactions, the cost of doing so can make productive businesses difficult for capital providers to consider.</p>
        </div>
      </section>

      <section className="intel-example-approved">
        <div className="container-page example-shell-approved">
          <div className="example-copy-approved">
            <p className="kicker">HOW AZAEL HELPS</p>
            <h2 className="!text-[clamp(2.3rem,4.8vw,4rem)] !leading-[1.08] !tracking-[-.045em]">Start with the business, not the funding request.</h2>
            <p>We look at how the business works, what management is trying to achieve and what stands in the way.</p>
            <p><strong>We don&apos;t assume capital is the answer.</strong></p>
            <p>If money can solve the right problem, we work out what it needs to do and what must be established before it is pursued.</p>
          </div>
          <div className="profile-approved">
            <div className="profile-head-approved"><b>THE AZAEL APPROACH</b><span>FOUR STEPS</span></div>
            <div className="metric-approved"><label>01 · Understand</label><div>See how the business really works.</div></div>
            <div className="metric-approved"><label>02 · Determine</label><div>Find the constraint and decide whether capital can address it.</div></div>
            <div className="metric-approved"><label>03 · Build</label><div>Develop evidence around the questions that can change the decision.</div></div>
            <div className="metric-approved"><label>04 · Connect</label><div>Where capital fits, explore providers designed for that need.</div></div>
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page approved-grid2 !mt-0">
          <article className="approved-card">
            <p className="kicker">FOR BUSINESSES</p>
            <h3>Know what your ambition requires.</h3>
            <p>Work out what is holding the business back, whether capital can help and what must be established before pursuing it.</p>
            <Link className="text-link mt-5" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link>
          </article>
          <article className="approved-card">
            <p className="kicker">FOR CAPITAL PROVIDERS</p>
            <h3>See the business clearly enough to decide.</h3>
            <p>Assess the business with context around how it works, why capital is needed, what the evidence supports and what remains uncertain.</p>
            <Link className="text-link mt-5" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link>
          </article>
        </div>
      </section>

      <section className="section-navy py-20 md:py-24">
        <div className="container-page">
          <p className="eyebrow-light">THE INTELLIGENCE BEHIND IT</p>
          <h2 className="max-w-3xl font-display text-[clamp(2.3rem,4.8vw,4rem)] font-semibold leading-[1.08] tracking-[-.045em]">Better information on both sides.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div><h3 className="font-display text-xl font-semibold">Enterprise Intelligence</h3><p className="mt-3 text-white/70">What does the business really need?</p></div>
            <div><h3 className="font-display text-xl font-semibold">Capital Intelligence</h3><p className="mt-3 text-white/70">What is the provider designed to support?</p></div>
            <div><h3 className="font-display text-xl font-semibold">Capital Fit</h3><p className="mt-3 text-white/70">Where do the two genuinely align?</p></div>
          </div>
          <Link className="text-link mt-9 !text-white" href="/how-azael-works">How Azael Works <Arrow className="arrow h-4 w-4" /></Link>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHAT WE ARE BUILDING</p>
          <h2 className="approved-title mt-4 max-w-4xl">Make more African businesses economical to consider.</h2>
          <p className="approved-copy mt-7">Azael is building intelligence that can be carried forward instead of recreated every time a business encounters a capital provider.</p>
          <p className="approved-copy mt-5">Our ambition is to reduce the cost of getting to a credible decision so more productive African businesses can come within reach of appropriate capital.</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <Link className="text-link" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link>
            <Link className="text-link" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
