import { useState } from 'react'
import useInView from '../hooks/useInView'

// Hand-placed scatter inside a 620 x 480 canvas.
const NODES = [
  { x: 95, y: 90 },   // 0
  { x: 250, y: 60 },  // 1
  { x: 410, y: 80 },  // 2
  { x: 545, y: 130 }, // 3
  { x: 150, y: 215 }, // 4
  { x: 310, y: 190 }, // 5 hub
  { x: 470, y: 220 }, // 6
  { x: 90, y: 350 },  // 7
  { x: 245, y: 320 }, // 8
  { x: 405, y: 345 }, // 9 hub
  { x: 545, y: 315 }, // 10
  { x: 175, y: 430 }, // 11
  { x: 335, y: 430 }, // 12
  { x: 495, y: 420 }, // 13
]

const EDGES = [
  [5, 1], [5, 4], [5, 2], [5, 8], [5, 6],
  [9, 8], [9, 6], [9, 12], [9, 10], [9, 13],
  [1, 0], [2, 3], [4, 7], [8, 11], [6, 3], [10, 13],
]

// Nodes that "light up" once connected.
const LIT = new Set([5, 9, 1, 2, 4, 6, 8, 10, 12])
const HUBS = new Set([5, 9])

export default function InvisibleNetwork() {
  const [ref, inView] = useInView({ threshold: 0.35 })
  const [replayKey, setReplayKey] = useState(0)
  const active = inView // connection state driven by scroll

  return (
    <section
      id="network"
      className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/20 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            The problem
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
            The people you need already exist.
            <br />
            <span className="text-gradient">They&apos;re just hidden.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Valuable people, events, and opportunities already live inside your community — but
            they&apos;re fragmented across chats, threads, and inboxes, and almost impossible to find
            at the moment you actually need them. So most connections never form.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <Legend active={active} />
          </div>

          <button
            onClick={() => setReplayKey((k) => k + 1)}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-2.64-6.36" />
              <path d="M21 3v6h-6" />
            </svg>
            Replay
          </button>
        </div>

        <div className="relative">
          <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-widest">
            <span className={`transition-colors ${active ? 'text-white/30' : 'text-white/70'}`}>
              Before · isolated
            </span>
            <span className={`transition-colors ${active ? 'text-brand-300' : 'text-white/30'}`}>
              After · connected
            </span>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3">
            <svg key={replayKey} viewBox="0 0 620 480" className="h-auto w-full" role="img" aria-label="A cohort of isolated people connecting into a reciprocal network">
              {/* Edges */}
              {active &&
                EDGES.map(([a, b], i) => {
                  const gold = i % 5 === 0
                  return (
                    <line
                      key={`e-${replayKey}-${i}`}
                      x1={NODES[a].x}
                      y1={NODES[a].y}
                      x2={NODES[b].x}
                      y2={NODES[b].y}
                      stroke={gold ? 'var(--color-gold-400)' : 'var(--color-brand-500)'}
                      strokeWidth="1.6"
                      strokeOpacity="0.7"
                      className="animate-draw"
                      style={{ animationDelay: `${i * 70}ms` }}
                    />
                  )
                })}

              {/* Nodes */}
              {NODES.map((n, i) => {
                const lit = active && LIT.has(i)
                const hub = HUBS.has(i)
                return (
                  <g key={i} className="transition-opacity">
                    {lit && (
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={hub ? 13 : 9}
                        fill={hub ? 'var(--color-gold-400)' : 'var(--color-brand-500)'}
                        opacity="0.25"
                        className="animate-ring"
                        style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${i * 90}ms` }}
                      />
                    )}
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={hub ? 9 : 6.5}
                      fill={lit ? (hub ? 'var(--color-gold-400)' : 'var(--color-brand-500)') : 'rgba(255,255,255,0.22)'}
                      stroke={lit ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)'}
                      strokeWidth="1.5"
                      className="transition-all duration-700"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function Legend({ active }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
      <span className="flex items-center gap-2 text-white/50">
        <span className="h-3 w-3 rounded-full bg-white/25 ring-1 ring-white/30" />
        Unconnected peer
      </span>
      <span className={`flex items-center gap-2 transition-colors ${active ? 'text-white/90' : 'text-white/40'}`}>
        <span className="h-3 w-3 rounded-full bg-brand-500 ring-1 ring-white/70" />
        Reciprocal match
      </span>
    </div>
  )
}
