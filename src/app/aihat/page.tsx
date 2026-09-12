import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "AIHAT v1.2.0 | Free Windows Infrastructure Health Tool",
  description:
    "Download the free, signed AIHAT v1.2.0 Windows application from Beyond Automation.",
};

const downloadUrl =
  "https://github.com/Beyond-Automation/AIHAT-Releases/releases/download/v1.2.0/AIHAT-v1.2.0-Setup.exe";
const checksumUrl =
  "https://github.com/Beyond-Automation/AIHAT-Releases/releases/download/v1.2.0/AIHAT-v1.2.0-Setup.exe.sha256";

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
              <span><i /> Free public release</span>
              <span>Windows x64</span>
              <span>v1.2.0</span>
            </div>

            <p className="ba-launch-eyebrow">Beyond Automation flagship product</p>
            <h1>Know the health of your Windows system.</h1>
            <p className="aihat-release-lead">
              AIHAT turns system health, Windows Update, security, and network checks
              into clear findings, an executive score, and a professional local report.
            </p>

            <div className="aihat-release-actions">
              <a href={downloadUrl} className="aihat-download-button">
                <span className="aihat-download-icon" aria-hidden="true">↓</span>
                <span>
                  <strong>Download AIHAT v1.2.0</strong>
                  <small>Free signed installer · Windows x64</small>
                </span>
                <b aria-hidden="true">→</b>
              </a>
              <a href="#install" className="aihat-release-secondary">View installation steps</a>
            </div>

            <div className="aihat-release-trust">
              <span>✓ Verified publisher: Randall Lewis</span>
              <span>✓ No separate .NET installation</span>
              <span>✓ No telemetry or cloud upload</span>
            </div>
          </div>

          <div className="aihat-product-stage" aria-label="AIHAT audit result preview">
            <div className="aihat-stage-orbit" aria-hidden="true" />
            <div className="aihat-window">
              <div className="aihat-window-bar">
                <div><span /><span /><span /></div>
                <strong>AIHAT / INFRASTRUCTURE HEALTH</strong>
                <em>v1.2.0</em>
              </div>
              <div className="aihat-window-body">
                <div className="aihat-score-ring">
                  <span>OVERALL HEALTH</span>
                  <strong>95</strong>
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
                <span>&gt; All required collectors completed</span>
                <strong>HTML report generated ✓</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aihat-release-strip">
        <div className="ba-container">
          <article><strong>4</strong><span>native health collectors</span></article>
          <article><strong>100%</strong><span>local assessment</span></article>
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
              <p>Review memory, storage, uptime, operating system, processor, and core system condition.</p>
            </article>
            <article>
              <span>02</span><h3>Update readiness</h3>
              <p>Surface Windows Update condition, installed updates, and restart indicators.</p>
            </article>
            <article>
              <span>03</span><h3>Security posture</h3>
              <p>Inspect Defender, Firewall, BitLocker, Secure Boot, TPM, UAC, and local administrators.</p>
            </article>
            <article>
              <span>04</span><h3>Network health</h3>
              <p>Check adapters, addressing, DNS, gateways, connectivity, and latency.</p>
            </article>
          </div>

          <div id="install" className="aihat-install-grid">
            <section className="aihat-install-panel">
              <p className="ba-launch-eyebrow">Three-step start</p>
              <h2>From download to findings in minutes.</h2>
              <ol>
                <li><span>1</span><div><strong>Download and verify</strong><p>Save the installer and confirm it against the published SHA-256 checksum.</p></div></li>
                <li><span>2</span><div><strong>Install and approve UAC</strong><p>Run the signed installer, launch AIHAT, and approve administrator elevation for complete evidence.</p></div></li>
                <li><span>3</span><div><strong>Run the audit</strong><p>Review module status, actionable findings, and the generated local HTML report.</p></div></li>
              </ol>
            </section>

            <aside className="aihat-release-card">
              <div className="aihat-release-card-top">
                <span>FREE RELEASE</span><strong>v1.2.0</strong>
              </div>
              <h3>AIHAT for Windows</h3>
              <p>A signed Windows installer containing the self-contained native .NET desktop assessment application.</p>
              <ul>
                <li>Windows 10, 11, or Server</li>
                <li>Windows x64</li>
                <li>Read-only local assessment</li>
                <li>Private source · free public binary</li>
              </ul>
              <a className="aihat-card-download" href={downloadUrl}>Download installer <span>→</span></a>
              <a className="aihat-checksum-link" href={checksumUrl}>Download SHA-256 checksum</a>
            </aside>
          </div>

          <section className="aihat-integrity">
            <div>
              <p className="ba-launch-eyebrow">Release integrity</p>
              <h2>Signed. Timestamped. Verifiable.</h2>
              <p>AIHAT v1.2.0 is Authenticode-signed and timestamped. Windows identifies the verified publisher as Randall Lewis, and the matching SHA-256 file lets you verify the download before installation.</p>
            </div>
            <pre><code>{`Get-FileHash .\\AIHAT-v1.2.0-Setup.exe -Algorithm SHA256`}</code></pre>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
