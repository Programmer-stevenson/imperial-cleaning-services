import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Reveal, fadeUp } from './motion'

const areas = [
  { name: 'Las Vegas Strip',  code: 'LV/01' },
  { name: 'Summerlin',        code: 'LV/02' },
  { name: 'Henderson',        code: 'LV/03' },
  { name: 'North Las Vegas',  code: 'LV/04' },
  { name: 'Spring Valley',    code: 'LV/05' },
  { name: 'Enterprise',       code: 'LV/06' },
  { name: 'Paradise',         code: 'LV/07' },
  { name: 'Whitney',          code: 'LV/08' },
  { name: 'Boulder City',     code: 'LV/09' },
  { name: 'MacDonald Hlnds',  code: 'LV/10' },
  { name: 'The Ridges',       code: 'LV/11' },
  { name: 'Mesquite',         code: 'LV/12' },
]

export default function Coverage() {
  return (
    <section id="coverage" className="relative bg-bone py-28 md:py-36 border-b border-navy/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-light bg-grid-lg opacity-50 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
            <div className="col-span-12 lg:col-span-7">
              <span className="index-label mb-6">009 · Coverage</span>
              <h2 className="h-section mt-5 text-balance">
                The whole valley,
                <br /><span className="ital-emph text-imperialBlue">no out-of-area fees.</span>
              </h2>
            </div>
            <p className="col-span-12 lg:col-span-4 lg:col-start-9 text-navy/55 leading-relaxed">
              Crews dispatch from north, central, and south depots — keeping response time under four
              hours from Mesquite to Boulder City.
            </p>
          </motion.div>
        </Reveal>

        <Reveal>
          <motion.div variants={fadeUp} className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* Map plate */}
            <div className="col-span-12 lg:col-span-7 relative bg-paper border border-navy/10 p-8 md:p-12 min-h-[420px] overflow-hidden">
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45">Coverage Plate · MAP-01</span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-navy/45">36.17° N · 115.14° W</span>
              </div>

              {/* Stylized abstract map */}
              <svg viewBox="0 0 600 400" className="w-full h-auto" aria-hidden>
                <defs>
                  <pattern id="hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#1A2F7A" strokeWidth="0.4" strokeOpacity="0.18" />
                  </pattern>
                </defs>
                {/* Valley outline */}
                <path d="M40 200 C 80 80, 200 60, 300 100 S 540 80, 560 220 S 460 360, 320 350 S 60 360, 40 200 Z"
                  fill="url(#hatch)" stroke="#1A2F7A" strokeOpacity="0.4" strokeWidth="1" />
                {/* Strip line */}
                <path d="M260 130 L 320 360" stroke="#1A2F7A" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Coverage points */}
                {[
                  [120, 220], [180, 160], [240, 200], [300, 240], [360, 180],
                  [420, 220], [340, 290], [260, 300], [220, 260], [380, 130],
                  [460, 270], [180, 290],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="10" fill="#1A2F7A" opacity="0.12" />
                    <circle cx={cx} cy={cy} r="3"  fill="#1A2F7A" />
                  </g>
                ))}

                {/* HQ marker */}
                <g>
                  <circle cx="300" cy="240" r="16" fill="none" stroke="#3b5ef7" strokeWidth="1" className="animate-pulse-slow" />
                  <circle cx="300" cy="240" r="6"  fill="#3b5ef7" />
                  <text x="312" y="244" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0D1B4B" letterSpacing="1.5">
                    HQ · LAS VEGAS
                  </text>
                </g>

                {/* Compass */}
                <g transform="translate(540, 60)">
                  <circle r="14" fill="none" stroke="#1A2F7A" strokeOpacity="0.3" />
                  <line x1="0" y1="-12" x2="0" y2="-4" stroke="#1A2F7A" />
                  <text x="0" y="-16" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#1A2F7A">N</text>
                </g>
              </svg>

              {/* Legend strip */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-navy/45">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-imperialBlue" /> Service Zone</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-signal rounded-full" /> Dispatch Depot</span>
                <span>Avg Response · 4.2h</span>
              </div>
            </div>

            {/* Area list */}
            <div className="col-span-12 lg:col-span-5 bg-paper border border-navy/10">
              <div className="flex items-center justify-between px-6 py-4 border-b border-navy/10">
                <span className="index-label">Active Zones</span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-navy/40 uppercase">12 zones · 1 valley</span>
              </div>
              <ul>
                {areas.map((a, i) => (
                  <li key={a.code} className={`flex items-baseline justify-between px-6 py-3.5 hover:bg-bone transition-colors ${i < areas.length - 1 ? 'border-b border-navy/5' : ''}`}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] text-navy/40 tracking-widest">{a.code}</span>
                      <span className="text-navy text-[15px]">{a.name}</span>
                    </div>
                    <MapPin size={12} className="text-imperialBlue" />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
