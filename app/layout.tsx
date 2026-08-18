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
    default: "Azael Africa — Enterprise Intelligence for Businesses and Capital",
    template: "%s | Azael Africa",
  },
  description: "Azael helps established African businesses understand what their journeys require, determine the role of capital and build the intelligence needed to pursue suitable capital pathways.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Azael Africa",
    url: "https://www.azael.africa",
    title: "Azael Africa — Enterprise Intelligence for Businesses and Capital",
    description: "Intelligence for Africa's businesses and capital markets.",
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
