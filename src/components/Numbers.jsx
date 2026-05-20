import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

/* Parts of the Las Vegas Valley we serve. `feature` areas get a
   larger tile; the rest fill in around them. */
const areas = [
  { name: 'Summerlin',        note: 'Master-planned west side', feature: true },
  { name: 'Henderson',        note: 'Green Valley & Anthem' },
  { name: 'Centennial Hills', note: 'Far northwest' },
  { name: 'The Lakes',        note: 'Westside waterfront' },
  { name: 'Spring Valley',    note: 'Central southwest', feature: true },
  { name: 'Enterprise',       note: 'Southwest & Mountains Edge' },
  { name: 'North Las Vegas',  note: 'Aliante & Eldorado' },
  { name: 'Downtown / Arts District', note: 'Historic core' },
  { name: 'Paradise',         note: 'Strip corridor & UNLV' },
  { name: 'Southern Highlands', note: 'South valley', feature: true },
  { name: 'Boulder City',     note: 'By request' },
  { name: 'Whole Valley',     note: '— and everywhere between' },
]

export default function Numbers() {
  return (
    <section id="service-areas" className="relative bg-navy text-white py-28 md:py-36 overflow-hidden">
      {/* Background — kept exactly as the version you liked */}
      <div className="absolute inset-0 mesh-navy opacity-90" />
      <div className="absolute inset-0 bg-grid-dark bg-grid-lg opacity-30 pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[700px] h-[420px] bg-imperialBlue/25 blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Header */}
        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="index-label-dark mb-6">
                <span className="h-px w-8 bg-white/25" />
                Where We Clean
              </span>
              <h2 className="h-section-light mt-6 text-balance">
                Proudly serving the
                <br /><span className="ital-emph text-royal-300">Las Vegas Valley.</span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-white/55 leading-relaxed text-pretty">
              From Summerlin to Henderson and everywhere between — if you&rsquo;re in the
              Valley, we&rsquo;ll come to you. Not sure if we cover your area? Just ask.
            </p>
          </motion.div>
        </Reveal>

        {/* Area grid */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {areas.map((a, i) => (
              <motion.div
                key={a.name}
                variants={fadeUp}
                custom={i}
                className={`group relative bg-navy p-6 md:p-8 overflow-hidden
                            hover:bg-white/[0.05] transition-colors duration-500
                            ${a.feature ? 'sm:col-span-1' : ''}`}
              >
                {/* Hover sheen */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                                bg-gradient-to-r from-transparent via-white/[0.05] to-transparent
                                transition-transform duration-1000 ease-out pointer-events-none" />

                {/* Pin */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors
                                    ${a.feature
                                      ? 'bg-royal-300/15 border border-royal-300/40'
                                      : 'bg-white/[0.04] border border-white/12 group-hover:border-white/25'}`}>
                    <MapPin size={15} className={a.feature ? 'text-royal-300' : 'text-white/60 group-hover:text-royal-300'} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-white/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Name + note */}
                <h3 className="font-display font-light text-white leading-tight
                               text-xl md:text-[26px] mb-1.5">
                  {a.name}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">
                  {a.note}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Footer note + CTA */}
        <Reveal>
          <motion.div
            variants={fadeUp}
            className="mt-14 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-6
                       border-t border-white/10 pt-10"
          >
            <p className="flex items-center gap-3 text-white/55 text-sm text-center md:text-left">
              <MapPin size={15} className="text-royal-300 flex-shrink-0" />
              Outside these areas? Reach out anyway — we travel for the right job.
            </p>
            <a href="#contact" className="btn-light flex-shrink-0">
              Check Your Area <ArrowRight size={14} />
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}