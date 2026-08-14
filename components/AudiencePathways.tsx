import Link from "next/link";
import { Arrow } from "./Arrow";

const pathways = [
  {
    label: "For enterprises",
    title: "Understand what growth requires.",
    body: "Diagnose the enterprise. Understand readiness. Determine the capital that fits.",
    href: "/enterprise-intelligence",
    link: "Enterprise Intelligence",
  },
  {
    label: "For capital providers",
    title: "Find enterprises that fit your mandate.",
    body: "Turn your mandate into intelligence that helps identify relevant enterprises.",
    href: "/capital-intelligence",
    link: "Capital Intelligence",
  },
] as const;

export function AudiencePathways() {
  return (
    <section aria-labelledby="pathways-title" className="bg-azael-cream py-[var(--section-space-mobile)] md:py-[var(--section-space)]">
      <div className="container-page">
        <h2 id="pathways-title" className="font-display text-[clamp(2rem,4.2vw,3.6rem)] font-semibold tracking-[-0.04em] text-azael-navy">Better intelligence. Better fit.</h2>
        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
          {pathways.map((item) => (
            <article key={item.href} className="border-l-2 border-azael-gold pl-6 md:pl-8">
              <p className="text-sm font-semibold text-azael-slate">{item.label}</p>
              <h3 className="mt-5 max-w-md font-display text-2xl font-semibold tracking-[-0.025em] text-azael-navy md:text-3xl">{item.title}</h3>
              <p className="mt-5 max-w-md text-base leading-7 text-azael-slate">{item.body}</p>
              <Link href={item.href} className="text-link mt-8">{item.link} <Arrow className="arrow h-4 w-4" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
