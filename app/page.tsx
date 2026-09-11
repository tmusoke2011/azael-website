import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Arrow } from "@/components/Arrow";

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <Image src="https://images.pexels.com/photos/30380877/pexels-photo-30380877.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="Aerial view of Dar es Salaam highway and cityscape" fill priority sizes="100vw" className="hero-image" />
        <Header inverse />
        <div className="container-page hero-content">
          <div className="max-w-[860px]">
            <p className="eyebrow-light">AZAEL</p>
            <h1 className="display-balance font-display text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[1.04] tracking-[-0.055em]">Looking for capital? Find out what it will take.</h1>
            <p className="hero-lead mt-7 max-w-[800px] text-[clamp(1.15rem,1.7vw,1.45rem)] font-semibold leading-[1.5]">Capital providers need to understand the business, where it is going, what the money needs to accomplish and what supports the case. Azael helps establish that picture and determine where the capital need may fit.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/for-businesses" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-white">I&apos;m Looking for Capital <Arrow className="h-4 w-4" /></Link>
              <Link href="/for-capital-providers" className="primary-cta">I Provide Capital <Arrow className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHY AZAEL</p>
          <h2 className="approved-title mt-4 max-w-4xl">Capital begins with understanding.</h2>
          <p className="approved-copy mt-7">Before a bank, SACCO, fund or other capital provider can make a serious decision, it needs to understand the business behind the funding request.</p>
          <p className="approved-copy mt-5">Financial statements matter. But they may not show how the business really works, where it is going or what is standing in the way.</p>
          <p className="economic-insight mt-7">For smaller transactions, the cost of building that understanding can determine whether an otherwise productive business receives serious consideration at all.</p>
        </div>
      </section>

      <section className="intel-example-approved">
        <div className="container-page example-shell-approved">
          <div className="example-copy-approved">
            <p className="kicker">HOW AZAEL HELPS</p>
            <h2 className="!text-[clamp(2.3rem,4.8vw,4rem)] !leading-[1.08] !tracking-[-.045em]">Start with the business, not the funding request.</h2>
            <p>Azael begins with how the business works and what management is trying to achieve.</p>
            <p>We then work out what is standing in the way, whether capital can help and what the money would need to accomplish.</p>
            <p>Where capital makes sense, we build the case and explore where the need may fit.</p>
          </div>
          <div className="profile-approved">
            <div className="profile-head-approved"><b>THE AZAEL APPROACH</b><span>FOUR STEPS</span></div>
            <div className="metric-approved"><label>01 · Understand</label><div>Establish the business behind the funding request.</div></div>
            <div className="metric-approved"><label>02 · Determine</label><div>Work out what the business actually needs.</div></div>
            <div className="metric-approved"><label>03 · Prepare</label><div>Build a case a capital provider can understand.</div></div>
            <div className="metric-approved"><label>04 · Fit</label><div>Find where the need may fit.</div></div>
          </div>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page audience-editorial">
          <article className="audience-editorial-item"><p className="kicker">FOR BUSINESSES</p><h3>Looking for capital for your business?</h3><p>Azael helps establish the business behind the funding request, what the money needs to accomplish and what must be understood before suitable sources of capital can be explored.</p><Link className="text-link mt-5" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link></article>
          <article className="audience-editorial-item"><p className="kicker">FOR CAPITAL PROVIDERS</p><h3>Find and understand businesses that may fit.</h3><p>Azael helps capital providers identify potential fit and begin with more of the business already understood.</p><Link className="text-link mt-5" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link></article>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHAT WE ARE BUILDING</p>
          <h2 className="approved-title mt-4 max-w-4xl">Make more African businesses economical to consider.</h2>
          <p className="approved-copy mt-7">Too many productive African businesses are expensive for capital providers to understand and assess.</p>
          <p className="approved-copy mt-5">Azael is building a better way to establish that understanding so more businesses can be seriously considered for appropriate capital.</p>
          <p className="approved-copy mt-5"><strong>Don&apos;t lower the standard. Improve the intelligence.</strong></p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4"><Link className="text-link" href="/for-businesses">For Businesses <Arrow className="arrow h-4 w-4" /></Link><Link className="text-link" href="/for-capital-providers">For Capital Providers <Arrow className="arrow h-4 w-4" /></Link></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
