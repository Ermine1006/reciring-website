import { useEffect, useRef, useState } from 'react'
import { submitWaitlist } from '../lib/supabase'
import { Check, Sparkle } from './Icons'

const LOOKING_FOR = [
  'Career opportunities',
  'Startup co-founders',
  'Industry mentors',
  'Technical talent',
  'Friendship & community',
  'Other',
]

const EMPTY = { name: '', email: '', school: '', program: '', linkedin: '' }

// Mounted only while open (see WaitlistProvider), so state is fresh each time.
export default function WaitlistModal({ onClose }) {
  const [form, setForm] = useState(EMPTY)
  const [lookingFor, setLookingFor] = useState([])
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const firstFieldRef = useRef(null)
  const dialogRef = useRef(null)

  // Lock body scroll + focus first field + Escape to close.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60)
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const toggleInterest = (label) =>
    setLookingFor((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label],
    )

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
  const canSubmit =
    form.name.trim() && emailValid && form.school.trim() && form.program.trim() && status !== 'submitting'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('submitting')
    setErrorMsg('')
    try {
      await submitWaitlist({ ...form, lookingFor })
      setStatus('success')
    } catch (err) {
      console.error(err)
      const dup = String(err?.code) === '23505'
      setErrorMsg(
        dup
          ? "You're already on the list — see you soon."
          : 'Something went wrong. Please try again in a moment.',
      )
      setStatus(dup ? 'success' : 'error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-ink-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        className="animate-pop relative w-full max-w-lg rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === 'success' ? (
          <SuccessState onClose={onClose} note={errorMsg} />
        ) : (
          <form onSubmit={handleSubmit} className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <Sparkle className="h-3.5 w-3.5" /> First adopters
            </span>
            <h2 id="waitlist-title" className="mt-4 font-serif text-2xl font-semibold text-neutral-950">
              Join the First Adopter Community
            </h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-neutral-600">
              We&apos;re onboarding cohorts a few at a time. Tell us a little about you and we&apos;ll
              reach out when your community goes live.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input
                  ref={firstFieldRef}
                  value={form.name}
                  onChange={set('name')}
                  required
                  autoComplete="name"
                  className={inputCls}
                  placeholder="Maya Rodriguez"
                />
              </Field>
              <Field label="Email" required>
                <input
                  value={form.email}
                  onChange={set('email')}
                  type="email"
                  required
                  autoComplete="email"
                  className={inputCls}
                  placeholder="you@school.edu"
                />
              </Field>
              <Field label="School" required>
                <input
                  value={form.school}
                  onChange={set('school')}
                  required
                  className={inputCls}
                  placeholder="Rotman School of Management"
                />
              </Field>
              <Field label="Program" required>
                <input
                  value={form.program}
                  onChange={set('program')}
                  required
                  className={inputCls}
                  placeholder="Full-time MBA 2027"
                />
              </Field>
              <Field label="LinkedIn" optional className="sm:col-span-2">
                <input
                  value={form.linkedin}
                  onChange={set('linkedin')}
                  type="url"
                  className={inputCls}
                  placeholder="https://linkedin.com/in/…"
                />
              </Field>
            </div>

            {/* Interests */}
            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-neutral-900">
                What are you looking for most?
              </legend>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {LOOKING_FOR.map((label) => {
                  const checked = lookingFor.includes(label)
                  return (
                    <button
                      type="button"
                      key={label}
                      aria-pressed={checked}
                      onClick={() => toggleInterest(label)}
                      className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm font-medium transition-all ${
                        checked
                          ? 'border-brand-400 bg-brand-50 text-brand-700'
                          : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          checked ? 'border-brand-500 bg-brand-500 text-white' : 'border-neutral-300'
                        }`}
                      >
                        {checked && <Check className="h-3.5 w-3.5" />}
                      </span>
                      {label}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            {status === 'error' && (
              <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <>
                  <span className="h-4 w-4 animate-spin-slow rounded-full border-2 border-white/40 border-t-white" />
                  Joining…
                </>
              ) : (
                'Request early access'
              )}
            </button>
            <p className="mt-3 text-center text-xs text-neutral-400">
              No spam. We&apos;ll only email you about your cohort&apos;s launch.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

const inputCls =
  'w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-[0.95rem] text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100'

function Field({ label, required, optional, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
        {label}
        {required && <span className="text-brand-500">*</span>}
        {optional && <span className="text-xs font-normal text-neutral-400">(optional)</span>}
      </span>
      {children}
    </label>
  )
}

function SuccessState({ onClose, note }) {
  return (
    <div className="p-8 text-center sm:p-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
        <Check className="h-8 w-8" />
      </div>
      <h2 className="mt-5 font-serif text-2xl font-semibold text-neutral-950">You&apos;re on the list.</h2>
      <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-neutral-600">
        {note ||
          'Welcome to the first adopter community. We’ll reach out the moment your cohort goes live — and the people you should have already met are waiting.'}
      </p>
      <button
        onClick={onClose}
        className="mt-7 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
      >
        Done
      </button>
    </div>
  )
}
