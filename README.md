# Compassline Technology — Website

Marketing website for Compassline Technology, built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com), designed for static deployment on Cloudflare Pages.

## Project structure

```
compassline/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro         # <head>, SEO tags, JSON-LD, header/footer wrapper
│   │   └── ServicePageLayout.astro  # Shared hero + related-services + CTA wrapper for the 5 service pages
│   ├── components/
│   │   ├── nav/                     # Header (incl. mobile menu), Footer
│   │   ├── sections/                # Hero, TrustStatement, ServiceCardGrid, WhyCompassline,
│   │   │                            # ProcessSteps, FeatureList, RelatedServices, FinalCTA, Breadcrumbs
│   │   ├── seo/                     # SEOHead (meta/OG/Twitter tags), JsonLd (Organization/Service/Breadcrumb schema)
│   │   └── forms/ContactForm.astro  # The one client-side-interactive component
│   ├── content/
│   │   └── resources/               # Content collection for /resources articles (empty by default — see its README.md)
│   ├── pages/                       # One .astro file per route (see Sitemap below)
│   ├── site.config.ts               # Company name, tagline, contact email, nav — single source of truth
│   └── styles/global.css            # Design tokens (color/type/spacing) and shared utility classes
├── functions/api/contact.js         # Cloudflare Pages Function stub for the contact form (see below)
├── public/                          # favicon, OG image, robots.txt, sitemap.xml
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

This starts a local dev server (default `http://localhost:4321`) with hot reload.

## Production build

```bash
npm run build
```

Outputs a fully static site to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare will rebuild automatically on every push to the connected branch.
5. Add a custom domain under **Custom domains** once the first deploy succeeds.

No server or database is required — this is a static site, plus one optional
Cloudflare Pages Function for the contact form (see below).

## Environment variables

None are required for the site to build and deploy. If you wire up the contact
form to an email provider (see below), add that provider's API key under
**Pages project → Settings → Environment variables** in the Cloudflare
dashboard. Never commit API keys or secrets to this repository.

## The contact form

`src/components/forms/ContactForm.astro` posts to `/api/contact`, handled by
`functions/api/contact.js` (a Cloudflare Pages Function). As shipped, that
function validates the submission and returns success, but does **not** send
an email anywhere yet — no email provider is configured. To make it
functional:

1. Pick a transactional email provider (Resend, Postmark, SendGrid, etc.).
2. Add your API key as a Cloudflare Pages environment variable.
3. Uncomment and adapt the example `fetch()` call in `functions/api/contact.js`.

Each service page's call-to-action links to `/contact?service=<slug>`, which
pre-selects the matching option in the "Service Interested In" dropdown.

## How to edit content

- **Company name, tagline, contact email, nav items:** edit `src/site.config.ts`. This is read by the header, footer, and contact form, so changes propagate everywhere.
- **Homepage copy:** edit `src/pages/index.astro` directly — headings, the services array, and CTA text all live inline.
- **A service page's copy:** each service page (`src/pages/website-design.astro`, `google-workspace.astro`, `business-email.astro`, `website-management.astro`, `technology-services.astro`) is a self-contained `.astro` file. Hero text, the feature list, and related-service links are all defined as props/arrays near the top of the file.
- **About / Contact page copy:** edit `src/pages/about.astro` / `src/pages/contact.astro` directly.

## How to add a new service page

1. Copy an existing service page (e.g. `website-management.astro`) as a starting point.
2. Update the `ServicePageLayout` props (`title`, `description`, `path`, `pageLabel`, `heroHeading`, `serviceType`, `related`, etc.).
3. Replace the `FeatureList` items and any custom sections with real content.
4. Add the new route to `src/site.config.ts` (`primaryNav` and/or `footerServiceLinks`) and to `public/sitemap.xml`.
5. Add a cross-link to it from any genuinely related existing service pages (see the `related` prop on those pages).

## How to add a resource article

See `src/content/resources/README.md`. In short: drop a Markdown file with the
required frontmatter into `src/content/resources/`, and it's automatically
picked up by `/resources` and rendered at `/resources/<slug>`. The section
intentionally ships empty — do not add filler articles just to populate it.

## Local SEO expansion

The sitemap and navigation are deliberately built as flat, per-service pages
rather than nesting everything under a single "services" route, which leaves
room to add `/locations/[city]/[service]` pages later without restructuring
the site. No location pages exist yet — see the project brief for guidance on
when it's appropriate to add them (only with genuinely unique content per
market, not templated duplicates).

## Design notes

- **Palette, type, and the route-line motif** are defined as CSS custom
  properties / Tailwind theme values in `tailwind.config.mjs` and
  `src/styles/global.css` — change them there rather than overriding classes
  page-by-page.
- **Icons** are hand-set inline SVG (in `ServiceCardGrid.astro` and inline
  elsewhere) rather than an icon library dependency, to keep the JS/asset
  footprint minimal.
- **Animation** is a single progressive-enhancement pattern: elements with the
  `.reveal` class fade/slide in once via `IntersectionObserver`, and the
  effect is fully disabled under `prefers-reduced-motion: reduce`.
- **Fonts** (Fraunces, IBM Plex Sans, IBM Plex Mono) load from Google Fonts
  with `preconnect` + `display=swap` in `BaseLayout.astro`.

## Accessibility & performance checklist

- Skip-to-content link, visible focus rings, semantic landmarks (`header`,
  `nav`, `main`, `footer`) throughout.
- All animation respects `prefers-reduced-motion`.
- No client-side JS framework — the only interactive components are the
  mobile menu toggle, the contact form, and the scroll-reveal observer.
- Images should be added via Astro's `<Image />` component (not plain
  `<img>`) whenever real photography is introduced, for automatic
  resizing/lazy-loading — none is included yet since none was provided in
  the brief.
