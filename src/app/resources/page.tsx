import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
              <h2>AIHAT v1.1.0</h2>
              <p>Run the safe browser demonstration and see the Windows infrastructure health audit workflow, findings, and reporting experience.</p>
              <strong>Run the AIHAT experience →</strong>
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
      <Footer />
    </main>
  );
}
