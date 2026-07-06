import Reveal from './Reveal'

const QUOTES = [
  {
    quote: 'I have been to dozens of coffee chats. I still haven’t found a real connection.',
    name: 'Sarah',
    detail: 'MBA 2025',
  },
  {
    quote:
      'I struggled to find a peer with a technical background to help me build — even though Rotman is full of past engineers.',
    name: 'Serine',
    detail: 'FT MBA 2027',
  },
  {
    quote: 'Financial modeling broke me. I came from finance, and I was too self-conscious to ask for help.',
    name: 'Anonymous',
    detail: 'MBA 2027',
  },
]

const CRED = [
  { k: 'Rotman MBA', v: 'The first cohort — founder-led from inside' },
  { k: 'Verified members', v: 'Confirmed through school & community' },
  { k: 'First matches', v: 'Real mutual connections, pre-launch' },
  { k: '2 faculty advisors', v: 'Trust, networks & behavioural science' },
]

export default function SocialProof() {
  return (
    <section id="community" className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-700/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Why us, why now
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-[2.7rem]">
            Built inside the community it serves.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Mutu didn&apos;t start in a boardroom. It started with real students saying the same
            quiet thing — we all came here to grow, but the structure makes it hard to ask for help.
          </p>
        </div>

        {/* Quotes */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.quote} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-serif text-4xl leading-none text-brand-400">&ldquo;</span>
                <blockquote className="mt-2 flex-1 text-[1.02rem] font-medium leading-relaxed text-white/90">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-5 text-sm text-white/50">
                  <span className="font-semibold text-white">{q.name}</span> · {q.detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Credibility strip */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {CRED.map((c, i) => (
            <Reveal key={c.k} delay={i * 80}>
              <div className="h-full bg-ink-900 p-6">
                <p className="font-serif text-xl font-semibold text-gold-400">{c.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
