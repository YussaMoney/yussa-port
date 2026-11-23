import { AnimatePresence, motion } from 'motion/react'
import { useId, useState } from 'react'
import { education, experience, profile } from '../data'
import { Reveal, RevealText } from './Reveal'

function Role({ item, open, onToggle }) {
  const id = useId()
  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="group grid w-full grid-cols-12 items-baseline gap-x-4 gap-y-1 py-7 text-left"
        >
          <span className="col-span-12 font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-accent md:col-span-5 md:text-3xl">
            {item.role}
          </span>
          <span className="col-span-10 text-muted md:col-span-4">{item.org}</span>
          <span className="label col-span-12 text-muted md:col-span-2 md:text-right">{item.period}</span>
          <span
            className={`col-span-2 row-start-2 justify-self-end text-2xl leading-none transition-transform duration-500 md:col-span-1 md:row-start-1 md:col-start-12 ${open ? 'rotate-45' : ''}`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="grid gap-3 pb-8 md:ml-[41.66%] md:max-w-2xl">
              {item.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-ink/80">
                  <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Experience() {
  const [open, setOpen] = useState(0)
  return (
    <section id="experience" className="gutter py-28 md:py-40">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <p className="label col-span-12 text-muted md:col-span-3">(04) — Experience</p>
        <div className="col-span-12 flex flex-wrap items-end justify-between gap-6 md:col-span-9">
          <RevealText
            as="h2"
            text="Where I’ve been"
            className="font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.9] font-bold tracking-[-0.045em] uppercase"
          />
          <a
            href={profile.cv}
            download
            className="label rounded-full bg-accent px-5 py-3 text-cream-ink transition-transform hover:-translate-y-0.5"
          >
            Download CV ↓
          </a>
        </div>
      </div>

      <ul className="mt-16 border-t border-line">
        {experience.map((item, i) => (
          <Role key={item.role} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </ul>

      <div className="mt-24 grid grid-cols-12 gap-x-4 gap-y-6">
        <p className="label col-span-12 text-muted md:col-span-3">Education & certifications</p>
        <ul className="col-span-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
          {education.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 0.05} y={12} className="bg-bg p-6 sm:last:col-span-2">
              <p className="font-display text-xl leading-tight font-medium">{e.title}</p>
              <p className="label mt-3 text-muted">{e.meta}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
