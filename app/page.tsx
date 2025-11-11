'use client';

import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import VisionSection from '@/components/sections/VisionSection';
import ProductSection from '@/components/sections/ProductSection';
import StudioLocationSection from '@/components/sections/StudioLocationSection';
import AppGuideSection from '@/components/sections/AppGuideSection';
import StorySection from '@/components/sections/StorySection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <ProductSection />
        <StudioLocationSection />
        <AppGuideSection />
        <StorySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
