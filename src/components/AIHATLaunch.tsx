const features = [
  ["Executive health score", "See the overall condition of a Windows computer at a glance."],
  ["Security assessment", "Review Defender, Firewall, BitLocker, Secure Boot, TPM, and UAC."],
  ["Networking health", "Inspect adapters, DNS, gateway, DHCP, connectivity, and latency."],
  ["HTML reporting", "Generate a responsive report suitable for tickets, audits, and reviews."],
  ["Modular architecture", "Built around independent, testable PowerShell health modules."],
  ["Release integrity", "Professional release engineering includes validation and package integrity checks."],
];

export default function AIHATLaunch() {
  return (
    <section id="aihat" className="ba-launch-section">
      <div className="ba-container">
        <div className="ba-launch-heading">
          <p className="ba-launch-eyebrow">Flagship Beyond Automation product</p>
          <h2>AIHAT v1.0.0 is released.</h2>
          <p>
            The Infrastructure Health Audit Toolkit gives IT professionals a repeatable way
            to inspect Windows health, identify operational risk, and create evidence they
            can understand and share.
          </p>
        </div>

        <div className="ba-launch-hero">
          <div className="ba-launch-copy">
            <div className="ba-launch-badges">
              <span>Released</span>
              <span>Windows infrastructure</span>
              <span>Private source</span>
              <span>Validated engineering</span>
            </div>

            <h3>One audit. Four health modules. One professional report.</h3>

            <div className="ba-launch-actions">
              <a href="/aihat" className="ba-button ba-button-primary">
                Explore AIHAT <span>→</span>
              </a>
              <a href="/products" className="ba-button ba-button-secondary">
                View products
              </a>
            </div>

            <p className="ba-launch-note">
              AIHAT is showcased publicly while its source code, architecture, and internal
              release tooling remain proprietary to Beyond Automation.
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
