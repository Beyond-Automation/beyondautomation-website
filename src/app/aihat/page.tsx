import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AIHAT v1.1.0",
  description:
    "Explore AIHAT, the Infrastructure Health Audit Toolkit for Windows operations from Beyond Automation.",
};

export default function AIHATPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-product-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Beyond Automation flagship product</p>
          <h1>AIHAT</h1>
          <h2>Infrastructure Health Audit Toolkit</h2>
          <p className="ba-product-lead">
            Audit Windows health, security, updates, and networking from one
            PowerShell command. Review the console dashboard, share the HTML report,
            or use structured JSON and object output in your own workflows.
          </p>

          <div className="ba-launch-actions">
            <a href="/products" className="ba-button ba-button-primary">
              View product availability →
            </a>
            <a href="/resources" className="ba-button ba-button-secondary">
              Explore resources
            </a>
          </div>

          <div className="ba-product-facts">
            <article><strong>4</strong><span>stable health modules</span></article>
            <article><strong>v1.1.0</strong><span>released product</span></article>
            <article><strong>Windows</strong><span>infrastructure health</span></article>
            <article><strong>Private</strong><span>proprietary source</span></article>
          </div>

          <div className="ba-product-content-grid">
            <article>
              <h3>What AIHAT checks</h3>
              <ul>
                <li>System health and resource utilization</li>
                <li>Windows Update and pending reboot state</li>
                <li>Defender, Firewall, BitLocker, Secure Boot, TPM, and UAC</li>
                <li>Adapters, IP addressing, DNS, gateway, DHCP, and connectivity</li>
              </ul>
            </article>
            <article>
              <h3>What AIHAT produces</h3>
              <ul>
                <li>Executive console health score</li>
                <li>Responsive HTML report</li>
                <li>Structured logs</li>
                <li>PowerShell object and JSON output</li>
              </ul>
            </article>
          </div>

          <section className="ba-product-command">
            <p>Release experience</p>
            <pre>{`Launch AIHAT
Run infrastructure audit
Review health score and findings
Export professional report`}</pre>
          </section>

          <div className="ba-product-links">
            <a href="/products">Product portfolio →</a>
            <a href="/resources">Engineering resources →</a>
            <a href="/journal">Engineering journal →</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
