# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

```bash
npx serve -p 3333 .
```

Opens the site at `http://localhost:3333`. No build step or package manager — the project is a zero-dependency static site.

## Architecture

Single-page marketing website in Czech targeting schools/educators. Three files carry all the content and behavior:

- **`index.html`** — All content (1,200+ lines). Each section has a unique `id` used for anchor navigation. Sections appear in order: hero → features → reviews strip → school leadership → TCO analysis → Windows-to-Mac transition → compatibility → Mac Průvodce → repairability → ecosystem → Mac comparison table → teacher references → final CTA.
- **`css/style.css`** — Minified. All design tokens live in `:root` CSS custom properties. Mobile-first with breakpoints at 768px, 1024px, and 1200px. The `.reveal` / `.reveal--visible` class pair drives scroll-triggered fade-ins.
- **`js/main.js`** — Minified (~1.3 KB). Four responsibilities: sticky header (`site-header--scrolled` class), hamburger menu (`nav--open` class + `aria-expanded`), smooth anchor scroll, and the Intersection Observer for `.reveal` elements.

## Design System

All values are set as CSS custom properties. Key tokens:

| Token | Value | Usage |
|---|---|---|
| `--accent-citrus` | `#ccff00` | Primary brand/CTA highlight |
| `--font-heading` | DM Serif Display | All `h1`–`h3` |
| `--font-body` | DM Sans | Body text |
| `--bg-dark` | `#111111` | Dark sections |
| `--bg-light` | `#f8f8f8` | Light sections |

Sections alternate between `.section--dark` and `.section--light` / `.section--light-alt`. Buttons use `.btn`, `.btn--primary`, `.btn--ghost`, and `.btn--dark` variants.

## Content & Language Rules

- All visible text is Czech — preserve háčky and čárky carefully.
- **Never use em-dash (—)** anywhere in the content; use a comma, colon, or rewrite.
- Images must have Czech `alt` text.
- Hero image must **not** have `loading="lazy"` (all other images should).

## Key External Links

- **Primary CTA** (konfigurátor): `konfigurator-pi.vercel.app`
- **Teacher survey results**: `anketa-vysledky.vercel.app`
- **TCO calculator**: `tco-kalkulacka.vercel.app`
- **Mac guide for teachers**: `macpruvodce.cz`
- **Shop**: `obchod.24u.cz/pro-skoly`

## Analytics

- **Google Tag Manager** (`GTM-T5KMZK7N`) fires unconditionally in `<head>` and `<body>`.
- **PostHog** (`phc_RbHhnxuybJ4wzfj54sYxNWphCqdf9ly1N32c5yXzh1d`) is initialized only after cookie consent is given (do not load it unconditionally).
