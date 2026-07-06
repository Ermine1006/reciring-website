import { useEffect, useState } from 'react'
import { Arrow, Sparkle, Check, Handshake } from './Icons'
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
            AI-powered network intelligence · now onboarding Rotman MBA
          </div>

          <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-neutral-950 text-balance sm:text-[3.9rem]">
            Turn hidden networks into{' '}
            <span className="text-gradient">meaningful opportunities.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 text-pretty">
            Mutu is an AI-powered community platform where members discover relevant people, events,
            and conversations — based on what they can offer, what they need, and who they already
            trust.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={openWaitlist}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              Join Mutu
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-base font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
            >
              Explore the network
            </a>
          </div>

          <p className="mt-7 max-w-md text-sm leading-relaxed text-neutral-500">
            The most valuable person in your community may already be one warm introduction away.
            Mutu surfaces the match — and helps you make it.
          </p>
        </div>

        <div className="relative">
          <RecommendationPreview />
        </div>
      </div>
    </section>
  )
}

/* ---- AI-native hero visual: a "Recommended for you" card that reasons about the match ---- */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const REASONS = [
  'You both want to break into venture capital',
  'Sarah has startup hiring experience',
  'You can offer China market insights',
]

function RecommendationPreview() {
  // Reduced-motion users see the fully "reasoned" card immediately (past the last reason).
  const [step, setStep] = useState(() => (prefersReducedMotion() ? REASONS.length + 1 : 0))

  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setTimeout(
      () => setStep((s) => (s > REASONS.length ? 0 : s + 1)),
      step === 0 ? 700 : step > REASONS.length ? 1800 : 900,
    )
    return () => clearTimeout(t)
  }, [step])

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-5 -z-10 rounded-[2.2rem] bg-gradient-to-br from-brand-200/40 via-transparent to-gold-300/30 blur-2xl" />
      <div className="rounded-[1.9rem] border border-neutral-200 bg-white/95 p-5 shadow-2xl shadow-neutral-900/10 backdrop-blur animate-float sm:p-6">
        {/* Card header */}
        <div className="flex items-center gap-2 text-brand-600">
          <Sparkle className="h-4 w-4" />
          <span className="text-[0.7rem] font-bold uppercase tracking-widest">Recommended for you</span>
        </div>

        {/* Person */}
        <div className="mt-4 flex items-center gap-3.5">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-base font-bold text-white">
            SC
          </span>
          <div className="leading-tight">
            <p className="text-[1.02rem] font-semibold text-neutral-950">Sarah Chen</p>
            <p className="text-sm text-neutral-500">2nd-year MBA · ex-startup operator</p>
          </div>
          <span className="ml-auto rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-600 ring-1 ring-brand-100">
            94% fit
          </span>
        </div>

        {/* AI reasoning — builds line by line */}
        <div className="mt-5 rounded-2xl bg-neutral-50 p-4">
          <p className="text-[0.7rem] font-bold uppercase tracking-widest text-neutral-400">
            Why Mutu suggests Sarah
          </p>
          <ul className="mt-2.5 space-y-2">
            {REASONS.map((r, i) => (
              <li
                key={r}
                className={`flex items-start gap-2 text-sm transition-all duration-500 ${
                  step > i ? 'text-neutral-700 opacity-100' : 'translate-y-1 text-neutral-400 opacity-0'
                }`}
              >
                <Check
                  className={`mt-0.5 h-4 w-4 shrink-0 ${step > i ? 'text-brand-500' : 'text-neutral-300'}`}
                />
                {r}
              </li>
            ))}
            {step <= REASONS.length && (
              <li className="flex items-center gap-2 pt-0.5 text-sm text-neutral-400">
                <span className="h-3.5 w-3.5 animate-spin-slow rounded-full border-2 border-brand-200 border-t-brand-500" />
                Analyzing mutual value…
              </li>
            )}
          </ul>
        </div>

        {/* Action */}
        <button
          className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-500 ${
            step > REASONS.length
              ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
              : 'bg-neutral-100 text-neutral-400'
          }`}
        >
          <Handshake className="h-4 w-4" />
          Request a warm intro
        </button>
      </div>
    </div>
  )
}
