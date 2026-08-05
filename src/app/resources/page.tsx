import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free tools, documentation, checklists, and engineering resources.",
};

export default function ResourcesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Free resources</p>
          <h1>Practical tools for modern IT operations.</h1>
          <div className="ba-roadmap-grid">
            <a className="ba-roadmap-card" href="/aihat">
              <span className="ba-roadmap-status status-released">Released</span>
              <h2>AIHAT v1.0.0</h2>
              <p>Windows infrastructure health auditing, reporting, and structured output.</p>
              <strong>Download →</strong>
            </a>
            <article className="ba-roadmap-card">
              <span className="ba-roadmap-status status-planned">Planned</span>
              <h2>PowerShell Operations Checklist</h2>
              <p>A reusable checklist for safely shipping infrastructure automation.</p>
            </article>
            <article className="ba-roadmap-card">
              <span className="ba-roadmap-status status-planned">Planned</span>
              <h2>Patch Readiness Workbook</h2>
              <p>A practical worksheet for patch risk, pilot groups, and maintenance readiness.</p>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
