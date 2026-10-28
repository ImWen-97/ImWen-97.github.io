# Jingwen Zheng · ArchEcho

Personal academic homepage and research notebook for [ImWen-97](https://github.com/ImWen-97), built with Astro. Based on the MIT-licensed [Astro Academia](https://github.com/maiobarbero/astro_academia) starter.

## Run locally

Node.js 24 is recommended (or use the Node.js version in the project's .nvmrc).

```bash
npm ci
npm run dev
```

Open http://localhost:4321.

## Update content

| Content | File |
| --- | --- |
| Name, links, research interests, SEO | `src/settings.ts` |
| Research projects | `src/data/projects.ts` |
| Public publications and CV data | `src/data/cv.ts` |
| Research notes | `src/content/BlogPosts/*.md` |
| Homepage | `src/pages/index.astro` |
| Global styles | `src/styles/global.css` |

To add a note, create a Markdown file under `src/content/BlogPosts/` with:

```yaml
---
title: "Paper Reading: Example"
date: "2026-10-28"
tags: ["Paper Reading", "PIM"]
excerpt: "One-sentence description."
---
```

Content after the frontmatter is ordinary Markdown. Posts automatically appear in the Notes archive and search index.

No unverified affiliations, contact addresses, or accepted publications are included. ReCAF is labeled only as submitted research. Before public release, review the wording in `src/data/projects.ts` for any double-blind submission or disclosure constraints.

## Validate

```bash
npm test
npm run lint
npm run check
npm run build
```

## Deploy on GitHub Pages

1. Use a public repository named `ImWen-97.github.io` and keep the source on the `main` branch.
2. In GitHub repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` automatically builds and deploys every push to `main`.
4. The site URL is https://imwen-97.github.io/.

This is a user site, so `template.base` stays empty. For a project subpath site, update the value and verify internal links.

## License

This customization retains the original upstream license in `LICENSE`; check that license when reusing code.
