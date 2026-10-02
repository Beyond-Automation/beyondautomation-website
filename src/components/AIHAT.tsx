const products = [
  {
    badge: "FLAGSHIP PRODUCT",
    name: "AIHAT",
    subtitle: "Infrastructure Health Audit Toolkit",
    text: "A practical Windows infrastructure assessment toolkit that helps IT professionals inspect system health, Windows Update status, security posture, networking health, and infrastructure readiness with consistent reporting.",
    points: ["System health collection", "Windows Update auditing", "Structured reports", "Extensible modules"],
    status: "Released",
  },
  {
    badge: "PRIVATE ENGINEERING CORE",
    name: "Beyond Automation Platform",
    subtitle: "The foundation behind every product",
    text: "A tested, versioned engineering platform for building reliable automation products with reusable architecture, validation, and release tooling.",
    points: ["Reusable architecture", "Release management", "Automated validation", "Product engineering standards"],
    status: "Private core",
  },
];

export default function AIHAT() {
  return (
    <>
      <section id="products" className="section section-dark">
        <div className="page-shell">
          <div className="section-heading center-heading">
            <span className="section-kicker">Products</span>
            <h2>Practical tools. Serious engineering.</h2>
            <p>Purpose-built solutions for the operational challenges IT teams face every day.</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article key={product.name} className={`product-card product-card-${index + 1}`}>
                <div className="product-topline">
                  <span>{product.badge}</span>
                  <i className={index === 0 ? "status-stable" : "status-building"} />
                </div>
                <div className="product-symbol" aria-hidden="true">{index === 0 ? "A" : "BA"}</div>
                <h3>{product.name}</h3>
                <h4>{product.subtitle}</h4>
                <p>{product.text}</p>
                <ul>
                  {product.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="product-footer">
                  <span>{product.status}</span>
                  <a href={index === 0 ? "/aihat" : "/products"}>
                    {index === 0 ? "Explore AIHAT" : "Explore products"} <b aria-hidden="true">→</b>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="page-shell about-layout">
          <div className="about-label">BEYOND THE CODE</div>
          <div className="about-copy">
            <span className="section-kicker">Built from experience</span>
            <h2>Automation should make IT work better—not merely faster.</h2>
            <p>
              Beyond Automation was created by Randall Lewis, an Infrastructure
              Engineer focused on PowerShell, Microsoft technologies, modern endpoint
              operations, secure automation, and infrastructure engineering.
            </p>
            <p>
              The mission is simple: build useful tools, share the engineering behind
              them, and help IT professionals spend less time fighting repetitive work.
            </p>
          </div>
          <blockquote>
            “Build smarter. Automate more. Focus on what matters.”
          </blockquote>
        </div>
      </section>

      <section className="cta-section">
        <div className="page-shell cta-layout">
          <div>
            <span className="section-kicker">Beyond Automation</span>
            <h2>Explore the products we are building for real IT operations.</h2>
          </div>
          <a href="/products" className="button button-light">
            Explore products <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
