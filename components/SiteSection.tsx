export function SiteSection({ children, tone = "white", className = "" }: { children: React.ReactNode; tone?: "white" | "cream"; className?: string }) {
  return <section className={`site-section ${tone === "cream" ? "bg-azael-cream" : "bg-white"} ${className}`}>{children}</section>;
}
