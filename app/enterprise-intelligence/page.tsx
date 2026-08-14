import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { IntelligenceFlow } from "@/components/IntelligenceFlow";
import { SiteSection } from "@/components/SiteSection";
export const metadata={title:"Enterprise Intelligence"};
export default function Page(){return <><PageHero eyebrow="ENTERPRISE INTELLIGENCE" title={<>Understand what must change to grow—and whether you are <span className="gold-text">ready for capital.</span></>} body="Growth ambition alone does not determine what an enterprise needs next. Azael builds intelligence around the enterprise, its ambition, its readiness and the capital required to support the journey." image="/images/enterprise-hero.jpg" cta={{label:"Prepare for Capital",href:"/explore-the-fit"}}/><SiteSection tone="cream"><div className="container-page"><h2 className="section-heading text-center">Understand the enterprise before determining the capital it needs.</h2><IntelligenceFlow items={["Growth ambition","Enterprise reality","Growth readiness","Capital readiness"]}/></div></SiteSection><SiteSection><div className="container-page text-center"><h2 className="section-heading">Providing capital?</h2><Link href="/capital-intelligence" className="text-link">Explore Capital Intelligence →</Link></div></SiteSection><Footer/></>}
