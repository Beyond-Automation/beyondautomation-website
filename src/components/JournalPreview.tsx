const articles = [
  {
    title: "How AIHAT v1.0 went from PowerShell script to released product",
    category: "Building in public",
    description: "The architecture, quality gates, release workflow, and lessons behind the first stable release.",
    href: "/journal/building-aihat-v1",
  },
  {
    title: "Why PowerShell projects need release engineering",
    category: "PowerShell",
    description: "How tests, checksums, packaging, protected branches, and automated releases change user trust.",
    href: "/journal/powershell-release-engineering",
  },
  {
    title: "Build once. Publish everywhere.",
    category: "Beyond Automation",
    description: "The operating rule that turns every engineering feature into a launch package and lasting content.",
    href: "/journal/build-once-publish-everywhere",
  },
];

export default function JournalPreview() {
  return (
    <section id="journal" className="ba-journal-section">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Engineering Journal</p>
            <h2>Real engineering. Shared openly.</h2>
          </div>
          <a href="/journal" className="ba-text-link">View all articles →</a>
        </div>

        <div className="ba-journal-grid">
          {articles.map((article) => (
            <article key={article.title} className="ba-journal-card">
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.href}>Read article →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
