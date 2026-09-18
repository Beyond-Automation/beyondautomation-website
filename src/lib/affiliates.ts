export type AffiliateStatus = "live" | "pending";

export interface AffiliatePartner {
  id: string;
  name: string;
  category: string;
  description: string;
  // TODO: Replace placeholder URLs with approved affiliate URLs once partnerships are confirmed
  url: string;
  status: AffiliateStatus;
  ctaText: string;
}

export const affiliatePartners: AffiliatePartner[] = [
  {
    id: "auvik",
    name: "Auvik",
    category: "Network Monitoring",
    description:
      "Cloud-based network monitoring and management. Automated network mapping, real-time traffic analysis, and proactive alerting — purpose-built for MSPs and IT teams.",
    url: "https://www.auvik.com",
    status: "pending",
    ctaText: "Try Auvik Free",
  },
];

export function getAffiliatesByCategory(
  category?: string
): AffiliatePartner[] {
  if (!category) return affiliatePartners;
  return affiliatePartners.filter((p) => p.category === category);
}
