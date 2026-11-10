import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "OffboardPilot | Hybrid AD + M365 Offboarding Automation (PowerShell)",
  description:
    "One PowerShell script. Six steps. Full audit trail. Automates the complete hybrid AD + M365 employee offboarding workflow - no hardcoded values, works in any environment.",
};

const githubUrl = "https://github.com/Beyond-Automation/OffboardPilot";

export default function OffboardPilotPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />

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
              <span>Open Source</span>
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
              <a href={githubUrl} className="ba-button ba-button-primary op-buy-btn" target="_blank" rel="noopener noreferrer">
                Get OffboardPilot on GitHub <span></span>
              </a>
            </div>

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
              <h2>Most offboarding scripts get the EXO groups wrong.</h2>
              <p>
                When you remove a user&rsquo;s M365 license, Exchange Online quietly reverts
                their primary email address back to{" "}
                <code>user@tenant.onmicrosoft.com</code>. Any script that filters
                distribution group memberships by email address &mdash; and most do &mdash;
                runs after the license removal, hits the wrong address, finds nothing,
                and reports success.
              </p>
              <p className="op-problem-callout">
                The user is still in every cloud DL they were ever added to.
              </p>
              <p>
                OffboardPilot captures the user&rsquo;s Exchange Distinguished Name{" "}
                <em>before</em> any license changes, then uses that DN for every group
                query. DN is stable regardless of licensing state.
              </p>
            </div>
          </div>

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
              <a
                className="op-card-buy"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-product="OffboardPilot"
                data-version="v1.0"
              >
                View on GitHub <span></span>
              </a>
              <a className="op-card-github" href={`${githubUrl}/issues`} target="_blank" rel="noopener noreferrer">
                Browse open issues &amp; contribute
              </a>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
