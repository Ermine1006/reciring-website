import Reveal from './Reveal'

const OLD_FLOW = ['Find people', 'Send a cold message', 'Hope they reply']
const NEW_FLOW = ['Post a need + offer', 'Get matched', 'Both consent', 'Real connection']

export default function FeatureStories() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
              The shift
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 text-balance sm:text-[2.7rem]">
              Networking asks you to take. Reciring lets you trade.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Traditional */}
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Traditional networking
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-neutral-500">
                One-directional. Low reply rate.
              </h3>
              <div className="mt-8 space-y-3">
                {OLD_FLOW.map((s, i) => (
                  <div key={s}>
                    <div className="flex items-center gap-3 rounded-xl border border-dashed border-neutral-300 bg-white px-4 py-3 text-neutral-500">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-neutral-500">
                        {i + 1}
                      </span>
                      <span className="text-[0.95rem] font-medium">{s}</span>
                    </div>
                    {i < OLD_FLOW.length - 1 && (
                      <div className="py-1 pl-6 text-neutral-300">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-neutral-400">
                Cold outreach response rates stay under 5%. The ask carries all the risk.
              </p>
            </div>
          </Reveal>

          {/* Divider */}
          <div className="hidden items-center justify-center lg:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg font-semibold text-brand-500 shadow-sm">
              vs
            </span>
          </div>

          {/* Reciring */}
          <Reveal delay={120}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-xl shadow-brand-500/10">
              <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                Reciring
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
                Reciprocity, made structural
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-neutral-950">
                Two-way by default. Mutual by design.
              </h3>
              <div className="mt-8 space-y-3">
                {NEW_FLOW.map((s, i) => (
                  <div key={s}>
                    <div className="flex items-center gap-3 rounded-xl border border-brand-200 bg-white px-4 py-3 shadow-sm">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-[0.95rem] font-semibold text-neutral-900">{s}</span>
                    </div>
                    {i < NEW_FLOW.length - 1 && (
                      <div className="py-1 pl-6 text-brand-400">↓</div>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm font-medium text-brand-700">
                Both sides commit before contact. Nobody asks alone.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
