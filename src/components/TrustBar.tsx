const items = [
  { title: "Open Source", detail: "Transparent by design", icon: "code" },
  { title: "AI Assisted", detail: "Human-guided engineering", icon: "spark" },
  { title: "PowerShell First", detail: "Built for real IT work", icon: "terminal" },
  { title: "Security Focused", detail: "Safe operational patterns", icon: "shield" },
  { title: "Engineer Built", detail: "Created from production experience", icon: "engineer" },
];

function TrustIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    code: <><path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 5l-2 14" /></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1L6.5 8.5l4.1-1.4L12 3Z" /><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" /></>,
    terminal: <><path d="m5 8 4 4-4 4M11 16h8" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.8 8.5 7 10 4.2-1.5 7-5.6 7-10V6l-7-3Z" /><path d="m9.5 12 1.7 1.7 3.7-4" /></>,
    engineer: <><circle cx="12" cy="8" r="3" /><path d="M5 21v-2a7 7 0 0 1 14 0v2M8 4.5V3h8v1.5" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function TrustBar() {
  return (
    <section className="trust-strip" aria-label="Beyond Automation principles">
      <div className="ba-container">
        <p className="trust-strip-title">
          Built around the realities of modern IT operations
        </p>

        <div className="trust-strip-grid">
          {items.map((item) => (
            <article key={item.title} className="trust-strip-item">
              <span className="trust-strip-icon">
                <TrustIcon name={item.icon} />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
