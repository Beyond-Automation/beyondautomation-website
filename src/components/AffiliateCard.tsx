import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type AffiliateCardProps = {
  name: string;
  category: string;
  description: string;
  features: string[];
  affiliateUrl: string;
  /** true while the affiliate program is awaiting approval */
  isPending?: boolean;
  ctaText?: string;
};

export default function AffiliateCard({
  name,
  category,
  description,
  features,
  affiliateUrl,
  isPending = false,
  ctaText = "Learn More",
}: AffiliateCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-extrabold tracking-tight text-white">{name}</h3>
          <div className="mt-3">
            <Badge tone="blue">{category}</Badge>
          </div>
        </div>
        {isPending ? <Badge tone="neutral">Partner Pending</Badge> : null}
      </div>
      <p className="mb-4 text-[#cbd5e1]">{description}</p>
      {features.length > 0 ? (
        <ul className="mb-6 list-inside list-disc space-y-1 text-[#94a3b8]">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      ) : null}
      {/*
        The shared Button component hardcodes rel="noreferrer" and cannot emit the
        `sponsored` token Google requires on affiliate links, so this renders a raw
        anchor with the same ba-button styling rather than changing Button's interface.
      */}
      <a
        className="ba-button ba-button-primary mt-auto self-start"
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        {ctaText}
      </a>
    </Card>
  );
}
