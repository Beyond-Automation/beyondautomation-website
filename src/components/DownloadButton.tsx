"use client";

import { useCallback } from "react";

type DownloadButtonProps = {
  downloadUrl: string;
  checksumUrl: string;
  version: string;
  product: string;
};

/**
 * DownloadButton — tracks AIHAT download clicks via dataLayer and
 * a first-party browser event before navigating to the installer.
 *
 * Events emitted:
 *   dataLayer: { event: "product_download", product, version, file_type }
 *   window: CustomEvent("ba:product-download", { detail: { product, version } })
 */
export function DownloadButton({ downloadUrl, checksumUrl, version, product }: DownloadButtonProps) {
  const handleDownload = useCallback(() => {
    // Push to dataLayer for GA4 / GTM
    if (typeof window !== "undefined") {
      const dl = (window as unknown as { dataLayer?: object[] }).dataLayer;
      if (Array.isArray(dl)) {
        dl.push({
          event: "product_download",
          product,
          version,
          file_type: "installer",
        });
      }

      // First-party browser event — readable by any future analytics stack
      window.dispatchEvent(
        new CustomEvent("ba:product-download", {
          detail: { product, version, file_type: "installer" },
        })
      );
    }
  }, [product, version]);

  return (
    <div className="aihat-release-actions">
      <a
        href={downloadUrl}
        className="aihat-download-button"
        onClick={handleDownload}
        data-product={product}
        data-version={version}
      >
        <span className="aihat-download-icon" aria-hidden="true">↓</span>
        <span>
          <strong>Download {product} {version}</strong>
          <small>Free signed installer · Windows x64</small>
        </span>
        <b aria-hidden="true">→</b>
      </a>
      <a href="#install" className="aihat-release-secondary">View installation steps</a>
      <a className="aihat-checksum-link" href={checksumUrl}>
        Download SHA-256 checksum
      </a>
    </div>
  );
}
