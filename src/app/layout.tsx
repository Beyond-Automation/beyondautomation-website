import type { Metadata } from "next";
import "./globals.css";
import { externalLinks } from "@/lib/site";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondautomation.io"),
  title: {
    default: "Beyond Automation | Engineering Smarter IT Operations",
    template: "%s | Beyond Automation",
  },
  description:
    "Beyond Automation develops practical infrastructure software, open-source automation solutions, and technical resources for infrastructure engineers and IT professionals.",
  keywords: [
    "infrastructure engineering",
    "open-source IT automation",
    "IT automation",
    "PowerShell automation",
    "IT operations automation",
    "OffboardPilot",
    "AIHAT",
    "Windows health audit",
    "Windows patch health",
    "patch readiness",
    "network troubleshooting",
    "infrastructure health",
  ],
  authors: [{ name: "Beyond Automation" }],
  creator: "Beyond Automation",
  publisher: "Beyond Automation",
  // Canonical URLs are set per page. A root-level canonical would be inherited
  // by every route and point all of them at the homepage.
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Beyond Automation",
    title: "Beyond Automation | Engineering Smarter IT Operations",
    description:
      "Practical infrastructure software, open-source automation, and technical demonstrations for engineers who want to build better systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Automation | Engineering Smarter IT Operations",
    description:
      "Practical infrastructure software, open-source automation, and technical demonstrations for engineers who want to build better systems.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
};

const siteUrl = "https://beyondautomation.io";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beyond Automation",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  slogan: "Engineering Smarter IT Operations.",
  description:
    "Infrastructure engineering, open-source automation, and technical education for IT professionals.",
  founder: { "@type": "Person", name: "Randall Lewis" },
  sameAs: [externalLinks.linkedin, externalLinks.github, externalLinks.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="ba-skip-link" href="#main-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
