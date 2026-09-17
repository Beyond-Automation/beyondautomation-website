import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Network Monitoring Software for IT Teams",
  description:
    "Compare network monitoring tools for small IT departments and MSPs. Auvik, NinjaOne, and alternatives evaluated for real operational use.",
  alternates: { canonical: "/tools/network-monitoring" },
};

const tools = [
  {
    name: "Auvik",
    tagline: "Cloud-based network management — autodiscovery, topology mapping, and alerting",
    bestFor: "IT teams managing multi-site or complex networks who need instant topology visibility without manual documentation",
    strengths: [
      "Automatic network discovery and topology mapping — no manual diagramming",
      "Cloud-based — no on-prem collector server to maintain",
      "Integrates with most major RMM and PSA platforms",
      "Strong fit for MSPs managing multiple client networks",
      "Real-time alerting on device changes, outages, and config drift",
    ],
    considerations: [
      "Per-device pricing — costs scale with network size",
      "Best value when managing 20+ network devices",
      "Requires outbound internet from managed network for cloud reporting",
    ],
    affiliate: true,
    affiliateNote: "Beyond Automation participates in the Auvik affiliate program. This relationship does not influence the evaluation above.",
    cta: "Explore Auvik",
    // Auvik affiliate link via PartnerStack — placeholder until program approved
    ctaUrl: "https://www.auvik.com",
    ctaRel: "nofollow",
  },
  {
    name: "NinjaOne RMM",
    tagline: "Unified RMM with endpoint management, patching, monitoring, and remote access",
    bestFor: "IT teams and MSPs who need endpoint management and network monitoring in one platform",
    strengths: [
      "Combines RMM, patch management, and network monitoring",
      "Rated #1 for support across multiple independent review platforms",
      "Strong automation and scripting capabilities — good fit for PowerShell-heavy shops",
      "Single-pane visibility across endpoints and network devices",
    ],
    considerations: [
      "Broader scope than pure network monitoring — pricing reflects full RMM platform",
      "May be more than needed for teams only wanting network visibility",
    ],
    affiliate: true,
    affiliateNote: "Beyond Automation participates in the NinjaOne affiliate program via PartnerStack.",
    cta: "Explore NinjaOne",
    ctaUrl: "https://www.ninjaone.com",
    ctaRel: "nofollow",
  },
  {
    name: "PRTG Network Monitor",
    tagline: "On-premises network monitoring with sensor-based pricing",
    bestFor: "Teams who need on-premises monitoring and want granular sensor control",
    strengths: [
      "Mature, proven platform with broad protocol support",
      "On-premises option for environments with strict data-residency requirements",
      "Free tier available for up to 100 sensors",
    ],
    considerations: [
      "Sensor-based pricing can become complex at scale",
      "On-premises requires infrastructure to host and maintain",
      "UI is less modern than cloud-native alternatives",
    ],
    affiliate: false,
    affiliateNote: null,
    cta: "Learn more",
    ctaUrl: "https://www.paessler.com/prtg",
    ctaRel: "nofollow",
  },
];

export default function NetworkMonitoringPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">IT tools guide</p>
          <h1>Network monitoring software for IT teams.</h1>
          <p className="ba-product-lead">
            The right network monitoring tool depends on your environment size, whether you manage
            one site or many, and how much infrastructure you want to run yourself. This comparison
            evaluates the tools most relevant to working IT teams and MSPs.
          </p>
        </div>
      </section>

      <section className="ba-container" style={{ padding: "2rem 0 4rem" }}>
        <p style={{ marginBottom: "2rem", opacity: 0.7 }}>
          Beyond Automation evaluates tools based on operational fit, not commission rates.
          Affiliate relationships are disclosed on each entry and do not change the assessment.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {tools.map((tool) => (
            <article
              key={tool.name}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.75rem",
                padding: "2rem",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <h2 style={{ marginBottom: "0.25rem" }}>{tool.name}</h2>
                  <p style={{ opacity: 0.7, marginBottom: "0" }}>{tool.tagline}</p>
                </div>
                {tool.affiliate && (
                  <span style={{ fontSize: "0.75rem", padding: "0.25rem 0.6rem", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "99px", whiteSpace: "nowrap" }}>
                    Affiliate
                  </span>
                )}
              </div>

              <p style={{ marginTop: "1.25rem" }}>
                <strong>Best for:</strong> {tool.bestFor}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1.25rem" }}>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Strengths</p>
                  <ul style={{ paddingLeft: "1.25rem", opacity: 0.85 }}>
                    {tool.strengths.map((s) => <li key={s} style={{ marginBottom: "0.35rem" }}>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Considerations</p>
                  <ul style={{ paddingLeft: "1.25rem", opacity: 0.85 }}>
                    {tool.considerations.map((c) => <li key={c} style={{ marginBottom: "0.35rem" }}>{c}</li>)}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href={tool.ctaUrl}
                  rel={tool.ctaRel}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.6rem 1.25rem",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "0.5rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {tool.cta} →
                </a>
                {tool.affiliateNote && (
                  <p style={{ fontSize: "0.75rem", opacity: 0.5, margin: 0 }}>{tool.affiliateNote}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "3rem", padding: "1.5rem", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem" }}>
          <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Related Beyond Automation tools</p>
          <p style={{ opacity: 0.7, marginBottom: "1rem" }}>
            AIHAT provides free Windows infrastructure health auditing — a useful complement to
            network monitoring for endpoint visibility before deploying a full RMM.
          </p>
          <Link
            href="/aihat"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.6rem 1.25rem",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "0.5rem",
              fontWeight: 600,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Explore AIHAT →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
