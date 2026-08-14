import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SiteSection } from "@/components/SiteSection";
export const metadata={title:"About"};
export default function Page(){return <><PageHero eyebrow="ABOUT AZAEL" title={<>Ambition deserves understanding.</>} body="Across Africa, ambitious enterprises are building toward futures that require more than capital. They require a clearer understanding of the enterprise, what must evolve and the capital capable of supporting that journey." image="/images/about-hero.jpg" dark/><SiteSection><div className="container-page statement-block"><h2>Azael exists to make that journey more intelligible.</h2><p className="eyebrow mt-8">ENTERPRISE & CAPITAL INTELLIGENCE</p><p>We help enterprises and capital providers see more clearly, assess fit more intelligently and make better decisions.</p></div></SiteSection><SiteSection tone="cream"><div className="container-page text-center"><h2 className="section-heading">See clearly. Decide well.</h2><Link href="/explore-the-fit" className="primary-cta filled-cta">Explore the Fit →</Link></div></SiteSection><Footer/></>}
