const navigation = [
  { label: "AIHAT", href: "/aihat" },
  { label: "Products", href: "#products" },
  { label: "Journal", href: "/journal" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "#about" },
];

function BrandMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="baNavLogoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <path
        d="M32 4 55 17v30L32 60 9 47V17L32 4Z"
        fill="none"
        stroke="url(#baNavLogoGradient)"
        strokeWidth="6"
      />
      <path
        d="M19 24 32 16l13 8-13 8-9-5v10l9 5 13-8v12L32 54 19 46V24Z"
        fill="url(#baNavLogoGradient)"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="ba-container">
        <div className="nav-shell flex h-17 items-center justify-between px-4 sm:px-5">
          <a href="/" className="group flex items-center gap-3" aria-label="Beyond Automation home">
            <span className="nav-brand-mark">
              <BrandMark />
            </span>
            <span>
              <span className="block text-sm font-black tracking-[0.18em] text-white">BEYOND</span>
              <span className="block text-[10px] font-bold tracking-[0.34em] text-blue-400">AUTOMATION</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Beyond-Automation/AIHAT/releases/latest"
              target="_blank"
              rel="noreferrer"
              className="ba-button ba-button-primary hidden sm:inline-flex"
            >
              Download AIHAT <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
