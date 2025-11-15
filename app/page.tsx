'use client';

import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AirtentSection from '@/components/sections/AirtentSection';
import AppGuideSection from '@/components/sections/AppGuideSection';
import StorySection from '@/components/sections/StorySection';
import ScreenReviewsSection from '@/components/sections/ScreenReviewsSection';
import BusinessValueSection from '@/components/sections/BusinessValueSection';
import TentReservationSection from '@/components/sections/TentReservationSection';
import ScreenSystemSection from '@/components/sections/ScreenSystemSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AppGuideSection />
        <AirtentSection />
        <TentReservationSection />
        <ScreenSystemSection />
        <ScreenReviewsSection />
        <BusinessValueSection />
        <StorySection />
      </main>
      <Footer />
    </>
  );
}
