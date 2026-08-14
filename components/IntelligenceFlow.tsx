export function IntelligenceFlow({ items }: { items: string[] }) {
  return (
    <div className="intelligence-flow" aria-label={items.join(" to ")}>
      {items.map((item, index) => (
        <div className="flow-fragment" key={item}>
          <div className={`flow-node ${index === items.length - 1 ? "flow-node-final" : ""}`}>{item}</div>
          {index < items.length - 1 && <div className="flow-line" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
