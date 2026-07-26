const productLinks = [
  { title: "AIHAT", detail: "AI Infrastructure Health Audit Toolkit", icon: "◇", href: "#demo" },
  { title: "Future Tools", detail: "Coming soon", icon: "◇", href: "#products" },
  { title: "Roadmap", detail: "What's coming next", icon: "⌁", href: "https://github.com/Beyond-Automation/AIHAT/blob/main/ROADMAP.md" },
];
const resourceLinks = [
  { title: "Documentation", detail: "Guides and references", icon: "▤", href: "https://github.com/Beyond-Automation/AIHAT#readme" },
  { title: "Tutorials", detail: "Step-by-step walkthroughs", icon: "⌂", href: "#" },
  { title: "Blog", detail: "Insights and engineering notes", icon: "▧", href: "#" },
  { title: "Support", detail: "Get help and ask questions", icon: "◡", href: "https://github.com/Beyond-Automation/AIHAT/issues" },
];
const companyLinks = [
  { title: "About", detail: "Our mission and story", icon: "ⓘ", href: "#about" },
  { title: "Community", detail: "Join the community", icon: "♙", href: "https://github.com/Beyond-Automation" },
  { title: "Security", detail: "Security at Beyond Automation", icon: "♢", href: "https://github.com/Beyond-Automation/AIHAT/blob/main/SECURITY.md" },
  { title: "Legal", detail: "Privacy Policy • Terms of Use", icon: "⚖", href: "#" },
];

function FooterLink({ item }: { item: { title: string; detail: string; icon: string; href: string } }) {
  const external = item.href.startsWith("http");
  return (
    <a href={item.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="ba-footer-link">
      <span className="ba-footer-link-icon">{item.icon}</span>
      <span><strong>{item.title}</strong><small>{item.detail}</small></span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="ba-footer">
      <div className="ba-footer-glow" aria-hidden="true" />
      <div className="ba-container">
        <div className="ba-footer-grid">
          <section className="ba-footer-brand">
            <div className="ba-footer-logo">
              <div className="ba-footer-logo-mark"><span>BA</span></div>
              <div><strong>BEYOND</strong><span>AUTOMATION</span></div>
            </div>
            <p>Engineering smarter IT operations through automation, PowerShell, AI, and modern infrastructure tooling.</p>
            <div className="ba-footer-socials">
              <a href="https://github.com/Beyond-Automation" target="_blank" rel="noreferrer">◉ GitHub</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">in LinkedIn</a>
              <a href="mailto:contact@beyondautomation.com">✉ Contact</a>
            </div>
            <a href="#demo" className="ba-footer-cta"><span>Explore AIHAT</span><span>→</span></a>
          </section>
          <section className="ba-footer-column"><h2>Products</h2><div className="ba-footer-links">{productLinks.map((item) => <FooterLink key={item.title} item={item} />)}</div><a className="ba-footer-column-action" href="#products">View all products →</a></section>
          <section className="ba-footer-column"><h2>Resources</h2><div className="ba-footer-links">{resourceLinks.map((item) => <FooterLink key={item.title} item={item} />)}</div><a className="ba-footer-column-action" href="#">View all resources →</a></section>
          <section className="ba-footer-column"><h2>Company</h2><div className="ba-footer-links">{companyLinks.map((item) => <FooterLink key={item.title} item={item} />)}</div><a className="ba-footer-column-action" href="#about">Learn more →</a></section>
        </div>
        <div className="ba-footer-bottom">© 2026 Beyond Automation&nbsp; • &nbsp;Building the future of IT automation.</div>
      </div>
    </footer>
  );
}
