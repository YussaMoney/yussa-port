import { services } from '../data'
import { Reveal, RevealText } from './Reveal'

export default function Services() {
  return (
    <section className="bg-cream text-cream-ink">
      <div className="gutter py-28 md:py-40">
        <div className="grid grid-cols-12 gap-x-4 gap-y-6">
          <p className="label col-span-12 text-cream-muted md:col-span-3">(03) — What I do</p>
          <RevealText
            as="h2"
            text="Design, code, and getting people to use it."
            className="col-span-12 font-display text-[clamp(2.2rem,5.6vw,5.4rem)] leading-[0.98] font-semibold tracking-[-0.04em] md:col-span-9"
            stagger={0.035}
          />
        </div>

        <ol className="mt-20 border-t border-cream-ink/15">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 0.08}
              className="group grid grid-cols-12 gap-x-4 gap-y-3 border-b border-cream-ink/15 py-10 md:py-14"
            >
              <span className="label col-span-2 pt-2 text-cream-muted md:col-span-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="col-span-10 font-display text-3xl font-medium tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 md:col-span-4 md:text-5xl">
                {s.title}
              </h3>
              <p className="col-span-10 col-start-3 max-w-md text-lg leading-relaxed text-cream-muted md:col-span-4 md:col-start-9">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
