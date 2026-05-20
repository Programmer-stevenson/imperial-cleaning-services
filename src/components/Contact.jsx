import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Clock, Send, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', message:'' })

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `New Engagement Request — ${form.name}`,
          from_name: 'Imperial Cleaning Website',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success'); setForm({ name:'', email:'', phone:'', service:'', message:'' })
      } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="relative bg-paper py-28 md:py-36 border-b border-navy/10 overflow-hidden">
      <div className="absolute -left-64 bottom-0 w-[600px] h-[600px] rounded-full bg-imperialBlue/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-16 relative">
        <Reveal className="col-span-12 lg:col-span-5">
          <motion.div variants={fadeUp}>
            <span className="index-label mb-6">Engage</span>
            <h2 className="h-section mt-5 mb-8 text-balance">
              Request a
              <br /><span className="ital-emph text-imperialBlue">scoped quote.</span>
            </h2>

            <p className="text-navy/55 text-lg leading-relaxed mb-12 font-light max-w-md">
              Tell us about the property. A senior account lead will return a written scope and
              line-item quote within 24 hours.
            </p>

            <div className="space-y-px bg-navy/10 border border-navy/10">
              <a href="tel:7024184471" className="flex items-center gap-5 px-6 py-5 bg-paper hover:bg-bone transition-colors group">
                <div className="w-11 h-11 bg-navy flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45 mb-1">Phone · 24h</div>
                  <div className="font-display text-navy text-xl group-hover:text-imperialBlue transition-colors">(702) 418-4471</div>
                </div>
              </a>
              <div className="flex items-center gap-5 px-6 py-5 bg-paper">
                <div className="w-11 h-11 bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-imperialBlue" />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45 mb-1">Headquarters</div>
                  <div className="font-display text-navy text-xl">Las Vegas, Nevada</div>
                </div>
              </div>
              <div className="flex items-center gap-5 px-6 py-5 bg-paper">
                <div className="w-11 h-11 bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-imperialBlue" />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45 mb-1">Hours · Dispatch</div>
                  <div className="font-display text-navy text-xl">Mon–Sun · 7a–8p PT</div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-navy/10 flex items-start gap-4">
              <TrendingUp size={18} className="text-imperialBlue mt-1 flex-shrink-0" />
              <p className="text-navy/65 text-sm font-light">
                <span className="font-semibold text-navy">Same-day quotes available.</span> For urgent
                requests — turnovers, post-events, post-construction — call directly.
              </p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-7">
          <motion.div variants={fadeUp}>
            <form onSubmit={onSubmit} className="bg-white border border-navy/10 p-8 md:p-12">
              <div className="flex items-baseline justify-between mb-10 pb-6 border-b border-navy/10">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-imperialBlue">Engagement Brief · v1</span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-navy/40 uppercase">5 fields · 24h SLA</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <FormField label="Full Name" required name="name" value={form.name} onChange={onChange} placeholder="Jane Smith" />
                <FormField label="Email Address" required name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@company.com" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="(702) 000-0000" />
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45 mb-2">Service Type</label>
                  <select name="service" value={form.service} onChange={onChange}
                    className="w-full border border-navy/15 bg-paper px-4 py-3.5 text-sm text-navy focus:outline-none focus:border-navy transition-colors appearance-none">
                    <option value="">Select a capability…</option>
                    <option>Commercial / Janitorial</option>
                    <option>Residential / Deep Clean</option>
                    <option>Short-Term Rental Turnover</option>
                    <option>Post-Construction</option>
                    <option>Carpet & Upholstery</option>
                    <option>Event / Specialty</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45 mb-2">Property Brief</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={5}
                  placeholder="Approx. square footage, sector, frequency, access notes, any special requirements…"
                  className="w-full border border-navy/15 bg-paper px-4 py-3.5 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors resize-none" />
              </div>

              <button type="submit" disabled={status === 'loading'}
                className="w-full bg-navy text-white text-[11px] font-medium tracking-[0.2em] uppercase py-5 hover:bg-imperialBlue transition-colors flex items-center justify-center gap-3 disabled:opacity-60">
                {status === 'loading' ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    Submitting…
                  </>
                ) : (
                  <>Submit Engagement Brief <ArrowRight size={14} /></>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-5 flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-5 py-4 text-emerald-800 text-sm">
                    <CheckCircle size={16} /> Brief received. A senior lead will return your scoped quote within 24h.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-5 flex items-center gap-3 bg-red-50 border border-red-200 px-5 py-4 text-red-700 text-sm">
                    Something went wrong. Call us directly at (702) 418-4471.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

function FormField({ label, required, ...props }) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45 mb-2">
        {label} {required && '*'}
      </label>
      <input {...props} required={required}
        className="w-full border border-navy/15 bg-paper px-4 py-3.5 text-sm text-navy placeholder-navy/30 focus:outline-none focus:border-navy transition-colors" />
    </div>
  )
}
