/**
 * First-party analytics events.
 *
 * Sends the event to GA4 via `window.gtag` (loaded by
 * components/analytics/GoogleAnalytics in production). If gtag is absent but a
 * tag manager dataLayer exists, pushes a GTM-style object instead. Always
 * dispatches a namespaced browser event (`ba:<event>`) as well.
 *
 * This module does not load any vendor script itself. Never pass personal data,
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

type AnalyticsWindow = Window & {
  gtag?: (command: "event", name: string, params?: AnalyticsParams) => void;
  dataLayer?: object[];
};

/** Send an event to GA4 (gtag) or, failing that, a tag manager dataLayer. */
export function sendToAnalytics(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;

  if (typeof w.gtag === "function") {
    w.gtag("event", event, params);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...params });
  }
}

export function trackEvent(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  sendToAnalytics(event, params);
  window.dispatchEvent(new CustomEvent(`ba:${event}`, { detail: params }));
}
