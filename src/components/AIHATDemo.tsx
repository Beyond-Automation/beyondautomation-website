"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type DemoState = "idle" | "running" | "complete";

type AuditModule = {
  name: string;
  detail: string;
  finding: string;
  severity: "healthy" | "review" | "info";
};

const auditModules: AuditModule[] = [
  {
    name: "System Health",
    detail: "CPU, memory, uptime, and operating system inventory",
    finding: "Core resources are operating within the expected baseline.",
    severity: "healthy",
  },
  {
    name: "Windows Updates",
    detail: "Installed updates, servicing state, and update readiness",
    finding: "Two updates require review before the next maintenance window.",
    severity: "review",
  },
  {
    name: "Pending Reboot",
    detail: "Component servicing and restart indicators",
    finding: "No pending reboot indicators were detected.",
    severity: "healthy",
  },
  {
    name: "Disk Health",
    detail: "Capacity, free-space thresholds, and storage status",
    finding: "System volume has 61% free space available.",
    severity: "healthy",
  },
  {
    name: "Security Checks",
    detail: "Firewall, Defender, and baseline security signals",
    finding: "Defender configuration review is recommended.",
    severity: "review",
  },
];

const baseLogs = [
  "Initializing AIHAT demonstration engine...",
  "Loading audit configuration...",
  "Target: DEMO-WORKSTATION-01",
];

