import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { profile, socials } from '../data'
import { lockScroll, scrollToId } from '../lib/scroll'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function LagosTime({ className = '' }) {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: profile.timezone,
    }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => {
    const t = setInterval(() => setTime(fmt()), 15000)
    return () => clearInterval(t)
  }, [])
  return (
    <span className={className}>
      Lagos <span className="tabular-nums">{time}</span> WAT
    </span>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    lockScroll(open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    // Let the menu start closing before scrolling.
    setTimeout(() => scrollToId(id), open ? 350 : 0)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 gutter text-ink mix-blend-difference">
        <nav className="flex items-center justify-between py-5" aria-label="Main">
          <a href="#top" onClick={go('top')} className="font-display text-lg font-semibold tracking-tight">
            Yussa<span className="align-super text-[0.6em]">©</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={go(l.id)} className="label link-underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <LagosTime className="label hidden lg:block" />

          <button
            type="button"
            className="label relative z-10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg-2 gutter pt-24 pb-8 md:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="space-y-2">
              {links.map((l, i) => (
                <li key={l.id} className="overflow-hidden">
                  <motion.a
                    href={`#${l.id}`}
                    onClick={go(l.id)}
                    className="block font-display text-6xl font-semibold tracking-tight"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <a href={`mailto:${profile.email}`} className="block break-all text-muted">
                {profile.email}
              </a>
              <div className="flex gap-5">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="label">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
