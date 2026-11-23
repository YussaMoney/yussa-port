import { AnimatePresence } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import Services from './components/Services'
import Work from './components/Work'
import { lockScroll, prefersReducedMotion, startSmoothScroll } from './lib/scroll'

// Show the intro once per browser session.
function shouldShowIntro() {
  if (prefersReducedMotion()) return false
  try {
    return sessionStorage.getItem('intro-seen') !== '1'
  } catch {
    return true
  }
}

export default function App() {
  const [loading, setLoading] = useState(shouldShowIntro)

  useEffect(() => startSmoothScroll(), [])

  useEffect(() => {
    lockScroll(loading)
  }, [loading])

  const done = useCallback(() => {
    try {
      sessionStorage.setItem('intro-seen', '1')
    } catch {
      /* storage unavailable: intro will just play again next time */
    }
    setLoading(false)
  }, [])

  return (
    <>
      <a
        href="#work"
        className="label fixed top-3 left-3 z-[90] -translate-y-20 rounded bg-accent px-3 py-2 text-cream-ink focus:translate-y-0"
      >
        Skip to work
      </a>
      <AnimatePresence>{loading && <Preloader onDone={done} />}</AnimatePresence>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Nav />
      <main>
        <Hero ready={!loading} />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
