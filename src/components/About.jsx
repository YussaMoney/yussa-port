import { animate, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'
import { Reveal, RevealText } from './Reveal'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="gutter py-28 md:py-40">
      <div className="grid grid-cols-12 gap-x-4 gap-y-10">
        <p className="label col-span-12 text-muted md:col-span-3">(01) — About</p>

        <div className="col-span-12 md:col-span-9">
          <RevealText
            as="h2"
            text="I studied wildlife, then fell for the web. Now I build sites that work for real businesses, and help the people behind them actually use them."
            className="font-display text-[clamp(1.9rem,4.6vw,4.4rem)] leading-[1.02] font-medium tracking-[-0.03em]"
            stagger={0.025}
          />

          <div className="mt-14 grid gap-8 text-lg leading-relaxed text-ink/80 md:grid-cols-2 md:gap-12">
            <Reveal>
              <p>
                I taught myself JavaScript and React through The Odin Project while finishing a degree in Wildlife and
                Ecotourism at the University of Ibadan. Since then I’ve shipped websites for real estate developers, an
                ICT company and a continent-wide awards platform.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                By day I coordinate a TETFund digital transformation programme across 24 institutions, training staff and
                fixing what gets in their way. It keeps me honest: a website only matters if people can use it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-24 grid border-t border-line md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.1}
            className="border-b border-line py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
          >
            <p className="font-display text-7xl font-light tracking-tight md:text-8xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 max-w-xs text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
