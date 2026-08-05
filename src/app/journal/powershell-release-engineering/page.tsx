import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Why PowerShell projects need release engineering",
};

export default function ArticlePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <article className="ba-article-page">
        <div className="ba-container">
          <a href="/journal" className="ba-text-link">← Engineering Journal</a>
          <h1>Why PowerShell projects need release engineering</h1>
          <p className="ba-article-meta">Beyond Automation · August 2026</p>
          <div className="ba-article-body">
          <p>A script can be useful without being distributable. Release engineering closes that gap.</p>
          <p>For AIHAT, that meant version consistency checks, PSScriptAnalyzer, Pester, a repeatable ZIP builder, SHA-256 checksum generation, protected main, automated GitHub Releases, and installation documentation.</p>
          <p>These practices do not make PowerShell less practical. They make practical work easier to trust, repeat, maintain, and share.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
