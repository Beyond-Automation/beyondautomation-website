import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Build once. Publish everywhere.",
};

export default function ArticlePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <article className="ba-article-page">
        <div className="ba-container">
          <a href="/journal" className="ba-text-link">← Engineering Journal</a>
          <h1>Build once. Publish everywhere.</h1>
          <p className="ba-article-meta">Beyond Automation · August 2026</p>
          <div className="ba-article-body">
          <p>Beyond Automation uses one operating rule: every engineering effort should also create useful content.</p>
          <p>A release can become a GitHub asset, website update, technical article, LinkedIn post, newsletter, demo script, screenshots, SEO entry point, and future sales material.</p>
          <p>This does not mean turning engineering into hype. It means teaching what was learned, helping more people discover the work, and allowing one completed project to keep producing value.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
