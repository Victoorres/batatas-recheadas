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
    <div className="min-h-screen bg-[#010100] text-white overflow-x-hidden w-full h-[100vh] sm:aspect-[16/9] bg-[url('/background.jpeg')] bg-cover bg-center bg-no-repeat overflow-x-hidden">
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
