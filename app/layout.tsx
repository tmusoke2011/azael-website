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
    default: "Azael Africa — Capital begins with understanding",
    template: "%s | Azael Africa",
  },
  description: "For businesses, Azael helps determine what their ambitions require and what role capital should play. For capital providers, it helps make the business clear enough to make a better decision.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Azael Africa",
    url: "https://www.azael.africa",
    title: "Azael Africa — Capital begins with understanding",
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
