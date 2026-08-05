import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <article className="ba-article-page">
        <div className="ba-container">
          <h1>Terms of Use</h1>
          <div className="ba-article-body">
            <p>Website content and open-source software are provided for informational and operational use under their stated licenses.</p>
            <p>Users are responsible for reviewing, testing, and approving tools before using them in production environments.</p>
            <p>Beyond Automation does not guarantee that every tool or article is suitable for every organization, device, policy, or regulatory requirement.</p>
            <p>Third-party links are provided for convenience and remain subject to the third party&apos;s terms.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
