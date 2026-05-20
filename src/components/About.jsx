import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ShieldCheck, BadgeCheck, Leaf, ArrowRight, Phone } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

const pillars = [
  { icon: Shield,      title: 'Licensed & Insured', desc: 'Fully licensed, bonded, and insured — your home or business is protected on every visit.' },
  { icon: ShieldCheck, title: 'Trusted Cleaners',   desc: 'Background-checked, carefully trained, and the same friendly faces each time.' },
  { icon: BadgeCheck,  title: 'Quality Checked',    desc: 'A final walk-through every visit, so nothing gets missed before we leave.' },
  { icon: Leaf,        title: 'Eco-Friendly',       desc: 'Safe, family- and pet-friendly products — stronger options available on request.' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-28 md:py-36 border-b border-navy/10 overflow-hidden">
      <div className="absolute -right-64 top-20 w-[700px] h-[700px] rounded-full bg-imperialBlue/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-16">
        <Reveal className="col-span-12 lg:col-span-5">
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-imperialBlue/10 pointer-events-none" />

            <div className="relative overflow-hidden bg-navy">
              <img src="/strat.png" alt="Imperial Cleaning · Las Vegas"
                className="w-full h-full object-contain crisp-edge"
                style={{ aspectRatio: '3/2' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div>
                  <div className="font-display italic text-white text-2xl md:text-3xl leading-tight">
                    It&rsquo;s Going to <span className="text-royal-300">Shine.</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/30 pointer-events-none" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/30 pointer-events-none" />
            </div>

            <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-navy/45">
              <span>Est. 2025</span>
              <span>Las Vegas, NV</span>
            </div>
          </motion.div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-7 lg:pt-4">
          <motion.div variants={fadeUp}>
            <span className="index-label mb-6">About Imperial</span>
            <h2 className="h-section mt-5 mb-8 text-balance">
              Family-run.
              <br /><span className="ital-emph text-imperialBlue">Locally rooted.</span>
            </h2>

            <div className="space-y-5 text-navy/65 text-base md:text-lg leading-relaxed font-light max-w-2xl">
              <p>
                Imperial Cleaning Services was founded in 2025 by a husband-and-wife team
                right here in the Las Vegas Valley. We started this company on a simple idea —
                that a cleaning service should be dependable, honest, and treat every space
                with the same care we give our own home.
              </p>
              <p>
                We&rsquo;re new, and we&rsquo;re proud of it. That means every customer matters,
                every job gets our full attention, and we&rsquo;re building our reputation one
                spotless home and business at a time.
              </p>
            </div>

            <div className="my-10 h-px bg-navy/10" />

            <div className="grid grid-cols-2 gap-px bg-navy/10 border border-navy/10">
              {pillars.map((p) => (
                <div key={p.title} className="bg-paper p-6">
                  <p.icon size={18} className="text-imperialBlue mb-4" />
                  <div className="font-sans font-semibold text-navy text-sm mb-1.5">{p.title}</div>
                  <p className="text-navy/55 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">Request a Consultation <ArrowRight size={13} /></a>
              <a href="tel:7024184471" className="btn-ghost"><Phone size={13} /> (702) 418-4471</a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}