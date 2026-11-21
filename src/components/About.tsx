const pillars = [
  {
    title: "Automate Smarter",
    description: "Build practical automation that solves real operational problems.",
  },
  {
    title: "Stay in Control",
    description: "Protect visibility, security, and human decision-making.",
  },
  {
    title: "Keep Improving",
    description: "Share repeatable engineering patterns that help IT teams grow.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="ba-mission-section"
      aria-labelledby="about-heading"
    >
      <div className="ba-container">
        <div className="ba-about-intro">
          <p className="ba-mission-eyebrow">About Beyond Automation</p>

          <h2 id="about-heading">
            Infrastructure engineering, built in the open.
          </h2>

          <p>
            Beyond Automation was founded by Randall Lewis, an infrastructure
            engineer with more than 20 years of enterprise IT experience, to help
            IT professionals eliminate repetitive work without sacrificing
            visibility, security, or control. Our projects are developed and
            validated in an independent hybrid infrastructure lab, and released
            projects are published on GitHub for engineers to inspect, adapt,
            and improve.
          </p>
        </div>

        <div className="ba-mission-panel">
          <div className="ba-mission-ambient" aria-hidden="true" />

          <div className="ba-mission-copy">
            <p className="ba-mission-eyebrow">Our Mission</p>

            <h3>
              Help IT teams move
              <span> beyond </span>
              repetitive work.
            </h3>

            <p className="ba-mission-description">
              We build practical tools, engineering patterns, and learning
              resources that help technology professionals modernize
              operations while maintaining control of the fundamentals.
            </p>

            <div className="ba-mission-pillars">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="ba-mission-pillar">
                  <div>
                    <h4>{pillar.title}</h4>
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
          </aside>
        </div>
      </div>
    </section>
  );
}
