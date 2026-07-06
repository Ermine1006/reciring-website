import { useEffect, useRef, useState } from 'react'
import { Sparkle, Swap } from './Icons'

const MATCHES = {
  'Product management': {
    persona: 'Priya N.',
    detail: 'Rotman MBA · ex-FAANG PM',
    initials: 'PN',
    offer: 'Technical product development & 0→1 roadmapping',
    needs: 'VC fundraising advice',
    tags: ['Product', 'Ex-FAANG'],
    fit: 96,
  },
  'Startup fundraising': {
    persona: 'Marcus L.',
    detail: 'Rotman MBA · founder',
    initials: 'ML',
    offer: 'VC fundraising guidance & investor intros',
    needs: 'A technical co-founder',
    tags: ['Venture', 'Operator'],
    fit: 94,
  },
  'Interview preparation': {
    persona: 'Dana K.',
    detail: '2nd-year MBA · ex-consulting',
    initials: 'DK',
    offer: 'MBB case-prep coaching & mock loops',
    needs: 'Resume review for product roles',
    tags: ['Consulting', 'Recruiting'],
    fit: 92,
  },
  'Financial modeling': {
    persona: 'Sam O.',
    detail: 'MBA · ex-IB Associate',
    initials: 'SO',
    offer: 'LBO & three-statement modeling crash session',
    needs: 'Go-to-market strategy for a side project',
    tags: ['Finance', 'Modeling'],
    fit: 95,
  },
}

const SUGGESTIONS = Object.keys(MATCHES)

function resolve(query) {
  const q = query.trim().toLowerCase()
  if (!q) return null
  const exact = SUGGESTIONS.find((s) => s.toLowerCase() === q)
  if (exact) return { key: exact, ...MATCHES[exact] }
  const partial = SUGGESTIONS.find(
    (s) => s.toLowerCase().includes(q) || q.includes(s.toLowerCase().split(' ')[0]),
  )
  if (partial) return { key: partial, ...MATCHES[partial] }
  // graceful fallback so the demo always "works"
  return { key: query.trim(), ...MATCHES['Product management'] }
}

export default function MatchDemo() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('idle') // idle | searching | found
  const [match, setMatch] = useState(null)
  const timer = useRef(null)

  const run = (value) => {
    setQuery(value)
    const result = resolve(value)
    if (!result) {
      setStatus('idle')
      setMatch(null)
      return
    }
    setStatus('searching')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setMatch(result)
      setStatus('found')
    }, 850)
  }

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <section id="demo" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-10 h-80 w-80 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-80 w-80 rounded-full bg-gold-300/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
          The solution
        </span>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 text-balance sm:text-[2.7rem]">
          What do you need help with?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-neutral-600">
          Type it — or tap one. MuTu surfaces someone whose goals line up with yours, and who needs
          exactly what you can give back. No cold outreach. Just the match.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-5 sm:px-8">
        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            run(query)
          }}
          className="flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white p-2 shadow-lg shadow-neutral-900/5 focus-within:border-brand-400 focus-within:ring-4 focus-within:ring-brand-100"
        >
          <span className="pl-3 text-neutral-400">
            <Sparkle className="h-5 w-5" />
          </span>
          <input
            value={query}
            onChange={(e) => run(e.target.value)}
            placeholder="I need help with…"
            className="min-w-0 flex-1 bg-transparent py-2.5 text-base text-neutral-900 outline-none placeholder:text-neutral-400"
            aria-label="What do you need help with?"
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Match
          </button>
        </form>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => run(s)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all ${
                query === s
                  ? 'border-brand-400 bg-brand-50 text-brand-700'
                  : 'border-neutral-300 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Result */}
        <div className="mt-8 min-h-[15rem]">
          {status === 'idle' && (
            <div className="flex h-full min-h-[15rem] items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/60 px-6 text-center text-neutral-400">
              Your recommended match will appear here.
            </div>
          )}

          {status === 'searching' && (
            <div className="flex min-h-[15rem] flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 text-center">
              <span className="h-8 w-8 animate-spin-slow rounded-full border-[3px] border-brand-200 border-t-brand-500" />
              <p className="mt-4 text-sm font-medium text-neutral-500">
                MuTu is scanning your community for a mutual fit…
              </p>
            </div>
          )}

          {status === 'found' && match && (
            <article
              key={match.key + match.fit}
              className="animate-pop overflow-hidden rounded-2xl border border-brand-200 bg-white text-left shadow-xl shadow-brand-500/10"
            >
              <div className="flex items-center justify-between border-b border-brand-100 bg-brand-50/60 px-5 py-3">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-700">
                  <Sparkle className="h-4 w-4" /> Recommended for you
                </span>
                <span className="rounded-full bg-brand-500 px-2.5 py-1 text-xs font-bold text-white">
                  {match.fit}% mutual fit
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                    {match.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{match.persona}</p>
                    <p className="text-xs text-neutral-500">{match.detail}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {match.tags.map((t) => (
                        <span key={t} className="rounded-md bg-neutral-100 px-2 py-0.5 text-[0.7rem] font-semibold text-neutral-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-gold-300/50 bg-gold-300/10 p-4">
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest text-gold-600">
                      Can offer
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-neutral-800">{match.offer}</p>
                  </div>
                  <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-4">
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest text-brand-500">
                      In return, needs
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-neutral-800">{match.needs}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-xl bg-neutral-950 px-4 py-3 text-sm text-white/80">
                  <Swap className="h-4 w-4 shrink-0 text-brand-400" />
                  You asked for <span className="font-semibold text-white">“{match.key}”</span> — they
                  need what you bring. That&apos;s a two-way trade, not a cold ask.
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
