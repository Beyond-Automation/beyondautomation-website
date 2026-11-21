const products = [
  {
    name: "AIHAT",
    status: "Free Download",
    description: "Infrastructure Health Audit Toolkit for Windows operations. A free, signed Windows tool for read-only health assessment and reporting.",
    href: "/aihat",
    cta: "Explore AIHAT",
  },
  {
    name: "OffboardPilot",
    status: "Open Source",
    description: "Hybrid AD + M365 offboarding automation in a single guided PowerShell script — six steps, a reconciliation report, and a full session transcript. MIT licensed.",
    href: "/products/offboardpilot",
    cta: "Explore OffboardPilot",
  },
  {
    name: "PatchPilot",
    status: "In Development",
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
    <section id="products" className="ba-growth-section" aria-label="Beyond Automation projects">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Projects</p>
            <h2>Choose the problem. See the engineering.</h2>
          </div>
          <p>
            Released open-source projects, free tools, and work in development. Each project
            states its own availability and license.
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
