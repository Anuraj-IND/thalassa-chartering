# INCWORX — Landing Page

A premium corporate landing page for **INCWORX**, a global shipping, trading &
mobility company. Built with **Next.js 14 (App Router)**, **TypeScript**, and
**styled-components**. Blue/navy leads the visual system; orange is a strategic accent.

## Quick preview (no install needed)

Open **`preview.html`** directly in any browser. It's a self-contained static mirror of
the page (same palette, type, layout, hero video, and real photos) so you can see the
result immediately without installing anything.

## Run the Next.js app

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Brand & design tokens

| Token | Value | Role |
|-------|-------|------|
| Deep Navy | `#062C3B` | primary dark background & headings |
| Navy Deep | `#041E28` | footer / cinematic overlays |
| Ocean Blue | `#0B5266` | secondary surfaces |
| Blue | `#126B82` | borders, subtle fills |
| Bright Orange | `#F47A32` | CTAs, numbers, highlights, hovers |
| Light Orange | `#FF9A5B` | hover / gradient tip |
| Off White | `#F5F7F6` | light page background |
| Dark text | `#10242C` | body text on light |

Fonts (via `next/font/google`): **Sora** (display), **Inter** (body),
**IBM Plex Mono** (labels, eyebrows, stats).

## Structure

```
src/
  app/
    layout.tsx        # fonts, styled-components registry, providers, SEO metadata
    page.tsx          # composes every section in order
  lib/
    theme.ts          # INCWORX design tokens (typed)
    global-style.ts   # reset + smooth scroll + reduced-motion
    registry.tsx      # styled-components SSR registry (App Router)
    providers.tsx     # ThemeProvider + GlobalStyle
    styled.d.ts       # typed DefaultTheme
  data/
    siteData.ts       # ALL placeholder copy & data, separated from the UI
  components/
    ui.tsx            # Container, Section, Eyebrow, SectionHead, Button, Reveal
    icons.tsx         # inline SVG icon set + icon maps
    Navbar.tsx  Hero.tsx  AboutSection.tsx
    ServicesSection.tsx  ServiceCard.tsx  WhyIncworx.tsx  StatsSection.tsx
    GlobalPresence.tsx  ProjectsSection.tsx  ProjectCard.tsx
    LeadershipSection.tsx  LeaderCard.tsx  ClientsPartners.tsx
    Certifications.tsx  Sustainability.tsx  Insights.tsx
    CTASection.tsx  ContactSection.tsx  Footer.tsx
public/
  assets/             # cargo-ship.webm/.mp4/.gif + poster (hero background)
  images/             # section photography (extracted & optimized)
```

## Editing content

All copy and data live in **`src/data/siteData.ts`** — replace placeholders there
(services, projects, stats, leadership, contact, etc.) without touching any component.

**Placeholders are intentional.** Stats show `XX+`, leadership shows `[Name]/[Designation]`,
clients/partners and certifications use neutral labels, and no addresses or figures are
fabricated. Swap them only when verified INCWORX data is available.

## Hero background

The hero uses a `<video>` (`public/assets/cargo-ship.webm` + `.mp4`, with
`cargo-ship-poster.jpg` as the poster) for a cinematic, performant loop. A
`cargo-ship.gif` is also included in `public/assets/` if you prefer a GIF; swap the
`<Bg>` element in `src/components/Hero.tsx` to use it.

## Animations

Smooth scrolling, fade-up section reveals (IntersectionObserver in `ui.tsx`'s `Reveal`),
navbar transition on scroll, service/insight card hover + image zoom, project image zoom,
and subtle pulsing map markers. All motion respects `prefers-reduced-motion`.

## Note on tooling

This project was assembled in a sandbox without package-registry access, so
`npm install` / `next build` could not be run here. Imports, exports, and structure were
verified statically (29 files, all resolving cleanly). Run `npm install && npm run dev`
locally to serve it. The prompt referenced a NestJS backend — this deliverable is the
frontend landing page; the contact form is wired to a demo handler and can be pointed at
an API/backend later.
