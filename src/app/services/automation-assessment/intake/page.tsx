import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Automation Assessment Intake | Beyond Automation",
  description: "Tell us about the process you want automated. We'll handle the rest.",
  robots: { index: false, follow: false },
};

export default function AutomationAssessmentIntakePage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <div className="aa-intake-page">
        <div className="ba-container">

          {/* Header */}
          <div className="aa-intake-header">
            <p className="aa-eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
              <span style={{ color: "#4ade80" }}>✓</span> Payment confirmed
            </p>
            <h1>Tell us about your process.</h1>
            <p>
              The more detail you provide, the more specific and useful your assessment will be.
              There are no wrong answers — describe the process the way your team actually experiences it.
            </p>
          </div>

          {/*
            Netlify Forms: the `netlify` attribute and `data-netlify="true"` tell
            Netlify to intercept this form on deploy and handle submissions.
            The `netlify-honeypot` field catches bots silently.
            After submit, Netlify redirects to the `action` URL.
          */}
          <form
            className="aa-form"
            name="automation-assessment-intake"
            method="POST"
            action="/services/automation-assessment/confirm"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Required hidden inputs for Netlify */}
            <input type="hidden" name="form-name" value="automation-assessment-intake" />
            <p style={{ display: "none" }}>
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Section 1 — Contact */}
            <fieldset className="aa-fieldset">
              <p className="aa-fieldset-title">01 — Your contact information</p>
              <div className="aa-field-grid aa-field-grid-2">
                <div className="aa-field">
                  <label htmlFor="contact-name">Your full name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="contact-name"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="contact-email">Email address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="contact-email"
                    required
                    autoComplete="email"
                    placeholder="jane@yourcompany.com"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="business-name">Business or organization name *</label>
                  <input
                    id="business-name"
                    type="text"
                    name="business-name"
                    required
                    placeholder="Your Company LLC"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="contact-phone">Phone number (optional)</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="contact-phone"
                    autoComplete="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="industry">Industry or sector *</label>
                  <select id="industry" name="industry" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Accounting / Finance</option>
                    <option>Construction / Contracting</option>
                    <option>Church / Nonprofit</option>
                    <option>Healthcare / Medical / Dental</option>
                    <option>Information Technology</option>
                    <option>Law / Legal Services</option>
                    <option>Manufacturing</option>
                    <option>Property Management / Real Estate</option>
                    <option>Professional Services (consulting, HR, marketing, etc.)</option>
                    <option>Retail / E-commerce</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="aa-field">
                  <label htmlFor="company-size">Approximate number of employees</label>
                  <select id="company-size" name="company-size" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>200+</option>
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Section 2 — Process overview */}
            <fieldset className="aa-fieldset">
              <p className="aa-fieldset-title">02 — The process you want improved</p>
              <div className="aa-field-grid">
                <div className="aa-field">
                  <label htmlFor="process-name">What do you call this process? *</label>
                  <input
                    id="process-name"
                    type="text"
                    name="process-name"
                    required
                    placeholder="e.g., New employee onboarding, Monthly client reporting, Invoice approval"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="process-description">Describe how this process works today — step by step. *</label>
                  <span className="aa-hint">Walk us through it from trigger to completion. Include every manual step, even the small ones.</span>
                  <textarea
                    id="process-description"
                    name="process-description"
                    required
                    rows={8}
                    placeholder="Example: When a new hire accepts an offer, HR sends me an email. I then create an AD account manually, add them to the right groups based on a shared spreadsheet, email IT to set up their laptop, add them to the payroll system, send a welcome email with their login info..."
                  />
                </div>
              </div>
            </fieldset>

            {/* Section 3 — People and frequency */}
            <fieldset className="aa-fieldset">
              <p className="aa-fieldset-title">03 — People, frequency, and time</p>
              <div className="aa-field-grid aa-field-grid-2">
                <div className="aa-field">
                  <label htmlFor="roles-involved">Which roles or departments are involved? *</label>
                  <input
                    id="roles-involved"
                    type="text"
                    name="roles-involved"
                    required
                    placeholder="e.g., HR, IT, Manager, Finance, Operations"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="frequency">How often does this process run? *</label>
                  <select id="frequency" name="frequency" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Multiple times per day</option>
                    <option>Daily</option>
                    <option>Several times per week</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>On demand (event-triggered)</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="aa-field">
                  <label htmlFor="time-spent">Approximately how long does each run take? *</label>
                  <input
                    id="time-spent"
                    type="text"
                    name="time-spent"
                    required
                    placeholder="e.g., 45 minutes per employee, 2 hours per report"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="people-count">How many people touch this process each time?</label>
                  <input
                    id="people-count"
                    type="text"
                    name="people-count"
                    placeholder="e.g., 3 — HR, IT, and the hiring manager"
                  />
                </div>
              </div>
            </fieldset>

            {/* Section 4 — Tools and systems */}
            <fieldset className="aa-fieldset">
              <p className="aa-fieldset-title">04 — Tools and applications involved</p>
              <div className="aa-field-grid">
                <div className="aa-field">
                  <label htmlFor="tools-used">What applications or systems does this process touch? *</label>
                  <span className="aa-hint">Include everything — email clients, spreadsheets, line-of-business software, portals, ERPs, CRMs, Microsoft 365 apps, anything.</span>
                  <textarea
                    id="tools-used"
                    name="tools-used"
                    required
                    rows={4}
                    placeholder="e.g., Outlook, SharePoint, QuickBooks, our ERP (Sage 100), a shared Excel spreadsheet, and a PDF template we fill out manually"
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="manual-steps">Which specific steps in this process are done manually? *</label>
                  <textarea
                    id="manual-steps"
                    name="manual-steps"
                    required
                    rows={4}
                    placeholder="e.g., Copy-pasting client data from email into our spreadsheet, re-entering it into QuickBooks, emailing a PDF attachment, and then updating a tracking sheet"
                  />
                </div>
              </div>
            </fieldset>

            {/* Section 5 — Pain points and goals */}
            <fieldset className="aa-fieldset">
              <p className="aa-fieldset-title">05 — Pain points and desired outcome</p>
              <div className="aa-field-grid">
                <div className="aa-field">
                  <label htmlFor="frustrations">What are the biggest frustrations or bottlenecks with this process? *</label>
                  <textarea
                    id="frustrations"
                    name="frustrations"
                    required
                    rows={4}
                    placeholder="e.g., Steps get missed when someone is out sick, the spreadsheet has conflicting versions, approvals get buried in email and cause delays..."
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="errors-delays">Have there been errors or costly delays caused by this process?</label>
                  <textarea
                    id="errors-delays"
                    name="errors-delays"
                    rows={3}
                    placeholder="e.g., An employee left without their accounts being properly disabled, or a report was sent to a client with the wrong numbers because of a copy-paste error..."
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="desired-outcome">What does success look like to you? *</label>
                  <span className="aa-hint">Describe the ideal state — what you want this process to look and feel like when it&apos;s working well.</span>
                  <textarea
                    id="desired-outcome"
                    name="desired-outcome"
                    required
                    rows={4}
                    placeholder="e.g., When a new hire is added to our HRIS, everything else happens automatically — accounts created, systems updated, equipment ordered, welcome email sent — without anyone having to manually coordinate it"
                  />
                </div>
              </div>
            </fieldset>

            {/* Section 6 — Additional context */}
            <fieldset className="aa-fieldset">
              <p className="aa-fieldset-title">06 — Additional context</p>
              <div className="aa-field-grid">
                <div className="aa-field">
                  <label htmlFor="compliance">Security, compliance, or regulatory requirements</label>
                  <span className="aa-hint">Anything we need to account for — HIPAA, PCI-DSS, SOC 2, internal IT policies, data handling restrictions, etc.</span>
                  <textarea
                    id="compliance"
                    name="compliance"
                    rows={3}
                    placeholder="e.g., We handle patient data so any solution must be HIPAA-compliant. We cannot store data in third-party cloud services without a BAA."
                  />
                </div>
                <div className="aa-field">
                  <label htmlFor="additional-context">Anything else we should know?</label>
                  <textarea
                    id="additional-context"
                    name="additional-context"
                    rows={3}
                    placeholder="Other relevant context, constraints, budget expectations for the implementation, timeline needs, or anything that would help us give you a better assessment..."
                  />
                </div>
              </div>
            </fieldset>

            {/* Submit */}
            <div className="aa-form-submit">
              <button type="submit">
                Submit My Intake Form →
              </button>
              <p>
                By submitting this form you confirm that you have completed payment for the Beyond Automation
                Business Automation Assessment. All information is treated as confidential and used solely
                to complete your assessment.
              </p>
            </div>
          </form>

        </div>
      </div>

      <Footer />
    </main>
  );
}
