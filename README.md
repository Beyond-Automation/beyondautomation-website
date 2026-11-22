# Beyond Automation Website

The public website for Beyond Automation — an infrastructure engineering, open-source software, and technical education organization. *Engineering Smarter IT Operations.*

## Projects

- **OffboardPilot** — open-source (MIT) hybrid AD + Microsoft 365 offboarding automation
- **AIHAT** — free, signed Windows infrastructure health audit tool (private source)
- **PatchPilot** — Windows patch-health assessment (in development)
- **NetFixLab** — diagnosis-first network troubleshooting
- **Engineering Journal** — technical articles and lab demonstrations (see `docs/PUBLISHING.md`)

Each project's availability and license is verified against its repository before it is described on the site. Released open-source projects link to their GitHub repositories; projects with private source say so.

## Technology

- Next.js
- TypeScript
- React
- Tailwind CSS
- Netlify deployment and form handling
- GitHub Actions CI and security analysis

## Local development

```powershell
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validation

Before merging website changes, run the same core checks used by CI:

```powershell
npm run lint
npm run build
```

Repository automation also validates the site through GitHub Actions and security analysis on pull requests.

## Engineering standard

Changes should be intentional, validated, and aligned with the current Beyond Automation product strategy. Public-facing messaging must not expose private repository destinations or proprietary implementation details, and must not describe a project as open source unless its repository is public and licensed.

## Repository status

This repository contains the Beyond Automation website implementation and is maintained as private source.

Copyright © 2026 Beyond Automation. All rights reserved.
