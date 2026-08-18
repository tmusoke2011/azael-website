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
          <div className="max-w-[800px]">
            <p className="eyebrow-light">AZAEL</p>
            <h1 className="display-balance font-display text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
              Capital begins with understanding.
            </h1>
            <p className="hero-lead mt-7 max-w-[760px] text-[clamp(1.15rem,1.7vw,1.45rem)] font-semibold leading-[1.5]">
              Azael begins with how an established African business actually works—what it is trying to achieve, what is standing in the way and whether capital is the right response.
            </p>
            <p className="hero-body body-pretty mt-6 max-w-[720px] text-[clamp(1rem,1.35vw,1.14rem)] leading-[1.7]">
              We then build the intelligence needed to pursue suitable capital pathways.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/explore-the-fit" className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-white">
                Start Enterprise Discovery <Arrow className="h-4 w-4" />
              </Link>
              <Link href="/for-capital-providers" className="primary-cta">
                For Capital Providers <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page approved-grid2">
          <article className="approved-card !bg-azael-cream">
            <p className="kicker">FOR BUSINESSES</p>
            <h3>Begin with Enterprise Discovery.</h3>
            <p>Understand your business journey, clarify the role capital should play and identify what must be established before approaching suitable providers.</p>
            <Link className="text-link mt-5" href="/explore-the-fit">
              Start Enterprise Discovery <Arrow className="arrow h-4 w-4" />
            </Link>
          </article>
          <article className="approved-card !bg-azael-cream">
            <p className="kicker">FOR CAPITAL PROVIDERS</p>
            <h3>Understand relevant enterprises without restarting from zero.</h3>
            <p>Explore how Azael is building reusable, evidence-aware Enterprise Intelligence for banks and alternative capital providers.</p>
            <Link className="text-link mt-5" href="/for-capital-providers">
              Explore a Partnership <Arrow className="arrow h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="intel-example-approved">
        <div className="container-page example-shell-approved">
          <div className="example-copy-approved">
            <p className="kicker">ENTERPRISE DISCOVERY</p>
            <h2>Begin lightly. Understand what matters.</h2>
            <p>Conventional applications often begin in the provider&apos;s language. Azael begins earlier—with how the business operates, the journey management is pursuing and what may stand in its way. A light intake and focused conversation produce an initial Strategic Judgment and identify the intelligence that should be built next.</p>
          </div>
          <div className="profile-approved">
            <div className="profile-head-approved">
              <b>Enterprise Discovery Brief</b>
              <span>ILLUSTRATIVE EXAMPLE</span>
            </div>
            <div className="metric-approved">
              <label>Journey</label>
              <div>Expand distribution into three regional markets.</div>
            </div>
            <div className="metric-approved">
              <label>Strategic Judgment</label>
              <div>The opportunity appears credible, but operating capacity must be understood before capital is pursued.</div>
            </div>
            <div className="metric-approved">
              <label>Decisive question</label>
              <div>Can the business execute across three markets without weakening its core operation?</div>
            </div>
            <div className="metric-approved">
              <label>Next intelligence</label>
              <div>Unit economics · working-capital cycle · distribution capacity · management depth</div>
            </div>
            <p className="reassure-approved">The Enterprise Discovery Brief is an initial intelligence prescription—not a funding application or due-diligence report.</p>
          </div>
        </div>
      </section>

      <section className="section-navy py-20 md:py-24">
        <div className="container-page">
          <p className="eyebrow-light">WHERE THE INTELLIGENCE CAN LEAD</p>
          <h2 className="max-w-3xl font-display text-[clamp(2.3rem,4.8vw,4rem)] font-semibold leading-[1.08] tracking-[-.045em]">
            Understanding comes before fit.
          </h2>
          <p className="mt-6 max-w-3xl text-[1.02rem] leading-7 text-white/70">
            Enterprise Discovery is the starting point for Enterprise Intelligence. Azael is developing a system designed to build on that understanding, relate it to what capital providers finance and require, and explain where alignment may or may not exist.
          </p>
          <Link className="text-link mt-8 !text-white" href="/how-azael-works">
            Explore how Azael works <Arrow className="arrow h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="approved-section approved-alt">
        <div className="container-page">
          <h2 className="approved-title">A clearer path through capital—not a promise of capital.</h2>
          <p className="approved-copy mt-8">Azael does not guarantee funding or replace provider underwriting. We create a more credible and transparent starting point for the enterprise and a better-informed handoff to suitable providers.</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <Link className="text-link" href="/explore-the-fit">
              Start Enterprise Discovery <Arrow className="arrow h-4 w-4" />
            </Link>
            <Link className="text-link" href="/for-capital-providers">
              Explore a Partnership <Arrow className="arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
