import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyondautomation.com"
  ),
  title: {
    default: "Beyond Automation | Engineering Smarter IT Operations",
    template: "%s | Beyond Automation",
  },
  description:
    "Engineering software that modernizes IT operations through practical automation, infrastructure expertise, and security-first design.",
  keywords: [
    "IT automation",
    "PowerShell automation",
    "infrastructure engineering",
    "IT operations automation",
    "AIHAT",
    "Windows health audit",
  ],
  authors: [{ name: "Beyond Automation" }],
  creator: "Beyond Automation",
  publisher: "Beyond Automation",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Beyond Automation",
    title: "Beyond Automation | Engineering Smarter IT Operations",
    description:
      "Engineering software built for modern infrastructure teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Automation | Engineering Smarter IT Operations",
    description:
      "Engineering software built for modern infrastructure teams.",
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyondautomation.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beyond Automation",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Engineering software for modern IT operations.",
  sameAs: ["https://github.com/Beyond-Automation"],
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
        {children}
      </body>
    </html>
  );
}




