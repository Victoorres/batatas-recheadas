'use client';

import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import CourseContentSection from '@/components/sections/CourseContentSection';
import CountdownSection from '@/components/sections/CountdownSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import UpsellSection from '@/components/sections/UpsellSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#010100] text-white overflow-x-hidden bg-[url('/background.jpeg')] bg-cover bg-no-repeat bg-center">
      <HeroSection />
      <UpsellSection />
      <BenefitsSection />
      {/* <ImageShowcase /> */}
      <CourseContentSection />
      {/* <CountdownSection /> */}
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
