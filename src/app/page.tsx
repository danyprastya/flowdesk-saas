import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQSection from '@/components/sections/FAQ'
import DemoRequest from '@/components/sections/DemoRequest'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090F] overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Sections */}
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQSection />
        <DemoRequest />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
