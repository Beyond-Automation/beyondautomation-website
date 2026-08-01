const paths = [
  {
    label: "Available now",
    name: "Community",
    price: "Free",
    description: "Start with transparent, practical infrastructure auditing built for working IT professionals.",
    features: [
      "AIHAT open-source toolkit",
      "Windows health and update checks",
      "Structured PowerShell logging",
      "Documentation and roadmap access",
      "Community issue tracking",
    ],
    cta: "Explore AIHAT",
    href: "https://github.com/Beyond-Automation/AIHAT",
    featured: true,
  },
  {
    label: "In development",
    name: "Professional",
    price: "Coming soon",
    description: "Deeper reporting and scheduled operational visibility for individual engineers and growing IT teams.",
    features: [
      "Operational audit summaries",
      "Scheduled health audits",
      "PDF and HTML reporting",
      "Historical trend analysis",
      "Email-ready findings",
    ],
    cta: "View the roadmap",
    href: "https://github.com/Beyond-Automation/AIHAT/blob/main/ROADMAP.md",
    featured: false,
  },
  {
    label: "Future vision",
    name: "Enterprise",
    price: "Planned",
    description: "Centralized infrastructure intelligence for multi-site organizations, MSPs, and operational teams.",
    features: [
      "Multi-site management",
      "Central operations dashboard",
      "Team collaboration",
      "Role-based access",
      "API and platform integrations",
    ],
    cta: "Follow development",
    href: "https://github.com/Beyond-Automation",
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
    <section id="pricing" className="path-section">
      <div className="path-grid-bg" aria-hidden="true" />
      <div className="path-glow path-glow-left" aria-hidden="true" />
      <div className="path-glow path-glow-right" aria-hidden="true" />

      <div className="ba-container path-container">
        <div className="path-heading">
          <div>
            <p className="path-eyebrow">Choose Your Path</p>
            <h2>Start free. Grow only when the work demands it.</h2>
          </div>
          <p>
            Beyond Automation begins with useful, open tools. Professional and
            Enterprise capabilities will be added only when they create measurable
            operational value.
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
                target="_blank"
                rel="noreferrer"
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
            <strong>Built openly. Expanded responsibly.</strong>
            <p>No fake pricing, locked features, or enterprise promises before the product is ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

