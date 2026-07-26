const healthRows = [
  { label: "CPU", value: "Healthy", detail: "12% load", width: "w-[24%]", tone: "text-emerald-300" },
  { label: "Memory", value: "74%", detail: "5.9 / 8 GB", width: "w-[74%]", tone: "text-cyan-300" },
  { label: "Disk", value: "Good", detail: "61% free", width: "w-[39%]", tone: "text-blue-300" },
  { label: "Updates", value: "2 missing", detail: "Attention", width: "w-[66%]", tone: "text-amber-300" },
  { label: "Security", value: "Passed", detail: "9 checks", width: "w-full", tone: "text-emerald-300" },
];

const activity = [
  "Collecting system inventory",
  "Verifying Windows Update health",
  "Checking reboot indicators",
  "Evaluating security posture",
  "Generating AI-assisted findings",
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[860px] overflow-hidden pt-20">
      <div className="hero-grid absolute inset-0 -z-40" />
      <div className="hero-vignette absolute inset-0 -z-30" />
      <div className="hero-noise absolute inset-0 -z-20" />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-orb hero-orb-three" />

      <div className="hero-particle particle-one" />
      <div className="hero-particle particle-two" />
      <div className="hero-particle particle-three" />
      <div className="hero-particle particle-four" />

      <div className="ba-container grid min-h-[780px] items-center gap-16 py-24 lg:grid-cols-[1.02fr_.98fr]">
        <div className="hero-copy relative z-10">
          <span className="ba-badge ba-badge-blue hero-badge">
            <span className="ba-badge-dot" />
            Engineering smarter IT operations
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.35rem]">
            Practical automation for the work IT teams{" "}
            <span className="hero-gradient-text">do every day.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Beyond Automation turns real infrastructure engineering experience into
            dependable AI-assisted tools that help IT professionals audit faster,
            reduce repetitive work, and make better operational decisions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="ba-button ba-button-primary hero-primary-cta">
              Launch Your First Audit
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
            <a href="#demo" className="ba-button ba-button-secondary">
              See Live Demo
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["PowerShell-first", "Built for real IT environments"],
              ["AI-assisted", "Human-guided engineering"],
              ["Security-minded", "Safe by design"],
            ].map(([title, detail]) => (
              <div key={title} className="hero-proof-card">
                <p className="text-sm font-black text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="demo" className="hero-terminal relative z-10 scroll-mt-28">
          <div className="hero-terminal-halo" />

          <div className="ba-live-panel">
            <div className="ba-live-panel-bar">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>

              <div className="text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  AIHAT / live infrastructure audit
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="live-dot" />
                <span className="text-xs font-black text-emerald-300">LIVE</span>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-blue-300">
                    AI Infrastructure Health Audit Toolkit
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <h2 className="text-2xl font-black tracking-tight text-white">AIHAT v0.2.0</h2>
                    <span className="ba-badge ba-badge-green">Audit running</span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-right">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Overall health
                  </p>
                  <p className="mt-1 text-xl font-black text-emerald-300">Healthy</p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-[1.02fr_.98fr]">
                <div className="space-y-4">
                  {healthRows.map((row, index) => (
                    <div key={row.label} className="health-row" style={{ animationDelay: `${index * 0.18}s` }}>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-black text-white">{row.label}</p>
                          <p className="mt-1 text-xs text-slate-500">{row.detail}</p>
                        </div>
                        <p className={`text-sm font-black ${row.tone}`}>{row.value}</p>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div className={`health-bar ${row.width}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Audit activity
                    </p>
                    <span className="text-xs font-bold text-blue-300">05 / 05</span>
                  </div>

                  <div className="activity-cycle mt-5 space-y-3">
                    {activity.map((item, index) => (
                      <div key={item} className="activity-line flex gap-3" style={{ animationDelay: `${index * 0.7}s` }}>
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-[10px] font-black text-emerald-300">
                          ✓
                        </span>
                        <span className="text-xs leading-5 text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                        AI recommendations
                      </p>
                      <span className="text-xs font-black text-cyan-300">2 findings</span>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-slate-400">
                      Review two missing updates and validate service startup behavior before next maintenance window.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500">Generating report...</span>
                  <span className="font-black text-blue-300">100%</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="report-progress h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-card-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Checks passed
            </p>
            <p className="mt-2 text-2xl font-black text-white">9 / 9</p>
          </div>

          <div className="hero-floating-card hero-floating-card-right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Time saved
            </p>
            <p className="mt-2 text-2xl font-black text-cyan-300">42 min</p>
          </div>
        </div>
      </div>
    </section>
  );
}
