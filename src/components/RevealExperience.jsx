import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { EyeOff, Check, Lock } from './Icons'

const STEPS = [
  { label: 'Verified members only', sub: 'Everyone is confirmed through your school or community' },
  { label: 'You choose what to share', sub: 'Post with your real name — or stay private until you’re ready' },
  { label: 'Connect on mutual interest', sub: 'Names are shared when both sides opt in' },
]

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function RevealExperience() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const [rawStep, setRawStep] = useState(0)
  // Reduced-motion users jump straight to the revealed state once in view.
  const step = reducedMotion() && inView ? 2 : rawStep

  useEffect(() => {
    if (!inView || reducedMotion()) return
    const t = setTimeout(() => setRawStep((s) => (s + 1) % 3), rawStep === 2 ? 2200 : 1600)
    return () => clearTimeout(t)
  }, [inView, rawStep])

  return (
    <section id="reveal" className="border-t border-neutral-100 bg-paper py-24 sm:py-32">
      <div ref={ref} className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
            Trust &amp; control
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 text-balance sm:text-[2.7rem]">
            You decide what to share, and when.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Mutu is a verified, community-based network — every member is confirmed through your
            school or organization. You choose to show up as yourself or stay private, and names are
            only exchanged when there&apos;s mutual interest. So reaching out never feels like a risk.
          </p>

          <div className="mt-8 space-y-1.5">
            <p className="font-serif text-xl font-semibold text-neutral-950">Verified, not anonymous by default.</p>
            <p className="font-serif text-xl font-semibold text-brand-500">
              Warm introductions, on your terms.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {STEPS.map((s, i) => (
              <li
                key={s.label}
                className={`flex items-start gap-3 rounded-xl px-3.5 py-2.5 transition-all duration-500 ${
                  step >= i ? 'bg-white opacity-100 shadow-sm ring-1 ring-neutral-200' : 'opacity-40'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white transition-colors ${
                    step >= i ? 'bg-brand-500' : 'bg-neutral-300'
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{s.label}</p>
                  <p className="text-sm text-neutral-500">{s.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/40 via-transparent to-gold-300/30 blur-2xl" />
          <div className="rounded-[1.9rem] border border-neutral-200 bg-white p-7 shadow-2xl shadow-neutral-900/10">
            {/* Avatar morph */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {step >= 1 && (
                  <span className="absolute inset-0 rounded-full bg-brand-400/30 animate-ring" />
                )}
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full transition-all duration-700 ${
                    step >= 2
                      ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white'
                      : 'bg-neutral-900 text-brand-400'
                  }`}
                >
                  {step >= 2 ? (
                    <span className="text-2xl font-bold">MR</span>
                  ) : (
                    <EyeOff className="h-9 w-9" />
                  )}
                </div>
              </div>

              <div className="mt-5 h-16">
                {step < 2 ? (
                  <>
                    <p className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-400">
                      {step === 0 ? 'Private · Rotman peer' : 'Mutual interest detected'}
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-neutral-300">
                      <Lock className="h-4 w-4" />
                      <span className="h-2.5 w-28 rounded-full bg-neutral-200" />
                    </div>
                  </>
                ) : (
                  <div className="animate-pop">
                    <p className="text-[0.62rem] font-bold uppercase tracking-widest text-brand-500">
                      Connected
                    </p>
                    <p className="mt-1 text-lg font-semibold text-neutral-950">Maya Rodriguez</p>
                    <p className="text-sm text-neutral-500">ex-Stripe PM · building in AI infra</p>
                  </div>
                )}
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-6 flex justify-center gap-2">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    step === i ? 'w-6 bg-brand-500' : step > i ? 'w-1.5 bg-brand-300' : 'w-1.5 bg-neutral-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
