import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

// A soft dot that trails the mouse. It grows over links and shows a label
// over anything marked with data-cursor="Label". Hidden on touch screens.
export default function Cursor() {
  const [enabled] = useState(
    () =>
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [label, setLabel] = useState('')
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const target = e.target.closest('[data-cursor], a, button')
      setHovering(Boolean(target))
      setLabel(target?.dataset.cursor ?? '')
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  const size = label ? 88 : hovering ? 44 : 12

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] flex items-center justify-center rounded-full border"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: size,
        height: size,
        backgroundColor: label ? 'rgba(143,240,208,1)' : hovering ? 'rgba(243,235,224,0.15)' : 'rgba(243,235,224,1)',
        borderColor: hovering && !label ? 'rgba(243,235,224,0.6)' : 'rgba(243,235,224,0)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
    >
      <span className="label border-0 text-[0.65rem] text-cream-ink">{label}</span>
    </motion.div>
  )
}
