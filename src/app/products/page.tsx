import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductRoadmap from "@/components/ProductRoadmap";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Beyond Automation engineering products and product roadmap.",
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <section className="ba-index-page">
        <div className="ba-container">
          <p className="ba-launch-eyebrow">Beyond Automation products</p>
          <h1>Engineering software for real IT operations.</h1>
        </div>
      </section>
      <ProductRoadmap />
      <Footer />
    </main>
  );
}
