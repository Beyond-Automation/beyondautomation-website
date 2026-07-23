const features = [
  {
    number: "01",
    title: "AI with purpose",
    text: "We apply AI where it accelerates decisions and removes friction—not where it adds complexity.",
  },
  {
    number: "02",
    title: "Automation first",
    text: "Reliable PowerShell and repeatable workflows turn manual operations into dependable systems.",
  },
  {
    number: "03",
    title: "Built for IT pros",
    text: "Every product is grounded in real infrastructure, endpoint, Microsoft 365, and security work.",
  },
];

export default function Features() {
  return (
    <section id="why" className="section section-light">
      <div className="page-shell">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">Why Beyond Automation</span>
            <h2>Built for the work behind the screen.</h2>
          </div>
          <p>
            Enterprise IT teams do not need more noise. They need practical tools
            that are understandable, testable, and ready for real environments.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.number} className="feature-card">
              <span className="feature-number">{feature.number}</span>
              <div className="feature-icon" aria-hidden="true">{feature.number === "01" ? "✦" : feature.number === "02" ? "⌁" : "◫"}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
