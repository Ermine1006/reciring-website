# Reciring — Official Website

The marketing / investor landing page for **Reciring**, a reciprocity-gated professional
network for high-density cohorts. _Where value exchange becomes real connection._

Built with **React 19 + Vite + Tailwind CSS v4**. Designed to be shown to investors, advisors,
Rotman classmates, and institutional buyers — and to deploy on Vercel with zero config.

> This is the website project only. It is independent of the Reciring product app.

## Develop

```bash
npm install
npm run dev      # local dev server with HMR
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Waitlist (Supabase)

The primary CTA — **"Join the First Adopter Community"** — opens a modal that collects
name, email, school, program, optional LinkedIn, and a multi-select "what are you looking
for most?" The site is in waitlist stage: there is no "try live demo" CTA; the secondary
action ("See How It Works") smooth-scrolls to the interactive match demo.

Submissions are written to a Supabase `waitlist` table. **Setup:**

1. Create a project at [supabase.com](https://supabase.com).
2. Run [`supabase/schema.sql`](supabase/schema.sql) in the SQL editor — it creates the
   table, a unique-email index, and a Row Level Security policy that lets the public anon
   key **insert** rows but never read them.
3. Copy `.env.example` → `.env` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
   (Project Settings → API). On Vercel, add the same two as Environment Variables.

The Supabase SDK is code-split (loaded only on first submit), so it doesn't weigh down the
landing page. Until env vars are set, signups are still captured to `localStorage`
(`reciring_waitlist`) and a console warning explains how to enable persistence — so nothing
breaks in local dev and no early signup is silently lost.

## Experience (information architecture)

Designed as a product walkthrough, not a deck. Each section is a moment:

1. **Hero** — emotional hook + an animated Need → AI Match → Mutual Interest → Reveal sequence
2. **Invisible Network** — scroll-triggered graph: isolated peers connect into a reciprocal network
3. **Match Demo** — interactive: type/tap a need, a reciprocal match surfaces live (no sign-up)
4. **Reveal Experience** — looping Anonymous → Mutual Interest → Identity Revealed animation
5. **Feature Stories** — Traditional networking vs Reciring, side-by-side flows
6. **Social Proof** — "Built inside the community it serves," real cohort quotes + credibility
7. **For Institutions** — compact B2B2C / market / GTM band
8. **Team** — concise positioning, founders + advisors
9. **Final CTA** — "Help us build a world where nobody grows alone."

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
    Navbar, Hero, InvisibleNetwork, MatchDemo, RevealExperience,
    FeatureStories, SocialProof, ForInstitutions, Team, FinalCTA, Footer
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
