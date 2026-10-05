# Abdullah Rahman — Portfolio

A research-oriented personal portfolio for Abdullah Rahman, presenting machine learning publications, software projects, academic experience, leadership, and recognition.

## Stack

- Next.js 16 with the App Router and static export
- React 19 and TypeScript
- Tailwind CSS 4 foundation with a custom design system
- Motion for restrained reveal transitions
- Lucide icons
- ESLint and strict TypeScript checks

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run all release checks with:

```bash
npm run check
```

`npm run build` generates the deployable static site in `out/`.

## Project structure

```text
src/
  app/          Page shell, metadata, sitemap, robots, and global styles
  components/   Reusable page sections and UI primitives
  data/         Typed profile, publication, project, experience, award, and skill data
public/         Static identity and social-sharing assets
.github/        GitHub Pages deployment workflow
```

Update portfolio facts in `src/data/`. Publication and project records already support optional paper, DOI, code, demo, and image URLs without showing broken links.

## GitHub Pages

The `deploy-pages.yml` workflow builds the static export and publishes `out/` after pushes to `main`. To publish, enable **Settings → Pages → Source → GitHub Actions** in the repository. Availability may depend on repository visibility and the GitHub plan.

## Adding a portrait or CV

Place intentionally public assets in `public/` (for example, `public/profile.jpg` or `public/abdullah-rahman-cv.pdf`) and then connect them from the relevant component. The current version does not expose a placeholder download link or use an unverified portrait.
