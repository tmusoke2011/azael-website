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

      <section className="approved-section approved-alt">
        <div className="container-page approved-grid2">
          <article className="approved-card">
            <p className="kicker">FOR BUSINESSES</p>
            <h3>Begin with Enterprise Discovery.</h3>
            <p>Understand your business journey, clarify the role capital should play and identify what must be established before approaching suitable providers.</p>
            <Link className="text-link mt-5" href="/explore-the-fit">
              Start Enterprise Discovery <Arrow className="arrow h-4 w-4" />
            </Link>
          </article>
          <article className="approved-card">
            <p className="kicker">FOR CAPITAL PROVIDERS</p>
            <h3>Understand relevant enterprises without restarting from zero.</h3>
            <p>Explore how Azael is building reusable, evidence-aware Enterprise Intelligence for banks and alternative capital providers.</p>
            <Link className="text-link mt-5" href="/for-capital-providers">
              Explore a Partnership <Arrow className="arrow h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container-page">
          <p className="eyebrow-light">HOW AZAEL WORKS</p>
          <h2 className="max-w-3xl font-display text-[clamp(2.3rem,4.8vw,4rem)] font-semibold leading-[1.08] tracking-[-.045em]">
            Understanding comes before fit.
          </h2>
          <p className="mt-6 max-w-3xl text-[1.02rem] leading-7 text-white/70">
            Azael is building a clearer way to connect how a business actually works with what capital providers require, so that potential fit can be explained—not guessed.
          </p>
          <div className="system-grid">
            <div className="system-stream">
              <p className="eyebrow-light">ENTERPRISE</p>
              <h3>Start with the business.</h3>
              {[
                ["Operating reality", "How does the business actually work?"],
                ["Journey", "What is management trying to achieve?"],
                ["Strategic Judgment", "What is standing in the way?"],
                ["Capital requirement", "What should capital accomplish?"],
              ].map(([label, question]) => (
                <div key={label} className="system-node">
                  <span>{label}</span>
                  <strong>{question}</strong>
                </div>
              ))}
            </div>
            <div className="fit-core">
              <span className="kicker">AZAEL</span>
              <b>Potential Capital Fit</b>
            </div>
            <div className="system-stream">
              <p className="eyebrow-light">CAPITAL</p>
              <h3>Start with the mandate.</h3>
              {[
                ["Mandate", "What do you finance?"],
                ["Instruments", "How can capital be structured?"],
                ["Requirements", "What must be present?"],
                ["Constraints", "What can genuinely fit?"],
              ].map(([label, question]) => (
                <div key={label} className="system-node">
                  <span>{label}</span>
                  <strong>{question}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="approved-section">
        <div className="container-page">
          <p className="kicker">WHY AZAEL</p>
          <h2 className="approved-title mt-4">Capital should follow understanding.</h2>
          <p className="approved-copy mt-8">
            Conventional applications often ask businesses to present themselves in the provider&apos;s language before anyone has understood how they actually work. <strong>Azael begins earlier—with the enterprise&apos;s operating reality, the journey management is pursuing and the questions that determine whether capital can create value.</strong>
          </p>
        </div>
      </section>

      <section className="intel-example-approved">
        <div className="container-page example-shell-approved">
          <div className="example-copy-approved">
            <p className="kicker">ENTERPRISE DISCOVERY</p>
            <h2>Begin lightly. Understand what matters.</h2>
            <p>Every enterprise is different. Azael uses a light intake and focused conversation to develop an initial Strategic Judgment, identify the decisive question and prescribe the intelligence that should be built next.</p>
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

      <section className="approved-section approved-alt">
        <div className="container-page">
          <h2 className="approved-title">A clearer path through capital—not a promise of capital.</h2>
          <p className="approved-copy mt-8">Azael does not guarantee funding or replace provider underwriting. We create a more credible and transparent starting point for the enterprise and a better-informed handoff to suitable providers.</p>
          <div className="approved-grid2">
            <article className="approved-card">
              <p className="kicker">FOR BUSINESSES</p>
              <p>Enterprise Discovery is designed for established African businesses with customers and real commercial activity navigating growth, professionalisation, recovery or transformation.</p>
              <Link className="text-link mt-5" href="/explore-the-fit">
                Start Enterprise Discovery <Arrow className="arrow h-4 w-4" />
              </Link>
            </article>
            <article className="approved-card">
              <p className="kicker">FOR CAPITAL PROVIDERS</p>
              <p>Partner with Azael to explore how Enterprise Intelligence can strengthen enterprise discovery, qualification and origination.</p>
              <Link className="text-link mt-5" href="/for-capital-providers">
                Explore a Partnership <Arrow className="arrow h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
