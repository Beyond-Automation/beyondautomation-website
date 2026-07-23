import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import TerminalWindow from "@/components/ui/TerminalWindow";

const terminalLines = [
  { text: "Loading configuration...", tone: "text-slate-400" },
  { text: "✓ Modules initialized", tone: "text-emerald-300" },
  { text: "✓ System Health collected", tone: "text-emerald-300" },
  { text: "✓ Windows Update audit complete", tone: "text-emerald-300" },
  { text: "✓ Infrastructure signals analyzed", tone: "text-emerald-300" },
  { text: "✓ Report generated", tone: "text-emerald-300" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-[72px]">
      <div className="grid-glow absolute inset-0 -z-20" />
      <div className="orb absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-blue-600" />
      <div className="orb orb-delay absolute -right-28 top-40 -z-10 h-96 w-96 rounded-full bg-cyan-500" />
      <div className="ba-container grid min-h-[calc(100svh-72px)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
        <div className="hero-copy">
          <Badge tone="green" dot>Beyond Automation Platform v1.0.0 is live</Badge>
          <p className="mb-5 mt-6 font-mono text-xs font-semibold uppercase tracking-[.22em] text-blue-300 sm:text-sm sm:tracking-[.28em]">Practical AI-powered IT automation</p>
          <h1 className="max-w-4xl text-[clamp(3.15rem,15vw,5.8rem)] font-black leading-[.91] tracking-[-.055em] lg:text-7xl">Engineering smarter<span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">IT operations.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">Reliable automation products shaped by real infrastructure work—not generic demos. Reduce repetitive effort, strengthen consistency, and give IT teams time back.</p>
          <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:gap-4"><Button href="#products">Explore products</Button><Button href="https://github.com/Beyond-Automation" external variant="secondary">See the engineering</Button></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400 sm:mt-10 sm:gap-x-8"><span>PowerShell-first</span><span>Open source</span><span>Built for IT pros</span></div>
        </div>
        <div className="hero-terminal relative min-w-0"><div className="absolute -inset-4 -z-10 rounded-[2rem] bg-blue-500/10 blur-2xl" />
          <TerminalWindow title="PowerShell 7 — AIHAT">
            <div className="terminal-cycle min-h-[355px] overflow-hidden p-5 font-mono text-[11px] leading-6 sm:min-h-[410px] sm:p-8 sm:text-sm">
              <p className="terminal-step text-slate-300"><span className="text-blue-400">PS C:\BeyondAutomation&gt;</span> Invoke-AIHAT</p>
              {terminalLines.map((line) => <p key={line.text} className={`terminal-step ${line.tone}`}>{line.text}</p>)}
              <div className="terminal-step mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/[.06] p-3 text-emerald-200 sm:mt-6 sm:p-4"><div className="flex justify-between gap-4"><span>Collection Status</span><span>SUCCESS</span></div><div className="mt-2 flex justify-between gap-4 text-slate-400"><span>Report</span><span>Ready</span></div></div>
              <p className="terminal-step text-slate-500"><span className="cursor">▋</span></p>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
