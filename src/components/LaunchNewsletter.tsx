"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function LaunchNewsletter() {
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
            <h2>Follow the products while we build them.</h2>
            <span>
              Get practical engineering notes, product launch updates, PowerShell lessons,
              and infrastructure guidance from the work behind AIHAT, PatchPilot, and NetFixLab.
            </span>
          </div>

          <form
            name="newsletter"
            method="POST"
            className="ba-newsletter-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="hidden" name="source" value="website-dispatch" />

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
                You are on the list. We will send product and engineering updates as they ship.
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
