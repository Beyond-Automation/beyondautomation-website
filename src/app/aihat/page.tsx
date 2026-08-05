import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AIHAT v1.0.0",
  description:
    "Download AIHAT, the open-source Infrastructure Health Audit Toolkit for Windows operations.",
};

const releaseUrl = "https://github.com/Beyond-Automation/AIHAT/releases/latest";
const repositoryUrl = "https://github.com/Beyond-Automation/AIHAT";

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
            <a href={releaseUrl} target="_blank" rel="noreferrer" className="ba-button ba-button-primary">
              Download latest release →
            </a>
            <a href={`${repositoryUrl}#readme`} target="_blank" rel="noreferrer" className="ba-button ba-button-secondary">
              Documentation
            </a>
            <a href={repositoryUrl} target="_blank" rel="noreferrer" className="ba-text-link">
              GitHub repository ↗
            </a>
          </div>

          <div className="ba-product-facts">
            <article><strong>4</strong><span>stable health modules</span></article>
            <article><strong>34</strong><span>automated tests</span></article>
            <article><strong>1.0.0</strong><span>stable release</span></article>
            <article><strong>MIT</strong><span>open-source license</span></article>
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
            <p>Quick start</p>
            <pre>{`Expand-Archive .\\AIHAT-v1.0.0.zip -DestinationPath C:\\Tools\\AIHAT
Set-Location C:\\Tools\\AIHAT
.\\Start-AIHAT.ps1`}</pre>
          </section>

          <div className="ba-product-links">
            <a href={`${repositoryUrl}/blob/main/docs/INSTALLATION.md`} target="_blank" rel="noreferrer">Installation guide →</a>
            <a href={`${repositoryUrl}/blob/main/docs/USER-GUIDE.md`} target="_blank" rel="noreferrer">User guide →</a>
            <a href={`${repositoryUrl}/blob/main/docs/RELEASE-NOTES-v1.0.0.md`} target="_blank" rel="noreferrer">Release notes →</a>
            <a href={`${repositoryUrl}/blob/main/ROADMAP.md`} target="_blank" rel="noreferrer">Roadmap →</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
