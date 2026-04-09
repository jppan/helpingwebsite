# Architecture Notes

## Core Rule

Content stays separate from layout logic.

- `content/**` contains guide data, category data, Rico profile data, emergency items, and common fixes.
- `data/**` contains curation and navigation decisions.
- `src/app/**` contains routes.
- `src/components/**` contains reusable UI and section composition.
- `src/lib/content/**` resolves and transforms content into route-friendly collections.

## Collaborator-Safe Zones

Safest files for collaborator edits:

- `content/guides/**`
- `content/emergency.ts`
- `content/common-fixes.ts`
- `content/profile.ts`
- `data/featured-guides.ts`

Higher-risk owner-controlled files:

- `src/app/**`
- `src/components/ui/**`
- `src/components/layout/**`
- `src/lib/**`
- config files
- workflow files

## Pages Deployment Assumptions

This project is intentionally static-export friendly.

- No server-only APIs are required for the main site.
- Dynamic guide pages are generated at build time.
- `SITE_BASE_PATH` is used for repo-subpath deployment on GitHub Pages.
- Placeholder images are local render rules, not remote image dependencies.
