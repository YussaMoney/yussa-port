import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { earlierWork, projects } from '../data'
import { Reveal, RevealText } from './Reveal'

function StatusDot({ status }) {
  const live = status === 'Live'
  return (
    <span className="label inline-flex items-center gap-2">
      <span className={`size-1.5 rounded-full ${live ? 'bg-accent' : 'bg-muted'}`} />
      {status}
    </span>
  )
}

// Cards stick to the top and stack; earlier cards shrink and dim as the
// next one slides over them.
function useIsDesktop() {
  const query = '(min-width: 768px)'
  const [match, setMatch] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMatch(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return match
}

function ProjectCard({ project, index, total, progress, stack }) {
  const start = index / total
  const scale = useTransform(progress, [start, 1], [1, stack ? 1 - (total - index) * 0.035 : 1])
  const dim = useTransform(progress, [start, 1], [0, stack ? (total - index - 1) * 0.12 : 0])
  const primary = project.links[0]

  return (
    <div
      className={stack ? 'sticky top-0 flex min-h-[100svh] items-center' : 'py-3'}
      style={stack ? { paddingTop: index * 24 } : undefined}
    >
      <motion.article
        style={{ scale, backgroundColor: project.tone }}
        className="relative w-full origin-top overflow-hidden rounded-xl border border-white/10"
      >
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 z-10 bg-black" />
        <div className="grid gap-6 p-5 md:grid-cols-12 md:gap-8 md:p-8">
          <div className="flex flex-col justify-between gap-8 md:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="label text-ink/60">
                  {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </span>
                <StatusDot status={project.status} />
              </div>
              <h3 className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.95] font-semibold tracking-[-0.035em]">
                {project.title}
              </h3>
              <p className="mt-2 font-serif text-xl text-ink/70 italic">
                {project.kind} · {project.year}
              </p>
              <p className="mt-6 max-w-md leading-relaxed text-ink/85">{project.summary}</p>
            </div>

            <div className="space-y-5">
              <dl className="grid grid-cols-2 gap-4 border-t border-white/15 pt-5 text-sm">
                <div>
                  <dt className="label text-ink/50">Role</dt>
                  <dd className="mt-1">{project.role}</dd>
                </div>
                <div>
                  <dt className="label text-ink/50">Stack</dt>
                  <dd className="mt-1">{project.stack.join(', ')}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-3">
                {project.links.length ? (
                  project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="label rounded-full border border-ink/30 px-4 py-2.5 transition-colors hover:bg-ink hover:text-cream-ink"
                    >
                      {l.label} ↗
                    </a>
                  ))
                ) : (
                  <span className="label rounded-full border border-dashed border-ink/25 px-4 py-2.5 text-ink/60">
                    Preview on request
                  </span>
                )}
              </div>
            </div>
          </div>

          <a
            href={primary?.href}
            target={primary ? '_blank' : undefined}
            rel="noreferrer"
            tabIndex={primary ? undefined : -1}
            aria-label={primary ? `${primary.label}: ${project.title}` : undefined}
            data-cursor={primary ? 'Visit' : 'Soon'}
            className={`group relative order-first block overflow-hidden rounded-md md:order-none md:col-span-7 ${primary ? '' : 'cursor-default'}`}
            onClick={(e) => !primary && e.preventDefault()}
          >
            <img
              src={project.image}
              srcSet={`${project.imageSm} 720w, ${project.image} 1440w`}
              sizes="(min-width: 768px) 55vw, 92vw"
              alt={`Screenshot of the ${project.title} homepage`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
          </a>
        </div>
      </motion.article>
    </div>
  )
}

export default function Work() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const stack = useIsDesktop()

  return (
    <section id="work" className="gutter pt-28 md:pt-40">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <p className="label col-span-12 text-muted md:col-span-3">(02) — Selected work</p>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display text-[clamp(3rem,10vw,9.5rem)] leading-[0.85] font-bold tracking-[-0.05em] uppercase">
            <RevealText text="Things I’ve" />
            <br />
            <RevealText text="built" delay={0.1} />{' '}
            <span className="font-serif font-normal tracking-[-0.02em] normal-case italic">
              <RevealText text="lately" delay={0.18} />
            </span>
          </h2>
        </div>
      </div>

      <div ref={ref} className="relative mt-10">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} total={projects.length} progress={scrollYProgress} stack={stack} />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-x-4 gap-y-6 pt-16 pb-8 md:pt-24">
        <p className="label col-span-12 text-muted md:col-span-3">Earlier experiments</p>
        <ul className="col-span-12 border-t border-line md:col-span-9">
          {earlierWork.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 0.05} y={16} className="border-b border-line">
              <a
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-accent"
              >
                <span className="font-display text-2xl font-medium tracking-tight md:text-3xl">{w.title}</span>
                <span className="label shrink-0 text-muted transition-colors group-hover:text-accent">
                  {w.stack} ↗
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
