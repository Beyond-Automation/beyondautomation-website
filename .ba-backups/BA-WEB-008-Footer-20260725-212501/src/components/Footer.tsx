import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#050816] to-[#02040b]">
      <div className="ba-container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-cyan-300">
              <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              Open Source First
            </div>
            <h2 className="mt-6 text-3xl font-black tracking-tight">Beyond Automation</h2>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Engineering smarter IT operations through automation, PowerShell, AI, and modern infrastructure tooling.
            </p>
          </div>
          <div><h3 className="mb-6 text-sm font-black uppercase tracking-[.18em] text-cyan-300">Products</h3></div>
          <div><h3 className="mb-6 text-sm font-black uppercase tracking-[.18em] text-cyan-300">Resources</h3></div>
          <div><h3 className="mb-6 text-sm font-black uppercase tracking-[.18em] text-cyan-300">Company</h3></div>
        </div>
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Beyond Automation • Building the future of IT automation.</div>
          <div className="flex gap-3">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-300">Next.js 16</span>
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-blue-300">PowerShell First</span>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300">RC1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
