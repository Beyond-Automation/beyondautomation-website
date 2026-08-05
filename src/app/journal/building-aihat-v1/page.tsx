import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "How AIHAT v1.0 went from PowerShell script to released product",
};

export default function ArticlePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <article className="ba-article-page">
        <div className="ba-container">
          <a href="/journal" className="ba-text-link">← Engineering Journal</a>
          <h1>How AIHAT v1.0 went from PowerShell script to released product</h1>
          <p className="ba-article-meta">Beyond Automation · August 2026</p>
          <div className="ba-article-body">
          <p>AIHAT began as a practical PowerShell audit script. It reached v1.0 only after the project gained a plugin framework, repeatable module contracts, automated tests, protected pull requests, responsive reporting, and a release pipeline.</p>
          <p>The most important lesson was that production quality is not one feature. It is the system around the feature: validation, documentation, security controls, packaging, checksums, and a workflow another person can trust.</p>
          <p>AIHAT v1.0 ships four stable health modules—System Health, Windows Update, Security Health, and Networking Health—alongside console, HTML, object, and JSON output.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
