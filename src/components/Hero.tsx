const healthRows = [
  { label: "CPU", value: "Healthy", detail: "18% load", width: "28%", tone: "text-emerald-300", spark: "0,18 12,15 24,17 36,10 48,14 60,8 72,13 84,7 96,11" },
  { label: "Memory", value: "76%", detail: "6.1 / 8 GB", width: "76%", tone: "text-cyan-300", spark: "0,16 12,12 24,14 36,8 48,12 60,7 72,11 84,6 96,9" },
  { label: "Disk", value: "Good", detail: "62% free", width: "42%", tone: "text-blue-300", spark: "0,17 12,13 24,15 36,9 48,14 60,10 72,15 84,8 96,12" },
  { label: "Updates", value: "2 missing", detail: "Attention", width: "64%", tone: "text-amber-300", spark: "" },
  { label: "Security", value: "Passed", detail: "9 checks", width: "100%", tone: "text-emerald-300", spark: "0,15 12,10 24,14 36,7 48,12 60,8 72,13 84,6 96,9" },
];

const activity = [
  ["10:41:02", "Collecting system inventory"],
  ["10:41:14", "Verifying Windows Update health"],
  ["10:41:21", "Checking reboot indicators"],
  ["10:41:29", "Evaluating security posture"],
  ["10:41:37", "Generating actionable findings"],
];

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-space" />
      <div className="hero-galaxy hero-galaxy-primary" />
      <div className="hero-galaxy hero-galaxy-secondary" />
      <div className="hero-galaxy-horizon" />
      <div className="hero-nebula" />
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="hero-beam hero-beam-one" />
      <div className="hero-beam hero-beam-two" />
      <div className="hero-vignette" />

      <div className="ba-container hero-layout">
        <div className="hero-copy">
          <span className="ba-badge ba-badge-blue hero-badge">
            <span className="ba-badge-dot" />
            Engineering smarter IT operations
          </span>

          <h1 className="hero-title">Engineering Smarter <span className="text-gradient">IT Operations.</span></h1>

          <p className="hero-description">Beyond Automation builds engineering software that simplifies IT operations, strengthens infrastructure, and helps technology professionals solve real operational challenges with confidence.</p>

          <div className="hero-actions">
            <a href="#products" className="ba-button ba-button-primary">
              <span className="mr-2">↗</span>
              Launch Your First Audit
              <span className="ml-2">→</span>
            </a>
            <a href="#demo" className="ba-button ba-button-secondary">
              <span className="play-icon">▶</span>
              See Live Demo
            </a>
          </div>

          <div className="hero-proof-grid">
            {[
              ["PowerShell-first", "Built for real IT environments", ">_"],
              ["Infrastructure Engineering", "PowerShell Automation", "⌁"],
              ["Security-minded", "Safe by design", "◇"],
            ].map(([title, detail, icon]) => (
              <div key={title} className="hero-proof-card">
                <span className="proof-icon">{icon}</span>
                <div>
                  <p className="proof-title">{title}</p>
                  <p className="proof-detail">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="demo" className="hero-dashboard-wrap">
          <div className="dashboard-glow" />
          <div className="dashboard-orbit" />

          <div className="ba-live-panel">
            <div className="dashboard-inner">
              <div className="dashboard-header">
                <div>
                  <p className="dashboard-kicker">Infrastructure Health Audit Toolkit</p>
                  <div className="dashboard-title-row">
                    <h2>AIHAT v0.2.0</h2>
                    <span className="ba-badge ba-badge-green">
                      <span className="live-dot" />
                      Audit running
                    </span>
                  </div>
                </div>

                <div className="dashboard-header-metrics">
                  <div className="header-metric">
                    <span className="header-metric-icon">◷</span>
                    <div>
                      <span className="header-metric-label">Time saved</span>
                      <strong>42 min</strong>
                    </div>
                  </div>

                  <div className="health-summary">
                    <span>Overall Health</span>
                    <strong>Healthy ♡</strong>
                  </div>
                </div>
              </div>

              <div className="dashboard-main">
                <div className="health-column">
                  {healthRows.map((row, index) => (
                    <div
                      key={row.label}
                      className="health-row"
                      style={{ animationDelay: `${index * 0.12}s` }}
                    >
                      <span className="metric-icon">
                        {row.label === "CPU" ? "▦" : row.label === "Memory" ? "▤" : row.label === "Disk" ? "▣" : row.label === "Updates" ? "⟳" : "◇"}
                      </span>

                      <div className="health-content">
                        <div className="health-topline">
                          <div>
                            <p>{row.label}</p>
                            <span>{row.detail}</span>
                          </div>

                          <div className="health-value-area">
                            {row.spark && (
                              <svg viewBox="0 0 96 24" className="sparkline" aria-hidden="true">
                                <polyline
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  points={row.spark}
                                />
                              </svg>
                            )}
                            <strong className={row.tone}>{row.value}</strong>
                          </div>
                        </div>

                        <div className="health-track">
                          <div className="health-bar" style={{ width: row.width }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="dashboard-side">
                  <div className="dashboard-card">
                    <div className="card-heading">
                      <p>Audit activity</p>
                      <span>05 / 05</span>
                    </div>

                    <div className="activity-list">
                      {activity.map(([time, item], index) => (
                        <div
                          key={item}
                          className="activity-line"
                          style={{ animationDelay: `${index * 0.42}s` }}
                        >
                          <span className="activity-check">✓</span>
                          <span className="activity-copy">{item}</span>
                          <span className="activity-time">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="dashboard-card recommendation-card">
                    <div className="card-heading">
                      <p>Operational Recommendations</p>
                      <span>2 findings</span>
                    </div>

                    <ul>
                      <li>Review two missing Windows updates before the next maintenance window.</li>
                      <li>Consider enabling Microsoft Defender tamper protection.</li>
                    </ul>

                    <a href="#products">View recommendations →</a>
                  </div>
                </div>
              </div>

              <div className="dashboard-footer">
                <div className="audit-log">
                  <div className="log-heading">
                    <span>&gt;_ Audit Log</span>
                    <span className="live-label">Live <i className="live-dot" /></span>
                  </div>
                  <div className="log-line"><span>10:41:02</span><b>[INFO]</b><em>Starting infrastructure audit...</em></div>
                  <div className="log-line"><span>10:41:08</span><b>[INFO]</b><em>Analyzing configuration...</em></div>
                  <div className="log-line"><span>10:41:37</span><b className="success">[SUCCESS]</b><em>Audit complete</em></div>
                </div>

                <div className="report-status">
                  <div><span>Generating report...</span><strong>100%</strong></div>
                  <div className="report-track"><div className="report-progress" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






