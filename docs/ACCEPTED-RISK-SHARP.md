# Accepted Security Risk: sharp / libvips

## Advisory
GHSA-f88m-g3jw-g9cj

## Status
Temporary upstream dependency exception.

## Reason
Next.js currently installs a vulnerable optional version of sharp. This website does not accept user-uploaded or other untrusted image input.

## Mitigation
- Do not add user-controlled image processing.
- Continue Dependabot monitoring.
- Do not use npm audit fix --force.
- Upgrade Next.js when it supports a patched sharp release.
- Re-run build, CI, CodeQL, and Netlify validation after upgrading.

## Review
Review whenever Next.js or sharp is updated.
