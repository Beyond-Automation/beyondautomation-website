import OutboundLink from "@/components/analytics/OutboundLink";
import { externalLinks, founder } from "@/lib/site";

const ways = [
  {
    step: "01",
    title: "Explore the projects",
    description:
      "Browse released projects on GitHub. Read the code, the documentation, and the reasoning behind each design decision.",
  },
  {
    step: "02",
    title: "Contribute improvements",
    description:
      "Fork a repository, make it work for your environment, and send a pull request when your change could help other engineers.",
  },
  {
    step: "03",
    title: "Report issues",
    description:
      "Found a bug or an edge case in your tenant or domain? Open an issue on the project's GitHub repository with the steps to reproduce it.",
  },
  {
    step: "04",
    title: "Share ideas",
    description:
      "Suggest the next automation problem worth solving, or ask questions on the lab demonstrations on YouTube.",
  },
];

export default function OpenSourceCommunity() {
  return (
    <section id="community" className="ba-growth-section ba-community-section scroll-mt-24" aria-labelledby="community-heading">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Open-Source Community</p>
            <h2 id="community-heading">Infrastructure engineering, built in the open.</h2>
          </div>
          <p>
            Beyond Automation is a collaborative engineering effort. We solve real operational
            problems, show the work, and publish released projects so engineers can learn from
            them, adapt them, and make them better together.
          </p>
        </div>

        <div className="ba-community-grid">
          {ways.map((item) => (
            <article key={item.step} className="ba-community-card">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="ba-community-links">
          <OutboundLink href={externalLinks.github} destination="github" placement="home_community" className="ba-button ba-button-primary">
            Beyond Automation on GitHub <span className="ml-2" aria-hidden="true">↗</span>
          </OutboundLink>
          <OutboundLink href={externalLinks.youtube} destination="youtube" placement="home_community" className="ba-button ba-button-secondary">
            Watch on YouTube <span className="ml-2" aria-hidden="true">↗</span>
          </OutboundLink>
        </div>

        <div id="about" className="ba-community-about scroll-mt-24">
          <p className="ba-launch-eyebrow">About Beyond Automation</p>
          <p>
            Beyond Automation was founded by {founder.name}, an infrastructure engineer with more
            than 20 years of enterprise IT experience, to help IT professionals eliminate
            repetitive work without sacrificing visibility, security, or control. Projects are
            developed and validated in an independent hybrid infrastructure lab. Each project
            states its own license.
          </p>
        </div>
      </div>
    </section>
  );
}
