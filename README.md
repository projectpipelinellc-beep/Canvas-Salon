# Canvas Salon Studio — Website Redesign Concept

> **This is a private redesign concept**, built to demonstrate a potential
> new website for Canvas Salon Studio (271 U.S. Route 6, Mahopac, NY 10541).
> It is **not** the salon's official, published website. The live page
> carries a visible "Website Redesign Concept" banner and a `noindex` meta
> tag so it is never mistaken for the real site or indexed by search
> engines while it remains a concept.

A fast, static, single-page site built with **Vite + React + TypeScript**.
Elevated boutique-salon aesthetic — warm ivory and soft white, charcoal
text, muted taupe/beige, restrained dusty-rose accents, an editorial serif
for headings and a clean sans-serif for body copy.

---

## 1. Quick start

Requirements: Node.js 20+ and npm.

```bash
npm install       # install dependencies
npm run dev       # start the local dev server (with hot reload)
```

The dev server prints a local URL (typically `http://localhost:5173`).

---

## 2. Editing content — one centralized file

**Almost everything editable about the business lives in a single file:**

```
src/data/siteData.ts
```

This includes the address, phone number, hours, booking URL, service
category descriptions, the artist roster, gallery captions, review
excerpts, amenities, navigation links, and social-link placeholders. Each
section of that file has a comment explaining what it controls and, where
relevant, what still needs owner approval.

You will rarely need to touch a component file just to update content —
edit `siteData.ts` and the whole site updates.

### Editing hours

Update the `hours` array in `siteData.ts`. Each entry has a `day`,
`dayIndex` (0 = Sunday … 6 = Saturday, used to highlight "today"),
`hours` string, and `closed` flag.

### Editing services

Update the `serviceCategories` array. Keep descriptions general — see
the developer note in the file about not adding specific treatments or
prices without owner-approved copy.

### Editing reviews

Update the `reviews` array and `reviewSummary` (rating/count). Only add
reviews the owner has explicitly supplied and approved — see the
developer note in the file.

### Editing the artist roster

Update the `artists` array. Each artist has a `name`, `specialty`, `bio`,
and a `portrait` image path. The current entries are placeholders — see
the "Confirm before launch" list below.

---

## 3. Replacing images

