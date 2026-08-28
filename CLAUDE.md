# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

```bash
npx serve -p 3333 .
```

Opens the site at `http://localhost:3333`. No build step or package manager — the project is a zero-dependency static site.

## Architecture

Single-page marketing website in Czech targeting schools/educators. Three files carry all the content and behavior:

- **`index.html`** — All content (1,200+ lines). Each section has a unique `id` used for anchor navigation. Sections appear in order: hero → proof band (project stats + 3 quotes + data provenance) → leadership branch (light, 8 objection/answer "lék" rows) → teacher branch (dark, 10 "lék" rows + free-loan CTA) → Neo vs Air M5 comparison → final CTA. Each "lék" row = quoted objection (serif italic) + answer + proof (named teacher quote or stat). All quotes are verbatim questionnaire answers used with named consent.
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
- **TCO calculator**: `tco-kalkulacka.vercel.app`
- **Mac guide for teachers**: `macpruvodce.cz`
- **Shop**: `obchod.24u.cz/pro-skoly`

## Analytics

- **Google Tag Manager** (`GTM-T5KMZK7N`) loads only after cookie consent (the consent script at the bottom of `index.html` gates it).
- PostHog was removed in August 2026 (unused). Do not re-add it.
- `.vercelignore` keeps CLAUDE.md, the old brief and `.claude/` out of the deployed site — keep it that way.
