// TODO [BA-WEB-042]: Replace Auvik placeholder URL with approved affiliate link
import type { Metadata } from "next";
import AffiliateCard from "@/components/AffiliateCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resources",
  description: "Product demos, engineering notes, and practical resources for infrastructure health, patch readiness, and network troubleshooting.",
};

export default function ResourcesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Engineering resources</p>
          <h1>Practical evidence for modern IT operations.</h1>
          <p className="ba-product-lead">
            Explore a released product experience, follow engineering work approaching launch,
            and use the journal to see how Beyond Automation turns operational problems into software.
          </p>
          <div className="ba-roadmap-grid">
            <a className="ba-roadmap-card" href="/aihat">
              <span className="ba-roadmap-status status-released">Released</span>
              <h2>AIHAT v1.2.0</h2>
              <p>Download the free signed Windows application or run the safe browser demonstration of its audit, findings, and reporting experience.</p>
              <strong>Get AIHAT →</strong>
            </a>
            <a className="ba-roadmap-card" href="/journal">
              <span className="ba-roadmap-status status-release-candidate">Release Candidate</span>
              <h2>PatchPilot</h2>
              <p>Follow the Windows patch-health work focused on evidence, coverage, readiness, and remediation decisions.</p>
              <strong>Follow PatchPilot →</strong>
            </a>
            <a className="ba-roadmap-card" href="/journal">
              <span className="ba-roadmap-status status-launching">Launching</span>
              <h2>NetFixLab</h2>
              <p>Follow the diagnosis-first network troubleshooting work designed to isolate problems before unnecessary fixes or purchases.</p>
              <strong>Follow NetFixLab →</strong>
            </a>
            <a className="ba-roadmap-card" href="/journal">
              <span className="ba-roadmap-status status-growing">Growing</span>
              <h2>Engineering Journal</h2>
              <p>Read practical engineering notes on AIHAT, PowerShell release engineering, and the build-once publishing model.</p>
              <strong>Read engineering notes →</strong>
            </a>
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
