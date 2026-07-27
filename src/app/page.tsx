import About from "@/components/About";
import AIHATDemo from "@/components/AIHATDemo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import TrustBar from "@/components/TrustBar";
import WhyBeyond from "@/components/WhyBeyond";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar /><Hero /><TrustBar /><WhyBeyond /><Products /><AIHATDemo /><About /><Footer />
    </main>
  );
}
