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
    "Practical AI-assisted automation tools for IT professionals, built from real infrastructure engineering experience.",
  keywords: [
    "IT automation",
    "PowerShell automation",
    "infrastructure engineering",
    "AI for IT operations",
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
      "Practical AI-assisted tools built for modern infrastructure teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Automation | Engineering Smarter IT Operations",
    description:
      "Practical AI-assisted tools built for modern infrastructure teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="ba-skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
