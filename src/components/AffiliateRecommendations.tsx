import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { affiliatePartners, type AffiliatePartner } from "@/lib/affiliates";

interface AffiliateRecommendationsProps {
  category?: string;
}

export default function AffiliateRecommendations({
  category,
}: AffiliateRecommendationsProps) {
  const partners = category
    ? affiliatePartners.filter((p) => p.category === category)
    : affiliatePartners;

  if (partners.length === 0) return null;

  return (
    <Section
      id="recommended-tools"
      eyebrow="Recommended tools"
      title="Tools we trust for IT operations."
      intro="Evaluated and recommended by Beyond Automation engineers. Some links are affiliate links — if you purchase through them, we may earn a commission at no extra cost to you."
    >
      <div className="ba-roadmap-grid">
        {partners.map((partner) => (
          <AffiliateCard key={partner.id} partner={partner} />
        ))}
      </div>
    </Section>
  );
}

function AffiliateCard({ partner }: { partner: AffiliatePartner }) {
  return (
    <Card>
      <div style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <strong style={{ fontSize: "1.1rem" }}>{partner.name}</strong>
        <Badge tone="blue">{partner.category}</Badge>
      </div>
      <p style={{ marginBottom: "1.25rem", opacity: 0.75 }}>{partner.description}</p>
      <Button
        href={partner.url}
        variant="secondary"
        external
        // rel="noopener noreferrer sponsored nofollow" is added via external prop + affiliate override below
      >
        {partner.ctaText} →
      </Button>
      {partner.status === "pending" && (
        <p style={{ fontSize: "0.75rem", opacity: 0.5, marginTop: "0.6rem" }}>
          Affiliate partnership pending
        </p>
      )}
    </Card>
  );
}
