import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import LaunchNewsletter from "@/components/LaunchNewsletter";
import Navbar from "@/components/Navbar";
import OutboundLink from "@/components/analytics/OutboundLink";
import TrackView from "@/components/analytics/TrackView";
import {
  articlePath,
  getArticle,
  getRelatedArticles,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
  type JournalArticle,
} from "@/content/journal";
import { absoluteUrl, externalLinks, publisherSchema, siteName } from "@/lib/site";

/** Page metadata for a journal article, generated from the registry entry. */
export function buildArticleMetadata(slug: string): Metadata {
  const article = getArticle(slug);
  const path = articlePath(slug);
  const title = article.seoTitle ?? article.title;
  const images = article.image
    ? [{ url: article.image.url, alt: article.image.alt, width: article.image.width, height: article.image.height }]
    : undefined;

  return {
    title,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      siteName,
      title,
      description: article.description,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified ?? article.datePublished,
      authors: [article.author],
      section: article.category,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: article.image ? [article.image.url] : undefined,
    },
  };
}

function buildStructuredData(article: JournalArticle) {
  const url = absoluteUrl(articlePath(article.slug));
  const video = article.video;

  // VideoObject is only emitted with verified uploadDate + duration (Google requires uploadDate).
  const videoObject =
    video?.uploadDate && video.duration
      ? {
          "@type": "VideoObject",
          name: video.title,
          description: video.description,
          thumbnailUrl: [youtubeThumbnail(video.youtubeId, "maxresdefault"), youtubeThumbnail(video.youtubeId, "hqdefault")],
          uploadDate: video.uploadDate,
          duration: video.duration,
          embedUrl: youtubeEmbedUrl(video.youtubeId),
          contentUrl: youtubeWatchUrl(video.youtubeId),
          publisher: publisherSchema,
        }
      : undefined;

  const isPerson = article.author !== siteName;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: article.title,
        description: article.description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        ...(article.image ? { image: [article.image.url] } : {}),
        ...(article.datePublished ? { datePublished: article.datePublished } : {}),
        ...(article.datePublished ? { dateModified: article.dateModified ?? article.datePublished } : {}),
        author: isPerson
          ? { "@type": "Person", name: article.author, url: absoluteUrl("/#about") }
          : publisherSchema,
        publisher: publisherSchema,
        articleSection: article.category,
        ...(article.keywords ? { keywords: article.keywords.join(", ") } : {}),
        ...(videoObject ? { video: videoObject } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Engineering Journal", item: absoluteUrl("/journal") },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

export default function ArticleLayout({ slug, children }: { slug: string; children: ReactNode }) {
  const article = getArticle(slug);
  const related = getRelatedArticles(slug);
  const structuredData = buildStructuredData(article);

  return (
    <main id="main-content" className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <TrackView event="article_view" params={{ slug: article.slug, category: article.category }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <article className="ba-article-page">
        <div className="ba-container">
          <nav aria-label="Breadcrumb" className="ba-breadcrumb">
            <a href="/journal" className="ba-text-link">← Engineering Journal</a>
          </nav>

          <header className="ba-article-header">
            <p className="ba-launch-eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="ba-article-meta">
              <span>By {article.author}</span>
              <span aria-hidden="true"> · </span>
              {article.datePublished ? (
                <time dateTime={article.datePublished}>{article.dateLabel}</time>
              ) : (
                <span>{article.dateLabel}</span>
              )}
            </p>
          </header>

          <div className="ba-article-body ba-article-prose">{children}</div>

          {article.relatedProject && (
            <aside className="ba-article-project" aria-label="Related project">
              <div>
                <p className="ba-launch-eyebrow">Related project</p>
                <h2>{article.relatedProject.name}</h2>
              </div>
              <div className="ba-article-project-actions">
                <a href={article.relatedProject.href} className="ba-button ba-button-secondary">
                  Project overview
                </a>
                {article.relatedProject.repository && (
                  <OutboundLink
                    href={article.relatedProject.repository}
                    destination="github"
                    placement="article_project_card"
                    className="ba-button ba-button-primary"
                  >
                    View source on GitHub ↗
                  </OutboundLink>
                )}
                {article.video && (
                  <OutboundLink
                    href={externalLinks.youtube}
                    destination="youtube"
                    placement="article_project_card"
                    className="ba-button ba-button-secondary"
                  >
                    Subscribe on YouTube ↗
                  </OutboundLink>
                )}
              </div>
            </aside>
          )}

          {related.length > 0 && (
            <section className="ba-article-related" aria-labelledby="related-heading">
              <h2 id="related-heading">More from the Engineering Journal</h2>
              <div className="ba-journal-grid">
                {related.map((entry) => (
                  <article key={entry.slug} className="ba-journal-card">
                    <span>{entry.category}</span>
                    <h3>{entry.title}</h3>
                    <p>{entry.excerpt}</p>
                    <a href={articlePath(entry.slug)}>Read article →</a>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <LaunchNewsletter
        source={`journal-${article.slug}`}
        heading="Get the next demonstration first."
      />
      <Footer />
    </main>
  );
}
