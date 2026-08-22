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
            <p>Beyond Automation website content and products are provided subject to the terms, licenses, and notices that apply to each offering.</p>
            <p>Unless a specific notice states otherwise, Beyond Automation source code, product architecture, internal tooling, documentation, branding, and related intellectual property are proprietary.</p>
            <p>Users are responsible for reviewing, testing, and approving tools before using them in production environments.</p>
            <p>Beyond Automation does not guarantee that every product, tool, or article is suitable for every organization, device, policy, or regulatory requirement.</p>
            <p>Third-party software, services, and links remain subject to their own licenses, terms, and policies.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
