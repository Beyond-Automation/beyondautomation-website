const paths = [
  {
    label: "Released",
    name: "AIHAT",
    price: "Available now",
    description: "Explore practical Windows infrastructure auditing built for working IT professionals.",
    features: [
      "Windows infrastructure health auditing",
      "Windows health and update checks",
      "Structured reporting",
      "Security and networking assessment",
      "Private proprietary source",
    ],
    cta: "Explore AIHAT",
    href: "/aihat",
    featured: true,
  },
  {
    label: "Release candidate",
    name: "PatchPilot",
    price: "Approaching launch",
    description: "Windows patch-health assessment built for clear evidence, coverage, and remediation decisions.",
    features: [
      "Patch-health assessment",
      "Clear operational findings",
      "Professional Windows experience",
      "Release-gated engineering",
      "Private proprietary source",
    ],
    cta: "Follow the build",
    href: "/journal",
    featured: false,
  },
  {
    label: "Live",
    name: "NetFixLab",
    price: "Live web experience",
    description: "Practical network troubleshooting guidance built around diagnosis first.",
    features: [
      "Troubleshooting workflows",
      "Diagnostic guidance",
      "Practical equipment guidance",
      "Public customer experience",
      "Private implementation source",
    ],
    cta: "Visit NetFixLab",
    href: "https://netfixlab.com",
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function ChooseYourPath() {
  return (
    <section id="portfolio" className="path-section">
      <div className="path-grid-bg" aria-hidden="true" />
      <div className="path-glow path-glow-left" aria-hidden="true" />
      <div className="path-glow path-glow-right" aria-hidden="true" />

      <div className="ba-container path-container">
        <div className="path-heading">
          <div>
            <p className="path-eyebrow">Product Portfolio</p>
            <h2>Choose the problem. Explore the product.</h2>
          </div>
          <p>
            Beyond Automation shows customers what each product solves while keeping
            proprietary source code, architecture, and internal release tooling private.
          </p>
        </div>

        <div className="path-cards">
          {paths.map((path) => (
            <article
              key={path.name}
              className={`path-card${path.featured ? " path-card-featured" : ""}`}
            >
              {path.featured && <div className="path-featured-line" aria-hidden="true" />}

              <div className="path-card-top">
                <span className={`path-status${path.featured ? " path-status-live" : ""}`}>
                  {path.featured && <i />}
                  {path.label}
                </span>
                <span className="path-index">0{paths.indexOf(path) + 1}</span>
              </div>

              <h3>{path.name}</h3>
              <p className="path-price">{path.price}</p>
              <p className="path-description">{path.description}</p>

              <div className="path-divider" />

              <ul>
                {path.features.map((feature) => (
                  <li key={feature}>
                    <span><CheckIcon /></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={path.href}
                className={path.featured ? "path-cta path-cta-primary" : "path-cta"}
              >
                <span>{path.cta}</span>
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="path-note">
          <span className="path-note-icon">BA</span>
          <div>
            <strong>Public proof. Private engineering core.</strong>
            <p>Show the value, protect the implementation, and ship only when the product meets the release standard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
