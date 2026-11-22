import type { Metadata } from "next";
import FeaturedDemo from "@/components/FeaturedDemo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JournalPreview from "@/components/JournalPreview";
import LaunchNewsletter from "@/components/LaunchNewsletter";
import Navbar from "@/components/Navbar";
import OpenSourceCommunity from "@/components/OpenSourceCommunity";
import ProductRoadmap from "@/components/ProductRoadmap";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * Organization homepage. Section order is intentional:
 * hero → latest engineering demonstration → projects (balanced portfolio) →
 * journal → open-source community → BA Dispatch → footer.
 * Product-specific marketing (AIHAT dashboard, audit simulation, licensing)
 * lives on each product page, not here.
 */
export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <Navbar />
      <Hero />
      <FeaturedDemo />
      <ProductRoadmap />
      <JournalPreview />
      <OpenSourceCommunity />
      <LaunchNewsletter />
      <Footer />
    </main>
  );
}
