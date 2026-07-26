const items = [
  ["◈","Open Source","Transparent by design"],
  ["⌁","AI Assisted","Human-guided engineering"],
  [">_","PowerShell First","Built for real IT work"],
  ["◇","Security Focused","Safe operational patterns"],
  ["▣","Engineer Built","Created from production experience"],
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#050816]/95" aria-label="Beyond Automation principles">
      <div className="ba-container py-6">
        <p className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.34em] text-blue-300/70">
          Built around the realities of modern IT operations
        </p>
        <div className="trust-grid">
          {items.map(([icon,title,detail]) => (
            <div key={title} className="trust-item">
              <span className="trust-icon">{icon}</span>
              <div><p className="text-sm font-black text-white">{title}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
