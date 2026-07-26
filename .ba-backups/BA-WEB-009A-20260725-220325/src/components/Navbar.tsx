const navigation = [
  { label: "Why Beyond", href: "#why" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Docs", href: "https://github.com/Beyond-Automation/AIHAT" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="site-header sticky top-0 z-50 px-4 py-3">
      <div className="ba-container">
        <div className="nav-shell flex h-17 items-center justify-between px-4 sm:px-5">
          <a href="#top" className="group flex items-center gap-3" aria-label="Beyond Automation home">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-400/35 bg-blue-500/10 font-black text-blue-100">BA</span>
            <span>
              <span className="block text-sm font-black tracking-[0.18em] text-white">BEYOND</span>
              <span className="block text-[10px] font-bold tracking-[0.34em] text-blue-400">AUTOMATION</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#demo" className="nav-demo hidden xl:inline-flex"><span className="play-dot">▶</span>See Live Demo</a>
            <a href="#products" className="ba-button ba-button-primary hidden sm:inline-flex">Explore AIHAT <span className="ml-2">→</span></a>
          </div>
        </div>
      </div>
    </header>
  );
}
