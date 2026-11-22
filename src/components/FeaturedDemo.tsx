import { articlePath, getFeaturedArticle, youtubeThumbnail } from "@/content/journal";

/**
 * Homepage "Latest Engineering Demonstration".
 * Driven by the journal entry marked `featured: true` that has a video, so a
 * new episode only needs a registry change. The primary CTA keeps visitors on
 * the site by linking to the article, where the video is embedded.
 */
export default function FeaturedDemo() {
  const article = getFeaturedArticle();
  if (!article?.video) return null;

  const href = articlePath(article.slug);

  return (
    <section id="latest-demo" className="ba-featured-demo scroll-mt-24" aria-labelledby="latest-demo-heading">
      <div className="ba-container">
        <div className="ba-featured-demo-card">
          <a href={href} className="ba-featured-demo-media" aria-label={`Read the article and watch the demo: ${article.title}`}>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export; remote YouTube thumbnail */}
            <img
              src={youtubeThumbnail(article.video.youtubeId, "hqdefault")}
              alt={article.image?.alt ?? article.title}
              loading="lazy"
              decoding="async"
              width={480}
              height={360}
            />
            <span className="ba-video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </a>

          <div className="ba-featured-demo-copy">
            <p className="ba-launch-eyebrow">Latest Engineering Demonstration</p>
            <h2 id="latest-demo-heading">{article.feature?.heading ?? article.title}</h2>
            <p>{article.feature?.copy ?? article.excerpt}</p>
            <div className="ba-featured-demo-meta">
              {(article.feature?.tags ?? [article.category]).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="ba-featured-demo-actions">
              <a href={href} className="ba-button ba-button-primary">
                Read the Article &amp; Watch the Demo <span className="ml-2">→</span>
              </a>
              {article.relatedProject && (
                <a href={article.relatedProject.href} className="ba-button ba-button-secondary">
                  About {article.relatedProject.name}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
