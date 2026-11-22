import { articlePath, journalArticles } from "@/content/journal";

export default function JournalPreview() {
  const articles = journalArticles.slice(0, 3);

  return (
    <section id="journal" className="ba-journal-section">
      <div className="ba-container">
        <div className="ba-growth-header">
          <div>
            <p>Engineering Journal</p>
            <h2>Real infrastructure. Real engineering. Real automation.</h2>
          </div>
          <a href="/journal" className="ba-text-link">View all articles →</a>
        </div>

        <div className="ba-journal-grid">
          {articles.map((article) => (
            <article key={article.slug} className="ba-journal-card">
              <span>{article.category}</span>
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
