import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const pillars = [
  { n: "01", title: "Real-world by design", body: "Built from the operational realities of infrastructure, endpoint management, Windows, Microsoft 365, and support workflows." },
  { n: "02", title: "Automation with discipline", body: "Versioned releases, validation, testing, documentation, and clean engineering practices—not one-off scripts." },
  { n: "03", title: "AI where it helps", body: "AI accelerates analysis and delivery while reliable automation remains at the core of every product." },
];

export default function WhyBeyond() {
  return (
    <Section id="why" eyebrow="Why Beyond Automation" title="Tools for the work IT teams actually do." intro="The mission is simple: remove operational friction without adding unnecessary complexity.">
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.n}>
            <span className="font-mono text-sm text-blue-400">{pillar.n}</span>
            <h3 className="mt-8 text-xl font-bold">{pillar.title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{pillar.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
