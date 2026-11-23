# Yussa — portfolio

My personal portfolio site. Built with **React**, **Vite** and **Tailwind CSS v4**, with
[Motion](https://motion.dev) for animation and [Lenis](https://lenis.darkroom.engineering) for smooth scrolling.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint      # oxlint
npm run build     # production build into dist/
npm run preview   # serve the build locally
```

## Editing content

All the copy (intro, projects, experience, education, socials) lives in [`src/data.js`](src/data.js).
Change it there and every section updates.

- **Project screenshots:** `public/images/work-<id>.webp` (1440px wide) plus a `-sm` version (720px).
- **Portrait:** `public/images/yusuf-portrait.webp` and `yusuf-portrait-sm.webp`.
- **CV:** replace `public/Yusuf_Abdulazeez_CV.pdf` with the latest version (keep the filename).
- **Link preview image:** `public/og-image.jpg` (1200 × 630).

## Structure

```
src/
  App.jsx              page layout, preloader, smooth scroll
  data.js              all site content
  lib/scroll.js        Lenis setup and scroll helpers
  components/
    Preloader.jsx      0 → 100 intro counter
    Nav.jsx            header, mobile menu, Lagos clock
    Hero.jsx           name, portrait, intro
    Marquee.jsx        scrolling skills strip
    About.jsx          story and animated stats
    Work.jsx           stacked project cards and earlier work
    Services.jsx       what I do
    Experience.jsx     roles accordion, education, CV download
    Contact.jsx        contact and footer
    Reveal.jsx         scroll-reveal helpers
    Cursor.jsx         custom cursor (mouse only)
```

## Deploy

Push to GitHub and import the repo in Vercel. The defaults work: build command `npm run build`,
output directory `dist`.
