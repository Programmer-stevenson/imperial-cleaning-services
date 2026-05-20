import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'

export const EASE_OUT = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT } },
}
export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
}
export const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
}

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CountUp({ to, suffix = '', duration = 2, className = '', decimals = null }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mv = useMotionValue(0)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const unsub = mv.on('change', v => setVal(v))
    return () => unsub()
  }, [mv])

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, to, { duration, ease: EASE_OUT })
    return controls.stop
  }, [inView, to, duration, mv])

  const display = decimals !== null
    ? val.toFixed(decimals)
    : to < 10 && !Number.isInteger(to)
      ? val.toFixed(1)
      : Math.round(val).toLocaleString()

  return <span ref={ref} className={`tabular ${className}`}>{display}{suffix}</span>
}
