"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type SubmissionState = "idle" | "submitting" | "success" | "error";

type LaunchNewsletterProps = {
  /** Hidden `source` field recorded with the Netlify form submission. */
  source?: string;
  heading?: string;
  description?: string;
};

export default function LaunchNewsletter({
  source = "website-dispatch",
  heading = "Get new engineering work as it ships.",
  description = "BA Dispatch shares new open-source projects, engineering articles, lab demonstrations, and community updates from Beyond Automation. Practical infrastructure engineering, written by engineers.",
}: LaunchNewsletterProps = {}) {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();

    formData.forEach((value, key) => {
      encodedData.append(key, String(value));
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}.`);
      }

      form.reset();
      setSubmissionState("success");
      trackEvent("newsletter_signup", { source });
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <section className="ba-newsletter-section">
      <div className="ba-container">
        <div className="ba-newsletter-card">
          <div>
            <p>Beyond Automation Dispatch</p>
            <h2>{heading}</h2>
            <span>{description}</span>
          </div>

          <form
            name="newsletter"
            method="POST"
            className="ba-newsletter-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="hidden" name="source" value={source} />

            <label htmlFor="newsletter-email">Email address</label>

            <div>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                disabled={submissionState === "submitting"}
              />

              <button type="submit" disabled={submissionState === "submitting"}>
                {submissionState === "submitting" ? "Joining..." : "Follow the build"}
              </button>
            </div>

            {submissionState === "success" && (
              <small role="status">
                You are on the list. We will send new projects, articles, and demonstrations as they ship.
              </small>
            )}

            {submissionState === "error" && (
              <small role="alert">
                Submission failed. Please try again.
              </small>
            )}

            {submissionState === "idle" && (
              <small>
                No spam. Unsubscribe anytime. See our <a href="/privacy">privacy policy</a>.
              </small>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
