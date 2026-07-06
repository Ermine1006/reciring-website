import Reveal from './Reveal'
import { Doc, Swap, Sparkle, Users } from './Icons'

const STEPS = [
  {
    icon: Doc,
    tone: 'gold',
    title: 'Create your profile',
    text: 'Program, industry, skills, and goals — verified through your school or community.',
  },
  {
    icon: Swap,
    tone: 'navy',
    title: 'Share what you offer & need',
    text: 'Post what you can give back and what you’re looking for. Both sides matter.',
  },
  {
    icon: Sparkle,
    tone: 'gold',
    title: 'Get AI recommendations',
    text: 'Mutu surfaces the people, events, and conversations most relevant to you.',
  },
  {
    icon: Users,
    tone: 'navy',
    title: 'Connect through value exchange',
    text: 'Meet through posts, events, and mutual interest — never a cold ask.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              How Mutu works
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 text-balance sm:text-[2.7rem]">
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

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden border-t-2 border-dashed border-brand-200 lg:block"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative flex flex-col items-center text-center">
                  <span
                    className={`relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full shadow-lg ${
                      s.tone === 'gold'
                        ? 'bg-brand-400 text-ink-900 shadow-brand-500/25'
                        : 'bg-ink-900 text-brand-300 shadow-ink-900/25'
                    }`}
                  >
                    <s.icon className="h-7 w-7" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-paper bg-white text-[0.7rem] font-bold text-brand-700">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-neutral-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
