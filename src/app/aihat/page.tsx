import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Download AIHAT v1.1.0",
  description:
    "Download AIHAT v1.1.0 for Windows — a self-contained infrastructure health audit toolkit from Beyond Automation.",
};

const downloadUrl = "/downloads/AIHAT-v1.1.0-Setup.exe";
const checksumUrl = "/downloads/AIHAT-v1.1.0-Setup.exe.sha256";

export default function AIHATPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section className="aihat-release-hero">
        <div className="aihat-release-grid" aria-hidden="true" />
        <div className="aihat-release-glow" aria-hidden="true" />

        <div className="ba-container aihat-release-shell">
          <div className="aihat-release-copy">
            <div className="aihat-release-badges">
              <span><i /> Production release</span>
              <span>Windows x64</span>
              <span>v1.1.0</span>
            </div>

            <p className="ba-launch-eyebrow">Beyond Automation flagship product</p>
            <h1>Know the health of your Windows system.</h1>
            <p className="aihat-release-lead">
              AIHAT turns system health, Windows Update, security, and network checks
              into clear findings, an executive score, and a professional report.
            </p>

            <div className="aihat-release-actions">
              <a href={downloadUrl} className="aihat-download-button">
                <span className="aihat-download-icon" aria-hidden="true">↓</span>
                <span>
                  <strong>Download AIHAT</strong>
                  <small>v1.1.0 · Windows x64 · Installer</small>
                </span>
                <b aria-hidden="true">→</b>
              </a>
              <a href="#install" className="aihat-release-secondary">View installation steps</a>
            </div>

            <div className="aihat-release-trust">
              <span>✓ Guided Windows installer</span>
              <span>✓ No separate .NET installation</span>
              <span>✓ SHA-256 verified release</span>
            </div>
          </div>

          <div className="aihat-product-stage" aria-label="AIHAT audit result preview">
            <div className="aihat-stage-orbit" aria-hidden="true" />
            <div className="aihat-window">
              <div className="aihat-window-bar">
                <div><span /><span /><span /></div>
                <strong>AIHAT / INFRASTRUCTURE HEALTH</strong>
                <em>v1.1.0</em>
              </div>
              <div className="aihat-window-body">
                <div className="aihat-score-ring">
                  <span>OVERALL HEALTH</span>
                  <strong>87</strong>
                  <small>Warning</small>
                </div>
                <div className="aihat-module-list">
                  <div><span>System Health</span><strong className="is-healthy">Healthy</strong></div>
                  <div><span>Windows Update</span><strong className="is-healthy">Healthy</strong></div>
                  <div><span>Security Health</span><strong className="is-warning">Warning</strong></div>
                  <div><span>Networking Health</span><strong className="is-healthy">Healthy</strong></div>
                </div>
              </div>
              <div className="aihat-window-footer">
                <span>&gt; Audit complete</span>
                <strong>HTML report generated ✓</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aihat-release-strip">
        <div className="ba-container">
          <article><strong>4</strong><span>health modules</span></article>
          <article><strong>34</strong><span>automated tests</span></article>
          <article><strong>1</strong><span>professional report</span></article>
          <article><strong>0</strong><span>runtime installs required</span></article>
        </div>
      </section>

      <section className="aihat-release-content">
        <div className="ba-container">
          <div className="aihat-section-heading">
            <p className="ba-launch-eyebrow">What you get</p>
            <h2>One download. Immediate operational clarity.</h2>
            <p>Built for infrastructure professionals who need useful evidence—not another noisy dashboard.</p>
          </div>

          <div className="aihat-capability-grid">
            <article>
              <span>01</span><h3>System health</h3>
              <p>Review CPU, memory, storage, uptime, operating system, and core system condition.</p>
            </article>
            <article>
              <span>02</span><h3>Update readiness</h3>
              <p>Surface Windows Update condition, installed updates, and restart indicators.</p>
            </article>
            <article>
              <span>03</span><h3>Security posture</h3>
              <p>Inspect Defender, Firewall, BitLocker, Secure Boot, TPM, and UAC signals.</p>
            </article>
            <article>
              <span>04</span><h3>Network health</h3>
              <p>Check adapters, addressing, DNS, gateway, DHCP, connectivity, and latency.</p>
            </article>
          </div>

          <div id="install" className="aihat-install-grid">
            <section className="aihat-install-panel">
              <p className="ba-launch-eyebrow">Three-step start</p>
              <h2>From download to findings in minutes.</h2>
              <ol>
                <li><span>1</span><div><strong>Download and verify</strong><p>Save the Windows installer and confirm it against the published SHA-256 checksum.</p></div></li>
                <li><span>2</span><div><strong>Launch the desktop app</strong><p>Open <code>Desktop\AIHAT.Desktop.exe</code>. Administrator access is recommended.</p></div></li>
                <li><span>3</span><div><strong>Run the audit</strong><p>Review live module progress, actionable findings, and the generated HTML report.</p></div></li>
              </ol>
            </section>

            <aside className="aihat-release-card">
              <div className="aihat-release-card-top">
                <span>RELEASE</span><strong>v1.1.0</strong>
              </div>
              <h3>AIHAT for Windows</h3>
              <p>A guided Windows installer containing the self-contained desktop and PowerShell/CLI experiences.</p>
              <ul>
                <li>Windows 10, 11, or Server</li>
                <li>Windows x64 desktop client</li>
                <li>Internet optional for core audit</li>
                <li>Private source · public release</li>
              </ul>
              <a href={downloadUrl} className="aihat-card-download">Download release <span>↓</span></a>
              <a href={checksumUrl} className="aihat-checksum-link">Download SHA-256 checksum</a>
            </aside>
          </div>

          <section className="aihat-integrity">
            <div>
              <p className="ba-launch-eyebrow">Release integrity</p>
              <h2>Verify before you run.</h2>
              <p>Every AIHAT installer includes a published SHA-256 checksum so you can confirm the download has not changed. Version 1.1.0 is not yet code-signed, so Windows SmartScreen may appear.</p>
            </div>
            <pre><code>{`Get-FileHash .\\AIHAT-v1.1.0-Setup.exe -Algorithm SHA256`}</code></pre>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
