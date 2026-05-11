# Rumah Baru — SEO Hub 3 (newhome / VP-handover gazette)

A standalone editorial site for first-time homeowners in Malaysia. Catches buyers in the **Vacant Possession → first 90 days** window — before they shop for renovation, before they hire a contractor, before they make the expensive mistakes.

This is the third hub in the Boxup studio's anti-PBN SEO infrastructure. It does not link to or reference Hub 1 (renoklangvalley.my) or Hub 2 (kosrenovate.my). The single outbound follow-link in this hub points to BINA+ (binaplus.my), and only from three specific surfaces: the homepage P.S., the about page, and the appendix of two fit-out cluster articles.

## Niche & angle

- **Persona**: Ammar Tan — ex-property valuer (PJ), now editor of a paper-style "gazette" for first-time owners
- **Voice**: editorial, dry, archival. Numbered paragraphs (CSS counter), drop cap on opener, mono `<dl>` masthead per article
- **Locale mix**: ~50/50 BM and EN articles. Hreflang set ms-MY default + en-MY alternates
- **Content scope**: VP handover, loan/financing, fit-out planning, moving day logistics, legal (SPA, MOT/DOA)

Distinct from the other hubs:

| Hub | Niche | Voice | Persona |
|---|---|---|---|
| H1 RenoKlangValley | KV magazine, design-driven renovation | Editorial KV magazine | Aisyah |
| H2 KosRenovate | Industrial price catalog | Tradesman-direct | Hafiz |
| H3 Rumah Baru | First-home gazette, VP & handover | Archival / valuer | Ammar Tan |

## Anti-PBN architecture

Three rules enforced structurally:

1. **Maximum 1 follow link to BINA+ per page.** Articles get the link only when `includeFitoutNote: true` in frontmatter (currently 2 of 14 articles). The component `BinaDossierNote.astro` is the single source of follow-links across the article surface. Header/footer/nav contain ZERO BINA references.
2. **All other external links are auto-nofollowed** by `rehype-external-links` plugin (configured in `astro.config.mjs`). Including any inline mention of binaplus.my in body markdown.
3. **Anchor pool is rotated.** Each surface uses a different anchor type — naked URL on About, partial-match phrase on Homepage, varying partials on the fit-out articles based on slug hash. No branded-anchor over-optimization.

## Content inventory (23 pages)

- 1 homepage
- 1 about
- 1 contact
- 1 404
- 5 category indexes (`vp-handover`, `loan`, `fit-out`, `pindah`, `legal`)
- 14 substantive articles (2,000-3,500 words each, with FAQs and JSON-LD)
- sitemap-index.xml + RSS feed

## Tech stack

- **Astro 6.3** (static SSG) + **Tailwind 4.2** (via `@tailwindcss/vite`)
- **Vite ^7.3.3** (pinned — vite 8 breaks Tailwind 4 plugin)
- **MDX** content layer + **content collections** (Zod-validated frontmatter)
- **@astrojs/sitemap** with i18n config (ms-MY default, en-MY alternate)
- **@astrojs/rss** for the feed
- **rehype-external-links** for global nofollow noopener

## Local development

```powershell
cd site
npm install
npm run dev    # http://localhost:4321
npm run build  # outputs dist/ (23 pages, ~3.5s)
npm run preview
```

## Deployment

Same pattern as Hub 1 and Hub 2:

1. Push `site/` to GitHub
2. Connect repo to Cloudflare Pages or Netlify
3. Build command: `npm run build`
4. Build output: `dist`
5. Domain: `rumahbaru.my` (placeholder — update `astro.config.mjs` `site` field if final domain differs)

Set environment variables in the host:

- None required. Plausible analytics src is hardcoded in `BaseLayout.astro` and can be removed if not desired.

## Editorial guidelines (for future content adds)

When adding new articles to this hub:

- **Title ≤ 75 characters**, **description ≤ 170 characters** (Zod-enforced; build will fail otherwise)
- Choose `category` from: `vp-handover` | `loan` | `fit-out` | `pindah` | `legal`
- Default `includeFitoutNote: false`. Only set to `true` if the article is editorially in the fit-out / contractor-decision space — not as a way to add more BINA links.
- Write in BM or EN per `locale` field; mixing within an article is fine if natural.
- Each article should have ≥ 3 FAQs in frontmatter (renders FaqList + FAQ schema).

## What this hub does NOT do

- Does not link to renoklangvalley.my or kosrenovate.my (each hub stays isolated)
- Does not republish content from H1 or H2 (no syntactic similarity)
- Does not use the same color palette, font stack, or class names as H1/H2
- Does not run automated content. All articles are manually drafted and editorially reviewed.

## File structure

```
site/
  src/
    components/      Header, Footer, Crumbs, FaqList, JsonLd, BinaDossierNote
    content/
      articles/      14 .md files across 5 category folders
    layouts/         BaseLayout, ArticleLayout
    lib/             site.ts (SITE + FITOUT_REF), schema.ts (JSON-LD builders)
    pages/           index, about, contact, 404, [category]/[slug], 5 category indexes, rss.xml
    styles/          global.css (theme tokens, dossier styles, drop cap, ornament)
  public/            robots.txt, favicon.svg
  astro.config.mjs   site, integrations, rehype config
  package.json
README.md            (this file)
```

## License

Editorial content © 2026 Rumah Baru. Code structure adapted from internal templates.
