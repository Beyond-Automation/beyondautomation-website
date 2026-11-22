import { articlePath, journalArticles } from "@/content/journal";

export default function JournalPreview() {
  const articles = journalArticles.slice(0, 3);

  return (
    <section id="journal" className="ba-journal-section scroll-mt-24" aria-labelledby="journal-heading">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Engineering Journal</p>
            <h2 id="journal-heading">Technical articles and lab demonstrations.</h2>
          </div>
          <div className="ba-journal-intro">
            <p>
              Practical write-ups from real infrastructure work: how problems were diagnosed,
              how the automation was built, and what we learned along the way.
            </p>
            <a href="/journal" className="ba-text-link">View all articles →</a>
          </div>
        </div>

        <div className="ba-journal-grid">
          {articles.map((article) => (
            <article key={article.slug} className="ba-journal-card">
              <span>{article.video ? `${article.category} · Video` : article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a href={articlePath(article.slug)}>Read article →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
