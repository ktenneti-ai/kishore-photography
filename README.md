# Kishore Photography

A cinematic, editorial photography portfolio site — React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to http://localhost:5173).

## Build

```bash
npm run build   # type-checks and builds to dist/
npm run preview # preview the production build locally
```

## Replacing sample photography

All sample images, copy, nav links, services, and testimonials live in a single file:
`src/data/site.ts`. Swap the `unsplashId` values for your own photo URLs (or import local
files) to replace every image on the site — no component changes required.
