"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type OutboundLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  destination: "github" | "youtube" | "linkedin";
  placement: string;
  children: ReactNode;
};

/** External link that opens in a new tab and emits an `outbound_click` event. */
export default function OutboundLink({ href, destination, placement, children, onClick, ...rest }: OutboundLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        trackEvent("outbound_click", { destination, placement, url: href });
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
