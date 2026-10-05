import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Business Automation Assessment — $299 | Beyond Automation",
  description:
    "We analyze one repetitive or inefficient process in your business, identify what can be automated, and show you exactly how much time and money you could recover. Fixed price, $299.",
  alternates: { canonical: "/services/automation-assessment" },
  openGraph: {
    title: "Business Automation Assessment — $299 | Beyond Automation",
    description:
      "Stop doing the same things by hand. We analyze your process, design the automation, and show you the numbers. Fixed price, $299.",
    url: "/services/automation-assessment",
  },
};

// TODO: Replace with your Gumroad product URL once created at $299
// Example: https://lewbeast.gumroad.com/l/automation-assessment
const GUMROAD_URL = "https://lewbeast.gumroad.com/l/automation-assessment";

const deliverables = [
  "Executive summary — findings and recommendations on one page",
  "Current process map — how it works today, step by step",
  "Problems and bottlenecks identified — with supporting detail",
  "Automation opportunities — specific, actionable, scoped",
  "Proposed future workflow — before and after comparison",
  "AI opportunities — where AI genuinely helps (not where it doesn't)",
  "Recommended technologies and integrations",
  "Human steps that should remain — what automation shouldn't touch",
  "Estimated time savings — hours per week, employees affected",
  "Implementation complexity rating — simple, moderate, or complex",
  "Dependencies and prerequisites",
  "Risks and security considerations",
  "Recommended implementation approach",
  "Fixed-price implementation quote — no surprises",
];

const forGroups = [
  { icon: "🏢", label: "Small Businesses", detail: "Any team with repetitive admin or operational work" },
  { icon: "⚖️", label: "Professional Services", detail: "Law, accounting, consulting, financial advisory" },
  { icon: "🏥", label: "Medical & Dental", detail: "Patient intake, scheduling, follow-up workflows" },
  { icon: "⛪", label: "Churches & Nonprofits", detail: "Volunteer coordination, donor tracking, reporting" },
  { icon: "🏠", label: "Property Managers", detail: "Maintenance requests, tenant onboarding, renewals" },
  { icon: "🔧", label: "Contractors", detail: "Estimates, invoicing, subcontractor coordination" },
  { icon: "🏭", label: "Manufacturers", detail: "QC reporting, supply chain alerts, shift handoffs" },
  { icon: "💻", label: "IT Teams", detail: "Onboarding, offboarding, helpdesk, patch management" },
];

const howItWorks = [
  {
    num: "01",
    title: "Purchase and describe your process",
    body: "Complete the $299 purchase, then fill out a structured intake form describing the process you want improved — what it is, how it works today, who's involved, and what you want it to look like.",
  },
  {
    num: "02",
    title: "We analyze and design the solution",
    body: "Beyond Automation reviews your process in detail, identifies automation opportunities, and designs the improved workflow. We research the right tools and integrations for your specific environment.",
  },
  {
    num: "03",
    title: "You receive a professional assessment report",
    body: "Within 5 business days, you receive a complete written assessment with findings, a proposed future workflow, estimated time savings, and a fixed-price quote to build it.",
  },
];

const faqs = [
  {
    q: "What kind of processes qualify?",
    a: "Any repetitive, manual workflow your team runs regularly. Common examples: employee onboarding and offboarding, email-based approvals, data entry from one system to another, monthly reporting, scheduling, document processing, helpdesk intake, customer follow-up, account provisioning, and Microsoft 365 administration tasks.",
  },
  {
    q: "Do you force AI into every solution?",
    a: "No. We recommend the right tool for the job — which is often conventional scripting, Power Automate, or a simple integration rather than AI. AI gets recommended where it genuinely adds value, not as a default.",
  },
  {
    q: "What if I don't have a technical background?",
    a: "Good — most of our customers don't. The assessment is written in plain language for business owners and managers, not engineers. The technical detail is there if you want it, but the summary and recommendations are written to be immediately actionable.",
  },
  {
    q: "How long does the assessment take?",
    a: "5 business days from the time we receive your completed intake form. If a process is unusually complex, we'll let you know before starting.",
  },
  {
    q: "What happens after the assessment?",
    a: "The assessment includes a fixed-price implementation quote. If you want to move forward, we build the automation for you. If you want to take it to your internal team or another vendor, the assessment report gives them everything they need to execute.",
  },
  {
    q: "What if I'm not satisfied with the assessment?",
    a: "If you feel the assessment didn't deliver useful, actionable findings, contact us within 7 days and we'll either revise it or refund your $299. We're not interested in charging for work that didn't help.",
  },
  {
    q: "Is there a discount for multiple processes?",
    a: "Yes — if you want assessments on multiple processes, contact us at randall@beyondautomation.io before purchasing and we'll put together a bundled quote.",
  },
];

