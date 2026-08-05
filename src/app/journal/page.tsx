import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Engineering Journal",
  description: "PowerShell, infrastructure, release engineering, and building in public.",
};

const articles = [
  ["building-aihat-v1", "How AIHAT v1.0 went from PowerShell script to released product", "Building in public"],
  ["powershell-release-engineering", "Why PowerShell projects need release engineering", "PowerShell"],
  ["build-once-publish-everywhere", "Build once. Publish everywhere.", "Beyond Automation"],
];

export default function JournalPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Engineering Journal</p>
          <h1>What we build, how we build it, and what we learn.</h1>
          <div className="ba-journal-grid">
            {articles.map(([slug, title, category]) => (
              <article key={slug} className="ba-journal-card">
                <span>{category}</span>
                <h2>{title}</h2>
                <p>Practical engineering notes from the Beyond Automation product journey.</p>
                <a href={`/journal/${slug}`}>Read article →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
