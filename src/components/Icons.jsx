// Lightweight, dependency-free icon set (stroke = currentColor).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const EyeOff = (p) => (
  <svg {...base} {...p}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.7 9.7 0 0 0 5.39-1.61" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
)

export const Swap = (p) => (
  <svg {...base} {...p}>
    <path d="M17 3l4 4-4 4" />
    <path d="M21 7H7" />
    <path d="M7 21l-4-4 4-4" />
    <path d="M3 17h14" />
  </svg>
)

export const Check = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.5l2.2 2.2 4.8-5" />
  </svg>
)

export const Bolt = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
  </svg>
)

export const Doc = (p) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
)

export const Chat = (p) => (
  <svg {...base} {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-9 8.4 9.5 9.5 0 0 1-4-.9L3 21l1.9-4.9A8.38 8.38 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
  </svg>
)

export const Star = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.2l1-5.8L3.5 9.2l5.9-.9z" />
  </svg>
)

export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export const Users = (p) => (
  <svg {...base} {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

export const Building = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <line x1="9" y1="9" x2="9" y2="9.01" />
    <line x1="15" y1="9" x2="15" y2="9.01" />
    <line x1="9" y1="13" x2="9" y2="13.01" />
    <line x1="15" y1="13" x2="15" y2="13.01" />
    <path d="M10 21v-4h4v4" />
  </svg>
)

export const Globe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
  </svg>
)

export const Rocket = (p) => (
  <svg {...base} {...p}>
    <path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0z" />
    <path d="M9 12a14 14 0 0 1 9-9 14 14 0 0 1-1 9 5 5 0 0 1-1.5 1.5L12 16l-3-3z" />
    <circle cx="15" cy="9" r="1.2" />
  </svg>
)

export const Arrow = (p) => (
  <svg {...base} {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)

export const Sparkle = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4z" />
  </svg>
)

export const Lock = (p) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="11" width="15" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)
