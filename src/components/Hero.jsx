import { useEffect, useState } from 'react'
import { Arrow, Sparkle, Check } from './Icons'
import { useWaitlist } from '../context/WaitlistProvider'

export default function Hero() {
  const openWaitlist = useWaitlist()
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-faint opacity-60" />
        <div className="absolute -top-44 right-[-8%] h-[36rem] w-[36rem] rounded-full bg-brand-200/40 blur-3xl animate-blob" />
        <div className="absolute top-28 left-[-12%] h-[28rem] w-[28rem] rounded-full bg-gold-300/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div
          className="absolute inset-x-0 top-0 h-[60%]"
          style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(236,10,115,0.05), transparent 70%)' }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="reveal in-view inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-700 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 animate-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Now onboarding the first cohort · Rotman MBA
          </div>

          <h1 className="mt-6 font-serif text-[2.7rem] font-semibold leading-[1.04] tracking-tight text-neutral-950 text-balance sm:text-[4.1rem]">
            Meet the people you{' '}
            <span className="text-gradient">should have already met.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 text-pretty">
            Every professional cohort holds hidden opportunities, untapped expertise, and future
            collaborators. Reciring helps you discover them — through reciprocity, not cold outreach.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={openWaitlist}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              Join the First Adopter Community
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-7 max-w-md text-sm leading-relaxed text-neutral-500">
            The most valuable person in your cohort may still be invisible. Reciring makes the match
            — not the status — come first.
          </p>
        </div>

        <div className="relative">
          <MatchFlow />
        </div>
      </div>
    </section>
  )
}

/* ---- Animated product explainer: Need + Offer → AI Match → Mutual Interest → Reveal ---- */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function MatchFlow() {
  // Reduced-motion users see the completed state immediately, no looping.
  const [stage, setStage] = useState(() => (prefersReducedMotion() ? 3 : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setTimeout(() => setStage((s) => (s >= 4 ? 0 : s + 1)), stage === 4 ? 1600 : 1150)
    return () => clearTimeout(t)
  }, [stage])

  const show = (n) => stage >= n

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-5 -z-10 rounded-[2.2rem] bg-gradient-to-br from-brand-200/40 via-transparent to-gold-300/30 blur-2xl" />
      <div className="rounded-[1.9rem] border border-neutral-200 bg-white/90 p-5 shadow-2xl shadow-neutral-900/10 backdrop-blur animate-float sm:p-6">
        {/* The two sides */}
        <div className="grid grid-cols-2 gap-3">
          <SideCard
            kind="need"
            label="You need"
            text="A technical co-founder for an AI startup"
          />
          <SideCard
            kind="offer"
            label="You offer"
            text="VC fundraising guidance & warm intros"
          />
        </div>

        {/* Step 1: AI Match */}
        <FlowStep active={show(1)} done={show(2)} accent="brand" icon={<Sparkle className="h-4 w-4" />}>
          <span className="font-semibold">AI finds a reciprocal match</span>
          {show(1) && !show(2) && (
            <span className="ml-2 inline-block h-3.5 w-3.5 animate-spin-slow rounded-full border-2 border-brand-300 border-t-brand-600 align-middle" />
          )}
        </FlowStep>

        {/* Step 2: Mutual interest */}
        <FlowStep active={show(2)} done={show(3)} accent="gold" icon={<Check className="h-4 w-4" />}>
          <span className="font-semibold">Mutual interest</span>
          <span className="text-neutral-500"> — both sides opt in</span>
        </FlowStep>

        {/* Step 3: Reveal */}
        <div
          className={`mt-3 overflow-hidden rounded-2xl border transition-all duration-500 ${
            show(3)
              ? 'max-h-44 border-brand-200 bg-gradient-to-br from-brand-50 to-white opacity-100'
              : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <div className="flex items-center gap-3 p-4">
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-base font-bold text-white">
                MR
              </span>
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-500 shadow">
                <Check className="h-3.5 w-3.5" />
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-[0.62rem] font-bold uppercase tracking-widest text-brand-500">
                Identity revealed
              </p>
              <p className="text-[0.98rem] font-semibold text-neutral-950">Maya R.</p>
              <p className="text-xs text-neutral-500">ex-Stripe PM · building in AI infra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SideCard({ kind, label, text }) {
  const isNeed = kind === 'need'
  return (
    <div
      className={`rounded-2xl border p-4 ${
        isNeed ? 'border-brand-200 bg-brand-50/60' : 'border-gold-300/60 bg-gold-300/10'
      }`}
    >
      <p
        className={`text-[0.6rem] font-bold uppercase tracking-widest ${
          isNeed ? 'text-brand-500' : 'text-gold-600'
        }`}
      >
        {label}
      </p>
      <p className="mt-1.5 text-sm font-medium leading-snug text-neutral-800">{text}</p>
    </div>
  )
}

function FlowStep({ active, done, accent, icon, children }) {
  const ring = accent === 'gold' ? 'text-gold-600 bg-gold-300/15 ring-gold-300/40' : 'text-brand-600 bg-brand-50 ring-brand-100'
  return (
    <div
      className={`mt-3 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm ring-1 transition-all duration-500 ${
        active ? `opacity-100 ${ring}` : 'opacity-30 bg-neutral-50 text-neutral-400 ring-neutral-100'
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
          active ? (accent === 'gold' ? 'bg-gold-400 text-white' : 'bg-brand-500 text-white') : 'bg-neutral-200 text-neutral-400'
        }`}
      >
        {done ? <Check className="h-4 w-4" /> : icon}
      </span>
      <span className="text-neutral-700">{children}</span>
    </div>
  )
}
