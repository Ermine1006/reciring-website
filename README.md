# MuTu — Official Website

The marketing / investor landing page for **MuTu**, an AI-powered trusted network platform for
professional communities. _Turn hidden networks into meaningful opportunities._

> **MuTu** comes from _mutual_ — mutual value exchange, trusted introductions, and people
> helping each other through warm networks.

Built with **React 19 + Vite + Tailwind CSS v4**. Designed to be shown to investors, advisors,
Rotman classmates, and institutional buyers — and to deploy on Vercel with zero config.

> This is the website project only. It is independent of the MuTu product app. The AI features
> shown here (connection recommendations, daily digest, conversation starters, event
> recommendations, network insights) are **mock UI** on the marketing site — the live matching
> backend lives in the separate product app.

## Develop

```bash
npm install
npm run dev      # local dev server with HMR
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Waitlist (Supabase)

The primary CTA — **"Join MuTu"** — opens a modal that collects name, email, school, program,
optional LinkedIn, and a multi-select "what are you looking for most?" The site is in waitlist
stage: the secondary action ("Explore the network") smooth-scrolls to the interactive match demo.

Submissions are written to a Supabase `waitlist` table. **Setup:**

1. Create a project at [supabase.com](https://supabase.com).
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor — it creates the
   table, a unique-email index, and a Row Level Security policy that lets the public anon
   key **insert** rows but never read them.
3. Copy `.env.example` → `.env` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
   (Project Settings → API). On Vercel, add the same two as Environment Variables.

The Supabase SDK is code-split (loaded only on first submit), so it doesn't weigh down the
landing page. Until env vars are set, signups are still captured to `localStorage`
(`mutu_waitlist`) and a console warning explains how to enable persistence — so nothing
breaks in local dev and no early signup is silently lost.

## Experience (information architecture)

Designed as a product walkthrough, not a deck. Each section is a moment:

1. **Hero** — positioning hook + a live AI recommendation card that morphs through suggestions
2. **Problem** — scroll-triggered graph: valuable people already in your community, but hidden
3. **How it works** — profile → offer + need → AI recommendations → meet through posts & events
4. **Solution demo** — interactive: type/tap a need, MuTu surfaces a relevant match live
5. **AI Vision** — the future AI network intelligence layer: digest, intros, insights (mock UI)
6. **Trust & control** — you choose real-name or anonymous; verified, community-based trust
7. **Community** — "Built inside the community it serves," real cohort quotes + credibility
8. **For Institutions** — compact B2B2C / market / GTM band
9. **Team** — concise positioning, founders + advisors
10. **Final CTA** — "Start discovering your hidden network."

## Structure

```
.env.example           # Supabase keys template
supabase/schema.sql    # waitlist table + RLS policy
src/
  App.jsx              # composes all sections, wrapped in WaitlistProvider
  index.css            # Tailwind v4 import + brand tokens + keyframes/animations
  hooks/useInView.js   # IntersectionObserver hook driving scroll animations
  lib/supabase.js      # lazy Supabase client + submitWaitlist()
  context/WaitlistProvider.jsx  # openWaitlist() context + mounts the modal
  components/
    Navbar, Hero, InvisibleNetwork, HowItWorks, MatchDemo, AIVision,
    RevealExperience, SocialProof, ForInstitutions, Team, FinalCTA, Footer
    WaitlistModal.jsx  # the signup form (name/email/school/program/linkedin/interests)
    Reveal.jsx         # scroll-in wrapper (respects reduced-motion)
    Icons.jsx, Logo.jsx
```

All motion respects `prefers-reduced-motion`: looping/scroll animations resolve to their
completed state instead of animating.

## Brand

- **Background:** white, bold near-black typography (Inter + Fraunces serif display)
- **Primary accent:** vivid magenta/pink (`brand-500` = `#ec0a73`)
- **Secondary accent:** warm gold (`gold-400` = `#d8ad4e`)
- **Deep navy** for high-contrast dark sections (`ink-900`)

Tokens live in [`src/index.css`](src/index.css) under `@theme`.

## Deploy on Vercel

Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
[`vercel.json`](vercel.json) adds SPA rewrites so deep links resolve to the app.
