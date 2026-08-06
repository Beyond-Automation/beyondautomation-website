import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JournalPreview from "@/components/JournalPreview";
import LaunchNewsletter from "@/components/LaunchNewsletter";
import Navbar from "@/components/Navbar";
import ProductRoadmap from "@/components/ProductRoadmap";
import TrustBar from "@/components/TrustBar";
import WhyBeyond from "@/components/WhyBeyond";
import AIHATLaunch from "@/components/AIHATLaunch";
import AIHATDemo from "@/components/AIHATDemo";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <Navbar />
      <Hero />
      <TrustBar />
      <AIHATLaunch />

      <section
        id="interactive-demo"
        className="scroll-mt-24"
        aria-label="AIHAT interactive demo"
      >
        <AIHATDemo />
      </section>
      <WhyBeyond />
      <ProductRoadmap />
      <JournalPreview />
      <LaunchNewsletter />
      <About />
      <Footer />
    </main>
  );
}

