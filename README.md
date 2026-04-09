# Rico Survival Manual

Dark-first documentation site for Rico, designed as a practical digital survival manual for everyday tech problems.

## Stack

- Next.js App Router
- Tailwind CSS v4
- shadcn/ui-compatible component structure
- Motion
- Lucide
- Static export for GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Static export:

```bash
npm run build
```

The exported site is written to `out/`.

## Project Structure

```text
content/                  guide and content data
data/                     navigation and curation data
docs/                     architecture and editing guidance
src/app/                  route files
src/components/           UI, layout, and reusable blocks
src/lib/content/          content loaders and collection helpers
```

## Safe Editing Zones

Collaborator-safe content areas:

- `content/guides/**`
- `content/emergency.ts`
- `content/common-fixes.ts`
- `content/profile.ts`
- `content/faq.ts`
- `content/glossary.ts`
- `data/featured-guides.ts`
- `docs/CONTENT_EDITOR_GUIDE.md`

Owner-controlled core areas:

- `src/app/**`
- `src/components/**`
- `src/lib/**`
- `src/components/ui/**`
- `src/components/layout/**`
- `data/navigation.ts`
- `content/categories.ts`
- `.github/**`
- config files

## GitHub Pages

The project is configured for static export.

- `SITE_BASE_PATH` should be set in GitHub Actions for repo-subpath deploys.
- `output: "export"` and `trailingSlash: true` are already configured.
- `next/image` optimization is disabled for GitHub Pages compatibility.
- dynamic guide routes are generated at build time
- avoid server-only features, middleware, and runtime-only route assumptions

## Placeholder Rule

All placeholder image regions are intentionally bright red until replaced.

## Branch Model

- `main` = protected production branch
- `dev` = integration branch
- `feature/*` = owner work
- `contrib/<name>/*` = collaborator work

## Workflow

1. Branch from `dev`
2. Keep content and structural changes in separate pull requests
3. Open pull requests into `dev`
4. Merge `dev` into `main` only after review and a clean static export

## Recommended GitHub Settings

Apply these in the GitHub repository settings:

- Protect `main`
- Require pull requests before merging into `main`
- Require at least 1 approval for `main`
- Require status checks on `main`
- Include the Pages deploy workflow in required checks once it has run successfully at least once
- Protect `dev` with pull requests if you want tighter collaborator control
- Restrict direct pushes to `main`
- Keep `main` as the production branch and `dev` as the integration branch

Recommended contributor flow:

- collaborator branches from `dev`
- collaborator opens PRs into `dev`
- owner reviews content and structure separately
- owner merges `dev` into `main` when production is ready

## Setup Notes

- Replace `@owner` in `.github/CODEOWNERS` with your real GitHub username
- Read `docs/ARCHITECTURE.md` before changing routes or data loading
- Read `docs/CONTENT_EDITOR_GUIDE.md` before handing content work to a collaborator
