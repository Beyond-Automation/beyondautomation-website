import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources | Beyond Automation",
  description:
    "Curated tools, platforms, and resources for IT teams and MSPs focused on automation, endpoint management, and infrastructure.",
  alternates: { canonical: "/resources" },
};

interface Resource {
  name: string;
  category: string;
  description: string;
  url: string;
  cta: string;
  isAffiliate: boolean;
}

const resources: Resource[] = [
  {
    name: "NinjaOne",
    category: "Endpoint Management / RMM",
    description:
      "Unified IT management platform for endpoint monitoring, patching, and remote access. Built for MSPs and IT teams who want a single pane of glass for their entire infrastructure.",
    // TODO: Replace with affiliate URL once NinjaOne partnership is approved
    url: "https://www.ninjaone.com/",
    cta: "Try NinjaOne",
    isAffiliate: true,
  },
];

export default function ResourcesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section
        aria-labelledby="resources-heading"
        className="ba-container py-20"
      >
        <div className="mb-12 text-center">
          <h1
            id="resources-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Resources
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Curated tools and platforms for IT teams and MSPs who are serious
            about automation.
          </p>
        </div>

        {/* Affiliate disclosure */}
        <p className="mb-10 text-sm text-gray-400 italic">
          Some links on this page are affiliate links. If you purchase through
          them, we may earn a commission at no extra cost to you. We only
          recommend tools we genuinely use or believe in.
        </p>

        <ul
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Resource list"
        >
          {resources.map((resource) => (
            <li key={resource.name}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-300">
                  {resource.category}
                </span>

                <h2 className="mb-2 text-xl font-semibold">{resource.name}</h2>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                  {resource.description}
                </p>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#050816]"
                >
                  {resource.cta}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
