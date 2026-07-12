import { useEffect, useState } from 'react'
import Logo from './Logo'
import { useWaitlist } from '../context/WaitlistProvider'

const LINKS = [
  { href: '#network', label: 'The problem' },
  { href: '#demo', label: 'How it works' },
  { href: '#ai', label: 'AI vision' },
  { href: '#community', label: 'Trust' },
  { href: '#team', label: 'Team' },
]

export default function Navbar() {
  const openWaitlist = useWaitlist()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="MuTu home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href="#demo"
            className="rounded-full px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:text-neutral-950"
          >
            See the product
          </a>
          <button
            onClick={openWaitlist}
            className="rounded-full bg-brand-400 px-4.5 py-2 text-sm font-semibold text-ink-900 shadow-sm transition-all hover:bg-brand-500 hover:text-white hover:shadow-brand-500/20"
          >
            Request access
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-800 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-5 py-3 lg:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-neutral-700 hover:bg-neutral-100"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                openWaitlist()
              }}
              className="mt-2 rounded-full bg-brand-400 px-4 py-2.5 text-center text-sm font-semibold text-ink-900"
            >
              Request access
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
