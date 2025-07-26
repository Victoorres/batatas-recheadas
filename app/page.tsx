"use client"

import HeroSection from "@/components/sections/HeroSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import CourseContentSection from "@/components/sections/CourseContentSection"
import CountdownSection from "@/components/sections/CountdownSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import UpsellSection from "@/components/sections/UpsellSection"
import FinalCTASection from "@/components/sections/FinalCTASection"
import FAQSection from "@/components/sections/FAQSection"
import Footer from "@/components/sections/Footer"
import ImageShowcase from "@/components/sections/ImageShowcase"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#010100] text-white overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      {/* <ImageShowcase /> */}
      <CourseContentSection />
      {/* <CountdownSection /> */}
      <TestimonialsSection />
      <UpsellSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
