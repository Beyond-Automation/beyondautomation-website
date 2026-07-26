import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

export default function Products() {
  return (
    <Section id="products" surface eyebrow="Featured products" title="Built to earn trust." intro="A growing product family powered by the Beyond Automation engineering foundation.">
      <div className="mt-14 grid gap-7 lg:grid-cols-2">
        <Card accent className="group" >
          <div className="flex items-center justify-between gap-4"><Badge tone="green">Flagship product</Badge><span className="font-mono text-sm text-slate-500">AIHAT</span></div>
          <h3 className="mt-10 text-3xl font-black">AI Infrastructure Health Audit Toolkit</h3>
          <p className="mt-5 text-lg leading-8 text-slate-300">A modular PowerShell toolkit that collects infrastructure health signals, audits Windows Update status, and produces consistent operational insight.</p>
          <ul className="mt-8 grid gap-3 text-slate-400 sm:grid-cols-2"><li>✓ System health collection</li><li>✓ Windows Update auditing</li><li>✓ Structured logging</li><li>✓ Extensible modules</li></ul>
          <Button href="https://github.com/Beyond-Automation" external variant="ghost" className="mt-8">Explore AIHAT →</Button>
        </Card>
        <Card className="group">
          <div className="flex items-center justify-between gap-4"><Badge>Released</Badge><span className="font-mono text-sm text-slate-500">v1.0.0</span></div>
          <h3 className="mt-10 text-3xl font-black">Beyond Automation Platform</h3>
          <p className="mt-5 text-lg leading-8 text-slate-300">The tested PowerShell foundation behind current and future products, with plugins, dependency handling, events, releases, and validation built in.</p>
          <ul className="mt-8 grid gap-3 text-slate-400 sm:grid-cols-2"><li>✓ Plugin architecture</li><li>✓ Dependency engine</li><li>✓ Event framework</li><li>✓ Release management</li></ul>
          <Button href="https://github.com/Beyond-Automation/BeyondAutomation-Platform/releases/tag/v1.0.0" external variant="ghost" className="mt-8">View v1.0.0 release →</Button>
        </Card>
      </div>
    </Section>
  );
}
