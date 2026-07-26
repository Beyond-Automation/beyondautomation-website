"use client";

import { useState } from "react";

const links = [
  { label: "Why Beyond", href: "#why" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Beyond Automation home" onClick={closeMenu}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-400/30 bg-blue-500/15 font-mono text-sm font-black text-blue-300 shadow-[0_0_30px_rgba(59,130,246,.18)]">BA</span>
          <span className="min-w-0">
            <span className="block truncate font-bold tracking-tight">Beyond Automation</span>
            <span className="block text-[10px] uppercase tracking-[.2em] text-slate-500 sm:text-[11px]">IT Engineering</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="https://github.com/Beyond-Automation" target="_blank" rel="noreferrer" className="hidden rounded-xl border border-blue-400/30 bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/25 sm:inline-flex">View GitHub</a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`border-t border-white/10 bg-[#050816]/98 px-5 transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0"}`}>
        <div className="mx-auto flex max-w-7xl flex-col py-4">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-base font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white">{link.label}</a>
          ))}
          <a href="https://github.com/Beyond-Automation" target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-3 rounded-xl bg-blue-500 px-4 py-3 text-center font-bold text-white">View GitHub</a>
        </div>
      </div>
    </header>
  );
}
