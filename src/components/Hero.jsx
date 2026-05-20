import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Phone, ChevronDown, ArrowRight, X } from 'lucide-react'
import { EASE_OUT } from './motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const yFront  = useTransform(scrollY, [0, 800], [0, 60])
  const opacity = useTransform(scrollY, [0, 650, 950], [1, 1, 0])

  // ── Intro video state ──────────────────────────────────────────────
  // Plays on every refresh. We still honor prefers-reduced-motion
  // so people with that accessibility setting on aren't forced into it.
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    return !reduce
  })

  const videoRef = useRef(null)

  // Lock scroll while the intro is on top of the page
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [showIntro])

  // Safety: even if the `onEnded` event doesn't fire (some mobile quirks),
  // we hide the intro after the video's natural length + a small buffer.
  useEffect(() => {
    if (!showIntro) return
    const t = setTimeout(() => finishIntro(), 8000)
    return () => clearTimeout(t)
  }, [showIntro])

  const finishIntro = () => {
    setShowIntro(false)
  }

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          Intro video — full-screen splash, fades out into the hero
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE_OUT }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#04164e' }}
          >
            <video
              ref={videoRef}
              src="/hero_video.mp4"
              poster="/hero_video_poster.jpg"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={finishIntro}
              className="w-[78%] max-w-2xl md:max-w-xl aspect-video object-contain"
            />

            {/* Welcome line — soft fade in */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: EASE_OUT }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center px-6"
            >
              <div className="font-mono text-[10px] tracking-[0.35em] text-white/60 uppercase mb-2">
                Welcome to
              </div>
              <div className="font-display italic text-white text-2xl md:text-3xl">
                Imperial Cleaning Services
              </div>
            </motion.div>

            {/* Skip button — respects the user's time */}
            <button
              onClick={finishIntro}
              className="absolute top-6 right-6 md:top-8 md:right-8 inline-flex items-center gap-2 border border-white/25 text-white/80 hover:text-white hover:border-white/60 text-[11px] font-medium tracking-[0.2em] uppercase px-4 py-2 transition-colors backdrop-blur-sm bg-white/[0.03]"
              aria-label="Skip intro"
            >
              Skip <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────
          The hero itself — sits behind the intro, fully ready
          ───────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[112svh] flex items-center justify-center overflow-hidden bg-navy-950 text-white isolate pt-28 pb-40"
      >
        {/* Atmosphere */}
        <div className="absolute inset-0 mesh-navy" />
        <div className="absolute inset-0 bg-grid-dark bg-grid-lg opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-imperialBlue/35 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-royal-600/20 blur-[100px] pointer-events-none" />

        <motion.div
          style={{ y: yFront, opacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          {/* Tagline strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: showIntro ? 0 : 0.1 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <span className="h-px w-12 bg-royal-300/50" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-royal-200/80">
              Las Vegas's Premier Cleaning Company
            </span>
            <span className="h-px w-12 bg-royal-300/50" />
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: showIntro ? 0 : 0.2 }}
            className="flex justify-center mb-10"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 -m-6 rounded-full bg-imperialBlue/40 blur-2xl" />
              <img
                src="/logo-white.jpg"
                alt="Imperial Cleaning Services"
                className="relative h-44 w-44 md:h-56 md:w-56 object-cover rounded-full crisp-edge ring-1 ring-white/15 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: showIntro ? 0 : 0.35 }}
            className="font-display font-light text-white leading-[0.95] tracking-tightest
                       text-5xl md:text-7xl lg:text-8xl mb-8"
          >
            Excellence in
            <br />
            <span className="ital-emph text-royal-300">Every Corner.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: showIntro ? 0 : 0.5 }}
            className="text-white/65 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Enterprise-grade cleaning solutions for commercial properties, luxury residences,
            and businesses across the Las Vegas Valley.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: showIntro ? 0 : 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-light">
              Get Your Free Quote <ArrowRight size={14} />
            </a>
            <a href="tel:7024184471" className="btn-outline-light">
              <Phone size={14} /> (702) 418-4471
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: showIntro ? 0 : 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: EASE_OUT }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/35">Scroll</span>
            <ChevronDown size={16} className="text-white/35" />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}