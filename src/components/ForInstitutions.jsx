import Reveal from './Reveal'
import { Building, Users, Globe } from './Icons'

const PHASES = [
  { icon: Users, label: 'Beachhead', text: 'Rotman MBA — own one cohort end-to-end.' },
  { icon: Building, label: 'Expand', text: 'Canadian MBA programs & U of T graduate cohorts.' },
  { icon: Globe, label: 'Template', text: 'Accelerators and reciprocity-hungry communities.' },
]

export default function ForInstitutions() {
  return (
    <section id="institutions" className="border-t border-neutral-100 bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
              For institutions
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 text-balance sm:text-[2.5rem]">
              Free for members. Licensed by the institution.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Reciring is community infrastructure. Universities and accelerators license it; members
              join free — because density is the product, and a more connected cohort is the value
              the institution keeps.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Stat value="B2B2C" label="Institutions pay" />
              <Stat value="~85%" label="Gross margin" />
              <Stat value="Renews" label="With each class" />
            </div>
          </div>

          {/* Revenue streams + phases */}
          <div className="space-y-4">
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-3">
                <RevCard tag="Primary" title="Institutional license" />
                <RevCard tag="Expansion" title="Cross-cohort & alumni access" />
                <RevCard tag="Future" title="Privacy-preserving insights" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="grid gap-4 sm:grid-cols-3">
                  {PHASES.map((p) => (
                    <div key={p.label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                        <p.icon className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          {p.label}
                        </p>
                        <p className="mt-0.5 text-sm leading-snug text-neutral-700">{p.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-serif text-2xl font-semibold text-neutral-950">{value}</p>
      <p className="text-neutral-500">{label}</p>
    </div>
  )
}

function RevCard({ tag, title }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4">
      <p className="text-[0.6rem] font-bold uppercase tracking-widest text-brand-500">{tag}</p>
      <p className="mt-1.5 text-sm font-semibold leading-snug text-neutral-900">{title}</p>
    </div>
  )
}
