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
    title: "Automation you control",
    description:
      "Every workflow is transparent, auditable, and designed to support sound engineering decisions in real operational environments.",
  },
  {
    icon: "◇",
    title: "Security before shortcuts",
    description:
      "Tools are designed around least privilege, safe defaults, input validation, auditable actions, and practical security patterns from the beginning.",
  },
];

const realities = [
  {
    title: "Repetitive health checks",
    description: "Manual verification across workstations, servers, and sites consumes hours that should be spent engineering improvements.",
  },
  {
    title: "Patch visibility delays",
    description: "Missing updates and failed deployments are often discovered only after risk or user impact has already increased.",
  },
  {
    title: "Documentation drift",
    description: "Production environments change faster than documentation, leaving teams dependent on tribal knowledge.",
  },
  {
    title: "Tool sprawl without clarity",
    description: "More dashboards can create more noise when teams still lack a clear, trusted view of operational health.",
  },
];

function OperationsIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="5" y="7" width="14" height="10" rx="2" />
      <rect x="29" y="7" width="14" height="10" rx="2" />
      <rect x="17" y="31" width="14" height="10" rx="2" />
      <path d="M12 17v7h24v-7M24 24v7" />
      <circle cx="12" cy="12" r="1.3" />
      <circle cx="36" cy="12" r="1.3" />
      <circle cx="24" cy="36" r="1.3" />
    </svg>
  );
}

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

          <div className="why-reality-panel why-reality-panel-premium">
            <div className="reality-header reality-header-premium">
              <span className="reality-icon reality-operations-icon">
                <OperationsIcon />
              </span>
              <div>
                <p>The reality of modern IT operations</p>
                <span>
                  Manual work, delayed visibility, and operational drag quietly consume engineering time.
                </span>
              </div>
            </div>

            <div className="reality-list reality-list-premium">
              {realities.map((item, index) => (
                <article key={item.title} className="reality-item reality-item-premium">
                  <span className="reality-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="reality-arrow" aria-hidden="true">→</span>
                </article>
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
                "Engineering-Driven Development",
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


