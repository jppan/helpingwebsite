# Contributing

## Branches

- Branch from `dev`
- Use `feature/<topic>` or `contrib/<name>/<topic>`
- Open pull requests into `dev`
- Only merge `dev` into `main` through reviewed PRs
- Keep content edits separate from app-shell or config edits

## Safe Edit Areas

Preferred collaborator edit zones:

- `content/**`
- `data/featured-guides.ts`
- `docs/CONTENT_EDITOR_GUIDE.md`

Do not edit these without owner review:

- `src/app/**`
- `src/components/ui/**`
- `src/components/layout/**`
- `src/lib/**`
- `src/app/globals.css`
- `next.config.ts`
- workflow files
- `content/categories.ts`

## Writing Rules

- Use plain language
- Keep paragraphs short
- Prefer symptom-based guide titles
- Use numbered steps
- Keep warnings calm and direct
- Never remove the bright red placeholder treatment unless a real image asset is ready

## Before Opening A PR

- Run `npm run check`
- Confirm any new image field still uses the placeholder system unless a real asset exists
- Confirm links and slugs still match existing guides
- Keep route/config changes out of content-only PRs
