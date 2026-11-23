import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { profile } from '../data'
import { scrollToId } from '../lib/scroll'

const ease = [0.16, 1, 0.3, 1]

function Letters({ word, delay = 0, className = '' }) {
  return (
    <span className={`flex overflow-hidden ${className}`} aria-hidden="true">
      {word.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '105%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, ease, delay: delay + i * 0.035 }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

// Rotating text ring around the "available" badge.
function Badge() {
  const text = 'Available for work · Full-Stack Dev · '
  return (
    <div className="relative size-28 shrink-0 md:size-32">
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin-slow_18s_linear_infinite]" aria-hidden="true">
        <defs>
          <path id="ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink font-mono text-[7.4px] uppercase tracking-[0.24em]">
          <textPath href="#ring">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto size-3 rounded-full bg-accent shadow-[0_0_24px_4px_rgba(143,240,208,0.45)]" />
    </div>
  )
}

export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden gutter pt-24 pb-8 md:min-h-[max(100svh,640px)]"
    >
      <h1 className="sr-only">
        {profile.name}, {profile.role} in {profile.location}
      </h1>

      <div className="relative grid flex-1 grid-cols-12 gap-x-4">
        {/* Portrait */}
        <motion.figure
          className="relative col-span-8 col-start-3 row-start-1 mt-6 aspect-[3/4] max-h-[62svh] self-start justify-self-center overflow-hidden rounded-[2px] sm:col-span-6 sm:col-start-4 md:col-span-4 md:col-start-8 md:mt-2 lg:col-span-3 lg:col-start-9"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={ready ? { clipPath: 'inset(0% 0 0 0)' } : {}}
          transition={{ duration: 1.4, ease, delay: 0.35 }}
        >
          <motion.img
            src="/images/yusuf-portrait.webp"
            srcSet="/images/yusuf-portrait-sm.webp 560w, /images/yusuf-portrait.webp 1100w"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 66vw"
            alt="Portrait of Yusuf Abdulazeez in graduation gown"
            className="h-full w-full object-cover object-top"
            style={{ y: imgY, scale: imgScale }}
            fetchPriority="high"
          />
          <figcaption className="label absolute bottom-3 left-3 rounded-sm bg-black/45 px-1.5 py-0.5 text-ink">B.Sc · UI ’25</figcaption>
        </motion.figure>

        {/* Name */}
        <motion.div
          style={{ y: textY }}
          className="pointer-events-none relative z-10 col-span-12 col-start-1 row-start-1 self-end font-display leading-[0.82] font-bold tracking-[-0.045em] uppercase mix-blend-difference"
        >
          {/* Letters mount only after the preloader, so they animate in on cue */}
          {ready && (
            <>
              <Letters word="Yusuf" delay={0.1} className="text-[clamp(4.2rem,19vw,17rem)]" />
              <Letters
                word="Abdulazeez"
                delay={0.25}
                className="text-[clamp(2.6rem,12.4vw,15.5rem)] text-ink"
              />
            </>
          )}
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        className="relative z-10 mt-6 grid grid-cols-12 items-end gap-x-4 gap-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease, delay: 0.9 }}
      >
        <p className="col-span-12 max-w-md leading-snug text-ink/90 md:col-span-5 md:text-lg">
          <span className="font-serif text-2xl italic md:text-3xl">Full-stack developer</span> in Lagos. {profile.intro}
        </p>
        <div className="col-span-6 flex items-start gap-4 md:col-span-4 md:col-start-7">
          <img
            src="/images/yusuf-passport-sm.webp"
            alt="Passport photo of Yusuf Abdulazeez"
            width="56"
            height="72"
            className="hidden h-[72px] w-14 shrink-0 rounded-[2px] object-cover ring-1 ring-ink/15 sm:block"
          />
          <div>
            <p className="label text-muted">Currently</p>
            <p className="mt-2 leading-snug">Zonal Coordinator at E-Tech / ICDL, and freelancing on the side</p>
          </div>
        </div>
        <div className="col-span-6 flex items-end justify-end gap-6 md:col-span-2 md:col-start-11">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('work')
            }}
            className="label link-underline hidden pb-2 whitespace-nowrap xl:inline"
          >
            Scroll ↓
          </a>
          <Badge />
        </div>
      </motion.div>
    </section>
  )
}
