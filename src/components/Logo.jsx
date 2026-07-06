// Two interlocking rings = mutual exchange — the heart of "Mutu."
export function LogoMark({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 40 28" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="11" fill="none" stroke="var(--color-brand-400)" strokeWidth="3" />
      <circle cx="26" cy="14" r="11" fill="none" stroke="var(--color-brand-600)" strokeWidth="3" />
    </svg>
  )
}

export default function Logo({ className = '', tone = 'dark' }) {
  const text = tone === 'light' ? 'text-white' : 'text-ink-900'
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-7 w-10" />
      <span className={`font-serif text-[1.45rem] font-bold tracking-tight ${text}`}>Mutu</span>
    </span>
  )
}
