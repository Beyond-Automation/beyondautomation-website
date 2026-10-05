import Link from "next/link";

type FooterItem = {
  title: string;
  detail: string;
  href: string;
};

const productLinks: FooterItem[] = [
  { title: "AIHAT", detail: "Infrastructure Health Audit Toolkit", href: "/aihat" },
  { title: "PatchPilot", detail: "Windows patch-health assessment", href: "/journal" },
  { title: "NetFixLab", detail: "Network troubleshooting and diagnostics", href: "/journal" },
];

const resourceLinks: FooterItem[] = [
  { title: "Resources", detail: "Practical guides and references", href: "/resources" },
  { title: "Journal", detail: "Product engineering notes and lessons", href: "/journal" },
  { title: "Products", detail: "Current product portfolio", href: "/products" },
];

const serviceLinks: FooterItem[] = [
  { title: "Automation Assessment", detail: "Analyze one process for $299 — fixed price", href: "/services/automation-assessment" },
];

const companyLinks: FooterItem[] = [
  { title: "About", detail: "Mission and engineering approach", href: "/#about" },
  { title: "Privacy", detail: "Privacy policy", href: "/privacy" },
  { title: "Terms", detail: "Terms of use", href: "/terms" },
];

function FooterLink({ item }: { item: FooterItem }) {
  return (
    <Link href={item.href} className="ba-footer-link">
      <span>
        <strong>{item.title}</strong>
        <small>{item.detail}</small>
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="ba-footer">
      <div className="ba-footer-particles" aria-hidden="true" />
      <div className="ba-footer-glow ba-footer-glow-left" aria-hidden="true" />
      <div className="ba-footer-glow ba-footer-glow-center" aria-hidden="true" />
      <div className="ba-footer-glow ba-footer-glow-right" aria-hidden="true" />

      <div className="ba-container">
        <div className="ba-footer-grid">
          <section className="ba-footer-brand">
            <div className="ba-footer-logo">
              <div className="ba-footer-logo-mark" aria-label="Beyond Automation">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <defs>
                    <linearGradient id="baLogoGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="55%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <path d="M32 4 55 17v30L32 60 9 47V17L32 4Z" fill="none" stroke="url(#baLogoGradient)" strokeWidth="6" />
                  <path d="M19 24 32 16l13 8-13 8-9-5v10l9 5 13-8v12L32 54 19 46V24Z" fill="url(#baLogoGradient)" />
                </svg>
              </div>
              <div><strong>BEYOND</strong><span>AUTOMATION</span></div>
            </div>

            <p>
              Engineering smarter IT operations through automation, PowerShell,
              security, and modern infrastructure tooling.
            </p>

            <div className="ba-footer-socials">
              <a href="https://www.linkedin.com/company/beyond-automation-io" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
              </a>
              <a href="mailto:contact@beyondautomation.io"><span>Contact</span></a>
            </div>

            <Link href="/products" className="ba-footer-cta">
              <span>Explore Products</span><span className="ba-footer-cta-arrow">→</span>
            </Link>
          </section>

          <section className="ba-footer-column">
            <h2>Products</h2>
            <div className="ba-footer-links">{productLinks.map((item) => <FooterLink key={item.title} item={item} />)}</div>
            <Link className="ba-footer-column-action" href="/products">View all products →</Link>
          </section>

          <section className="ba-footer-column">
            <h2>Services</h2>
            <div className="ba-footer-links">{serviceLinks.map((item) => <FooterLink key={item.title} item={item} />)}</div>
            <Link className="ba-footer-column-action" href="/services/automation-assessment">Start an assessment →</Link>
          </section>

          <section className="ba-footer-column">
            <h2>Resources</h2>
            <div className="ba-footer-links">{resourceLinks.map((item) => <FooterLink key={item.title} item={item} />)}</div>
            <Link className="ba-footer-column-action" href="/resources">View all resources →</Link>
          </section>

          <section className="ba-footer-column">
            <h2>Company</h2>
            <div className="ba-footer-links">{companyLinks.map((item) => <FooterLink key={item.title} item={item} />)}</div>
            <Link className="ba-footer-column-action" href="/#about">Learn more →</Link>
          </section>
        </div>

        <div className="ba-footer-bottom">
          © 2026 Beyond Automation&nbsp; • &nbsp;Public proof. Private engineering core.
        </div>
      </div>
    </footer>
  );
}
