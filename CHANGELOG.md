## BA-WEB — OffboardPilot launch and open-source direction (2026-11-21)

### Added
- Engineering Journal article: /journal/automate-employee-offboarding, with privacy-friendly YouTube embed
- Homepage "Latest Engineering Demonstration" section
- Journal content registry (src/content/journal.ts) and ArticleLayout publishing pattern (docs/PUBLISHING.md)
- OffboardPilot product page: demo, status, documentation and contribution links, SoftwareSourceCode JSON-LD
- GitHub and YouTube links in header and footer; first-party analytics events
- TechArticle and BreadcrumbList structured data

### Changed
- Homepage, navigation, footer, about, projects, and journal messaging aligned with open-source infrastructure engineering
- Per-page canonical URLs (previously every page inherited the homepage canonical)
- CSP allows youtube-nocookie.com frames and i.ytimg.com images
- Sitemap generated from the journal registry; removed /tools (no page)



## BA-WEB-012 — Launch Polish

### Added
- Branded SVG application icon
- Web manifest
- robots.txt generation
- sitemap.xml generation
- Open Graph social image
- Custom branded 404 page
- Skip-to-content accessibility link
- Global keyboard focus styling
- Expanded metadata and social sharing fields
