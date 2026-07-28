# Beyond Automation Website Security Baseline

## Repository controls

- Organization two-factor authentication required
- Secret scanning enabled
- Push protection enabled
- Dependabot alerts and security updates enabled
- Main branch protected by repository rules
- Pull requests required for changes to `main`
- Force pushes and branch deletion blocked
- Code owners assigned
- CI build and production dependency audit required
- CodeQL enabled

## Application controls

- Content Security Policy
- HSTS
- Clickjacking protection
- MIME sniffing protection
- Referrer policy
- Permissions policy
- Production browser source maps disabled
- Next.js powered-by header disabled

## Accepted upstream risk

The optional `sharp` dependency may remain visible as an upstream Dependabot alert until Next.js adopts a patched release. The site does not process user-uploaded images. Review this exception whenever Next.js is upgraded.
