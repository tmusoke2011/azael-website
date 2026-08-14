import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function HomePage() {
  return <>
    <section className="hero-shell">
      <Header inverse />
      <Image src="/images/home-hero.jpg" alt="Mountain horizon at sunrise" fill priority className="hero-image" sizes="100vw" />
      <div className="container-page hero-content">
        <div className="max-w-[760px]">
          <h1 className="home-title">The intelligence layer <span>between enterprise and capital.</span></h1>
          <div className="gold-rule mt-8" />
          <p className="home-copy">Azael helps ambitious enterprises understand what must change to grow and what capital fits their journey—while helping capital providers identify enterprises aligned with their mandates.</p>
          <Link href="/explore-the-fit" className="primary-cta mt-10">Explore the Fit <Arrow className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>

    <section className="site-section bg-azael-cream">
      <div className="container-page">
        <div className="section-intro"><h2>We build intelligence on both sides of the capital relationship.</h2><p>So enterprises and investors can make better-informed decisions about fit.</p></div>
        <div className="home-bridge">
          <div className="bridge-side"><p>ENTERPRISES</p><ul><li>Growth ambition</li><li>Enterprise reality</li><li>Growth readiness</li><li>Capital readiness</li></ul></div>
          <div className="bridge-center"><div className="wordmark">AZAEL</div><span>INTELLIGENCE</span></div>
          <div className="bridge-side"><p>CAPITAL PROVIDERS</p><ul><li>Mandate</li><li>Requirements</li><li>Instrument</li><li>Investment criteria</li></ul></div>
        </div>
        <p className="bridge-outcome">Intelligence <b>→</b> Fit <b>→</b> Decision</p>
      </div>
    </section>

    <section className="site-section bg-white">
      <div className="container-page"><h2 className="section-heading text-center">Better intelligence. Better fit.</h2>
        <div className="audience-grid">
          <article><p className="eyebrow">FOR ENTERPRISES</p><h3>Understand what growth requires.</h3><p>Diagnose the enterprise. Understand readiness. Determine the capital that fits.</p><Link href="/enterprise-intelligence" className="text-link">Enterprise Intelligence <Arrow className="arrow h-4 w-4" /></Link></article>
          <article><p className="eyebrow">FOR CAPITAL PROVIDERS</p><h3>Find enterprises that fit your mandate.</h3><p>Turn your mandate into intelligence that helps identify relevant enterprises.</p><Link href="/capital-intelligence" className="text-link">Capital Intelligence <Arrow className="arrow h-4 w-4" /></Link></article>
        </div>
      </div>
    </section>
    <Footer />
  </>;
}
