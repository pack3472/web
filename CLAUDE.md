# Pack 3472 Website

BSA Cub Scout Pack 3472 website built with SvelteKit and Statue SSG.

## Pull Request Workflow

**All work must result in a pull request.** Do not push directly to `main`.

1. Create a feature branch: `git checkout -b feature/description`
2. Make changes and commit
3. Push branch: `git push -u origin feature/description`
4. Create PR: `gh pr create --title "..." --body "..."`
5. Wait for review and CI checks
6. Merge via GitHub (squash preferred)

## Project Structure

```
pack3472_web/
├── content/              # Markdown content files (not used for routing)
├── src/
│   ├── lib/
│   │   ├── components/   # Svelte components
│   │   ├── themes/       # CSS theme files
│   │   │   └── pack3472.css  # BSA color theme
│   │   └── index.css     # Main stylesheet (imports theme)
│   └── routes/           # SvelteKit routes (file-based routing)
│       ├── +layout.svelte    # Root layout
│       ├── +page.svelte      # Home page
│       ├── about/
│       ├── contact/
│       ├── faq/
│       └── pinewood-derby-info/
├── static/               # Static assets (images, favicon)
├── site.config.js        # Site metadata, navigation, SEO
├── svelte.config.js      # SvelteKit configuration
└── .github/workflows/    # GitHub Actions for deployment
```

## Tech Stack

- **Framework**: SvelteKit with static adapter
- **SSG**: Statue SSG (https://statue.dev/)
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages via GitHub Actions

## Color Theme (BSA Cub Scout)

| Variable | Color | Usage |
|----------|-------|-------|
| `--color-primary` | #003F87 | Navy blue - headers, accents |
| `--color-secondary` | #FFC72C | Gold/yellow - buttons, highlights |
| `--color-background` | #ffffff | Page background |
| `--color-foreground` | #1e293b | Body text |

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:5173)
npm run build        # Build static site to /build
npm run preview      # Preview built site
```

## Adding Pages

1. Create route folder in `src/routes/<page-name>/`
2. Add `+page.server.js` with `export const prerender = true;`
3. Add `+page.svelte` with page content
4. Update `svelte.config.js` prerender entries if needed
5. Update `site.config.js` navigation if page should appear in nav

## Statue Components

Import from `statue-ssg`:
- `Hero` - Landing page hero section
- `PageHero` - Interior page headers
- `Footer` - Site footer
- `NavigationBar` - Top navigation

## Beads Prefix

This rig uses prefix `pw-` for issue tracking.
