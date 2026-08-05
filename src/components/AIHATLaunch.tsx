const releaseUrl = "https://github.com/Beyond-Automation/AIHAT/releases/latest";
const repositoryUrl = "https://github.com/Beyond-Automation/AIHAT";

const features = [
  ["Executive health score", "See the overall condition of a Windows computer at a glance."],
  ["Security assessment", "Review Defender, Firewall, BitLocker, Secure Boot, TPM, and UAC."],
  ["Networking health", "Inspect adapters, DNS, gateway, DHCP, connectivity, and latency."],
  ["HTML reporting", "Generate a responsive report suitable for tickets, audits, and reviews."],
  ["Modular architecture", "Extend AIHAT through independent, testable PowerShell modules."],
  ["Release integrity", "Verify every release package with its published SHA-256 checksum."],
];

export default function AIHATLaunch() {
  return (
    <section id="aihat" className="ba-launch-section">
      <div className="ba-container">
        <div className="ba-launch-heading">
          <p className="ba-launch-eyebrow">Flagship open-source product</p>
          <h2>AIHAT v1.0.0 is ready.</h2>
          <p>
            The Infrastructure Health Audit Toolkit gives IT professionals a repeatable way
            to inspect Windows health, identify operational risk, and create evidence they
            can understand and share.
          </p>
        </div>

        <div className="ba-launch-hero">
          <div className="ba-launch-copy">
            <div className="ba-launch-badges">
              <span>Stable release</span>
              <span>PowerShell 7.4+</span>
              <span>MIT licensed</span>
              <span>34 automated tests</span>
            </div>

            <h3>One audit. Four health modules. One professional report.</h3>

            <div className="ba-launch-actions">
              <a href={releaseUrl} target="_blank" rel="noreferrer" className="ba-button ba-button-primary">
                Download AIHAT v1.0.0 <span>→</span>
              </a>
              <a href="/aihat" className="ba-button ba-button-secondary">
                Explore AIHAT
              </a>
              <a href={repositoryUrl} target="_blank" rel="noreferrer" className="ba-text-link">
                View source on GitHub ↗
              </a>
            </div>

            <p className="ba-launch-note">
              Releases include the ZIP package, SHA-256 checksum, installation guide,
              changelog, and release notes.
            </p>
          </div>

          <div className="ba-launch-terminal" aria-label="AIHAT sample output">
            <div className="ba-terminal-bar">
              <span />
              <span />
              <span />
              <strong>AIHAT v1.0.0</strong>
            </div>
            <pre>{`EXECUTIVE SUMMARY
--------------------------------
Overall Status       Warning
Health Score         87/100
Healthy Modules      3
Warning Modules      1

MODULE STATUS
--------------------------------
System Health        Healthy
Windows Update       Healthy
Security Health      Warning
Networking Health    Healthy

REPORT
--------------------------------
HTML report generated successfully`}</pre>
          </div>
        </div>

        <div className="ba-launch-feature-grid">
          {features.map(([title, description]) => (
            <article key={title}>
              <span>✓</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
