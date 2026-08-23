const products = [
  {
    name: "AIHAT",
    status: "Released",
    eyebrow: "Infrastructure health",
    description:
      "A Windows infrastructure health assessment product that turns system, update, networking, and security signals into clear findings and professional reports.",
    href: "/aihat",
    cta: "Explore AIHAT",
  },
  {
    name: "PatchPilot",
    status: "Release Candidate",
    eyebrow: "Patch operations",
    description:
      "A Windows patching product built to improve visibility, repeatability, release discipline, and operational confidence across managed environments.",
    href: "/products",
    cta: "View PatchPilot",
  },
  {
    name: "NetFixLab",
    status: "Launching",
    eyebrow: "Network troubleshooting",
    description:
      "A practical troubleshooting experience for common network problems, built around deterministic diagnostics, clear guidance, and search-first discovery.",
    href: "/products",
    cta: "View NetFixLab",
  },
];

const futureProducts = [
  {
    name: "Technical Debt Analyzer",
    description:
      "Identify aging infrastructure, unsupported platforms, operational risk, and hidden maintenance costs.",
  },
  {
    name: "Infrastructure Baselines",
    description:
      "Create consistent, repeatable health and configuration baselines across Windows environments.",
  },
  {
    name: "Automation Library",
    description:
      "A growing collection of practical automation for everyday infrastructure operations.",
  },
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
            Public proof. Private engineering core. Every product starts with a real operational problem and is built to reduce friction, improve visibility, and help infrastructure teams make better decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-br from-blue-500/[0.10] via-white/[0.035] to-cyan-400/[0.05] p-7 shadow-[0_30px_90px_rgba(0,0,0,.45)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                {product.eyebrow}
              </p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-3xl font-black tracking-tight text-white">{product.name}</h3>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-cyan-200">
                  {product.status}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">{product.description}</p>
              <a href={product.href} className="ba-button ba-button-secondary mt-7">
                {product.cta}
                <span className="ml-2">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
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
              New products move forward when they solve a real infrastructure problem well—not to fill a roadmap.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {futureProducts.map((product) => (
              <article key={product.name} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Planned</span>
                <h4 className="mt-4 text-xl font-black text-white">{product.name}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-500">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
