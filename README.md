# Imperial Cleaning Services — Enterprise Rebuild

An editorial, enterprise-grade rebuild of the Imperial Cleaning Services site.
React + Vite + Tailwind CSS + Framer Motion.

## What changed vs. the original

| Original                         | Rebuild                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------- |
| "Premium boutique" feel          | **Editorial enterprise** — CBRE / JLL / Bloomberg Businessweek visual language |
| One large monolithic `App.jsx`   | **13 focused components** in `src/components/`                                |
| 2 fonts (Cormorant + DM Sans)    | **4-tier type system** — Instrument Serif (editorial), Fraunces (display), Inter Tight (UI), JetBrains Mono (code/captions) |
| Simple service cards             | **Bento grid for Sectors** (Hospitality, Gaming, Healthcare, Corporate, etc.) |
| Single testimonial carousel      | **Multi-card editorial testimonials**                                         |
| Static "Service Areas" pill row  | **Map plate + zone index**                                                    |
| Linear hero                      | **Asymmetric hero w/ live ops panel + animated KPI count-ups**                |
| Simple stat band                 | **Manifesto strip + dedicated "By the Numbers" data band**                    |
| Generic process timeline         | **Interactive 5-phase "Imperial Standard" with hover/click tab switcher**     |
| Standard navbar                  | **Utility bar + navbar + sectors mega-menu**                                  |
| Basic contact form               | **"Engagement Brief v1"** form w/ indexed fields & 24h SLA framing            |

### Section flow (11 indexed sections)

1. **001 / The Standard** — Hero (asymmetric editorial split + live ops panel)
2. Marquee — accreditations ticker
3. **002 · Mandate** — Manifesto + 4 headline stats
4. **003 · Sectors** — bento grid of 8 industries
5. **004 · Capabilities** — 6 capability codes (CAP/01–CAP/06)
6. **005 · About** — family-owned narrative + 4 trust pillars
7. **006 · The Imperial Standard** — interactive 5-phase methodology
8. **007 · By The Numbers** — dark KPI data band
9. **008 · Clients** — editorial multi-card testimonials
10. **009 · Coverage** — map plate + 12 service zones
11. **010 · Engage** — contact form
12. **011 · Engagement** — CTA banner
13. Footer

### File structure

```
src/
├── App.jsx                          # Composition root
├── main.jsx                         # React mount
├── index.css                        # Design system tokens
└── components/
    ├── motion.jsx                   # Reveal, fadeUp, CountUp, EASE_OUT
    ├── Navbar.jsx                   # Utility bar + nav + sectors mega-menu
    ├── Hero.jsx                     # Editorial hero + live ops panel
    ├── Manifesto.jsx                # Mandate strip + 4 KPIs + marquee
    ├── Sectors.jsx                  # Bento grid of 8 sectors
    ├── Capabilities.jsx             # 6 dark capability cards
    ├── About.jsx                    # Image + narrative + 4 pillars
    ├── Standard.jsx                 # 5-phase interactive methodology
    ├── Numbers.jsx                  # Dark KPI data band
    ├── Testimonials.jsx             # 3-up editorial card grid
    ├── Coverage.jsx                 # Stylized map + zone index
    ├── Contact.jsx                  # Engagement Brief form
    └── FooterParts.jsx              # CTABanner + Footer (named exports)
```

### Design tokens

Defined in `tailwind.config.js` and `src/index.css`:

- **Colors**: `navy` (`#0D1B4B`), `imperialBlue` (`#1A2F7A`), `royal-*` palette,
  `paper` (`#FAF8F3`), `bone` (`#F4F1EA`), `graphite`, `signal`.
- **Fonts**: `font-editorial` (Instrument Serif), `font-display` (Fraunces), `font-sans` (Inter Tight), `font-mono` (JetBrains Mono).
- **Components**: `btn-primary`, `btn-ghost`, `btn-light`, `btn-outline-light`, `index-label`, `index-label-dark`, `h-section`, `h-section-light`, `ital-emph`.
- **Utilities**: `mesh-navy` (gradient mesh), `bg-grid-light`/`bg-grid-dark`, `nav-link` (underline animation).

### Setup

```bash
npm install
npm run dev        # Vite dev server
npm run build      # Production build
npm run preview    # Preview built bundle
```

### Notes

- **Contact form** uses Web3Forms. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/components/Contact.jsx` with your real key from [web3forms.com](https://web3forms.com).
- **Logos**: keep `/public/logo-white.jpg`, `/public/logo-blue.jpg`, `/public/strat.png` as-is.
- **All numerics** (clients, sq ft, retention %) are placeholder figures meant to look credible — swap for real ones before launch.
