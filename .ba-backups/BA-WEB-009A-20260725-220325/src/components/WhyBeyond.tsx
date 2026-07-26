const principles = [
  {
    icon: "▦",
    title: "Built from real operations",
    description:
      "The work starts with infrastructure problems that actually happen: patching gaps, configuration drift, limited visibility, repetitive checks, and operational risk.",
  },
  {
    icon: ">_",
    title: "Automation you can understand",
    description:
      "Transparent PowerShell, clear logic, useful logs, and outputs that infrastructure professionals can verify instead of treating automation like a black box.",
  },
  {
    icon: "⌁",
    title: "AI with a human in control",
    description:
      "AI assists with analysis, documentation, and engineering speed. Final decisions stay grounded in human review, operational context, and responsible judgment.",
  },
  {
    icon: "◇",
    title: "Security before shortcuts",
    description:
      "Tools are designed around least privilege, safe defaults, input validation, auditable actions, and practical security patterns from the beginning.",
  },
];

const realities = [
  "Too many repetitive checks",
  "Patch visibility that arrives too late",
  "Documentation that falls behind",
  "Tools that create more dashboards instead of fewer problems",
];

export default function WhyBeyond() {
  return (
    <section id="why" className="why-section">
      <div className="why-background" />
      <div className="why-orb why-orb-one" />
      <div className="why-orb why-orb-two" />

      <div className="ba-container relative">
        <div className="why-intro-grid">
          <div>
            <p className="why-eyebrow">Why Beyond Automation</p>
            <h2 className="why-heading">
              IT teams do not need more noise.
              <span> They need practical leverage.</span>
            </h2>
          </div>

          <div className="why-lead">
            <p>
              Beyond Automation exists to create dependable tools for the work
              infrastructure teams face every day.
            </p>
            <p>
              The focus is not replacing engineers. It is helping them move faster,
              reduce repetitive effort, improve visibility, and make better operational
              decisions with automation they can trust.
            </p>
          </div>
        </div>

        <div className="why-statement">
          <div className="why-statement-copy">
            <span className="statement-label">The operating belief</span>
            <blockquote>
              “Good automation should remove friction without removing understanding.”
            </blockquote>
            <p>
              Every Beyond Automation product is designed to be useful in the real
              world: readable, explainable, secure, and grounded in infrastructure
              engineering experience.
            </p>
          </div>

          <div className="why-reality-panel">
            <div className="reality-header">
              <span className="reality-icon">!</span>
              <div>
                <p>What IT teams are dealing with</p>
                <span>Operational friction compounds quickly.</span>
              </div>
            </div>

            <div className="reality-list">
              {realities.map((item, index) => (
                <div key={item} className="reality-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article key={principle.title} className="principle-card">
              <div className="principle-topline">
                <span className="principle-icon">{principle.icon}</span>
                <span className="principle-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>

        <div className="engineer-story">
          <div className="story-visual">
            <div className="story-terminal">
              <div className="terminal-topbar">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span>Beyond Automation / Engineering Notes</span>
              </div>

              <div className="terminal-content">
                <p><b>PS&gt;</b> Get-InfrastructureProblem</p>
                <p><span>[FOUND]</span> Repetitive manual checks</p>
                <p><span>[FOUND]</span> Incomplete patch visibility</p>
                <p><span>[FOUND]</span> Operational knowledge trapped in people</p>
                <p><span>[ACTION]</span> Build practical, reusable automation</p>
                <p><span>[RESULT]</span> More time for engineering</p>
              </div>
            </div>
          </div>

          <div className="story-copy">
            <p className="why-eyebrow">Engineer-led, not hype-led</p>
            <h3>Created from infrastructure experience.</h3>
            <p>
              Beyond Automation is being built by an Infrastructure Engineer who works
              with Windows environments, PowerShell, patching, endpoint management,
              security tooling, and the daily reality of supporting distributed IT
              operations.
            </p>
            <p>
              That experience shapes the products: practical first, transparent by
              design, and focused on outcomes that matter to working IT teams.
            </p>

            <div className="story-tags">
              {[
                "Infrastructure Engineering",
                "PowerShell Automation",
                "AI-Assisted Development",
                "Security-Minded Design",
                "Open Source First",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