function createReport() {
  const report = [
    "BEYOND AUTOMATION — AIHAT SAMPLE REPORT",
    "=========================================",
    "Target: DEMO-WORKSTATION-01",
    "Overall Health Score: 88 / 100",
    "Status: Review Recommended",
    "",
    ...auditModules.flatMap((auditItem) => [
      `${auditItem.name}: ${auditItem.severity === "healthy" ? "Healthy" : "Review"}`,
      `Finding: ${auditItem.finding}`,
      "",
    ]),
    "This is a simulated product demonstration and does not represent a real system audit.",
  ].join("\r\n");

  const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "AIHAT-Sample-Report.txt";
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function AIHATDemo() {
  const [state, setState] = useState<DemoState>("idle");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [completedCount, setCompletedCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    "AIHAT demo ready.",
    "Select Start Audit to run a simulated infrastructure assessment.",
  ]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progress = state === "complete" ? 100 : Math.round((completedCount / auditModules.length) * 100);

  const findings = useMemo(
    () => auditModules.slice(0, completedCount).map((auditItem) => auditItem.finding),
    [completedCount],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const runStep = (index: number) => {
    if (index >= auditModules.length) {
      setActiveIndex(-1);
      setCompletedCount(auditModules.length);
      setLogs((current) => [
        ...current,
        "[SUCCESS] Audit modules completed.",
        "[INFO] Generating operational summary...",
        "[SUCCESS] AIHAT demonstration completed in 42 seconds.",
      ]);
      timerRef.current = setTimeout(() => setState("complete"), 650);
      return;
    }

    const auditItem = auditModules[index];
    setActiveIndex(index);
    setLogs((current) => [...current, `[RUNNING] ${auditItem.name} — ${auditItem.detail}`]);

    timerRef.current = setTimeout(() => {
      setCompletedCount(index + 1);
      setLogs((current) => [
        ...current,
        `[${auditItem.severity === "healthy" ? "SUCCESS" : "REVIEW"}] ${auditItem.finding}`,
      ]);
      timerRef.current = setTimeout(() => runStep(index + 1), 500);
    }, 1150);
  };

  const startAudit = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState("running");
    setActiveIndex(-1);
    setCompletedCount(0);
    setLogs(baseLogs);
    timerRef.current = setTimeout(() => runStep(0), 700);
  };

  return (
    <section id="demo" className="aihat-demo-section">
      <div className="aihat-demo-grid-bg" />
      <div className="aihat-demo-glow aihat-demo-glow-one" />
      <div className="aihat-demo-glow aihat-demo-glow-two" />

      <div className="ba-container aihat-demo-shell">
        <div className="aihat-demo-heading">
          <div>
            <p className="aihat-demo-kicker">Interactive Product Experience</p>
            <h2>Run an AIHAT audit right in the browser.</h2>
          </div>
          <div className="aihat-demo-heading-copy">
            <p>
              See how AIHAT turns infrastructure checks into clear operational findings.
              This simulated audit uses no backend and touches no device.
            </p>
            <span>Safe demonstration • No system access • No data collected</span>
          </div>
        </div>

        <div className={`aihat-demo-console ${state === "running" ? "is-running" : ""}`}>
          <div className="aihat-demo-topbar">
            <div className="aihat-demo-window-controls" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="aihat-demo-title">
              <span className="aihat-demo-logo">BA</span>
              <div>
                <b>AIHAT Audit Console</b>
                <small>DEMO-WORKSTATION-01</small>
              </div>
            </div>
            <div className={`aihat-demo-status status-${state}`}>
              <span />
              {state === "idle" ? "Ready" : state === "running" ? "Audit running" : "Audit complete"}
            </div>
          </div>

          <div className="aihat-demo-progress-row">
            <div>
              <span>Infrastructure health audit</span>
              <b>{progress}%</b>
            </div>
            <div className="aihat-demo-progress-track">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="aihat-demo-workspace">
            <div className="aihat-demo-modules">
              <div className="aihat-demo-panel-heading">
                <div>
                  <span>Audit modules</span>
                  <small>{completedCount} of {auditModules.length} completed</small>
                </div>
                <span className="aihat-demo-runtime">42 sec demo</span>
              </div>

              <div className="aihat-module-list">
                {auditModules.map((auditItem, index) => {
                  const complete = index < completedCount;
                  const active = index === activeIndex;
                  return (
                    <article
                      key={auditItem.name}
                      className={`aihat-module ${complete ? "is-complete" : ""} ${active ? "is-active" : ""}`}
                    >
                      <span className="aihat-module-state">
                        {complete ? "✓" : active ? <i /> : String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3>{auditItem.name}</h3>
                        <p>{auditItem.detail}</p>
                      </div>
                      <span className="aihat-module-label">
                        {complete ? (auditItem.severity === "healthy" ? "Healthy" : "Review") : active ? "Scanning" : "Waiting"}
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="aihat-demo-insights">
              <div className="aihat-demo-panel-heading">
                <div>
                  <span>Actionable findings</span>
                  <small>Human review remains in control</small>
                </div>
                <span className="aihat-ai-badge">BA</span>
              </div>

              {findings.length === 0 ? (
                <div className="aihat-empty-state">
                  <span>◇</span>
                  <h3>Waiting for audit data</h3>
                  <p>Findings will appear here as each infrastructure module completes.</p>
                </div>
              ) : (
                <div className="aihat-findings-list">
                  {findings.map((finding, index) => {
                    const auditItem = auditModules[index];
                    return (
                      <article key={finding} className={`aihat-finding finding-${auditItem.severity}`}>
                        <span>{auditItem.severity === "healthy" ? "✓" : "!"}</span>
                        <div>
                          <small>{auditItem.name}</small>
                          <p>{finding}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {state === "complete" && (
                <div className="aihat-final-score">
                  <div>
                    <span>Overall health score</span>
                    <strong>88</strong><small>/100</small>
                  </div>
                  <p>Environment is operational. Two findings should be reviewed.</p>
                </div>
              )}
            </div>
          </div>

          <div className="aihat-demo-log-area">
            <div className="aihat-demo-log-header">
              <span>Live execution log</span>
              <small>PowerShell-style simulation</small>
            </div>
            <div className="aihat-demo-logs" aria-live="polite">
              {logs.map((log, index) => (
                <p key={`${log}-${index}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {log}
                </p>
              ))}
              {state === "running" && <i className="aihat-log-cursor" />}
            </div>
          </div>

          <div className="aihat-demo-actions">
            <div>
              <span className="aihat-demo-security-dot" />
              Demonstration runs locally in your browser.
            </div>
            <div className="aihat-demo-buttons">
              {state === "complete" && (
                <button type="button" className="aihat-demo-secondary" onClick={createReport}>
                  Download Sample Report
                </button>
              )}
              <button
                type="button"
                className="aihat-demo-primary"
                onClick={startAudit}
                disabled={state === "running"}
              >
                {state === "idle" ? "Start Audit" : state === "running" ? "Audit Running..." : "Run Again"}
                <span>{state === "running" ? "•••" : "→"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



