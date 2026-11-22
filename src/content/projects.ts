/**
 * Beyond Automation project portfolio.
 *
 * Single source for the homepage hero visual and the Projects grid (homepage
 * and /products). Release and license values must match the
 * Beyond-Automation/.github organization profile. Projects are listed in
 * the same order and given the same card weight: no project is the flagship.
 */

export type Project = {
  name: string;
  /** Short status label shown on the card badge. */
  status: string;
  /** Release / version information. */
  release: string;
  /** License or distribution model. */
  license: string;
  description: string;
  href: string;
  cta: string;
  /** Short tagline for compact listings such as the hero visual. */
  tagline: string;
};

export const projects: Project[] = [
  {
    name: "OffboardPilot",
    status: "Open Source",
    release: "v1.0",
    license: "MIT license · source on GitHub",
    tagline: "Hybrid AD + Microsoft 365 offboarding",
    description:
      "Hybrid Active Directory and Microsoft 365 offboarding automation in a single guided PowerShell script: six steps, a reconciliation report, and a full session transcript.",
    href: "/products/offboardpilot",
    cta: "Explore OffboardPilot",
  },
  {
    name: "AIHAT",
    status: "Free Download",
    release: "v1.2.0",
    license: "Free signed Windows binary · private source",
    tagline: "Windows infrastructure health audits",
    description:
      "Infrastructure Health Audit Toolkit: a free, signed Windows application for read-only health assessment and local HTML reporting.",
    href: "/aihat",
    cta: "Explore AIHAT",
  },
  {
    name: "PatchPilot",
    status: "In Development",
    release: "Not yet released",
    license: "License to be announced at release",
    tagline: "Windows patch-health assessment",
    description:
      "Windows patch-health assessment built to turn patch state into clear evidence, coverage, and remediation decisions.",
    href: "/journal",
    cta: "Follow the build",
  },
  {
    name: "NetFixLab",
    status: "Live",
    release: "Live at netfixlab.com",
    license: "Free guidance site",
    tagline: "Diagnosis-first network troubleshooting",
    description:
      "Diagnosis-first network troubleshooting guidance that helps people isolate problems before spending money on the wrong fix.",
    href: "https://netfixlab.com",
    cta: "Visit NetFixLab",
  },
];
