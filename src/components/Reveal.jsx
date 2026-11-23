import { motion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]

const wordVariants = {
  hidden: { y: '110%' },
  show: (i) => ({ y: 0, transition: { duration: 1, ease, delay: i } }),
}

// Each word slides up from behind a mask as the text scrolls into view.
// The in-view check runs on the outer element: the words themselves start
// hidden inside their masks, so they can never be "seen" on their own.
export function RevealText({ text, as = 'span', className = '', delay = 0, stagger = 0.04, once = true }) {
  const Tag = motion[as]
  const words = text.split(' ')
  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -10% 0px' }}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] align-top">
          <motion.span className="inline-block" variants={wordVariants} custom={delay + i * stagger}>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export function Reveal({ children, className = '', delay = 0, y = 32, as = 'div' }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </Comp>
  )
}
