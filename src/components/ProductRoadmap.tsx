const products = [
  {
    name: "AIHAT",
    status: "Released",
    description: "Infrastructure Health Audit Toolkit for Windows operations.",
    href: "/aihat",
  },
  {
    name: "PatchIQ",
    status: "Research",
    description: "Patch visibility, prioritization, failure analysis, and maintenance insight.",
    href: "/products",
  },
  {
    name: "Technical Debt Analyzer",
    status: "Planned",
    description: "Translate infrastructure age, risk, and supportability into business evidence.",
    href: "/products",
  },
  {
    name: "Automation Library",
    status: "Planned",
    description: "Reusable PowerShell tools for practical infrastructure operations.",
    href: "/resources",
  },
];

export default function ProductRoadmap() {
  return (
    <section id="products" className="ba-growth-section">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Product roadmap</p>
            <h2>AIHAT is the beginning, not the finish line.</h2>
          </div>
          <p>
            Every product starts with a real operational problem and ships only when it
            meets the same engineering, security, testing, and documentation standards.
          </p>
        </div>

        <div className="ba-roadmap-grid">
          {products.map((product) => (
            <a key={product.name} href={product.href} className="ba-roadmap-card">
              <span className={`ba-roadmap-status status-${product.status.toLowerCase()}`}>
                {product.status}
              </span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>Explore →</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
