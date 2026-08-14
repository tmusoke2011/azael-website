import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { IntelligenceFlow } from "@/components/IntelligenceFlow";
import { SiteSection } from "@/components/SiteSection";
export const metadata={title:"Capital Intelligence"};
export default function Page(){return <><PageHero eyebrow="CAPITAL INTELLIGENCE" title={<>Understand your mandate well enough to identify enterprises that genuinely <span className="gold-text">fit it.</span></>} body="Azael translates capital mandates into intelligence—helping capital providers identify enterprises aligned with their investment criteria, requirements and appetite." image="/images/capital-hero.jpg" cta={{label:"Access Quality Pipeline",href:"/explore-the-fit"}}/><SiteSection tone="cream"><div className="container-page"><h2 className="section-heading text-center">Understand the mandate before determining which enterprises belong in the pipeline.</h2><IntelligenceFlow items={["Mandate","Criteria","Enterprise intelligence","Fit"]}/></div></SiteSection><SiteSection><div className="container-page text-center"><h2 className="section-heading">Building an enterprise?</h2><Link href="/enterprise-intelligence" className="text-link">Explore Enterprise Intelligence →</Link></div></SiteSection><Footer/></>}
