import { Arrow } from './Icons'
import { useWaitlist } from '../context/WaitlistProvider'

export default function FinalCTA() {
  const openWaitlist = useWaitlist()
  return (
    <section id="join" className="relative overflow-hidden bg-ink-950 py-28 text-white sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-faint opacity-[0.08]" />
        <div className="absolute -bottom-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-brand-700/30 blur-3xl animate-blob" />
        <div className="absolute -top-32 left-[-8%] h-80 w-80 rounded-full bg-gold-500/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-balance sm:text-[3.4rem]">
          Start discovering your{' '}
          <span className="text-gradient">hidden network.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          The future of professional networking isn&apos;t more connections. It&apos;s the right ones,
          at the right time — surfaced for you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={openWaitlist}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-400"
          >
            Join Mutu
            <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
          >
            Explore the network
          </a>
        </div>

        <p className="mt-8 text-sm text-white/40">
          Onboarding cohorts now · Pre-seed · Founder-led from inside Rotman MBA
        </p>
      </div>
    </section>
  )
}
