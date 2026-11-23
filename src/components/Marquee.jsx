import { marquee } from '../data'

export default function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="overflow-hidden border-y border-line py-6">
      <p className="sr-only">Skills: {marquee.join(', ')}</p>
      <div className="flex w-max animate-[marquee_38s_linear_infinite]" aria-hidden="true">
        {row.map((item, i) => (
          <span key={i} className="flex items-center font-display text-4xl font-medium tracking-tight md:text-6xl">
            <span className="px-6 md:px-10">{item}</span>
            <span className="font-serif text-3xl text-accent italic md:text-5xl">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}
