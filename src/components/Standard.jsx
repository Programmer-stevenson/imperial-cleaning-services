import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Reveal, fadeUp, EASE_OUT } from './motion'

const steps = [
  { n: '01', title: 'Brief',   desc: 'A 20-minute call or walk to scope rooms, frequency, sensitivities, and access. No charge, no pressure.',
    bullets: ['Property profile','Access & keys','Sensitivities log','Cadence preference'] },
  { n: '02', title: 'Scope',   desc: 'A line-item proposal with clear inclusions, exclusions, and SLAs. You sign what you see.',
    bullets: ['Itemized scope','Pricing in writing','SLA defined','24h turnaround'] },
  { n: '03', title: 'Onboard', desc: 'A dedicated crew lead is assigned, briefed, and walked through the property in person.',
    bullets: ['Crew lead match','On-site briefing','Photo baseline','Checklist build'] },
  { n: '04', title: 'Execute', desc: 'Uniformed, vetted crews arrive on time with the right gear and a digital checklist per visit.',
    bullets: ['Uniformed crews','Digital checklist','Hospital-grade disinfectant','Photo log'] },
  { n: '05', title: 'Audit',   desc: 'Supervisor closeout + photo deliverable + a 24h satisfaction window. If it falls short, we return.',
    bullets: ['Walk-through','Photo report','24h guarantee','Recurring re-baseline'] },
]

export default function Standard() {
  const [active, setActive] = useState(0)

  return (
    <section id="process" className="relative bg-bone py-28 md:py-36 border-b border-navy/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="index-label mb-6">The Imperial Standard</span>
              <h2 className="h-section mt-5 text-balance">
                Five phases.
                <br /><span className="ital-emph text-imperialBlue">Zero improvisation.</span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-navy/55 leading-relaxed">
              The same protocol whether you&rsquo;re a 1,200 sq ft condo or a 90-room boutique.
              That&rsquo;s how we keep results consistent across 240+ accounts.
            </p>
          </motion.div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="flex lg:flex-col gap-px bg-navy/10 border border-navy/10 overflow-x-auto lg:overflow-visible">
                {steps.map((s, i) => (
                  <button key={s.n}
                    onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
                    className={`group p-5 md:p-7 text-left transition-all duration-500 flex-shrink-0 lg:flex-shrink min-w-[180px] lg:min-w-0 relative ${
                      active === i ? 'bg-navy text-white' : 'bg-paper hover:bg-bone'
                    }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-mono text-[10px] tracking-[0.25em] ${active === i ? 'text-royal-300' : 'text-navy/40'}`}>PHASE · {s.n}</span>
                      {active === i && <ArrowRight size={14} className="text-royal-300" />}
                    </div>
                    <div className={`font-display font-light text-2xl md:text-3xl leading-tight ${active === i ? 'text-white' : 'text-navy'}`}>
                      {s.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div key={active}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="bg-white border border-navy/10 p-8 md:p-12 h-full">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-imperialBlue">Phase {steps[active].n}</span>
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-navy/35">{active + 1} / {steps.length}</span>
                  </div>

                  <h3 className="font-display font-light text-navy text-[44px] md:text-[60px] leading-[0.95] tracking-tightest mb-6">
                    {steps[active].title}.
                  </h3>

                  <p className="text-navy/65 text-lg leading-relaxed font-light max-w-prose mb-10">
                    {steps[active].desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {steps[active].bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3 border border-navy/10 px-4 py-3">
                        <CheckCircle size={13} className="text-imperialBlue flex-shrink-0" />
                        <span className="text-sm text-navy/75">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 h-px bg-navy/10 relative overflow-hidden">
                    <motion.div key={`bar-${active}`}
                      initial={{ width: 0 }} animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.6, ease: EASE_OUT }}
                      className="absolute inset-y-0 left-0 bg-imperialBlue" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
