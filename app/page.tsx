'use client';

import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AirtentSection from '@/components/sections/AirtentSection';
import AppGuideSection from '@/components/sections/AppGuideSection';
import ScreenReviewsSection from '@/components/sections/ScreenReviewsSection';
import BusinessValueSection from '@/components/sections/BusinessValueSection';
import TentReservationSection from '@/components/sections/TentReservationSection';
import ScreenSystemSection from '@/components/sections/ScreenSystemSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <HeroSection />
        
        {/* 앱 섹션 */}
        <AppGuideSection />
        
        {/* 스튜디오 섹션 */}
        <AirtentSection />
        <BusinessValueSection />
        <TentReservationSection />
        
        {/* 스크린 섹션 */}
        <ScreenSystemSection />
        <ScreenReviewsSection />
      </main>
      <Footer />
    </>
  );
}
