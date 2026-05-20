import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Clock, ShieldCheck, BadgeCheck, Heart } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

export function MarqueeBar() {
  const items = [
    'Licensed · Bonded · Insured', 'Free On-Site Estimates', 'Eco-Friendly Products',
    'Background-Checked Cleaners', 'Same-Day Quotes', 'Satisfaction Guaranteed',
    'Locally Owned & Operated', 'Flexible Scheduling',
  ]
  return (
    <div className="bg-navy text-white border-y border-white/5 overflow-hidden">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap w-max py-5">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-6 flex-shrink-0">
            <Sparkles size={12} className="text-royal-300/60" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/70">{t}</span>
            <span className="text-white/15 text-lg">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Manifesto() {
  // New business — these are commitments anyone can stand behind on day one,
  // not vanity metrics that would need years to be true.
  const promises = [
    { icon: Clock,       title: '24-Hour Quotes',        desc: 'Reach out and we&rsquo;ll get you a clear, written price within a day.' },
    { icon: ShieldCheck, title: 'Fully Insured',         desc: 'Licensed, bonded, and insured — your property is protected on every visit.' },
    { icon: BadgeCheck,  title: 'Satisfaction Promise',  desc: 'Not happy with a spot? We come back and make it right, no charge.' },
    { icon: Heart,       title: 'Locally Owned',         desc: 'A Las Vegas family business — you deal with the owners, not a call center.' },
  ]
  return (
    <section className="relative bg-paper py-24 md:py-32 border-b border-navy/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="col-span-12 lg:col-span-2">
              <span className="index-label">Why Imperial</span>
            </div>
            <h2 className="col-span-12 lg:col-span-10 font-display font-light text-navy
                           text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-tightest text-balance">
              A fresh local cleaning company that treats your space like our
              <span className="ital-emph text-imperialBlue"> own home </span>
              — careful, honest, and easy to work with.
            </h2>
          </motion.div>
        </Reveal>

        <Reveal>
          <motion.div variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10 border border-navy/10 mt-16 md:mt-24">
            {promises.map((p) => (
              <div key={p.title} className="bg-paper p-7 md:p-9">
                <div className="w-11 h-11 border border-navy/15 flex items-center justify-center mb-6">
                  <p.icon size={18} className="text-imperialBlue" />
                </div>
                <div className="font-display text-navy text-2xl md:text-[26px] leading-tight mb-2">
                  {p.title}
                </div>
                <p className="text-navy/55 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.desc }} />
              </div>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}