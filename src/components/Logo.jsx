// Two interlocking rings = reciprocity, echoing the deck mark.
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
      <span className="text-[1.35rem] font-extrabold tracking-tight text-neutral-900">
        Reci<span className="text-brand-500">Ring</span>
      </span>
    </span>
  )
}
