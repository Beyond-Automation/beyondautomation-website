const pillars = [
  { icon: "↯", title: "Automate Smarter", description: "Practical automation that solves real problems." },
  { icon: "♢", title: "Stay in Control", description: "Built with security, transparency, and trust." },
  { icon: "▥", title: "Keep Improving", description: "Resources and patterns that help teams grow." },
];

export default function About() {
  return (
    <section id="about" className="ba-mission-section">
      <div className="ba-container">
        <div className="ba-mission-panel">
          <div className="ba-mission-copy">
            <p className="ba-mission-eyebrow">Our Mission</p>
            <h2>Help IT teams move <span>beyond</span> repetitive work.</h2>
            <p className="ba-mission-description">
              Beyond Automation builds practical tools, engineering patterns, and learning resources that help IT professionals modernize operations without losing control of the fundamentals.
            </p>
            <div className="ba-mission-pillars">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="ba-mission-pillar">
                  <div className="ba-mission-pillar-icon">{pillar.icon}</div>
                  <div><h3>{pillar.title}</h3><p>{pillar.description}</p></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="ba-founder-card">
            <div className="ba-quote-mark">“</div>
            <blockquote>AI should strengthen engineering judgment—not replace it.</blockquote>
            <div className="ba-founder-divider" />
            <strong>Randall Lewis</strong>
            <span>Infrastructure Engineer &amp; Founder</span>
            <div className="ba-founder-wave" aria-hidden="true"><span /><span /><span /></div>
          </aside>
        </div>
      </div>
    </section>
  );
}
