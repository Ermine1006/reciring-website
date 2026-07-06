// Two interlocking rings = mutual exchange — the heart of "Mutu."
export function LogoMark({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 40 28" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="11" fill="none" stroke="var(--color-gold-400)" strokeWidth="3" />
      <circle cx="26" cy="14" r="11" fill="none" stroke="var(--color-brand-500)" strokeWidth="3" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-7 w-10" />
      <span className="text-[1.4rem] font-extrabold tracking-tight text-neutral-900">
        Mut<span className="text-brand-500">u</span>
      </span>
    </span>
  )
}
