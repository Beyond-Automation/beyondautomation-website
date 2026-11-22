/**
 * First-party analytics events.
 *
 * Follows the pattern already used by DownloadButton: push to window.dataLayer
 * when a tag manager / GA4 is present, and always dispatch a namespaced browser
 * event (`ba:<event>`) that any future analytics stack can listen for.
 *
 * No analytics vendor is loaded by this module. Never pass personal data,
 * email addresses, or administrative identifiers as parameters.
 *
 * Event names (snake_case, GA4-compatible):
 *   article_view     { slug, category }
 *   product_view     { product }
 *   video_play       { video_id, placement }
 *   outbound_click   { destination: "github" | "youtube" | "linkedin", placement, url }
 *   newsletter_signup{ source }
 */
export type AnalyticsEvent =
  | "article_view"
  | "product_view"
  | "video_play"
  | "outbound_click"
  | "newsletter_signup";

export type AnalyticsParams = Record<string, string | number | boolean>;

export function trackEvent(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const dataLayer = (window as unknown as { dataLayer?: object[] }).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push({ event, ...params });
  }

  window.dispatchEvent(new CustomEvent(`ba:${event}`, { detail: params }));
}
