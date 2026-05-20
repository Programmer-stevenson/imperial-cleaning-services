import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ShieldCheck, BadgeCheck, Leaf, ArrowRight, Phone } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

const pillars = [
  { icon: Shield,      title: 'Bonded & Insured',  desc: '$2M general liability, $1M workers&rsquo; comp on every job.' },
  { icon: ShieldCheck, title: 'Vetted Crews',      desc: 'Background checks, E-Verify, in-house onboarding before any assignment.' },
  { icon: BadgeCheck,  title: 'Quality Audited',   desc: 'Supervisor walk-through and digital checklist signed at every closeout.' },
  { icon: Leaf,        title: 'EPA-Safer Products',desc: 'Hospital-grade disinfectants where required; green chemistry by default.' },
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
              <img src="/strat.png" alt="Imperial Cleaning · Las Vegas operations"
                className="w-full h-full object-contain crisp-edge"
                style={{ aspectRatio: '3/2' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-white/55 uppercase mb-2"></div>
                  <div className="font-display italic text-white text-2xl md:text-3xl leading-tight">
                    It&rsquo;s Going to <span className="text-royal-300">Shine.</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/30 pointer-events-none" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/30 pointer-events-none" />
            </div>

            <div className="mt-6 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-navy/45">
              <span></span>
              <span>Las Vegas, NV</span>
            </div>
          </motion.div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-7 lg:pt-4">
          <motion.div variants={fadeUp}>
            <span className="index-label mb-6"></span>
            <h2 className="h-section mt-5 mb-8 text-balance">
              Family-run.
              <br /><span className="ital-emph text-imperialBlue">Hotel-trained.</span>
            </h2>

            <div className="space-y-5 text-navy/65 text-base md:text-lg leading-relaxed font-light max-w-2xl">
              <p>
                Imperial Cleaning Services was started by a husband-and-wife team that came up through
                Strip hotel housekeeping departments. The discipline — the room-by-room checklists,
                the daily room-status audits, the cadence of a building that never closes — is the
                foundation we now bring to every residence, office, and operator we serve.
              </p>
              <p>
                Eleven years in, we&rsquo;re the quiet team behind some of the Valley&rsquo;s most
                demanding properties. Same crew leads since 2019. Same standard since day one.
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