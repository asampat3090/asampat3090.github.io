# Anand Sampat Website

Minimal Next.js portfolio with three core sections: Music, About, and Writing.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Routes

- `/` — redirects to `/music`
- `/music` — concise music overview with CTA to pianomixtape.com
- `/about` — background and current focus
- `/writing` — Quartz archive index sourced from quartz branch posts
- `/writing/[slug]` — locally rendered writing pages transformed into the site style
- `/blog` — redirects to `/writing` for backward compatibility

## Background audio

The site includes a soft looping background track with a small bottom-right
play/pause control. The current source URL lives in:

- `src/components/background-audio.tsx`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Quality checks

```bash
npm run lint
npm run build
```
