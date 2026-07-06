import Logo, { LogoMark } from './Logo'
import { useWaitlist } from '../context/WaitlistProvider'
import { LinkedIn, Instagram, Globe } from './Icons'

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
    <footer className="bg-white">
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
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Join Mutu →
            </button>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-ink-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Gold brand bar */}
      <div className="bg-brand-400 text-ink-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-5 sm:flex-row sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <LogoMark className="h-6 w-9" />
            <span className="font-serif text-lg font-bold">Mutu</span>
          </div>
          <p className="text-sm font-semibold">Mutual value. Trusted connections.</p>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm font-medium text-ink-900/70 sm:inline">
              © {new Date().getFullYear()} Mutu
            </span>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="text-ink-900/80 transition-colors hover:text-ink-900">
                <LinkedIn className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-ink-900/80 transition-colors hover:text-ink-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Website" className="text-ink-900/80 transition-colors hover:text-ink-900">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
