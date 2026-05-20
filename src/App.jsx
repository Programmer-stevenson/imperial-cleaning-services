import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto, { MarqueeBar } from './components/Manifesto'
import Sectors from './components/Sectors'
import Capabilities from './components/Capabilities'
import About from './components/About'
import Standard from './components/Standard'
import Numbers from './components/Numbers'
import Testimonials from './components/Testimonials'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import { CTABanner, Footer } from './components/FooterParts'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeBar />
      <Manifesto />
      <Sectors />
      <Capabilities />
      <About />
      <Standard />
      <Numbers />
      <Contact />
      <CTABanner />
      <Footer />
    </>
  )
}
