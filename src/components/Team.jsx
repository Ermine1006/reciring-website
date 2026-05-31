import Reveal from './Reveal'

const FOUNDERS = [
  {
    initials: 'SL',
    name: 'Serine Lyu',
    role: 'Founder & CEO',
    why: 'A Rotman MBA building for her own cohort — living the problem as user, researcher, and builder. Six years in private equity before this.',
  },
  {
    initials: 'SC',
    name: 'Steve Cao',
    role: 'Co-founder & CTO',
    why: 'Ex-Apple engineer, UCI Ph.D. Makes the trust layer fast, private, and reliable from day one.',
  },
]

const ADVISORS = [
  {
    name: 'Bill McEvily',
    line: 'One of the most-cited researchers on trust & social networks. Rotman.',
  },
  {
    name: 'Dilip Soman',
    line: 'Canada Research Chair in Behavioural Science; author of The Last Mile. Rotman.',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
            Team
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 text-balance sm:text-[2.7rem]">
            Inside the market, backed by the people who proved the thesis.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 100}>
              <article className="flex h-full items-start gap-5 rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-lg font-bold text-white">
                  {f.initials}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950">{f.name}</h3>
                  <p className="text-sm font-medium text-brand-600">{f.role}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-neutral-600">{f.why}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {ADVISORS.map((a, i) => (
            <Reveal key={a.name} delay={i * 100}>
              <article className="flex h-full items-center gap-4 rounded-2xl border border-neutral-200 bg-paper p-6">
                <span className="h-10 w-1 shrink-0 rounded-full bg-gold-400" />
                <div>
                  <h3 className="font-semibold text-neutral-950">
                    {a.name} <span className="text-xs font-medium text-neutral-400">· Advisor</span>
                  </h3>
                  <p className="mt-1 text-[0.92rem] leading-relaxed text-neutral-600">{a.line}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs italic leading-relaxed text-neutral-400">
          Affiliations shown for identification; advisory engagement does not imply institutional
          endorsement.
        </p>
      </div>
    </section>
  )
}