All imagery lives under `public/assets/` and is currently populated with
generated placeholder graphics (clearly labeled "placeholder" and using
the salon's own color palette) so the layout can be reviewed before real
photography is available.

```
public/assets/hero/    → hero banner + about-section interior photo
public/assets/gallery/ → 8 portfolio images (Our Work section)
public/assets/team/    → 4 artist portraits
```

**To swap in a real photo:** replace the file at the same path and
filename (e.g. drop a new `hero-main.jpg` in place of
`hero-main.svg`), or add a new file and update the corresponding `src`
path in `src/data/siteData.ts` (for gallery and artist images) or in
`src/components/Hero.tsx` / `src/components/Intro.tsx` (for the two hero
images, which aren't in the data file since there's only one of each).

Recommended formats: `.jpg` or `.webp`, optimized/compressed before
adding — this keeps the site fast. Suggested minimum sizes: hero ≈
1920×1280px, gallery ≈ 900×900px, portraits ≈ 700×800px.

---

## 4. Production build

```bash
npm run build     # type-checks with tsc, then builds an optimized bundle to dist/
npm run preview   # serve the production build locally to spot-check it
```

`npm run build` has already been run against this project with **zero
TypeScript errors and zero lint warnings**; re-run it after any content
or code change to confirm the build still passes before deploying.

Lint (oxlint) can be run on its own with:

```bash
npm run lint
```

---

## 5. Deploying

This is a fully static site — the `dist/` folder produced by
`npm run build` can be hosted anywhere that serves static files:
Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3 + CloudFront, or a
traditional web host. There is no server-side code or database.

General steps for any static host:

1. Run `npm run build`.
2. Upload/deploy the contents of `dist/`.
3. Point the domain at the host.

**Before deploying this as the salon's real site**, remove the two
concept-only safeguards:

- Delete/replace `<ConceptBanner />` in `src/App.tsx`.
- Remove `<meta name="robots" content="noindex, nofollow" />` from
  `index.html` (and update the Open Graph/canonical URLs to the real
  production domain).

---

## 6. Project structure

```
index.html                  SEO meta, Open Graph, structured data, fonts
src/
  data/siteData.ts          ← centralized, editable business content
  hooks/
    useReveal.ts             scroll-triggered fade-in (respects reduced motion)
    useCurrentDayIndex.ts    powers the "today" highlight in the hours table
  components/
    ConceptBanner.*          top disclosure banner
    Header.*                 sticky header + mobile nav
    Hero.*                   full-width editorial hero
    Intro.*                  "Beauty, Artistry and Confidence"
    Services.*               Hair / Makeup / Waxing / Brows categories
    Artists.*                artist placeholder cards
    Gallery.*                8-image portfolio grid
    Reviews.*                guest review excerpts
    Experience.*             parking/WiFi/accessibility feature blocks
    Visit.*                  address, hours table, directions
    FinalCta.*                closing call to action
    Footer.*                  footer nav + placeholders
    MobileActionBar.*         fixed mobile Call / Book Now bar
  App.tsx                    assembles the page
public/assets/               replaceable images (see §3)
```

Each component pairs a `.tsx` file with its own `.css` file — no CSS
framework or component library is used, keeping the dependency footprint
to just React and Vite's build tooling.

---

## 7. Information the salon owner must confirm before launch

This concept uses only information explicitly supplied for it. The
following must be reviewed and confirmed by the Canvas Salon Studio
owner before any version of this site is published:

- [ ] Business address, phone number and current business hours
- [ ] Exact service list, descriptions, durations and pricing (only
      general category descriptions are included here — see `services`
      section notes in `siteData.ts`)
- [ ] Staff/artist roster — names, specialties, bios and headshots (all
      four artist cards are currently placeholders; a prior public review
      mentions stylists by name, but this concept does not assume any of
      them are still on staff)
- [ ] Portfolio/gallery photography (all 8 gallery images are placeholders)
- [ ] Review excerpts and attributions (reproduced verbatim from what was
      supplied — confirm accuracy and permission to publish)
- [ ] Amenity and accessibility claims (parking, WiFi, snack bar, kid
      friendliness, and the accessibility phrasing itself)
- [ ] Booking URL (`https://www.vagaro.com/canvassalonstudio`) and
      current-site URL, to confirm both are still correct
- [ ] Social media links and a public contact email (none were supplied,
      so none are linked — see `social` in `siteData.ts`)
- [ ] Privacy Policy content (footer currently shows a "coming soon"
      placeholder)

---

## 8. Functional notes

- Every "Book Now" / "Book Your Appointment" / "View & Book" / "Book
  With This Artist" button links to
  `https://www.vagaro.com/canvassalonstudio` in a new tab.
- Every phone number is a live `tel:8456280188` link.
- The "Get Directions" button links to a Google Maps directions URL
  generated from the supplied address — no paid Maps API is used.
- In-page navigation uses plain anchor links (`#services`, `#visit`,
  etc.) with smooth scrolling; it degrades to an instant jump if the
  visitor's OS/browser requests reduced motion.
- The mobile hamburger menu locks background scrolling while open,
  closes on Escape, on an outside click, or on selecting a link, and
  returns focus to the toggle button on close.
- The hours table renders as plain, complete HTML — the "today" highlight
  is a JavaScript-only enhancement layered on top, not a requirement for
  reading the schedule.
- All scroll-in animations respect `prefers-reduced-motion` and include a
  safety timeout so content is never left invisible if a browser doesn't
  support `IntersectionObserver`.
