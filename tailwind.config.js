/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: { 50:'#eff4ff',100:'#dbe6fe',200:'#bfcffe',300:'#93affd',400:'#6086fb',500:'#3b5ef7',600:'#1e3aed',700:'#1a2fd9',800:'#1c27af',900:'#1d278a',950:'#141955' },
        navy:  { DEFAULT:'#0D1B4B', 950:'#070F2C' },
        imperialBlue: '#1A2F7A',
        bone:  '#F4F1EA',
        paper: '#FAF8F3',
        graphite: '#1E1E22',
        signal: '#3b5ef7',
      },
      fontFamily: {
        editorial: ['"Cormorant Garamond"','Georgia','serif'],
        display:   ['"Cormorant Garamond"','Georgia','serif'],
        sans:      ['"DM Sans"','system-ui','sans-serif'],
        mono:      ['"DM Mono"','ui-monospace','monospace'],
      },
      letterSpacing: { 'tightest':'-0.04em' },
      backgroundImage: {
        'grid-light':'linear-gradient(rgba(13,27,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,27,75,0.06) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: { 'grid':'40px 40px','grid-lg':'64px 64px' },
      animation: {
        'float':'float 5s ease-in-out infinite',
        'marquee':'marquee 40s linear infinite',
        'pulse-slow':'pulseSlow 3s ease-in-out infinite',
      },
      keyframes: {
        float:   { '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-18px)'} },
        marquee: { '0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'} },
        pulseSlow:{ '0%,100%':{opacity:'0.4'},'50%':{opacity:'0.85'} },
      },
      boxShadow: {
        'edit':'0 1px 2px rgba(13,27,75,0.04), 0 8px 24px -8px rgba(13,27,75,0.08)',
        'edit-lg':'0 4px 16px -2px rgba(13,27,75,0.06), 0 24px 48px -16px rgba(13,27,75,0.14)',
      },
    },
  },
  plugins: [],
}