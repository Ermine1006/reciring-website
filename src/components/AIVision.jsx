import Reveal from './Reveal'
import { LogoMark } from './Logo'
import {
  Sparkle, Users, Calendar, Send, Trend, Handshake,
  Bell, Plus, Home, Compass, Chat,
} from './Icons'

const CAPABILITIES = [
  {
    icon: Send,
    title: 'AI conversation starters',
    body: 'A ready-to-send opener for every match — personalized to your shared goals.',
    sample:
      '“Hi Sarah, I saw you’re exploring VC and startup investing. I’m building in this space too and would love to exchange notes.”',
  },
  {
    icon: Calendar,
    title: 'AI event recommendations',
    body: 'Events picked for you, with the reason they’re worth your time.',
    sample: '“You may like the AI in Healthcare Panel — it matches your interest in healthcare and AI.”',
  },
  {
    icon: Trend,
    title: 'AI network insights',
    body: 'Lightweight signals about where your network is strong — and where to grow it.',
    sample: '“You’re strong in finance and startups. You may benefit from meeting more EMBA operators.”',
  },
]

export default function AIVision() {
  return (
    <section id="ai" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 grid-faint opacity-[0.06]" />
        <div className="absolute right-[-10%] top-0 h-[34rem] w-[34rem] rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
            <Sparkle className="h-4 w-4" /> AI-powered network intelligence
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-[2.7rem]">
            An AI relationship layer for your community.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Today&apos;s platforms help you <em className="not-italic text-white/90">find</em> connections.
            Mutu helps you build and activate them. It learns your goals, your relationships, and
            your context — then proactively brings the right people, events, and conversations to you.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* AI Picks product panel */}
          <Reveal>
            <PicksPanel />
          </Reveal>

          {/* Capability cards */}
          <div className="grid gap-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  </div>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">{c.body}</p>
                  <p className="mt-3 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm leading-relaxed text-white/80">
                    {c.sample}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Long-term vision strip */}
        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-brand-500/12 to-transparent p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">
              In the future, every professional will have an AI agent managing their network — the
              way they have email and a calendar today. Mutu is building that agent.
            </p>
            <span className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/60">
              Our vision
            </span>
          </div>
        </Reveal>

        <p className="mt-6 text-xs italic text-white/40">
          AI features shown are an early preview of the Mutu product experience.
        </p>
      </div>
    </section>
  )
}

/* ---- "AI Picks for You" mock product panel, styled after the app ---- */
const NAV = [
  { icon: Home, label: 'Home', active: true },
  { icon: Compass, label: 'Discover' },
  { icon: Plus, label: 'Post' },
  { icon: Calendar, label: 'Events' },
  { icon: Chat, label: 'Messages' },
]

function PicksPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/20 via-transparent to-gold-400/10 blur-2xl" />
      <div className="overflow-hidden rounded-[1.6rem] border border-neutral-200 bg-white text-ink-900 shadow-2xl shadow-black/40">
        {/* App header */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <LogoMark className="h-6 w-9" />
          <div className="flex items-center gap-3 text-neutral-400">
            <Bell className="h-5 w-5" />
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-500 text-xs font-bold text-ink-900">
              You
            </span>
          </div>
        </div>

        <div className="space-y-5 p-5">
          {/* AI Picks */}
          <div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm font-bold text-ink-900">
                <Sparkle className="h-4 w-4 text-brand-500" /> AI picks for you
              </p>
              <span className="text-xs font-semibold text-brand-600">View all</span>
            </div>

            <div className="mt-3 space-y-2.5">
              {/* Person */}
              <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-paper/60 p-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-300 to-brand-500 text-sm font-bold text-ink-900">
                  SL
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.7rem] font-bold uppercase tracking-widest text-neutral-400">People</p>
                    <Users className="h-4 w-4 text-brand-500" />
                  </div>
                  <p className="text-sm font-semibold text-ink-900">Sarah Lin</p>
                  <p className="text-xs text-neutral-500">VC Investor at Sequoia</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                    You both like Venture Capital and Startups.
                  </p>
                </div>
              </div>

              {/* Event */}
              <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-paper/60 p-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-brand-300">
                  <Calendar className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-neutral-400">Event</p>
                  <p className="text-sm font-semibold text-ink-900">AI in Healthcare Panel</p>
                  <p className="text-xs text-neutral-500">June 20 · 6:30 PM</p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                    Based on your interest in Healthcare &amp; AI.
                  </p>
                </div>
              </div>

              {/* Conversation starter */}
              <div className="flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50 p-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-400 text-ink-900">
                  <Handshake className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-brand-600">
                    Conversation starter
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-800">
                    “Hi Sarah, I saw that you’re exploring VC and startup investing. I’m also building
                    in this space and would love to exchange notes.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Network insight */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-ink-900">Your network insight</p>
              <span className="text-xs font-semibold text-brand-600">View all</span>
            </div>
            <div className="mt-3 flex items-center gap-4 rounded-2xl border border-neutral-200 bg-paper/60 p-4">
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-relaxed text-ink-800">
                  You are strong in <span className="font-semibold text-brand-700">Finance and Startups.</span>
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  You may benefit from meeting more EMBA operators.
                </p>
              </div>
              <Donut />
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="grid grid-cols-5 border-t border-neutral-100 bg-white px-2 py-2.5">
          {NAV.map((n) => (
            <div
              key={n.label}
              className={`flex flex-col items-center gap-1 text-[0.62rem] font-medium ${
                n.active ? 'text-brand-600' : 'text-neutral-400'
              }`}
            >
              <n.icon className="h-4.5 w-4.5" />
              {n.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Donut() {
  const r = 15
  const c = 2 * Math.PI * r
  return (
    <svg width="46" height="46" viewBox="0 0 40 40" className="shrink-0 -rotate-90" aria-hidden="true">
      <circle cx="20" cy="20" r={r} fill="none" stroke="var(--color-brand-100)" strokeWidth="6" />
      <circle
        cx="20"
        cy="20"
        r={r}
        fill="none"
        stroke="var(--color-brand-400)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`${c * 0.68} ${c}`}
      />
    </svg>
  )
}
