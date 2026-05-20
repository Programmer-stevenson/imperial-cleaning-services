import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Clock, Menu, X, ArrowRight, MapPin } from 'lucide-react'
import { EASE_OUT } from './motion'

/* Slim top strip — phone, hours, location */
function UtilityBar() {
  return (
    <div className="hidden md:block bg-navy text-white/70 text-[11px]">
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <MapPin size={11} className="text-royal-300" />
            Serving the Las Vegas Valley
          </span>
          <span className="hidden lg:flex items-center gap-2 text-white/50">
            <Clock size={11} /> Mon–Sun · 7:00 AM – 8:00 PM
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-white/50">Licensed · Bonded · Insured</span>
          <a href="tel:7024184471" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={11} /> (702) 418-4471
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true }); h()
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Home',         href: '#hero' },
    { label: 'Services',     href: '#services' },
    { label: 'About',        href: '#about' },
    { label: 'How It Works', href: '#process' },
    { label: 'Reviews',      href: '#testimonials' },
    { label: 'Contact',      href: '#contact' },
  ]

  // When the menu is open on mobile, treat the bar as "solid" so its
  // contents stay readable against the paper-colored dropdown.
  const solid = scrolled || menuOpen

  return (
    <>
      {/* Fixed overlay — floats above the page so the transparent
          nav reveals whatever section is behind it (the dark hero). */}
      <div className="fixed top-0 left-0 w-full z-50">
        <UtilityBar />
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className={`w-full transition-all duration-300 ${
            solid
              ? 'bg-paper/95 backdrop-blur-xl border-b border-navy/10 shadow-sm'
              : 'bg-transparent border-b border-transparent'
          }`}
        >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
          {/* Logo — swaps white ⇄ blue with the scroll state */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-4 group"
          >
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              {/* White logo — visible when transparent */}
              <img
                src="/logo-white.jpg"
                alt="Imperial Cleaning Services"
                className={`absolute inset-0 h-full w-full object-cover rounded-full ring-1 ring-white/15
                            transition-opacity duration-300 ${solid ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* Blue logo — visible when solid */}
              <img
                src="/logo-blue.jpg"
                alt="Imperial Cleaning Services"
                className={`absolute inset-0 h-full w-full object-cover rounded-full ring-1 ring-navy/10
                            group-hover:ring-imperialBlue/40 transition-opacity duration-300
                            ${solid ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className={`font-display text-[20px] tracking-tight transition-colors duration-300 ${
                solid ? 'text-navy' : 'text-white'
              }`}>
                Imperial Cleaning
              </span>
              <span className={`font-mono text-[9px] tracking-[0.25em] uppercase mt-1.5 transition-colors duration-300 ${
                solid ? 'text-navy/50' : 'text-white/60'
              }`}>
                Las Vegas · Since 2025
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href === '#hero') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={`nav-link relative text-[14px] font-medium transition-colors duration-300 ${
                  solid ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side — phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:7024184471"
              className={`hidden lg:flex items-center gap-2 font-medium text-sm transition-colors duration-300 ${
                solid ? 'text-navy hover:text-imperialBlue' : 'text-white hover:text-royal-200'
              }`}
            >
              <Phone size={14} /> (702) 418-4471
            </a>
            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase px-5 py-3
                          transition-colors duration-300 ${
                solid
                  ? 'bg-navy text-white hover:bg-imperialBlue'
                  : 'bg-white text-navy hover:bg-royal-100'
              }`}
            >
              Request a Quote
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              solid ? 'text-navy' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="md:hidden bg-paper border-t border-navy/10 overflow-hidden"
            >
              <div className="px-6 py-7 flex flex-col gap-5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === '#hero') {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                      setMenuOpen(false)
                    }}
                    className="font-display text-2xl text-navy hover:text-imperialBlue transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-navy/10 flex flex-col gap-3">
                  <a
                    href="tel:7024184471"
                    className="flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold py-3.5 hover:bg-navy hover:text-white transition-colors"
                  >
                    <Phone size={14} /> (702) 418-4471
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="bg-navy text-white text-center text-[12px] font-semibold tracking-wider uppercase py-4 hover:bg-imperialBlue transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Request a Quote <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      </div>
    </>
  )
}