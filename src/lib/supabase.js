const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

const LOCAL_KEY = 'reciring_waitlist'

// Always keep a local backup so nothing is lost before Supabase is wired up.
function backupLocally(payload) {
  try {
    const prev = JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]')
    prev.push({ ...payload, created_at: new Date().toISOString() })
    localStorage.setItem(LOCAL_KEY, JSON.stringify(prev))
  } catch {
    /* localStorage unavailable — ignore */
  }
}

// The Supabase SDK is heavy, so it is code-split: imported only on first submit.
let clientPromise = null
function getClient() {
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) =>
      createClient(url, anonKey),
    )
  }
  return clientPromise
}

/**
 * Submit a waitlist entry. Returns { ok, persisted }.
 * Throws only on a real Supabase failure so the UI can show an error state.
 */
export async function submitWaitlist(entry) {
  const payload = {
    name: entry.name?.trim() || null,
    email: entry.email?.trim().toLowerCase() || null,
    school: entry.school?.trim() || null,
    program: entry.program?.trim() || null,
    linkedin: entry.linkedin?.trim() || null,
    looking_for: entry.lookingFor?.length ? entry.lookingFor : null,
    source: 'reciring-website',
  }

  backupLocally(payload)

  if (!isSupabaseConfigured) {
    console.warn(
      '[Reciring] Supabase is not configured — the signup was saved to localStorage only. ' +
        'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see .env.example) to persist signups.',
    )
    return { ok: true, persisted: false }
  }

  const client = await getClient()
  const { error } = await client.from('waitlist').insert(payload)
  if (error) throw error
  return { ok: true, persisted: true }
}
