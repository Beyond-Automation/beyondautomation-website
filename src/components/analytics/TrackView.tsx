"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

/** Emits a single view event when the page mounts. Renders nothing. */
export default function TrackView({ event, params }: { event: AnalyticsEvent; params: AnalyticsParams }) {
  const key = JSON.stringify(params);

  useEffect(() => {
    trackEvent(event, JSON.parse(key) as AnalyticsParams);
  }, [event, key]);

  return null;
}
