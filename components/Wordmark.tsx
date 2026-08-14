import Link from "next/link";

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="Azael home" className={`wordmark text-[1.15rem] sm:text-[1.25rem] ${inverse ? "text-white" : "text-azael-navy"}`}>
      AZAEL
    </Link>
  );
}
