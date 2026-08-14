import Image from "next/image";
import { Header } from "./Header";
import { Arrow } from "./Arrow";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  image: string;
  dark?: boolean;
  cta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, body, image, dark = false, cta }: Props) {
  return (
    <section className={`page-hero ${dark ? "page-hero-dark" : "page-hero-light"}`}>
      <Header inverse={dark} />
      <Image src={image} alt="" fill priority className="page-hero-image" sizes="100vw" />
      <div className="page-hero-overlay" />
      <div className="container-page page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-copy">{body}</p>
        {cta && (
          <Link href={cta.href} className="primary-cta filled-cta">
            {cta.label}<Arrow className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
