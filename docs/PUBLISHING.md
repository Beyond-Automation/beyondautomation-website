# Publishing an Engineering Journal article or demonstration

Every article is driven by one entry in `src/content/journal.ts`. The journal
index, homepage journal preview, homepage "Latest Engineering Demonstration",
sitemap, page metadata (title, description, canonical, Open Graph, Twitter),
and structured data (TechArticle, BreadcrumbList, optional VideoObject) are all
generated from that entry.

## Steps

1. **Add the registry entry** at the top of `journalArticles` in
   `src/content/journal.ts` (newest first). Required: `slug`, `title`,
   `description` (meta description), `excerpt`, `category`, `author`,
   `dateLabel`. Recommended: `seoTitle`, `datePublished` (`YYYY-MM-DD`),
   `image`, `keywords`, `relatedProject`.
2. **Video episodes:** add `video: { youtubeId, title, description }`.
   - Add `uploadDate` (ISO 8601) and `duration` (e.g. `PT5M7S`) **only** with
     values confirmed in YouTube Studio. VideoObject structured data is emitted
     only when both are present.
   - To feature it on the homepage, set `featured: true` and `feature`
     (heading, copy, tags), and remove `featured` from the previous episode.
3. **Create the page** at `src/app/journal/<slug>/page.tsx`. Copy
   `automate-employee-offboarding/page.tsx`: export
   `metadata = buildArticleMetadata(SLUG)` and wrap the body in
   `<ArticleLayout slug={SLUG}>`. Use `<h2 id="...">` for sections, and
   `<YouTubeEmbed videoId=... title=... placement="article_demo" />` for the
   video. The layout adds the header, related-project card, related articles,
   and the BA Dispatch signup automatically.
4. **Validate:** `npm run lint` and `npm run build`, then check
   `out/journal/<slug>.html` for the canonical URL and JSON-LD and
   `out/sitemap.xml` for the new URL.

## Content and security rules

- Do not publish credentials, tokens, tenant IDs, admin accounts, real employee
  data, or employer infrastructure details in text, code samples, screenshots,
  or thumbnails. Sanitize at the source before recording demos.
- Describe only behavior verified in the released code. Link to the source.
- State license and release status only after checking the repository.

## Campaign links

Append UTM parameters to the final article URL:

```
?utm_source=linkedin&utm_medium=organic_social&utm_campaign=<campaign>&utm_content=founder_post
?utm_source=linkedin&utm_medium=organic_social&utm_campaign=<campaign>&utm_content=company_post
?utm_source=youtube&utm_medium=video&utm_campaign=<campaign>&utm_content=description
```

## Analytics events

`src/lib/analytics.ts` emits `article_view`, `product_view`, `video_play`,
`outbound_click`, and `newsletter_signup` to `window.dataLayer` (when a tag
manager is installed) and as `ba:<event>` browser events. No analytics vendor
is loaded by the site today.
