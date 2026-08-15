import Image from "next/image";
import { Header } from "./Header";

export function PageHero({ image, eyebrow, title, lead, body }: {
  image: string; eyebrow: string; title: string; lead?: string; body?: string;
}) {
  return <section className="hero-shell">
    <Image src={image} alt="" fill priority sizes="100vw" className="hero-image" />
    <Header inverse />
    <div className="container-page hero-content">
      <div className="max-w-[790px]">
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="display-balance font-display text-[clamp(2.9rem,6vw,5.25rem)] font-semibold leading-[1.04] tracking-[-0.055em]">{title}</h1>
        {lead && <p className="hero-lead mt-7 max-w-[700px] text-[clamp(1.15rem,1.7vw,1.45rem)] font-semibold leading-[1.5]">{lead}</p>}
        {body && <p className="hero-body body-pretty mt-6 max-w-[740px] text-[clamp(1rem,1.35vw,1.14rem)] leading-[1.7]">{body}</p>}
      </div>
    </div>
  </section>;
}