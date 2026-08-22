const products = [
  {
    name: "AIHAT",
    status: "Released",
    description: "Infrastructure Health Audit Toolkit for Windows operations.",
    href: "/aihat",
  },
  {
    name: "PatchPilot",
    status: "Release Candidate",
    description: "Windows patch-health assessment built for clear evidence, coverage, and remediation decisions.",
    href: "/products",
  },
  {
    name: "NetFixLab",
    status: "Launching",
    description: "Practical network troubleshooting tools, diagnostic guides, and equipment guidance built around diagnosis first.",
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
            <p>Product portfolio</p>
            <h2>Engineering practical tools for real IT operations.</h2>
          </div>
          <p>
            Every product starts with a real operational problem and ships only when it
            meets the same engineering, security, testing, and documentation standards.
          </p>
        </div>

        <div className="ba-roadmap-grid">
          {products.map((product) => (
            <a key={product.name} href={product.href} className="ba-roadmap-card">
              <span className={`ba-roadmap-status status-${product.status.toLowerCase().replaceAll(" ", "-")}`}>
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
