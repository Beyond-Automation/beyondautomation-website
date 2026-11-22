import { projects } from "@/content/projects";

/**
 * Organization-focused homepage hero. The visual shows the whole Beyond
 * Automation portfolio and the open engineering workflow, with every project
 * given the same weight. Product-specific visuals (such as the AIHAT
 * dashboard) live on their own product pages.
 */

const workflow = [
  { step: "01", label: "Build", detail: "Hybrid infrastructure lab" },
  { step: "02", label: "Document", detail: "Engineering Journal" },
  { step: "03", label: "Demonstrate", detail: "YouTube lab demos" },
  { step: "04", label: "Publish", detail: "GitHub, open to contributors" },
];

function OrganizationVisual() {
  return (
    <div className="hero-dashboard-wrap" aria-label="Beyond Automation engineering portfolio overview">
      <div className="dashboard-glow" />
      <div className="dashboard-orbit" />

      <div className="ba-live-panel">
        <div className="dashboard-inner">
          <div className="dashboard-header">
            <div>
              <p className="dashboard-kicker">github.com/Beyond-Automation</p>
              <div className="dashboard-title-row">
                <h2>Engineering Portfolio</h2>
                <span className="ba-badge ba-badge-green">
                  <span className="live-dot" />
                  Built in the open
                </span>
              </div>
            </div>
          </div>

          <ul className="org-project-grid" aria-label="Projects">
            {projects.map((project) => (
              <li key={project.name} className="org-project-tile">
                <div className="org-project-top">
                  <strong>{project.name}</strong>
                  <span>{project.status}</span>
                </div>
                <p>{project.tagline}</p>
                <small>{project.release}</small>
              </li>
            ))}
          </ul>

          <ol className="org-workflow" aria-label="How we engineer">
            {workflow.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <strong>{item.label}</strong>
                <small>{item.detail}</small>
              </li>
            ))}
          </ol>

          <div className="org-terminal" aria-hidden="true">
            <p><b>$</b> git clone https://github.com/Beyond-Automation/OffboardPilot</p>
            <p><span>[OPEN]</span> Inspect the code, open an issue, send a pull request</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-space" />
      <div className="hero-galaxy hero-galaxy-primary" />
      <div className="hero-galaxy hero-galaxy-secondary" />
      <div className="hero-galaxy-horizon" />
      <div className="hero-nebula" />
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="hero-beam hero-beam-one" />
      <div className="hero-beam hero-beam-two" />
      <div className="hero-vignette" />

      <div className="ba-container hero-layout">
        <div className="hero-copy">
          <span className="ba-badge ba-badge-blue hero-badge">
            <span className="ba-badge-dot" />
            Open-source infrastructure engineering
          </span>

          <h1 className="hero-title">Engineering Smarter <span className="text-gradient">IT Operations.</span></h1>

          <p className="hero-description">Beyond Automation develops practical infrastructure software, open-source automation solutions, and technical resources for engineers who want to build better systems.</p>

          <div className="hero-actions">
            <a href="/products" className="ba-button ba-button-primary">
              Explore Our Projects
              <span className="ml-2">→</span>
            </a>
            <a href="/journal" className="ba-button ba-button-secondary">
              Engineering Journal
            </a>
          </div>

          <div className="hero-proof-grid">
            {[
              ["Open Source", "Inspect, adapt, contribute", "⌁"],
              ["Real Infrastructure", "Built and tested in a hybrid lab", ">_"],
              ["Engineering Education", "Articles and video demos", "◇"],
            ].map(([title, detail, icon]) => (
              <div key={title} className="hero-proof-card">
                <span className="proof-icon">{icon}</span>
                <div>
                  <p className="proof-title">{title}</p>
                  <p className="proof-detail">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <OrganizationVisual />
      </div>
    </section>
  );
}
