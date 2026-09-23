import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "./approved.css";
import "./typography-colors.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.azael.africa"),
  title: {
    default: "Azael — Helping African Businesses Prepare for Capital",
    template: "%s | Azael",
  },
  description: "Azael helps African businesses prepare a credible capital case and helps capital providers find businesses aligned with what they finance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Azael",
    url: "https://www.azael.africa",
    title: "Azael — Helping African Businesses Prepare for Capital",
    description: "Better-prepared businesses. Better-informed capital decisions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
