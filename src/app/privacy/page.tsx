import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Beyond Automation handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <article className="ba-article-page">
        <div className="ba-container">
          <h1>Privacy Policy</h1>
          <div className="ba-article-body">
            <p>Beyond Automation collects only the information visitors voluntarily submit through website forms.</p>
            <p>Submitted contact or newsletter information is used to respond, provide requested updates, and improve the website. It is not sold.</p>
            <p>Some pages include embedded YouTube videos. Video preview images are served from YouTube&rsquo;s image servers (i.ytimg.com). The YouTube player itself is not loaded until you press play, and then loads from YouTube&rsquo;s privacy-enhanced domain (youtube-nocookie.com). Once you play a video, Google&rsquo;s privacy policy applies to that interaction.</p>
            <p>Hosting, analytics, form, and email providers may process limited technical information according to their own policies.</p>
            <p>Contact Beyond Automation to request access, correction, or deletion of submitted information.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
