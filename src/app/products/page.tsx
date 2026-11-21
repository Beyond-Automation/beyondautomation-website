import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductRoadmap from "@/components/ProductRoadmap";

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: "Projects",
  description: "Open-source infrastructure automation, free Windows tools, and projects in development from Beyond Automation, including OffboardPilot and AIHAT.",
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Beyond Automation projects</p>
          <h1>Engineering solutions for real IT operations.</h1>
          <p className="ba-product-lead">
            Start with the project that solves the problem in front of you. Released open-source
            projects are on GitHub for you to inspect, adapt, and improve. Free tools and work in
            development are labeled with their current status.
          </p>
        </div>
      </section>
      <ProductRoadmap />
      <Footer />
    </main>
  );
}
