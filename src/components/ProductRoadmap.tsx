const products = [
  {
    name: "AIHAT",
    status: "Released",
    description: "Infrastructure Health Audit Toolkit for Windows operations. See the audit workflow, reporting experience, and operational findings in action.",
    href: "/aihat",
    cta: "Explore AIHAT",
  },
  {
    name: "OffboardPilot",
    status: "Available",
    description: "Hybrid AD + M365 offboarding automation in a single guided PowerShell script — six steps, a reconciliation report, and a full session transcript.",
    href: "/products/offboardpilot",
    cta: "Get OffboardPilot",
  },
  {
    name: "PatchPilot",
    status: "Release Candidate",
    description: "Windows patch-health assessment built to turn patch state into clear evidence, coverage, and remediation decisions.",
    href: "/journal",
    cta: "Follow the build",
  },
  {
    name: "NetFixLab",
    status: "Live",
    description: "Diagnosis-first network troubleshooting guidance designed to help people isolate problems before spending money on the wrong fix.",
    href: "https://netfixlab.com",
    cta: "Visit NetFixLab",
  },
  {
    name: "Engineering Resources",
    status: "Growing",
    description: "Practical checklists, demonstrations, and operational resources that show how Beyond Automation approaches real infrastructure work.",
    href: "/resources",
    cta: "Explore resources",
  },
];

export default function ProductRoadmap() {
  return (
    <section id="products" className="ba-growth-section">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Product portfolio</p>
            <h2>Choose the problem. See the engineering.</h2>
          </div>
          <p>
            Public product experiences demonstrate the value. Proprietary source code,
            architecture, and internal release tooling stay private.
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
              <strong>{product.cta} →</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
