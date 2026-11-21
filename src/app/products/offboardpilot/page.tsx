import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OutboundLink from "@/components/analytics/OutboundLink";
import TrackView from "@/components/analytics/TrackView";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { articlePath, getArticle } from "@/content/journal";
import { absoluteUrl, publisherSchema } from "@/lib/site";

const pageTitle = "OffboardPilot | Open-Source Hybrid AD + M365 Offboarding Automation";
const pageDescription =
  "OffboardPilot is a free, open-source (MIT) PowerShell script that automates hybrid Active Directory and Microsoft 365 employee offboarding in six steps with a reconciliation report and full transcript.";

const demoArticle = getArticle("automate-employee-offboarding");
const demoArticleHref = articlePath(demoArticle.slug);

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/products/offboardpilot" },
  openGraph: {
    type: "website",
    url: "/products/offboardpilot",
    title: pageTitle,
    description: pageDescription,
    images: demoArticle.image ? [{ url: demoArticle.image.url, alt: demoArticle.image.alt, width: demoArticle.image.width, height: demoArticle.image.height }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: demoArticle.image ? [demoArticle.image.url] : undefined,
  },
};

const githubUrl = "https://github.com/Beyond-Automation/OffboardPilot";

const docLinks = [
  { label: "README and documentation", detail: "Prerequisites, supported workflows, and how to verify a run", href: githubUrl + "#readme" },
  { label: "Lab guide", detail: "Test both paths with fictional users and a test domain", href: githubUrl + "#lab-guide" },
  { label: "Contribution guide", detail: "How to report results, file issues, and submit pull requests", href: githubUrl + "/blob/main/CONTRIBUTING.md" },
  { label: "Open issues", detail: "Lab verification tasks and known work", href: githubUrl + "/issues" },
  { label: "MIT License", detail: "The license that governs use of the source", href: githubUrl + "/blob/main/LICENSE" },
];

const sourceCodeSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "OffboardPilot",
  description: pageDescription,
  url: absoluteUrl("/products/offboardpilot"),
  codeRepository: githubUrl,
  programmingLanguage: "PowerShell",
  runtimePlatform: "Windows PowerShell 5.1",
  license: "https://opensource.org/licenses/MIT",
  version: "1.0",
  author: publisherSchema,
};

