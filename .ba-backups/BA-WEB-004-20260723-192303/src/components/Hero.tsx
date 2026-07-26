const metrics = [
  { label:"CPU", value:"Healthy", detail:"18% load", width:"28%", color:"text-emerald-300", points:"0,18 12,15 24,17 36,10 48,14 60,8 72,13 84,7 96,11" },
  { label:"Memory", value:"76%", detail:"6.1 / 8 GB", width:"76%", color:"text-cyan-300", points:"0,16 12,12 24,14 36,8 48,12 60,7 72,11 84,6 96,9" },
  { label:"Disk", value:"Good", detail:"62% free", width:"42%", color:"text-blue-300", points:"0,17 12,13 24,15 36,9 48,14 60,10 72,15 84,8 96,12" },
  { label:"Updates", value:"2 missing", detail:"Attention", width:"64%", color:"text-amber-300", points:"" },
  { label:"Security", value:"Passed", detail:"9 checks", width:"100%", color:"text-emerald-300", points:"0,15 12,10 24,14 36,7 48,12 60,8 72,13 84,6 96,9" },
];
const activity = [
  ["10:41:02 AM","Collecting system inventory"],["10:41:14 AM","Verifying Windows Update health"],
  ["10:41:21 AM","Checking reboot indicators"],["10:41:29 AM","Evaluating security posture"],
  ["10:41:37 AM","Generating AI-assisted findings"],
];
const logs = [
  ["10:41:02","[INFO]","Starting AIHAT infrastructure audit..."],["10:41:05","[INFO]","System inventory collected"],
  ["10:41:08","[INFO]","Analyzing configuration"],["10:41:37","[SUCCESS]","Audit complete"],
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[930px] overflow-hidden pt-24">
      <div className="hero-grid absolute inset-0 -z-40"/><div className="hero-space absolute inset-0 -z-35"/>
      <div className="hero-vignette absolute inset-0 -z-30"/><div className="hero-noise absolute inset-0 -z-20"/>
      <div className="hero-wave hero-wave-one"/><div className="hero-wave hero-wave-two"/>
      <div className="ba-container grid min-h-[820px] items-center gap-14 py-20 lg:grid-cols-[.94fr_1.06fr]">
        <div className="hero-copy relative z-10">
          <span className="ba-badge ba-badge-blue"><span className="ba-badge-dot"/>Engineering smarter IT operations</span>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5rem]">
            Practical automation for the work IT teams <span className="hero-gradient-text">do every day.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Beyond Automation turns real infrastructure engineering experience into dependable AI-assisted tools that help IT professionals audit faster, reduce repetitive work, and make better operational decisions.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="ba-button ba-button-primary"><span className="mr-2">↗</span>Launch Your First Audit <span className="ml-2">→</span></a>
            <a href="#demo" className="ba-button ba-button-secondary"><span className="play-dot mr-2">▶</span>See Live Demo</a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[["PowerShell-first","Built for real IT environments",">_"],["AI-assisted","Human-guided engineering","⌁"],["Security-minded","Safe by design","◇"]].map(([title,detail,icon])=>(
              <div key={title} className="hero-proof-card"><span className="proof-icon">{icon}</span><div><p className="text-sm font-black text-white">{title}</p><p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p></div></div>
            ))}
          </div>
        </div>

        <div id="demo" className="hero-terminal relative z-10 scroll-mt-28">
          <div className="hero-terminal-halo"/>
          <div className="ba-live-panel">
            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div><p className="font-mono text-xs uppercase tracking-[0.24em] text-blue-300">AI Infrastructure Health Audit Toolkit</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3"><h2 className="text-3xl font-black text-white">AIHAT v0.2.0</h2><span className="ba-badge ba-badge-green"><span className="live-dot"/>Audit running</span></div>
                </div>
                <div className="text-right"><p className="text-xs text-slate-400">Overall Health</p><p className="mt-1 text-xl font-black text-emerald-300">Healthy ♡</p></div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[.95fr_1.05fr]">
                <div className="space-y-3">
                  {metrics.map((m,i)=>(
                    <div key={m.label} className="health-row" style={{animationDelay:`${i*.14}s`}}>
                      <div className="flex items-center gap-3"><span className="metric-icon">{m.label==="Updates"?"⟳":m.label==="Security"?"◇":"▣"}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <div><p className="text-sm font-black text-white">{m.label}</p><p className="mt-1 text-xs text-slate-500">{m.detail}</p></div>
                            <div className="flex items-center gap-3">{m.points&&<svg viewBox="0 0 96 24" className="hidden h-7 w-24 sm:block"><polyline fill="none" stroke="currentColor" strokeWidth="1.5" points={m.points} className="text-cyan-300"/></svg>}<p className={`text-sm font-black ${m.color}`}>{m.value}</p></div>
                          </div>
                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="health-bar" style={{width:m.width}}/></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="dashboard-card"><div className="flex items-center justify-between"><p className="panel-title">Audit activity</p><span className="text-xs font-black text-blue-300">05 / 05</span></div>
                    <div className="mt-5 space-y-3">{activity.map(([time,item],i)=><div key={item} className="activity-line grid grid-cols-[auto_1fr_auto] items-center gap-3" style={{animationDelay:`${i*.55}s`}}><span className="check-dot">✓</span><span className="text-xs text-slate-300">{item}</span><span className="hidden text-[10px] text-slate-500 sm:block">{time}</span></div>)}</div>
                  </div>
                  <div className="dashboard-card dashboard-card-accent"><div className="flex items-center justify-between"><p className="panel-title">AI Recommendations</p><span className="text-xs font-black text-cyan-300">2 findings</span></div>
                    <ul className="mt-4 space-y-3 text-xs leading-5 text-slate-300"><li>• Review two missing Windows updates before the next maintenance window.</li><li>• Consider enabling Microsoft Defender tamper protection.</li></ul>
                    <a href="#products" className="mt-4 inline-flex text-xs font-black text-cyan-300">View all recommendations →</a>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 xl:grid-cols-[1.15fr_.85fr]">
                <div className="audit-log"><div className="flex items-center justify-between"><p className="panel-title">&gt;_ Audit Log</p><span className="flex items-center gap-2 text-[10px] font-bold text-emerald-300">Live <span className="live-dot"/></span></div>
                  <div className="mt-3 space-y-1 font-mono text-[10px] text-slate-500">{logs.map(([t,l,m])=><div key={t+m} className="grid grid-cols-[3.4rem_4.6rem_1fr] gap-2"><span>{t}</span><span className={l==="[SUCCESS]"?"text-emerald-300":"text-cyan-300"}>{l}</span><span className="truncate text-slate-400">{m}</span></div>)}</div>
                </div>
                <div className="flex flex-col justify-end"><div className="flex items-center justify-between text-xs"><span className="font-mono text-slate-500">Generating report...</span><span className="font-black text-cyan-300">100%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5"><div className="report-progress h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-400"/></div></div>
              </div>
            </div>
          </div>
          <div className="hero-floating-card"><span className="time-icon">◷</span><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Time saved</p><p className="mt-1 text-2xl font-black text-white">42 min</p><p className="mt-1 text-xs text-slate-400">This audit</p></div></div>
        </div>
      </div>
    </section>
  );
}
