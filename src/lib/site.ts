/**
 * Shared site constants.
 *
 * External profile URLs are taken from published Beyond Automation sources
 * (the Beyond-Automation GitHub organization profile). Do not invent handles.
 */
export const siteUrl = "https://beyondautomation.io";
export const siteName = "Beyond Automation";
export const siteTagline = "Engineering Smarter IT Operations";
export const siteStatement = "Real Infrastructure. Real Engineering. Real Automation.";

export const externalLinks = {
  github: "https://github.com/Beyond-Automation",
  youtube: "https://www.youtube.com/@BeyondAutomationIT",
  linkedin: "https://www.linkedin.com/company/beyond-automation-io",
} as const;

export const founder = {
  name: "Randall Lewis",
  role: "Infrastructure Engineer & Founder",
} as const;

export const publisherSchema = {
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` },
} as const;

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

/**
 * GA4 measurement ID (web stream "Beyond Automation Web").
 * Public by design: it ships in page source. NEXT_PUBLIC_GA_MEASUREMENT_ID
 * overrides it at build time (e.g. a staging property); an empty override
 * disables analytics.
 */
const gaMeasurementIdRaw =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-74JCHHLJ1Q";
export const gaMeasurementId = /^G-[A-Z0-9]+$/.test(gaMeasurementIdRaw)
  ? gaMeasurementIdRaw
  : "";