export default function OffboardPilotPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <TrackView event="product_view" params={{ product: "OffboardPilot" }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sourceCodeSchema).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="op-hero">
        <div className="op-grid" aria-hidden="true" />
        <div className="op-glow" aria-hidden="true" />

        <div className="ba-container op-shell">
          <div className="op-copy">
            <div className="op-badges">
              <span>PowerShell 5.1 / 7</span>
              <span>Hybrid AD + M365</span>
              <span>v1.0</span>
              <span>Open Source · MIT</span>
            </div>

            <p className="ba-launch-eyebrow">Beyond Automation — open source</p>
            <h1>Stop doing offboarding by hand.</h1>
            <p className="op-lead">
              OffboardPilot automates the complete hybrid AD + M365 offboarding
              workflow in a single guided PowerShell script — six steps, a
              color-coded reconciliation report, and a full session transcript
              logged automatically.
            </p>

            <div className="op-actions">
              <OutboundLink href={githubUrl} destination="github" placement="product_hero" className="ba-button ba-button-primary op-buy-btn">
                Get OffboardPilot on GitHub <span aria-hidden="true" className="ml-2">↗</span>
              </OutboundLink>
              <a href="#demo" className="ba-button ba-button-secondary">
                Watch the demonstration
              </a>
            </div>

            <p className="op-status">
              <strong>Status:</strong> Released · v1.0 · Distributed as source from the GitHub repository under the MIT License.
            </p>

            <div className="op-trust">
              <span>Full commented source — no obfuscation</span>
              <span>No hardcoded values</span>
              <span>MIT licensed — free to use</span>
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="op-stage" aria-label="OffboardPilot run preview">
            <div className="op-stage-orbit" aria-hidden="true" />
            <div className="op-window">
              <div className="op-window-bar">
                <div><span /><span /><span /></div>
                <strong>Invoke-UserOffboard.ps1</strong>
                <em>v1.0</em>
              </div>
              <div className="op-window-body">
                <div className="op-term-line op-dim"># OffboardPilot v1.0</div>
                <div className="op-term-line"><span className="op-dim">PS&gt; </span><span className="op-cyan">.\Invoke-UserOffboard.ps1</span></div>
                <div className="op-term-line op-spacer" />
                <div className="op-term-line op-white">Enter UPN to offboard:</div>
                <div className="op-term-line op-yellow">jsmith@contoso.com</div>
                <div className="op-term-line op-spacer" />
                <div className="op-term-line"><span className="op-green">[+]</span> EXO identity DN captured</div>
                <div className="op-term-line op-spacer" />
                <div className="op-term-line op-cyan">STEP 1 — AD ACCOUNT</div>
                <div className="op-term-line"><span className="op-green">[+]</span> AD account disabled</div>
                <div className="op-term-line op-spacer" />
                <div className="op-term-line op-cyan">STEP 2 — ENTRA ID</div>
                <div className="op-term-line"><span className="op-green">[+]</span> Sign-in blocked</div>
                <div className="op-term-line"><span className="op-green">[+]</span> Sessions + tokens revoked</div>
                <div className="op-term-line op-spacer" />
                <div className="op-term-line op-cyan">STEP 4 — MAILBOX</div>
                <div className="op-term-line"><span className="op-green">[+]</span> Converted to Shared mailbox</div>
                <div className="op-term-line"><span className="op-green">[+]</span> Forwarding to manager@contoso.com</div>
                <div className="op-term-line"><span className="op-green">[+]</span> 3 licenses removed</div>
                <div className="op-term-line op-spacer" />
                <div className="op-term-line op-white op-bold">OFFBOARD COMPLETE — 6/6 steps passed</div>
                <div className="op-term-line op-dim">Transcript → C:\Scripts\Logs\</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="aihat-release-strip">
        <div className="ba-container">
          <article><strong>6</strong><span>automated steps</span></article>
          <article><strong>3</strong><span>included scripts</span></article>
          <article><strong>1</strong><span>audit trail per run</span></article>
          <article><strong>0</strong><span>hardcoded values</span></article>
        </div>
      </section>

      {/* The Problem */}
      <section className="op-content">
        <div className="ba-container">
          <div className="op-problem">
            <div>
              <p className="ba-launch-eyebrow">The silent failure</p>
              <h2>Offboarding scripts can get the EXO groups wrong.</h2>
              <p>
                When you remove a user&rsquo;s M365 license, Exchange Online may revert
                their primary email address back to{" "}
                <code>user@tenant.onmicrosoft.com</code>. A script that filters
                distribution group memberships by email address after the license
                removal can hit the wrong address, find nothing, and report success.
              </p>
              <p className="op-problem-callout">
                The user is still in every cloud DL they were ever added to.
              </p>
              <p>
                OffboardPilot captures the user&rsquo;s Exchange Distinguished Name{" "}
                <em>before</em> any license changes, then uses that DN for every group
                query. DN is stable regardless of licensing state.
              </p>
              <p>
                <a className="ba-text-link" href={`${demoArticleHref}#exchange-online-identity`}>
                  Read the full explanation in the Engineering Journal →
                </a>
              </p>
            </div>
          </div>

          {/* Demonstration */}
          <section id="demo" className="op-demo scroll-mt-28" aria-labelledby="op-demo-heading">
            <div className="op-section-heading">
              <p className="ba-launch-eyebrow">Engineering demonstration</p>
              <h2 id="op-demo-heading">See a full offboarding run in a hybrid lab.</h2>
            </div>
            {demoArticle.video && (
              <YouTubeEmbed videoId={demoArticle.video.youtubeId} title={demoArticle.video.title} placement="product_demo" />
            )}
            <p className="op-demo-article">
              Want the background first?{" "}
              <a className="ba-text-link" href={demoArticleHref}>
                How to Automate Employee Offboarding Across Active Directory and Microsoft 365 →
              </a>
            </p>
          </section>

          {/* Steps grid */}
          <div className="op-section-heading">
            <p className="ba-launch-eyebrow">What it does</p>
            <h2>Six steps. One script. Nothing missed.</h2>
          </div>

          <div className="op-steps-grid">
            <article>
              <span>01</span><h3>Disable AD account</h3>
              <p>Disables the on-premises Active Directory account immediately.</p>
            </article>
            <article>
              <span>02</span><h3>Block Entra ID sign-in</h3>
              <p>Sets BlockSignIn in Entra ID / Azure AD to prevent cloud authentication.</p>
            </article>
            <article>
              <span>03</span><h3>Revoke M365 sessions</h3>
              <p>Revokes all active Microsoft 365 sessions and OAuth refresh tokens.</p>
            </article>
            <article>
              <span>04</span><h3>Mailbox conversion</h3>
              <p>Converts to Shared mailbox, configures forwarding, and removes all assigned licenses.</p>
            </article>
            <article>
              <span>05</span><h3>Remove EXO groups</h3>
              <p>Removes cloud-only Exchange Online distribution group memberships using the stable DN.</p>
            </article>
            <article>
              <span>06</span><h3>Remove AD groups</h3>
              <p>Removes on-premises AD group memberships including AD-synced distribution lists.</p>
            </article>
          </div>

          {/* Feature + GitHub panel */}
          <div id="get" className="op-purchase-grid">
            <section className="op-feature-panel">
              <p className="ba-launch-eyebrow">Built for real hybrid environments</p>
              <h2>Works out of the box. No configuration required.</h2>
              <ul className="op-feature-list">
                <li><span>✓</span> No hardcoded values — drop it in any environment</li>
                <li><span>✓</span> Handles users with no EXO mailbox — EXO steps skip gracefully, AD steps continue</li>
                <li><span>✓</span> Mailbox size pre-check — warns before conversion if mailbox exceeds 50GB</li>
                <li><span>✓</span> EXO group membership uses Distinguished Name — prevents silent misses after license removal</li>
                <li><span>✓</span> AD operations use explicit admin credentials — supports least-privilege accounts</li>
                <li><span>✓</span> Required modules auto-install on first run</li>
                <li><span>✓</span> Full session transcript logged automatically to C:\Scripts\Logs\</li>
              </ul>

              <div className="op-req">
                <p className="ba-launch-eyebrow">Requirements</p>
                <ul>
                  <li>PowerShell 5.1 (recommended) — PS7 compatible</li>
                  <li>RSAT Active Directory module</li>
                  <li>ExchangeOnlineManagement module</li>
                  <li>Microsoft.Graph.Authentication module</li>
                  <li>Domain-connected Windows workstation</li>
                </ul>
              </div>
            </section>

            <aside className="op-purchase-card">
              <div className="op-purchase-card-top">
                <span>OPEN SOURCE — MIT LICENSE</span><strong>Free</strong>
              </div>
              <h3>OffboardPilot</h3>
              <p>Full, commented PowerShell source. No compiled executables, no obfuscation. Three scripts included.</p>
              <ul>
                <li><code>Invoke-UserOffboard.ps1</code> — main offboarding engine</li>
                <li><code>Get-EXOGroupMembership.ps1</code> — audit utility</li>
                <li><code>Reset-TestAccount.ps1</code> — lab reset tool</li>
              </ul>
              <OutboundLink
                className="op-card-buy"
                href={githubUrl}
                destination="github"
                placement="product_card"
                data-product="OffboardPilot"
                data-version="v1.0"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </OutboundLink>
              <OutboundLink className="op-card-github" href={`${githubUrl}/issues`} destination="github" placement="product_card_issues">
                Browse open issues &amp; contribute
              </OutboundLink>
            </aside>
          </div>

          {/* Documentation + contributing */}
          <section className="op-docs" aria-labelledby="op-docs-heading">
            <div className="op-section-heading">
              <p className="ba-launch-eyebrow">Documentation &amp; contributing</p>
              <h2 id="op-docs-heading">Install it, test it in a lab, and help improve it.</h2>
            </div>
            <p className="op-docs-lead">
              Clone or download the repository, review the prerequisites in the README, and run the lab guide
              before using OffboardPilot in production. The most valuable contribution is running a lab test path
              and reporting what you observed, especially if it differs from the documentation.
            </p>
            <div className="op-docs-grid">
              {docLinks.map((link) => (
                <OutboundLink key={link.label} href={link.href} destination="github" placement="product_docs" className="op-docs-link">
                  <strong>{link.label} ↗</strong>
                  <span>{link.detail}</span>
                </OutboundLink>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
