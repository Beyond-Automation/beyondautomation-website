import { projects } from "@/content/projects";

const statusClass = (status: string) => `status-${status.toLowerCase().replaceAll(" ", "-")}`;

export default function ProductRoadmap() {
  return (
    <section id="products" className="ba-growth-section scroll-mt-24" aria-labelledby="projects-heading">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Engineering Projects</p>
            <h2 id="projects-heading">Choose the problem. See the engineering.</h2>
          </div>
          <p>
            Open-source automation, free tools, and work in development. Each project states
            its own release status and license, so you know exactly what you can inspect,
            run, and contribute to.
          </p>
        </div>

        <div className="ba-roadmap-grid ba-portfolio-grid">
          {projects.map((project) => (
            <a key={project.name} href={project.href} className="ba-roadmap-card">
              <span className={`ba-roadmap-status ${statusClass(project.status)}`}>
                {project.status}
              </span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <dl className="ba-project-facts">
                <div>
                  <dt>Release</dt>
                  <dd>{project.release}</dd>
                </div>
                <div>
                  <dt>License</dt>
                  <dd>{project.license}</dd>
                </div>
              </dl>
              <strong>{project.cta} →</strong>
            </a>
          ))}
        </div>

        <p className="ba-portfolio-more">
          Looking for checklists and references? <a href="/resources">Browse engineering resources →</a>
        </p>
      </div>
    </section>
  );
}
