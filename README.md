# petebenbow.com

Source for [petebenbow.com](https://petebenbow.com), my personal site. It's a static site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), and it's deployed to GitHub Pages.

## Running locally

### Prerequisites

- **Node.js 22.12 or newer** (see `engines` in `package.json`)
- npm (comes with Node)

### Setup

```sh
npm install
```

The first install downloads a headless Chromium for Puppeteer, which the CV PDF step uses. This can take a minute.

### Commands

| Command           | What it does                                                                 |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm run dev`     | Starts the dev server with hot reload at <http://localhost:4321>             |
| `npm run build`   | Builds the production site into `docs/`, then generates the CV PDF           |
| `npm run preview` | Serves the built `docs/` folder locally so you can check the production build |
| `npm run astro …` | Runs the Astro CLI directly (for example `npm run astro check`)              |

The `/pete-benbow-cv.pdf` download link only works after `npm run build`. The PDF isn't created by the dev server.

## Architecture

### Project layout

```
.
├── astro.config.mjs          # Astro config: site URL, output dir (docs/), Tailwind, sitemap, icons
├── public/                   # Copied as-is to the site root (CNAME, favicon, robots.txt, images/)
├── scripts/
│   └── generate-cv-pdf.mjs   # Post-build step: renders /cv/ to a PDF with Puppeteer
├── src/
│   ├── content.config.ts     # Content collection definitions and schemas
│   ├── content/              # Markdown/YAML content (one file per item)
│   │   ├── projects/
│   │   ├── code/
│   │   ├── talks/
│   │   ├── teaching/
│   │   └── online.yaml
│   ├── data/
│   │   ├── cv.ts             # Structured CV data (education, experience, skills, …)
│   │   └── social.ts         # Social/profile links (home page hero, footer, CV)
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, SEO/OpenGraph meta, Nav + Footer wrapper
│   ├── components/           # Card, Glow, Nav, Footer, SectionHeading, TagChip
│   ├── pages/                # File-based routes (see below)
│   └── styles/
│       └── global.css        # Tailwind import, theme tokens (colors, fonts), base styles
└── .github/workflows/main.yml  # CI: build and deploy to GitHub Pages
```

### Pages and routing

Astro uses file-based routing. Each file in `src/pages/` becomes a URL:

| File                              | URL                 | Content source                                                         |
| --------------------------------- | ------------------- | ---------------------------------------------------------------------- |
| `pages/index.astro`               | `/`                 | All content collections plus `data/cv.ts` (skills) and `data/social.ts` |
| `pages/cv.astro`                  | `/cv/`              | `data/cv.ts`                                                           |
| `pages/projects/[slug].astro`     | `/projects/<slug>/` | `content/projects/*.md`                                                |
| `pages/code/[slug].astro`         | `/code/<slug>/`     | `content/code/*.md`                                                    |
| `pages/talks/[slug].astro`        | `/talks/<slug>/`    | `content/talks/*.md`                                                   |
| `pages/teaching/[slug].astro`     | `/teaching/<slug>/` | `content/teaching/*.md`                                                |

The home page is a single long page with anchored sections (`#about`, `#projects`, etc.). The detail pages are generated at build time by `getStaticPaths()`, one page per entry in the matching collection. The slug is the Markdown filename, so `content/projects/homelab.md` becomes `/projects/homelab/`.

### Content collections

`src/content.config.ts` defines the content collections and validates their frontmatter with Zod schemas. If a required field is missing or has the wrong type, the build fails.

| Collection | Location                  | Key frontmatter fields                                  |
| ---------- | ------------------------- | ------------------------------------------------------- |
| `projects` | `src/content/projects/`   | `title`, `summary`, `image`, `tags[]`, `order`          |
| `code`     | `src/content/code/`       | `title`, `description`, `image`, `links[]`, `order`     |
| `talks`    | `src/content/talks/`      | `title`, `event`, `location`, `date`                    |
| `teaching` | `src/content/teaching/`   | `title`, `subtitle?`, `image`, `icon`, `blurb`, `order` |
| `online`   | `src/content/online.yaml` | `id`, `title`, `image`, `url`, `blurb`                  |

The `order` field sets the sort order on the home page (lower numbers come first). Talks are sorted by `date`, newest first. `image` paths are relative to `public/`, for example `/images/projects/foo.png` refers to `public/images/projects/foo.png`.

**To add an item**, create a new `.md` file in the right folder with the required frontmatter and write the body in Markdown. For example:

```md
---
title: "My Project"
summary: "One-line description shown on the card"
image: "/images/projects/my-project.png"
tags: ["R", "Shiny"]
order: 4
---

Body content in Markdown…
```

Images inside project pages open in a lightbox ([GLightbox](https://github.com/biati-digital/glightbox)).

### CV

The CV doesn't use a content collection. It's built from the typed data in `src/data/cv.ts`, and the home page skills section reads from that file too. `cv.astro` uses Tailwind `print:` variants so the same page works both on screen (dark cards with icons) and in print (plain black text on white).

When you run `npm run build`, `scripts/generate-cv-pdf.mjs` does the following after Astro finishes:

1. It serves `docs/` on a small local HTTP server (port 4322).
2. It opens `/cv/` in headless Chromium and switches to print media.
3. It writes the page to `docs/pete-benbow-cv.pdf` (US Letter, 0.75" margins).

### Styling

- Tailwind CSS v4 is loaded through the `@tailwindcss/vite` plugin. It has no `tailwind.config.js`. The design tokens live in the `@theme` block in `src/styles/global.css`:
  - `ink-*` for the dark neutral background and text scale
  - `accent-*` (blue), `violet-*`, and `coral-*` for highlights
  - The `font-sans` (Inter) and `font-display` (Space Grotesk) font families
- `@tailwindcss/typography` (`prose` classes) styles the rendered Markdown bodies.
- The `Glow` component draws the blurred color blobs behind sections.
- Icons come from [astro-icon](https://www.astroicon.dev/) with the Iconify `lucide` and `simple-icons` sets, for example `<Icon name="lucide:code" />` or `icon: "simple-icons:github"` in frontmatter.

### SEO

- `BaseLayout.astro` sets the canonical URL, description, and OpenGraph/Twitter card meta for every page. Pages can override `title`, `description`, and `image` through props.
- `@astrojs/sitemap` generates `sitemap-index.xml` from the `site` value in `astro.config.mjs`.

## Deployment

The site is deployed by `.github/workflows/main.yml` on every push to `main`. You can also start it by hand with **workflow_dispatch**. The workflow:

1. Installs dependencies with `npm ci` on Node 22.
2. Runs `npm run build`, which builds the site and generates the CV PDF.
3. Uploads `docs/` as a Pages artifact and deploys it with `actions/deploy-pages`.

The custom domain comes from `public/CNAME`. `docs/` is gitignored because it's a build artifact, so you never need to commit it.
