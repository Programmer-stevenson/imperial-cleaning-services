import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

/* ── Closing call-to-action band ─────────────────────────────────── */
export function CTABanner() {
  return (
    <section className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-navy opacity-95" />
      <div className="absolute inset-0 bg-grid-dark bg-grid-lg opacity-25 pointer-events-none" />

      <Reveal className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp}>
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-6">Ready When You Are</div>
          <h2 className="h-section-light mt-5 text-balance">
            Let&rsquo;s get your space
            <br /><span className="ital-emph text-royal-300">truly clean.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg mt-6 mb-10 font-light max-w-xl mx-auto">
            Tell us about your home, rental, or business and we&rsquo;ll send a free,
            no-pressure quote — usually within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-light">
              Request a Free Quote <ArrowRight size={14} />
            </a>
            <a href="tel:7024184471" className="btn-outline-light">
              <Phone size={14} /> (702) 418-4471
            </a>
          </div>
        </motion.div>
      </Reveal>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────────────── */
export function Footer() {
  const navLinks = [
    ['Services', '#services'], ['About', '#about'], ['How It Works', '#process'],
    ['Reviews', '#testimonials'], ['Contact', '#contact'],
  ]
  const services = [
    'Airbnb & Rental Turnovers', 'Commercial & Office', 'Move-In / Move-Out',
    'Residential Cleaning', 'Post-Construction', 'Deep Cleaning',
  ]

  return (
    <footer className="bg-navy-950 text-white overflow-hidden">
      {/* ── Brand block — centered, breathing room ── */}
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-14 text-center">
        <a href="#hero" className="inline-flex flex-col items-center group">
          <div className="relative mb-6">
            <div className="absolute inset-0 -m-3 rounded-full bg-imperialBlue/40 blur-xl" />
            <img
              src="/logo-white.webp"
              alt="Imperial Cleaning Services"
              className="relative h-24 w-24 md:h-28 md:w-28 object-cover rounded-full ring-1 ring-white/15 group-hover:ring-white/35 transition-all"
            />
          </div>
          <span className="font-display text-3xl md:text-4xl tracking-tight">Imperial Cleaning</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/45 uppercase mt-3">
            Las Vegas, Nevada
          </span>
        </a>

        <p className="text-white/55 leading-relaxed font-light mt-7 max-w-lg mx-auto">
          A locally owned cleaning company serving homes, rentals, and businesses across
          the Las Vegas Valley — honest work, friendly service, and a clean you can count on.
        </p>

        <div className="font-editorial italic text-2xl md:text-3xl text-royal-300 mt-7">
          It&rsquo;s Going to Shine.
        </div>
      </div>

      {/* ── Links — centered "pyramid" of wrapping pills on mobile,
              three tidy columns on desktop ── */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-14 md:grid md:grid-cols-3 md:gap-8">

          {/* Explore */}
          <div className="text-center md:text-left mb-12 md:mb-0">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/35 mb-6">Explore</div>
            <div className="flex flex-wrap justify-center md:justify-start md:flex-col gap-2.5 md:gap-3 max-w-sm mx-auto md:mx-0">
              {navLinks.map(([l, h]) => (
                <a key={l} href={h}
                  className="text-white/70 text-sm border border-white/10 md:border-0 rounded-full md:rounded-none px-4 py-1.5 md:px-0 md:py-0 hover:text-white hover:border-white/30 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left mb-12 md:mb-0">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/35 mb-6">Services</div>
            <div className="flex flex-wrap justify-center md:justify-start md:flex-col gap-2.5 md:gap-3 max-w-md mx-auto md:mx-0">
              {services.map((s) => (
                <a key={s} href="#services"
                  className="text-white/70 text-sm border border-white/10 md:border-0 rounded-full md:rounded-none px-4 py-1.5 md:px-0 md:py-0 hover:text-white hover:border-white/30 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div className="text-center md:text-left">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/35 mb-6">Get in Touch</div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="tel:7024184471" className="inline-flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors">
                <Phone size={14} className="text-royal-300 flex-shrink-0" /> (702) 418-4471
              </a>
              <a href="mailto:hello@imperialcleaninglv.com" className="inline-flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors">
                <Mail size={14} className="text-royal-300 flex-shrink-0" /> hello@imperialcleaninglv.com
              </a>
              <span className="inline-flex items-center gap-3 text-white/70 text-sm">
                <MapPin size={14} className="text-royal-300 flex-shrink-0" /> Las Vegas Valley, NV
              </span>
              <span className="inline-flex items-center gap-3 text-white/70 text-sm">
                <Clock size={14} className="text-royal-300 flex-shrink-0" /> Mon–Sun · 7 AM – 8 PM
              </span>
              <a href="#contact" className="inline-flex items-center gap-2 text-royal-300 text-sm font-medium hover:text-white transition-colors mt-1">
                Request a Quote <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
            © {new Date().getFullYear()} Imperial Cleaning Services · Las Vegas, NV
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
            Locally Owned · Licensed · Bonded · Insured
          </p>
        </div>
      </div>
    </footer>
  )
}