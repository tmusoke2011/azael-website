import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Arrow";
import { Header } from "./Header";

type HeroAction = {
  href: string;
  label: string;
};

export function PageHero({
  image,
  eyebrow,
  title,
  lead,
  body,
  primaryAction,
  secondaryAction,
}: {
  image: string;
  eyebrow: string;
  title: string;
  lead?: string;
  body?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
}) {
  return (
    <section className="hero-shell">
      <Image src={image} alt="" fill priority sizes="100vw" className="hero-image" />
      <Header inverse />
      <div className="container-page hero-content">
        <div className="max-w-[790px]">
          <p className="eyebrow-light">{eyebrow}</p>
          <h1 className="display-balance font-display text-[clamp(2.9rem,6vw,5.25rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
            {title}
          </h1>
          {lead ? <p className="hero-lead mt-7 max-w-[700px] text-[clamp(1.15rem,1.7vw,1.45rem)] font-semibold leading-[1.5]">{lead}</p> : null}
          {body ? <p className="hero-body body-pretty mt-6 max-w-[740px] text-[clamp(1rem,1.35vw,1.14rem)] leading-[1.7]">{body}</p> : null}
          {primaryAction || secondaryAction ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryAction ? (
                <Link href={primaryAction.href} className="primary-cta !bg-azael-gold-bright !text-azael-navy-deep hover:!bg-white">
                  {primaryAction.label} <Arrow className="h-4 w-4" />
                </Link>
              ) : null}
              {secondaryAction ? (
                <Link href={secondaryAction.href} className="primary-cta">
                  {secondaryAction.label} <Arrow className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
