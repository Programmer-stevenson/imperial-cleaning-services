import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

const items = [
  {
    name: 'Sandra Rivera',  role: 'Property Manager',  company: 'Luxury Rentals LV',
    text: 'Imperial has been our go-to for Airbnb turnovers for over two years. Their attention to detail and same-day availability is unmatched. Guests consistently leave 5-star cleanliness reviews.',
    metric: '120+ turnovers / mo',
  },
  {
    name: 'Michael Tanaka', role: 'Office Director',   company: 'Centennial Group',
    text: 'We switched to Imperial after our previous service kept missing spots. The difference was night and day. Professional, punctual, and thorough — exactly what our executive offices require.',
    metric: '42,000 sq ft · weekly',
  },
  {
    name: 'Danielle Kim',   role: 'Homeowner',         company: 'Summerlin',
    text: '"It\'s Going to Shine!" — they mean it. My house has never looked this good. Moved in and within hours the entire space was spotless. I\'ve already referred four neighbors.',
    metric: 'Move-in · 6,200 sq ft',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-paper py-28 md:py-36 border-b border-navy/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="index-label mb-6">008 · Clients</span>
              <h2 className="h-section mt-5 text-balance">
                Operators who don&rsquo;t
                <br /><span className="ital-emph text-imperialBlue">leave cleaning to chance.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex items-center gap-3 text-navy/55 text-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} className="fill-imperialBlue text-imperialBlue" />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase">4.9 avg · Google + Yelp</span>
            </div>
          </motion.div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
            {items.map((t, i) => (
              <motion.figure key={t.name} variants={fadeUp} custom={i}
                className="bg-paper p-8 md:p-10 relative flex flex-col">
                <Quote size={28} className="text-imperialBlue/15 mb-6" strokeWidth={1.2} />

                <blockquote className="text-navy/75 text-[17px] md:text-[19px] leading-relaxed font-light italic font-editorial flex-1 mb-8">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-navy/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-navy text-white flex items-center justify-center font-display text-sm">
                      {t.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-navy text-sm">{t.name}</div>
                      <div className="font-mono text-[10px] tracking-[0.15em] text-navy/45 uppercase mt-0.5">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 px-3 py-1.5 border-l border-b border-navy/10 bg-bone font-mono text-[10px] tracking-[0.2em] uppercase text-imperialBlue">
                  {t.metric}
                </div>
              </motion.figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
