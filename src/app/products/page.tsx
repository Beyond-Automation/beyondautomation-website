import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductRoadmap from "@/components/ProductRoadmap";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Beyond Automation products for Windows infrastructure health, patch readiness, and network troubleshooting.",
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Beyond Automation products</p>
          <h1>Engineering software for real IT operations.</h1>
          <p className="ba-product-lead">
            Start with the product that solves the problem in front of you. Explore released
            engineering, see what is approaching launch, and follow the Beyond Automation
            portfolio as it grows.
          </p>
        </div>
      </section>
      <ProductRoadmap />
      <Footer />
    </main>
  );
}
