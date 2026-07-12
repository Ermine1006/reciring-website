import { Arrow, Sparkle } from './Icons'
import { useWaitlist } from '../context/WaitlistProvider'

export default function Hero() {
  const openWaitlist = useWaitlist()
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-faint opacity-50" />
        <div className="absolute -top-44 right-[-8%] h-[36rem] w-[36rem] rounded-full bg-brand-200/40 blur-3xl animate-blob" />
        <div className="absolute top-28 left-[-12%] h-[28rem] w-[28rem] rounded-full bg-gold-300/25 blur-3xl animate-blob [animation-delay:-6s]" />
        <div
          className="absolute inset-x-0 top-0 h-[60%]"
          style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(212,175,55,0.08), transparent 70%)' }}
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

          <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-900 text-balance sm:text-[3.9rem]">
            Turn hidden networks into{' '}
            <span className="text-gradient">meaningful opportunities.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 text-pretty">
            MuTu helps trusted communities surface the right people for each goal — then makes warm
            introductions with consent built in.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={openWaitlist}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-400 px-6 py-3.5 text-base font-semibold text-ink-900 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-500 hover:text-white"
            >
              Request access
              <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-base font-semibold text-ink-900 transition-all hover:border-brand-300 hover:bg-brand-50"
            >
              See the product
            </a>
          </div>

          <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-brand-700">
            <span className="h-px w-8 bg-brand-300" />
            Mutual value. Trusted connections.
          </p>
        </div>

        <div className="relative">
          <NetworkOrbit />
        </div>
      </div>
    </section>
  )
}

/* ---- Hero visual: a warm network orbit — peers connecting around the MuTu core ---- */
const NODES = [
  { cx: 118, cy: 96, r: 30, initials: 'SL', tone: 'gold' },
  { cx: 322, cy: 120, r: 27, initials: 'MC', tone: 'navy' },
  { cx: 96, cy: 300, r: 27, initials: 'DK', tone: 'navy' },
  { cx: 330, cy: 296, r: 30, initials: 'AR', tone: 'gold' },
]
const CENTER = { x: 220, y: 200 }

function NetworkOrbit() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-5 -z-10 rounded-[2.4rem] bg-gradient-to-br from-brand-200/40 via-transparent to-gold-300/30 blur-2xl" />
      <div className="rounded-[1.9rem] border border-neutral-200/80 bg-white/90 p-5 shadow-2xl shadow-ink-900/10 backdrop-blur animate-float sm:p-6">
        <div className="relative aspect-square w-full">
          <svg viewBox="0 0 440 400" className="h-full w-full" role="img" aria-label="Peers connecting around the MuTu network core">
            {/* Orbit rings */}
            <circle cx={CENTER.x} cy={CENTER.y} r="150" fill="none" stroke="var(--color-brand-200)" strokeWidth="1" strokeDasharray="3 6" opacity="0.7" />
            <circle cx={CENTER.x} cy={CENTER.y} r="110" fill="none" stroke="var(--color-brand-200)" strokeWidth="1" opacity="0.5" />
            {/* Connecting lines */}
            {NODES.map((n, i) => (
              <line
                key={i}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={n.cx}
                y2={n.cy}
                stroke="var(--color-brand-300)"
                strokeWidth="1.4"
                strokeOpacity="0.6"
                className="animate-draw"
                style={{ animationDelay: `${i * 120}ms` }}
              />
            ))}
            {/* Center core */}
            <circle cx={CENTER.x} cy={CENTER.y} r="52" fill="var(--color-brand-50)" stroke="var(--color-brand-200)" strokeWidth="1.5" />
            <g transform={`translate(${CENTER.x - 30} ${CENTER.y - 21})`}>
              <circle cx="21" cy="21" r="16.5" fill="none" stroke="var(--color-brand-400)" strokeWidth="4.5" />
              <circle cx="39" cy="21" r="16.5" fill="none" stroke="var(--color-brand-600)" strokeWidth="4.5" />
            </g>
          </svg>

          {/* Avatar bubbles (positioned over the svg) */}
          {NODES.map((n, i) => (
            <span
              key={i}
              className={`absolute flex items-center justify-center rounded-full text-sm font-bold shadow-lg ring-4 ring-white ${
                n.tone === 'gold'
                  ? 'bg-gradient-to-br from-brand-300 to-brand-500 text-ink-900'
                  : 'bg-gradient-to-br from-ink-800 to-ink-950 text-brand-300'
              }`}
              style={{
                left: `${(n.cx / 440) * 100}%`,
                top: `${(n.cy / 400) * 100}%`,
                width: `${(n.r * 2 / 440) * 100}%`,
                height: `${(n.r * 2 / 400) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {n.initials}
            </span>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-3 flex items-start gap-3 rounded-2xl bg-brand-50 px-4 py-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-400 text-ink-900">
            <Sparkle className="h-4.5 w-4.5" />
          </span>
          <p className="text-sm font-medium leading-relaxed text-ink-800">
            MuTu matches you with the right people, events, and opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}
