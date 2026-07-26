type IconName =
  | "cube"
  | "package"
  | "map"
  | "book"
  | "graduation"
  | "document"
  | "headset"
  | "info"
  | "users"
  | "shield"
  | "scale"
  | "github"
  | "linkedin"
  | "mail"
  | "arrow";

type FooterItem = {
  title: string;
  detail: string;
  icon: IconName;
  href: string;
};

const productLinks: FooterItem[] = [
  {
    title: "AIHAT",
    detail: "AI Infrastructure Health Audit Toolkit",
    icon: "cube",
    href: "#demo",
  },
  {
    title: "Future Tools",
    detail: "Coming soon",
    icon: "package",
    href: "#products",
  },
  {
    title: "Roadmap",
    detail: "What’s coming next",
    icon: "map",
    href: "https://github.com/Beyond-Automation/AIHAT/blob/main/ROADMAP.md",
  },
];

const resourceLinks: FooterItem[] = [
  {
    title: "Documentation",
    detail: "Guides and references",
    icon: "book",
    href: "https://github.com/Beyond-Automation/AIHAT#readme",
  },
  {
    title: "Tutorials",
    detail: "Step-by-step walkthroughs",
    icon: "graduation",
    href: "#",
  },
  {
    title: "Blog",
    detail: "Insights and engineering notes",
    icon: "document",
    href: "#",
  },
  {
    title: "Support",
    detail: "Get help and ask questions",
    icon: "headset",
    href: "https://github.com/Beyond-Automation/AIHAT/issues",
  },
];

const companyLinks: FooterItem[] = [
  {
    title: "About",
    detail: "Our mission and story",
    icon: "info",
    href: "#about",
  },
  {
    title: "Community",
    detail: "Join the community",
    icon: "users",
    href: "https://github.com/Beyond-Automation",
  },
  {
    title: "Security",
    detail: "Security at Beyond Automation",
    icon: "shield",
    href: "https://github.com/Beyond-Automation/AIHAT/blob/main/SECURITY.md",
  },
  {
    title: "Legal",
    detail: "Privacy Policy • Terms of Use",
    icon: "scale",
    href: "#",
  },
];

function Icon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, React.ReactNode> = {
    cube: (
      <>
        <path d="m12 2 8 4.5v9L12 22l-8-6.5v-9L12 2Z" />
        <path d="m4.5 6.8 7.5 4.4 7.5-4.4M12 11.2V22" />
      </>
    ),
    package: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m8 5.2 8 4.6M4 7.5l8 4.5 8-4.5M12 12v9" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
    book: (
      <>
        <path d="M4 4.5h5.5A2.5 2.5 0 0 1 12 7v13a3 3 0 0 0-3-3H4V4.5Z" />
        <path d="M20 4.5h-5.5A2.5 2.5 0 0 0 12 7v13a3 3 0 0 1 3-3h5V4.5Z" />
      </>
    ),
    graduation: (
      <>
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12.5V17c3 2 7 2 10 0v-4.5M21 9v6" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6V2Z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),
    headset: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5ZM20 14h-3v6h2a1 1 0 0 0 1-1v-5Z" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6M12 7h.01" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.4 2.8 8.5 7 10 4.2-1.5 7-5.6 7-10V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.7-4" />
      </>
    ),
    scale: (
      <>
        <path d="M12 3v18M5 6h14M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM8 21h8" />
      </>
    ),
    github: (
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7 8.4c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.7 9.7 0 0 1 5.1 0c2-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.4.1 2.7A3.9 3.9 0 0 1 19 11c0 3.9-2.4 4.8-4.6 5 .4.3.7 1 .7 2v2.5c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7h.01M12 17v-4a3 3 0 0 1 6 0v4M12 10v7" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function FooterLink({ item }: { item: FooterItem }) {
  const external = item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="ba-footer-link"
    >
      <span className="ba-footer-link-icon">
        <Icon name={item.icon} />
      </span>
      <span>
        <strong>{item.title}</strong>
        <small>{item.detail}</small>
      </span>
    </a>
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
                  <path
                    d="M32 4 55 17v30L32 60 9 47V17L32 4Z"
                    fill="none"
                    stroke="url(#baLogoGradient)"
                    strokeWidth="6"
                  />
                  <path
                    d="M19 24 32 16l13 8-13 8-9-5v10l9 5 13-8v12L32 54 19 46V24Z"
                    fill="url(#baLogoGradient)"
                  />
                </svg>
              </div>

              <div>
                <strong>BEYOND</strong>
                <span>AUTOMATION</span>
              </div>
            </div>

            <p>
              Engineering smarter IT operations through automation, PowerShell,
              AI, and modern infrastructure tooling.
            </p>

            <div className="ba-footer-socials">
              <a href="https://github.com/Beyond-Automation" target="_blank" rel="noreferrer">
                <Icon name="github" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:contact@beyondautomation.com">
                <Icon name="mail" />
                <span>Contact</span>
              </a>
            </div>

            <a href="#demo" className="ba-footer-cta">
              <span>Explore AIHAT</span>
              <span className="ba-footer-cta-arrow">
                <Icon name="arrow" />
              </span>
            </a>
          </section>

          <section className="ba-footer-column">
            <h2>Products</h2>
            <div className="ba-footer-links">
              {productLinks.map((item) => (
                <FooterLink key={item.title} item={item} />
              ))}
            </div>
            <a className="ba-footer-column-action" href="#products">
              View all products
              <Icon name="arrow" />
            </a>
          </section>

          <section className="ba-footer-column">
            <h2>Resources</h2>
            <div className="ba-footer-links">
              {resourceLinks.map((item) => (
                <FooterLink key={item.title} item={item} />
              ))}
            </div>
            <a className="ba-footer-column-action" href="#">
              View all resources
              <Icon name="arrow" />
            </a>
          </section>

          <section className="ba-footer-column">
            <h2>Company</h2>
            <div className="ba-footer-links">
              {companyLinks.map((item) => (
                <FooterLink key={item.title} item={item} />
              ))}
            </div>
            <a className="ba-footer-column-action" href="#about">
              Learn more
              <Icon name="arrow" />
            </a>
          </section>
        </div>

        <div className="ba-footer-bottom">
          © 2026 Beyond Automation&nbsp; • &nbsp;Building the future of IT automation.
        </div>
      </div>
    </footer>
  );
}
