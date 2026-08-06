const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />
      </svg>
    ),
    title: "Automate Smarter",
    description: "Practical automation that solves real problems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.4 2.8 8.5 7 10 4.2-1.5 7-5.6 7-10V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.7-4" />
      </svg>
    ),
    title: "Stay in Control",
    description: "Built with security, transparency, and trust.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V10h4v9H4Zm6 0V5h4v14h-4Zm6 0V2h4v17h-4Z" />
      </svg>
    ),
    title: "Keep Improving",
    description: "Resources and patterns that help teams grow.",
  },
];

export default function About() {
  return (
    <section id="about" className="ba-mission-section">
      <div className="ba-container">
        <div className="ba-mission-panel">
          <div className="ba-mission-ambient" aria-hidden="true" />

          <div className="ba-mission-copy">
            <p className="ba-mission-eyebrow">Our Mission</p>
            <h2>
              Help IT teams move
              <span> beyond </span>
              repetitive work.
            </h2>

            <p className="ba-mission-description">
              Beyond Automation builds practical tools, engineering patterns, and
              learning resources that help IT professionals modernize operations
              without losing control of the fundamentals.
            </p>

            <div className="ba-mission-pillars">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="ba-mission-pillar">
                  <div className="ba-mission-pillar-icon">{pillar.icon}</div>
                  <div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="ba-founder-card">
            <div className="ba-founder-shine" aria-hidden="true" />
            <div className="ba-quote-mark">“</div>

            <blockquote>
              Technology should remove obstacles—not create them.
            </blockquote>

            <div className="ba-founder-divider" />

            <strong>Randall Lewis</strong>
            <span>Infrastructure Engineer &amp; Founder</span>

            <div className="ba-founder-wave" aria-hidden="true">
              <span />
              <span />
              <span />
              <i />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


