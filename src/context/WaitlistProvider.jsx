import { createContext, useCallback, useContext, useState } from 'react'
import WaitlistModal from '../components/WaitlistModal'

const WaitlistContext = createContext(() => {})

// eslint-disable-next-line react-refresh/only-export-components
export function useWaitlist() {
  return useContext(WaitlistContext)
}

export default function WaitlistProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openWaitlist = useCallback(() => setOpen(true), [])
  const closeWaitlist = useCallback(() => setOpen(false), [])

  return (
    <WaitlistContext.Provider value={openWaitlist}>
      {children}
      {open && <WaitlistModal onClose={closeWaitlist} />}
    </WaitlistContext.Provider>
  )
}
