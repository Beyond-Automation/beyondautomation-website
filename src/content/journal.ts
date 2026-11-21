/**
 * Engineering Journal registry.
 *
 * Every article is listed here once. The journal index, homepage preview,
 * sitemap, article metadata, structured data, and related-article links are
 * all generated from this list.
 *
 * Publishing a new article / demonstration (see docs/PUBLISHING.md):
 *   1. Add an entry below (newest first).
 *   2. Create src/app/journal/<slug>/page.tsx using <ArticleLayout> and
 *      buildArticleMetadata(<slug>) — copy automate-employee-offboarding.
 *   3. Only fill `video.uploadDate` / `video.duration` with values confirmed in
 *      YouTube Studio. VideoObject structured data is emitted only when both
 *      are present.
 */

export type JournalVideo = {
  /** YouTube video ID (the part after youtu.be/). */
  youtubeId: string;
  title: string;
  description: string;
  /** ISO 8601 date/time the video was published. Verified values only. */
  uploadDate?: string;
  /** ISO 8601 duration, e.g. "PT5M7S". Verified values only. */
  duration?: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  /** <title> override; falls back to `title`. */
  seoTitle?: string;
  description: string;
  excerpt: string;
  category: string;
  author: string;
  /** ISO 8601 date (YYYY-MM-DD) when known. */
  datePublished?: string;
  dateModified?: string;
  /** Human-readable date shown on the page. */
  dateLabel: string;
  image?: { url: string; alt: string; width?: number; height?: number };
  video?: JournalVideo;
  relatedProject?: { name: string; href: string; repository?: string };
  keywords?: string[];
  /** Feature on the homepage "Latest Engineering Demonstration" section. */
  featured?: boolean;
  /** Homepage feature copy (falls back to title / excerpt). */
  feature?: { heading: string; copy: string; tags?: string[] };
};

export const youtubeThumbnail = (id: string, quality: "maxresdefault" | "hqdefault" = "hqdefault") =>
  `https://i.ytimg.com/vi/${id}/${quality}.jpg`;

export const youtubeWatchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const youtubeEmbedUrl = (id: string) => `https://www.youtube-nocookie.com/embed/${id}`;

const OFFBOARDPILOT_VIDEO_ID = "mgIQthp62zA";

export const journalArticles: JournalArticle[] = [
  {
    slug: "automate-employee-offboarding",
    title: "How to Automate Employee Offboarding Across Active Directory and Microsoft 365",
    seoTitle: "Automate Employee Offboarding: Active Directory & Microsoft 365",
    description:
      "Learn how to automate employee offboarding across Active Directory and Microsoft 365 with OffboardPilot, a free, open-source PowerShell solution.",
    excerpt:
      "Disabling an AD account is only the start. A practical look at hybrid offboarding across Active Directory, Entra ID, and Exchange Online, with a full lab demonstration of OffboardPilot.",
    category: "Infrastructure Automation",
    author: "Randall Lewis",
    datePublished: "2026-11-21",
    dateLabel: "November 21, 2026",
    image: {
      url: youtubeThumbnail(OFFBOARDPILOT_VIDEO_ID),
      alt: "OffboardPilot demonstration thumbnail: automating employee offboarding across Active Directory and Microsoft 365",
      width: 480,
      height: 360,
    },
    video: {
      youtubeId: OFFBOARDPILOT_VIDEO_ID,
      title: "Automate Employee Offboarding Across Active Directory & Microsoft 365 | OffboardPilot",
      description:
        "A narrated lab demonstration of OffboardPilot running a complete hybrid offboarding workflow across Active Directory, Microsoft Entra ID, Exchange Online, and Microsoft 365, ending with the reconciliation report.",
      // uploadDate and duration intentionally unset until confirmed in YouTube Studio.
    },
    relatedProject: {
      name: "OffboardPilot",
      href: "/products/offboardpilot",
      repository: "https://github.com/Beyond-Automation/OffboardPilot",
    },
    keywords: [
      "automate employee offboarding",
      "Active Directory offboarding automation",
      "Microsoft 365 offboarding automation",
      "PowerShell employee offboarding",
      "hybrid Active Directory offboarding",
      "Microsoft Entra ID offboarding",
      "Exchange Online offboarding",
    ],
    featured: true,
    feature: {
      heading: "Automating Employee Offboarding Across Active Directory and Microsoft 365",
      copy: "See how OffboardPilot coordinates account disablement, cloud session revocation, mailbox management, licensing, and group membership cleanup through a repeatable hybrid offboarding workflow.",
      tags: ["Infrastructure Automation", "Open source · MIT", "Lab demonstration"],
    },
  },
  {
    slug: "building-aihat-v1",
    title: "How AIHAT v1.0 went from PowerShell script to released product",
    description:
      "The quality gates, release workflow, and product decisions behind AIHAT's first stable release.",
    excerpt:
      "The quality gates, release workflow, product decisions, and lessons behind the first stable release.",
    category: "Product Engineering",
    author: "Beyond Automation",
    dateLabel: "August 2026",
    relatedProject: { name: "AIHAT", href: "/aihat" },
  },
  {
    slug: "powershell-release-engineering",
    title: "Why PowerShell projects need release engineering",
    description:
      "How tests, checksums, packaging, protected branches, and automated releases change user trust in PowerShell tools.",
    excerpt:
      "How tests, checksums, packaging, protected branches, and automated releases change user trust.",
    category: "PowerShell",
    author: "Beyond Automation",
    dateLabel: "August 2026",
  },
  {
    slug: "build-once-publish-everywhere",
    title: "Build once. Publish everywhere.",
    description:
      "The operating rule that turns every Beyond Automation engineering effort into useful, shareable technical content.",
    excerpt:
      "The operating rule that turns engineering work into technical articles, demonstrations, and lasting reference material.",
    category: "Beyond Automation",
    author: "Beyond Automation",
    dateLabel: "August 2026",
  },
];

export function getArticle(slug: string): JournalArticle {
  const article = journalArticles.find((entry) => entry.slug === slug);
  if (!article) throw new Error(`Unknown journal article: ${slug}`);
  return article;
}

export function getFeaturedArticle(): JournalArticle | undefined {
  return journalArticles.find((entry) => entry.featured && entry.video);
}

export function getRelatedArticles(slug: string, limit = 3): JournalArticle[] {
  return journalArticles.filter((entry) => entry.slug !== slug).slice(0, limit);
}

export const articlePath = (slug: string) => `/journal/${slug}`;
