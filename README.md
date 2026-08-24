# Beyond Automation Website

The public website for Beyond Automation — a product and engineering brand focused on practical IT operations, PowerShell automation, infrastructure health, patch readiness, and network troubleshooting.

## Product portfolio

- **AIHAT** — released Windows infrastructure health audit product
- **PatchPilot** — release-candidate patch-health assessment product
- **NetFixLab** — launching diagnosis-first network troubleshooting product
- **Engineering Resources** — practical operational guidance and demonstrations

The website follows a **public proof / private engineering core** model. Product value, demonstrations, release status, and selected engineering lessons are public while proprietary source code, architecture, and internal release tooling remain private.

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

Changes should be intentional, validated, and aligned with the current Beyond Automation product strategy. Public-facing messaging must not expose private repository destinations, proprietary implementation details, or obsolete open-source positioning.

## Repository status

This repository contains the Beyond Automation website implementation and is maintained as private source.

Copyright © 2026 Beyond Automation. All rights reserved.
