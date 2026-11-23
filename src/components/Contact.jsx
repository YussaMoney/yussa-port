import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, useState } from 'react'
import { profile, socials } from '../data'
import { scrollToId } from '../lib/scroll'
import { LagosTime } from './Nav'
import { RevealText } from './Reveal'

const YEAR = new Date().getFullYear()

// Button that leans toward the pointer.
function Magnetic({ children, className = '', ...props }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.a ref={ref} style={{ x, y }} onPointerMove={move} onPointerLeave={reset} className={className} {...props}>
      {children}
    </motion.a>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-bg-2 gutter pt-28 pb-8 md:pt-40">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <p className="label col-span-12 text-muted md:col-span-3">(05) — Contact</p>
        <div className="col-span-12 md:col-span-9">
          <p className="font-serif text-3xl text-muted italic md:text-4xl">Have a project in mind?</p>
          <h2 className="mt-2 font-display text-[clamp(3.4rem,13vw,13rem)] leading-[0.85] font-bold tracking-[-0.055em] uppercase">
            <RevealText text="Let’s talk" />
          </h2>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-12 items-center gap-x-4 gap-y-8 md:mt-20">
        <div className="col-span-12 flex flex-wrap items-center gap-4 md:col-span-9 md:col-start-4">
          <Magnetic
            href={`mailto:${profile.email}`}
            className="flex size-36 items-center justify-center rounded-full bg-accent text-center font-display text-lg font-semibold text-cream-ink md:size-44 md:text-xl"
            data-cursor="Write"
          >
            Email me
          </Magnetic>
          <button
            type="button"
            onClick={copy}
            className="group min-w-0 text-left"
            aria-label={`Copy email address ${profile.email}`}
          >
            <span className="label block text-muted">{copied ? 'Copied to clipboard ✓' : 'Or copy my address'}</span>
            <span className="link-underline mt-1 inline break-all font-display text-xl md:text-3xl">{profile.email}</span>
          </button>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
        <div>
          <p className="label text-muted">Socials</p>
          <ul className="mt-3 space-y-1.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-muted">Résumé</p>
          <a href={profile.cv} download className="link-underline mt-3 inline-block">
            Download CV (PDF)
          </a>
        </div>
        <div>
          <p className="label text-muted">Local time</p>
          <LagosTime className="mt-3 block" />
        </div>
        <div className="md:text-right">
          <p className="label text-muted">Back up</p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('top')
            }}
            className="link-underline mt-3 inline-block"
          >
            To the top ↑
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-16 font-display text-[22vw] leading-[0.75] font-bold tracking-[-0.06em] text-ink/[0.06] uppercase select-none"
      >
        Yussa
      </div>
      <p className="label mt-6 flex flex-wrap justify-between gap-2 text-muted">
        <span>© {YEAR} Yusuf Abdulazeez</span>
        <span>Designed & built by me in Lagos</span>
      </p>
    </footer>
  )
}
