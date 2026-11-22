import Script from "next/script";
import { gaMeasurementId } from "@/lib/site";

/**
 * Loads the Google tag (gtag.js) for GA4. Rendered once in the root layout.
 * Skipped in development so local work does not pollute production data.
 *
 * The gtag stub and config are a plain inline script so they run while the
 * HTML parses, before hydration. Page-level effects (TrackView) fire on
 * hydration and would otherwise be dropped if gtag were not yet defined.
 */
export default function GoogleAnalytics() {
  if (!gaMeasurementId || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <script
        id="ga4-init"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaMeasurementId}');`,
        }}
      />
    </>
  );
}
