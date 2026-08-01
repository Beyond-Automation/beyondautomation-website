const futureProducts = [
  {
    name: "Technical Debt Analyzer",
    description:
      "Identify aging infrastructure, unsupported platforms, operational risk, and hidden maintenance costs.",
    icon: "◇",
    status: "Planned",
  },
  {
    name: "Patch Intelligence",
    description:
      "Turn patching data into clear priorities, failure trends, and actionable maintenance decisions.",
    icon: "↻",
    status: "Planned",
  },
  {
    name: "Infrastructure Baselines",
    description:
      "Create consistent, repeatable health and configuration baselines across Windows environments.",
    icon: "▦",
    status: "Planned",
  },
  {
    name: "Automation Library",
    description:
      "A growing collection of practical PowerShell tools for everyday infrastructure operations.",
    icon: ">_",
    status: "Planned",
  },
];

const features = [
  "System health assessment",
  "Windows Update visibility",
  "Pending reboot detection",
  "Security posture checks",
  "Structured logging",
  "Actionable findings",
];

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden border-t border-white/10 bg-[#030712] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />
        <div className="absolute right-[6%] top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="ba-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Beyond Automation Products
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">
            Practical tools built for real IT operations.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Every product starts with an operational problem, not a marketing idea.
            The goal is dependable automation that helps infrastructure teams work
            faster, see more clearly, and reduce repetitive effort.
          </p>
        </div>

        <article className="relative mt-16 overflow-hidden rounded-[2rem] border border-cyan-400/35 bg-gradient-to-br from-blue-500/[0.12] via-white/[0.035] to-cyan-400/[0.06] shadow-[0_40px_120px_rgba(0,0,0,.55),0_0_60px_rgba(37,99,235,.16)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,.14),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.05fr_.95fr] lg:p-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_12px_currentColor]" />
                  Active Development
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300">
                  Open Source
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-300">
                  PowerShell 7+
                </span>
              </div>

              <div className="mt-7 flex items-center gap-4">
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-blue-400/30 bg-blue-500/10 font-mono text-xl font-black text-cyan-200 shadow-[0_0_30px_rgba(37,99,235,.18)]">
                  AI
                </span>
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                    Flagship Product
                  </p>
                  <h3 className="mt-1 text-4xl font-black tracking-tight text-white">AIHAT</h3>
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-slate-100">
                Infrastructure Health Audit Toolkit
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                AIHAT gives infrastructure professionals a repeatable way to collect
                Windows system health, update readiness, reboot indicators, and
                security signals—then turn them into structured, understandable
                findings.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-xs font-black text-emerald-300">
                      ✓
                    </span>
                    <span className="text-sm font-bold text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Beyond-Automation/AIHAT"
                  target="_blank"
                  rel="noreferrer"
                  className="ba-button ba-button-primary"
                >
                  View on GitHub
                  <span className="ml-2">↗</span>
                </a>
                <a
                  href="https://github.com/Beyond-Automation/AIHAT#readme"
                  target="_blank"
                  rel="noreferrer"
                  className="ba-button ba-button-secondary"
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/Beyond-Automation/AIHAT/blob/main/ROADMAP.md"
                  target="_blank"
                  rel="noreferrer"
                  className="ba-button ba-button-secondary"
                >
                  Roadmap
                </a>
              </div>
            </div>

            <div className="relative self-center">
              <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-300/20 bg-[#050b18]/95 p-5 shadow-[0_25px_80px_rgba(0,0,0,.45)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue-300">
                      Current Release
                    </p>
                    <p className="mt-1 text-lg font-black text-white">AIHAT v0.2.0</p>
                  </div>
                  <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs font-black text-blue-200">
                    Core Engine
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Foundation", "Complete", "100%"],
                    ["Core Engine", "In progress", "72%"],
                    ["Health Modules", "Next", "36%"],
                    ["Reporting", "Planned", "12%"],
                  ].map(([name, status, width]) => (
                    <div key={name} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-white">{name}</span>
                        <span className="text-xs font-bold text-slate-500">{status}</span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 shadow-[0_0_15px_rgba(34,211,238,.35)]"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                    Engineering principle
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Transparent PowerShell, engineering expertise, and operational results
                    that infrastructure teams can understand and verify.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                Product Pipeline
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                More practical tools are coming.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              These are product directions, not fake releases. Each will move forward
              only when it solves a real infrastructure problem well.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {futureProducts.map((product) => (
              <article
                key={product.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.055]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/0 to-transparent transition group-hover:via-blue-300/60" />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 font-mono font-black text-cyan-200">
                    {product.icon}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                    {product.status}
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-black text-white">{product.name}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-black text-blue-300">
                  Product concept
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



