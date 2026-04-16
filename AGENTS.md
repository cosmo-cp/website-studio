# Repository Guidelines

## Project Structure & Module Organization
This repository is a Docusaurus 3 site for the Cosmo Studio marketing site, docs, and blog. Keep product content in `docs/` and `blog/`, static assets in `static/img/`, and site configuration in `docusaurus.config.ts` and `sidebars.ts`. Application code lives in `src/`: homepage sections are in `src/components/`, shared UI primitives are in `src/components/ui/`, helper functions are in `src/lib/`, constants are in `src/constants/`, and page entry points are in `src/pages/`.

## Build, Test, and Development Commands
- `npm install`: install dependencies; Node `>=20` is required.
- `npm start`: run the local Docusaurus dev server on `http://localhost:3000`.
- `npm run build`: create the production static site in `build/`.
- `npm run serve`: preview the built output locally.
- `npm run typecheck`: run TypeScript checks across the site.
- `npm run format` / `npm run format:check`: apply or verify Prettier formatting.
- `npm run clear`: clear cached Docusaurus artifacts if routes or theme changes behave unexpectedly.

## Coding Style & Naming Conventions
Write TypeScript/TSX with Prettier as the source of truth; use spaces, not tabs, and run `npm run format` before opening a PR. Follow the existing naming pattern: React components use PascalCase exports in kebab-case files such as `hero-section.tsx`, utilities stay lowercase in `src/lib/`, and docs/blog slugs should stay readable and descriptive. Keep imports explicit, prefer small focused components, and let `prettier-plugin-tailwindcss` sort Tailwind classes.

## Testing Guidelines
There is no dedicated unit or E2E test suite configured yet. Treat `npm run typecheck`, `npm run build`, and a manual smoke test in `npm start` as the minimum validation for every change. If you add tests later, place them next to the code they cover with `*.test.ts` or `*.test.tsx` naming.

## Commit & Pull Request Guidelines
Recent history favors short, imperative subjects, sometimes scoped, for example `docs: expand home page overview` or `blog: openai api key`. Keep commits focused and reference the PR or issue when relevant. PRs should include a concise summary, linked issue, screenshots for UI or content layout changes, and confirmation that formatting, type-checking, and production build checks passed. Reviews are owned by the maintainers listed in `.github/CODEOWNERS`.

## Content & Release Notes
Blog posts use the existing date-prefixed pattern such as `blog/2026-04-02-release-v1-1-2.md`. When shipping a release, update versioned links and metadata in `docusaurus.config.ts`, then keep `docs/release-notes.md` and any matching blog announcement in sync.
