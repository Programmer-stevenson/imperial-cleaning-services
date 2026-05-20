import React from 'react'
import { motion } from 'framer-motion'
import { Plane, Building2, Home, PackageOpen, Hammer, Sparkles, ArrowUpRight } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

/* What Imperial actually does — each card carries a real photo, dimmed
   under a navy gradient so it blends with the site's palette. */
const services = [
  {
    icon: Plane, title: 'Airbnb & Rental Turnovers',
    desc: 'Fast, reliable turnovers between guests — fresh linens, restock, and a guest-ready check so your next review stays five stars.',
    tags: ['Same-day available', 'Linens & restock', 'Guest-ready photos'],
    img: '/airbnb.jpg',
    tone: 'feature',
  },
  {
    icon: Building2, title: 'Commercial & Office',
    desc: 'Offices, storefronts, and small businesses kept clean on a schedule that works around your hours.',
    tags: ['Nights or weekends', 'Recurring plans'],
    img: '/commercial.png',
  },
  {
    icon: PackageOpen, title: 'Move-In / Move-Out',
    desc: 'Deep top-to-bottom cleans for empty homes — perfect for landlords, tenants, and realtors prepping a listing.',
    tags: ['Deposit-ready', 'Inside cabinets & appliances'],
    img: '/moveout.jpg',
  },
  {
    icon: Home, title: 'Residential Cleaning',
    desc: 'Regular house cleaning across the Valley — weekly, biweekly, or monthly, done by the same trusted cleaners each visit.',
    tags: ['Weekly / biweekly', 'One-time deep cleans'],
    img: '/reseidential.jpg',
    tone: 'wide',
  },
  {
    icon: Hammer, title: 'Post-Construction',
    desc: 'Final cleanup after a remodel or new build — dust, debris, and fine particulate cleared so the space is ready to show.',
    tags: ['Dust & debris removal', 'Detail finish'],
    img: '/postcon.jpg',
  },
  {
    icon: Sparkles, title: 'Deep Cleaning',
    desc: 'A thorough reset for spaces that need extra attention — baseboards, vents, grout, and the spots that get missed.',
    tags: ['Top-to-bottom detail', 'Great first-time clean'],
    img: '/deepclean.jpg',
  },
]

export default function Sectors() {
  return (
    <section id="services" className="relative bg-paper py-28 md:py-36 border-b border-navy/10">
      <div className="absolute inset-0 bg-grid-light bg-grid-lg opacity-50 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="index-label mb-6">Our Services</span>
              <h2 className="h-section mt-5 text-balance">
                Cleaning for homes,
                <br /><span className="ital-emph text-imperialBlue">rentals & businesses.</span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-navy/55 leading-relaxed text-pretty">
              We&rsquo;re a locally owned cleaning company serving the Las Vegas Valley.
              Newly in business and building our reputation one spotless job at a time —
              whatever the space, we&rsquo;d love to help.
            </p>
          </motion.div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-12 gap-px bg-navy/10 border border-navy/10">
            {services.map((s, i) => {
              const span = s.tone === 'feature' ? 'col-span-12 md:col-span-6'
                          : s.tone === 'wide'    ? 'col-span-12 md:col-span-6'
                          : 'col-span-12 sm:col-span-6 md:col-span-3'
              const tall = s.tone === 'feature' || s.tone === 'wide'
              return (
                <motion.a key={s.title} href="#contact" variants={fadeUp} custom={i}
                  className={`group relative overflow-hidden bg-navy-950 flex flex-col justify-end
                              ${tall ? 'min-h-[420px] md:min-h-[480px]' : 'min-h-[380px]'} ${span}`}>

                  {/* Photo */}
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover
                               transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />

                  {/* Navy gradient — lighter, keeps photos vivid while text stays readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/45 to-navy-950/5" />
                  <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative p-7 md:p-9">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 border border-white/25 bg-white/[0.06] backdrop-blur-sm
                                      flex items-center justify-center">
                        <s.icon size={18} className="text-royal-300" />
                      </div>
                      <ArrowUpRight size={18} className="text-white/50 group-hover:text-white
                                                         group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                                         transition-all" />
                    </div>

                    <h3 className="font-display font-light text-2xl md:text-3xl text-white leading-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/65 max-w-[36ch] mb-6">
                      {s.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-5 border-t border-white/15">
                      {s.tags.map((t) => (
                        <span key={t} className="font-mono text-[10px] tracking-[0.12em] uppercase
                                                 text-white/70 border border-white/20 px-2.5 py-1
                                                 group-hover:border-royal-300/50 group-hover:text-royal-200
                                                 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </Reveal>

        {/* Soft closing line — honest, friendly */}
        <Reveal>
          <motion.p variants={fadeUp} className="text-center text-navy/50 text-sm mt-12">
            Don&rsquo;t see exactly what you need?{' '}
            <a href="#contact" className="text-imperialBlue font-medium hover:underline">Just ask</a>
            {' '}— we&rsquo;re flexible and happy to put together a custom clean.
          </motion.p>
        </Reveal>
      </div>
    </section>
  )
}