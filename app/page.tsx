'use client';

import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import VisionSection from '@/components/sections/VisionSection';
import ProductSection from '@/components/sections/ProductSection';
import TechnologySection from '@/components/sections/TechnologySection';
import EcosystemSection from '@/components/sections/EcosystemSection';
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
        <TechnologySection />
        <EcosystemSection />
        <StorySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
