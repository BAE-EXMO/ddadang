'use client';

import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AirtentSection from '@/components/sections/AirtentSection';
import AppGuideSection from '@/components/sections/AppGuideSection';
import ScreenSection from '@/components/sections/ScreenSection';
import StorySection from '@/components/sections/StorySection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AirtentSection />
        <AppGuideSection />
        <ScreenSection />
        <StorySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