export default function AutomationAssessmentPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="aa-hero">
        <div className="aa-hero-grid" aria-hidden="true" />
        <div className="aa-hero-glow-l" aria-hidden="true" />
        <div className="aa-hero-glow-r" aria-hidden="true" />

        <div className="ba-container aa-hero-inner">
          <p className="aa-eyebrow">
            <span>●</span> Business Automation Assessment
          </p>
          <h1>
            Stop doing the same work<br />
            <em>by hand, every week.</em>
          </h1>
          <p className="aa-hero-lead">
            Give us one repetitive or inefficient process. We analyze it, identify every
            automation opportunity, design the improved workflow, and show you exactly
            how much time and effort you could recover — in a professional written report.
          </p>
          <div className="aa-hero-actions">
            <a
              href={GUMROAD_URL}
              className="ba-button ba-button-primary aa-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start My Automation Assessment — $299 →
            </a>
          </div>
          <div className="aa-hero-trust">
            <span>✓ Fixed price — no hourly billing</span>
            <span>✓ 5 business day turnaround</span>
            <span>✓ Satisfaction guaranteed</span>
            <span>✓ Implementation quote included</span>
          </div>
        </div>
      </section>

      {/* ── Price strip ── */}
      <div className="aa-price-strip">
        <div className="ba-container aa-price-strip-inner">
          <div className="aa-price-pill">
            <strong>$299</strong>
            <span>Fixed assessment price</span>
          </div>
          <div className="aa-price-divider" aria-hidden="true" />
          <div className="aa-price-stat">
            <strong>5</strong>
            <span>Business day turnaround</span>
          </div>
          <div className="aa-price-divider" aria-hidden="true" />
          <div className="aa-price-stat">
            <strong>14</strong>
            <span>Report sections delivered</span>
          </div>
          <div className="aa-price-divider" aria-hidden="true" />
          <div className="aa-price-stat">
            <strong>1</strong>
            <span>Process analyzed, end to end</span>
          </div>
        </div>
      </div>

      <div className="aa-content">
        <div className="ba-container">

          {/* ── Problem ── */}
          <div className="aa-problem">
            <p className="ba-launch-eyebrow">The real cost</p>
            <h2>Your team is spending hours every week on work that shouldn&rsquo;t exist.</h2>
            <p>
              Most businesses have at least one process that runs on manual effort, tribal
              knowledge, and copy-paste — and everyone just accepts it. The problem isn&rsquo;t
              that automation is hard. It&rsquo;s that nobody has ever mapped the process,
              identified what&rsquo;s actually automatable, and produced a concrete plan to fix it.
            </p>
            <div className="aa-waste-grid">
              <div className="aa-waste-card">
                <h3>Manual hand-offs</h3>
                <p>Information that moves between people via email, phone, or spreadsheet — every single time.</p>
              </div>
              <div className="aa-waste-card">
                <h3>Repeated data entry</h3>
                <p>The same information re-keyed into multiple systems because they don&rsquo;t talk to each other.</p>
              </div>
              <div className="aa-waste-card">
                <h3>Status chasing</h3>
                <p>Time spent following up on approvals, updates, and completions that should be automatic.</p>
              </div>
            </div>
          </div>

          {/* ── Who it's for ── */}
          <div className="aa-for">
            <p className="ba-launch-eyebrow">Who this is for</p>
            <h2>If your organization has repetitive work, this assessment is for you.</h2>
            <div className="aa-for-grid">
              {forGroups.map((g) => (
                <div key={g.label} className="aa-for-card">
                  <span>{g.icon}</span>
                  <strong>{g.label}</strong>
                  <p>{g.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── How it works ── */}
          <div className="aa-how">
            <p className="ba-launch-eyebrow">The process</p>
            <h2>Three steps. Five business days. A clear answer.</h2>
            <div className="aa-how-steps">
              {howItWorks.map((step) => (
                <div key={step.num} className="aa-how-step">
                  <div className="aa-how-step-num">STEP {step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── What you get ── */}
          <div className="aa-deliverable">
            <div className="aa-deliverable-grid">
              <div>
                <p className="ba-launch-eyebrow">What you receive</p>
                <h2>A professional assessment report covering 14 sections.</h2>
                <ul className="aa-report-items">
                  {deliverables.map((item) => (
                    <li key={item}>
                      <span className="aa-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="aa-purchase-card">
                  <div className="aa-purchase-card-label">BEYOND AUTOMATION</div>
                  <div className="aa-purchase-card-price">$299</div>
                  <div className="aa-purchase-card-sub">Business Automation Assessment</div>
                  <ul className="aa-purchase-card-features">
                    <li><span>✓</span> One complete process analyzed</li>
                    <li><span>✓</span> 14-section professional report</li>
                    <li><span>✓</span> Automation opportunity mapping</li>
                    <li><span>✓</span> Estimated time savings calculation</li>
                    <li><span>✓</span> Fixed implementation quote</li>
                    <li><span>✓</span> 5 business day turnaround</li>
                    <li><span>✓</span> 7-day satisfaction guarantee</li>
                  </ul>
                  <a
                    href={GUMROAD_URL}
                    className="aa-card-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Start My Assessment — $299</span>
                    <span>→</span>
                  </a>
                  <p className="aa-turnaround">
                    After payment you&rsquo;ll complete a brief intake form describing your process.
                    Report delivered within 5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Implementation upsell ── */}
          <div className="aa-upsell">
            <p className="ba-launch-eyebrow">After the assessment</p>
            <h2>Ready to build it? We can do that too.</h2>
            <p>
              Every assessment includes a fixed-price implementation quote. If the findings confirm
              the opportunity is there and you want Beyond Automation to build the solution, we move
              straight into implementation. No re-scoping, no surprises — the quote in your report
              is the price.
            </p>
            <div className="aa-upsell-range">
              <strong>$750</strong>
              <span>— $1,500+</span>
            </div>
            <p>
              Implementation pricing varies by complexity. Simple integrations and scripts start
              at $750. Multi-system workflows with custom logic are quoted accordingly. Complex
              projects are quoted higher — we won&rsquo;t artificially cap a scope that warrants more.
            </p>
          </div>

          {/* ── Security / confidentiality ── */}
          <div className="aa-security">
            <h3>🔒 Confidentiality and security</h3>
            <p>
              Everything you share with Beyond Automation — process descriptions, workflow details,
              screenshots, documentation — is treated as confidential and used solely to complete
              your assessment. We do not share, sell, or retain your information beyond the scope
              of your engagement. If your industry has specific compliance requirements (HIPAA,
              SOC 2, PCI-DSS), let us know in the intake form and we&rsquo;ll address those constraints
              directly in the assessment.
            </p>
          </div>

          {/* ── FAQ ── */}
          <div className="aa-faq">
            <p className="ba-launch-eyebrow">Common questions</p>
            <h2>FAQ</h2>
            <div className="aa-faq-list">
              {faqs.map((faq) => (
                <div key={faq.q} className="aa-faq-item">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="aa-bottom-cta">
            <p className="ba-launch-eyebrow">Ready to start</p>
            <h2>One assessment. One clear answer. $299.</h2>
            <p>
              No calls required to get started. Purchase, describe your process, and you&rsquo;ll
              have a professional assessment in your hands within 5 business days.
            </p>
            <a
              href={GUMROAD_URL}
              className="ba-button ba-button-primary aa-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start My Automation Assessment — $299 →
            </a>
            <p style={{ marginTop: "1rem", color: "#475569", fontSize: ".82rem" }}>
              Questions? Email{" "}
              <a href="mailto:randall@beyondautomation.io" style={{ color: "#7dd3fc" }}>
                randall@beyondautomation.io
              </a>
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
