import { animate, motion } from 'motion/react'
import { useEffect, useState } from 'react'

// Counts 0 → 100 next to the name, then lifts away to reveal the page.
export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(onDone, 250),
    })
    return () => controls.stop()
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col justify-between bg-bg gutter py-6 text-ink"
      exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      role="status"
      aria-label="Loading"
    >
      <div className="flex justify-between">
        <span className="label text-muted">Portfolio · 2026</span>
        <span className="label text-muted">Lagos, NG</span>
      </div>
      <div className="flex items-end justify-between gap-6">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2rem,6vw,5rem)] leading-none font-semibold tracking-tight"
          >
            Yusuf <span className="font-serif font-normal italic">Abdulazeez</span>
          </motion.p>
        </div>
        <span className="font-display text-[clamp(3rem,12vw,10rem)] leading-[0.8] font-light tabular-nums">
          {count}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 h-px bg-accent" style={{ width: `${count}%` }} />
    </motion.div>
  )
}
