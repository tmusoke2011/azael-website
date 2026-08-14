function DotList({ title, items, align = "left" }: { title: string; items: string[]; align?: "left" | "right" }) {
  const right = align === "right";
  return (
    <div className={right ? "md:text-right" : ""}>
      <p className="font-display text-sm font-semibold tracking-[0.08em] text-azael-navy">{title}</p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className={`flex items-center gap-4 ${right ? "md:flex-row-reverse" : ""}`}>
            <span className="h-3 w-3 shrink-0 rounded-full border border-azael-gold" aria-hidden="true" />
            <span className="text-[15px] text-azael-charcoal/85">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntelligenceBridge() {
  return (
    <section aria-labelledby="intelligence-title" className="bg-white py-[var(--section-space-mobile)] md:py-[var(--section-space)]">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="intelligence-title" className="font-display text-[clamp(1.65rem,3vw,2.35rem)] font-semibold tracking-[-0.03em] text-azael-navy">
            We build intelligence on both sides of the capital relationship
          </h2>
          <p className="mt-4 text-base leading-7 text-azael-slate">so enterprises and capital providers make better-informed decisions about fit.</p>
          <div className="gold-rule mx-auto mt-7" />
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-14">
          <DotList title="ENTERPRISES" items={["Growth ambition", "Enterprise reality", "Growth readiness", "Capital readiness"]} />

          <div className="flex flex-col items-center">
            <div className="grid h-48 w-48 place-items-center rounded-full border border-dashed border-azael-gold md:h-52 md:w-52">
              <div className="text-center">
                <span className="wordmark block text-[1rem] text-azael-navy">AZAEL</span>
                <span className="mt-3 block text-xs font-semibold tracking-[.08em] text-azael-gold">INTELLIGENCE</span>
              </div>
            </div>
            <p className="mt-7 text-sm text-azael-charcoal"><span>Intelligence</span> <span className="mx-2 text-azael-gold">→</span> <span>Fit</span> <span className="mx-2 text-azael-gold">→</span> <span>Decision</span></p>
          </div>

          <DotList title="CAPITAL PROVIDERS" align="right" items={["Mandate", "Requirements", "Instrument", "Investment criteria"]} />
        </div>
      </div>
    </section>
  );
}
