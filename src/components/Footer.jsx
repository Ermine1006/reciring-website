import Logo from './Logo'
import { useWaitlist } from '../context/WaitlistProvider'

const NAV = [
  { href: '#network', label: 'The problem' },
  { href: '#demo', label: 'How it works' },
  { href: '#ai', label: 'AI vision' },
  { href: '#community', label: 'Trust & community' },
  { href: '#institutions', label: 'For institutions' },
  { href: '#team', label: 'Team' },
]

export default function Footer() {
  const openWaitlist = useWaitlist()
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[0.95rem] leading-relaxed text-neutral-600">
              An AI-powered trusted network platform. Mutu turns the hidden networks inside your
              community into meaningful people, events, and opportunities.
            </p>
            <button
              onClick={openWaitlist}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Join Mutu →
            </button>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-100 pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mutu. All rights reserved.</p>
          <p>Mutual value, meaningful connection — no one grows alone.</p>
        </div>
      </div>
    </footer>
  )
}
