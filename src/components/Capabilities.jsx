import React from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

/* "Every clean includes" — a checklist of what's always done,
   grouped room-by-room. Complements the Services section instead
   of repeating the same six service types. */
const checklist = [
  {
    room: 'Kitchen',
    items: [
      'Counters, backsplash & sink scrubbed',
      'Stovetop, microwave & appliance fronts',
      'Cabinet faces wiped down',
      'Floors swept & mopped',
    ],
  },
  {
    room: 'Bathrooms',
    items: [
      'Toilet, tub & shower sanitized',
      'Mirrors & glass polished streak-free',
      'Sink, counters & fixtures shined',
      'Floors disinfected',
    ],
  },
  {
    room: 'Living & Bedrooms',
    items: [
      'Dusting — surfaces, sills & ledges',
      'Vacuum carpets & rugs',
      'Hard floors swept & mopped',
      'Mirrors & glass surfaces',
    ],
  },
  {
    room: 'Throughout',
    items: [
      'Trash emptied & liners replaced',
      'Light switches & door handles wiped',
      'Baseboards spot-cleaned',
      'Final walk-through before we leave',
    ],
  },
]

export default function Capabilities() {
  return (
    <section className="relative bg-navy-950 text-white py-28 md:py-36 overflow-hidden">
      {/* Atmosphere — matches the rest of the site's dark sections */}
      <div className="absolute inset-0 mesh-navy opacity-70" />
      <div className="absolute inset-0 bg-grid-dark bg-grid-lg opacity-30 pointer-events-none" />
      <div className="absolute -top-20 right-1/4 w-[700px] h-[400px] bg-imperialBlue/25 blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        {/* Header */}
        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="index-label-dark mb-6">
                <span className="h-px w-8 bg-white/25" />
                What&rsquo;s Included
              </span>
              <h2 className="h-section-light mt-6 text-balance">
                Every clean covers
                <br /><span className="ital-emph text-royal-300">all of this.</span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-span-4 text-white/55 leading-relaxed text-pretty">
              No upsells, no surprises. Whether it&rsquo;s a one-time deep clean or a
              weekly visit, this checklist comes standard — top to bottom, room by room.
            </p>
          </motion.div>
        </Reveal>

        {/* Checklist grid */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
            {checklist.map((group, gi) => (
              <motion.div
                key={group.room}
                variants={fadeUp}
                custom={gi}
                className="group relative border border-white/12 bg-white/[0.03] p-5 sm:p-7 md:p-8
                           hover:bg-white/[0.06] hover:border-white/25 transition-all duration-500"
              >
                {/* Room label */}
                <div className="mb-7 pb-5 border-b border-white/10">
                  <h3 className="font-display font-light text-2xl text-white">{group.room}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-royal-300/15 border border-royal-300/40
                                       flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-royal-300" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-white/65 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <Sparkles size={15} className="text-royal-300 flex-shrink-0" />
              Need something extra — inside the fridge, oven, windows, or laundry? Just ask when you book.
            </p>
            <a href="#contact" className="btn-light flex-shrink-0">
              Get a Free Quote <ArrowRight size={14} />
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}