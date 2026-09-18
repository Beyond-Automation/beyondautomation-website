// TODO [BA-WEB-042]: Replace Auvik placeholder URL with approved affiliate link
import type { Metadata } from "next";
import AffiliateCard from "@/components/AffiliateCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/ui/Section";

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
      <Section
        id="recommended-tools"
        surface
        eyebrow="Partners"
        title="Recommended Tools"
        intro="Tools and platforms we use and recommend. Some links below are affiliate links — we may earn a commission at no extra cost to you."
      >
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AffiliateCard
            name="Auvik"
            category="Network Monitoring"
            description="Cloud-based network monitoring and management platform. Auvik automates network discovery, mapping, and performance monitoring — giving you real-time visibility into your entire network infrastructure."
            features={[
              "Automated network discovery and topology mapping",
              "Real-time network performance monitoring",
              "Configuration backup and restore",
              "Cloud-managed — no on-prem server required",
              "Integrates with PSA and ITSM tools",
            ]}
            // TODO [BA-WEB-042]: Replace with approved Auvik affiliate URL once the partnership is confirmed, then set isPending={false}
            affiliateUrl="https://www.auvik.com/"
            isPending
            ctaText="Try Auvik"
          />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
