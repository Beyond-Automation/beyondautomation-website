import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Assessment Received | Beyond Automation",
  description: "Your Business Automation Assessment intake has been submitted. We&apos;ll be in touch within 1 business day.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    num: "01",
    label: "We review your submission",
    detail: "Beyond Automation reviews your intake within 1 business day and follows up if we have any clarifying questions before beginning the analysis.",
  },
  {
    num: "02",
    label: "Analysis and design",
    detail: "We analyze your process in detail, research the right automation approaches for your environment, and design the improved workflow.",
  },
  {
    num: "03",
    label: "Your report is delivered",
    detail:
      "Within 5 business days of your confirmed intake, you'll receive your complete Business Automation Assessment report via email — 14 sections covering everything from the current-state map to a fixed implementation quote.",
  },
  {
    num: "04",
    label: "Optional: we build it",
    detail: "If the findings confirm the opportunity and you want to move forward, your report includes a fixed-price implementation quote. One email to start.",
  },
];

export default function AutomationAssessmentConfirmPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <div className="aa-confirm-page">
        <div className="aa-confirm-icon" aria-hidden="true">✓</div>

        <h1>You&rsquo;re all set.</h1>
        <p>
          Your Business Automation Assessment intake has been submitted. You&rsquo;ll
          receive a confirmation email shortly at the address you provided.
          Expect to hear from us within 1 business day — and your complete
          assessment within 5 business days.
        </p>

        <div className="aa-confirm-steps">
          {nextSteps.map((step) => (
            <div key={step.num} className="aa-confirm-step">
              <div className="aa-num">{step.num}</div>
              <div>
                <strong>{step.label}</strong>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: "#475569", fontSize: ".85rem", marginBottom: "1.5rem" }}>
          Questions? Email us at{" "}
          <a href="mailto:randall@beyondautomation.io" style={{ color: "#7dd3fc" }}>
            randall@beyondautomation.io
          </a>
        </p>

        <Link href="/" className="ba-button ba-button-secondary">
          ← Return to Beyond Automation
        </Link>
      </div>

      <Footer />
    </main>
  );
}
