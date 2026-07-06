import Reveal from './Reveal'
import { Doc, Swap, Sparkle, Handshake } from './Icons'

const STEPS = [
  {
    icon: Doc,
    title: 'Create your profile',
    text: 'Program, industry, skills, and goals — verified through your school or community.',
  },
  {
    icon: Swap,
    title: 'Share what you offer & need',
    text: 'Post what you can give back and what you’re looking for. Both sides matter.',
  },
  {
    icon: Sparkle,
    title: 'Get AI recommendations',
    text: 'Mutu surfaces the people, events, and conversations most relevant to you right now.',
  },
  {
    icon: Handshake,
    title: 'Meet through warm intros',
    text: 'Connect through posts, events, and mutual interest — never a cold ask.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
              How it works
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-neutral-950 text-balance sm:text-[2.7rem]">
              From profile to warm introduction — in four steps.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Mutu uses AI to surface relevant people, events, and conversations — so the value
              already inside your community finally reaches you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="relative flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5">
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-neutral-300">
                  Step {i + 1}
                </span>
                <span className="mt-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
                  <s.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-neutral-950">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-neutral-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
