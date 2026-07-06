import Reveal from './Reveal'
import { Sparkle, Users, Calendar, Send, Trend, Check, Handshake } from './Icons'

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
    sample: '“You may like Founders & Funders Night — it matches your interest in entrepreneurship and alumni networking.”',
  },
  {
    icon: Trend,
    title: 'AI network insights',
    body: 'Lightweight signals about where your network is strong — and where to grow it.',
    sample: '“Your network is concentrated in MBA students. Consider connecting with more alumni operators.”',
  },
]

export default function AIVision() {
  return (
    <section id="ai" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 grid-faint opacity-[0.06]" />
        <div className="absolute right-[-10%] top-0 h-[34rem] w-[34rem] rounded-full bg-brand-700/25 blur-3xl" />
        <div className="absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            <Sparkle className="h-4 w-4" /> The AI vision
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

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Daily digest mockup */}
          <Reveal>
            <DigestCard />
          </Reveal>

          {/* Capability cards */}
          <div className="grid gap-4">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-white/20">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
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
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-brand-500/10 to-transparent p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">
              In the future, every professional will have an AI agent managing their network — the
              way they have email and a calendar today. Mutu is building that agent.
            </p>
            <span className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/60">
              Product vision
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

/* ---- "Today's digest" mock: 3 people to meet · 2 events · 1 conversation prompt ---- */
function DigestCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-gold-400/10 blur-2xl" />
      <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/40 backdrop-blur">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-widest text-brand-300">
              Your Mutu digest
            </p>
            <p className="text-sm font-semibold text-white">This week · 3 people · 2 events · 1 prompt</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
            <Sparkle className="h-4.5 w-4.5" />
          </span>
        </div>

        <div className="space-y-5 p-6">
          {/* People */}
          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-widest text-white/40">
              <Users className="h-3.5 w-3.5" /> People to meet
            </p>
            <div className="mt-3 space-y-2.5">
              {[
                { i: 'SC', n: 'Sarah Chen', w: 'Startup hiring · you offer China market insight', fit: 94 },
                { i: 'ML', n: 'Marcus Lee', w: 'Raising a pre-seed · you can open VC doors', fit: 91 },
                { i: 'DK', n: 'Dana Kim', w: 'Case-prep partner · you both target MBB', fit: 88 },
              ].map((p) => (
                <div key={p.i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white">
                    {p.i}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{p.n}</p>
                    <p className="truncate text-xs text-white/50">{p.w}</p>
                  </div>
                  <span className="shrink-0 text-xs font-bold text-brand-300">{p.fit}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-widest text-white/40">
              <Calendar className="h-3.5 w-3.5" /> Events for you
            </p>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {[
                { t: 'Founders & Funders Night', d: 'Thu · matches entrepreneurship' },
                { t: 'Alumni in VC — AMA', d: 'Mon · matches your goals' },
              ].map((e) => (
                <div key={e.t} className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                  <p className="text-sm font-semibold text-white">{e.t}</p>
                  <p className="mt-0.5 text-xs text-white/50">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conversation prompt */}
          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-widest text-white/40">
              <Handshake className="h-3.5 w-3.5" /> Conversation prompt
            </p>
            <div className="mt-3 flex items-start gap-3 rounded-xl border border-brand-400/20 bg-brand-500/10 px-3.5 py-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
              <p className="text-sm leading-relaxed text-white/85">
                Ask Sarah how she approached her first startup hire — it&apos;s exactly the gap you
                mentioned in your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
