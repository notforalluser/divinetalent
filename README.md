# Career Launch — React + Vite + Tailwind Template

A one-page template for career-coaching, staffing, and placement-agency
websites: hero → trust bar → stats → program pillars → services →
process → why-us → testimonials → FAQ → CTA → footer.

## Design

- **Palette**: deep ink navy (`#10203D`), warm paper (`#F4F5F1`), gold
  milestone accent (`#DE9B3F`), bridge blue (`#2954E0`) for links/CTAs,
  muted growth green (`#3E8E63`).
- **Type**: Fraunces (display/headlines), Work Sans (body), IBM Plex
  Mono (eyebrows/labels).
- **Signature element**: an ascending "growth path" SVG motif
  (`src/components/GrowthPath.jsx`) that reappears in the hero and the
  "why us" section, echoing career progress — resume → interview →
  offer → placed.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    TrustBar.jsx
    Stats.jsx
    Pillars.jsx
    Services.jsx
    Process.jsx
    WhyUs.jsx
    Testimonials.jsx
    FAQ.jsx
    CTA.jsx
    Footer.jsx
    GrowthPath.jsx   # signature reusable SVG motif
  App.jsx
  main.jsx
  index.css
tailwind.config.js   # color/font tokens
```

## Customizing

- Swap the wordmark/logo in `Navbar.jsx` and `Footer.jsx`.
- Edit copy directly inside each component — content lives in plain
  JSX/arrays at the top of each file, no CMS wiring.
- Update colors and fonts in `tailwind.config.js`.
- All copy, testimonials, and company names here are placeholders —
  swap in real content before shipping to a client.
