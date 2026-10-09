# Birthday 23.0

A minimal, tech-inspired interactive birthday card built with Next.js, TypeScript, Tailwind-style CSS, Framer Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize

Edit `app/page.tsx`:
- `[HIS NAME]`
- `[YOUR NAME]`
- `[BIRTHDAY DATE]`
- the paragraph inside `.personal-message`
- release notes in `releaseNotes`

Replace:
- `public/photos/photo-1.svg`
- `public/photos/photo-2.svg`
- `public/photos/photo-3.svg`

with your own JPG/PNG photos and update the three `src` values in `PLACEHOLDER_PHOTOS`.

## Deploy

Push this folder to GitHub and import the repository into Vercel. No environment variables or backend are required.
