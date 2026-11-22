import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LaunchNewsletter from "@/components/LaunchNewsletter";
import Navbar from "@/components/Navbar";
import { articlePath, journalArticles } from "@/content/journal";

const description =
  "Engineering articles and lab demonstrations on infrastructure automation, Active Directory, Microsoft 365, PowerShell, and release engineering from Beyond Automation.";

export const metadata: Metadata = {
  title: "Engineering Journal",
  description,
  alternates: { canonical: "/journal" },
  openGraph: { type: "website", url: "/journal", title: "Engineering Journal | Beyond Automation", description },
};

export default function JournalPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Engineering Journal</p>
          <h1>What we build, what we learn, and how it works.</h1>
          <p className="ba-product-lead">
            Technical articles and lab demonstrations from Beyond Automation. Each one starts with a real
            operational problem and explains the engineering behind the solution.
          </p>
          <div className="ba-journal-grid">
            {journalArticles.map((article) => (
              <article key={article.slug} className="ba-journal-card">
                <span>{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                {article.video && <small className="ba-journal-card-flag">Includes video demonstration</small>}
                <a href={articlePath(article.slug)}>Read article →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <LaunchNewsletter source="journal-index" />
      <Footer />
    </main>
  );
}
