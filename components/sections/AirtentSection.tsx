'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Package, Home as Tent, Dumbbell, Wind, Flame, VolumeX, Target } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';

export default function AirtentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScreenModalOpen, setIsScreenModalOpen] = useState(false);

  const locations = [
    {
      title: '학교 실내강당',
      image: '/images/tent/실내강당.png',
      description: '체육 수업과 방과후 활동',
    },
    {
      title: '전원주택',
      image: '/images/tent/개인주택.png',
      description: '집 앞마당의 프라이빗 골프',
    },
    {
      title: '캠핑장',
      image: '/images/tent/캠핑장.png',
      description: '캠핑과 골프를 동시에',
    },
    {
      title: '해수욕장',
      image: '/images/tent/해수욕장.png',
      description: '바다에서 즐기는 골프',
    },
    {
      title: '해수욕장(야간)',
      image: '/images/tent/해수욕장(야간).png',
      description: '밤바다에서 즐기는 특별한 경험',
    },
    {
      title: '지방축제 개최지',
      image: '/images/tent/축제.png',
      description: '축제 현장의 인기 콘텐츠',
    },
    {
      title: '전시장',
      image: '/images/tent/전시장.png',
      description: '전시회와 박람회의 명품 콘텐츠',
    },
    {
      title: '클럽하우스',
      image: '/images/tent/클럽하우스.png',
      description: '실전 같은 연습 환경',
    },
    {
      title: '프로 개인 강습장',
      image: '/images/tent/레슨.png',
      description: '1:1 맞춤형 레슨',
    },
    {
      title: '개인 연습장',
      image: '/images/tent/개인연습장.png',
      description: '언제든 자유롭게 연습',
    },
  ];

  return (
    <>
      <SectionWrapper
        id="airtent"
        className="bg-gradient-to-b from-white via-[#FEF7FB]/30 to-white"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-[#FBE4F0] text-[#DB2777] rounded-full text-sm font-semibold mb-6">
            추억의 무대를 만드는 기술
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-snug md:leading-normal">
            소중한 사람들과 함께할<br />
            <span className="text-[#EC4899]">골프의 무대</span>를 어디든 만들 수 있습니다
          </h2>
        </motion.div>

        {/* Main Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Product Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#FEF7FB] to-white p-8">
              <img
                src="/images/tent/텐트.png"
                alt="언제칠까 Studio"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
                🚀 2026년 1월 출시 예정
              </div>
              <div className="absolute top-6 right-6 bg-[#EC4899] text-white px-6 py-3 rounded-full font-bold shadow-lg">
                ⚡ 설치 5분
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                공기압 프레임 구조로 누구나 쉽게 설치할 수 있습니다.<br />
                특별한 공간, 특별한 장소에서 골프를 즐기세요!
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <Zap className="w-8 h-8" />, label: '빠른 설치', value: '5분' },
                  { icon: <Package className="w-8 h-8" />, label: '간편한 이동', value: '전용백' },
                  { icon: <Tent className="w-8 h-8" />, label: '실내외 설치', value: '자유롭게' },
                  { icon: <Dumbbell className="w-8 h-8" />, label: '내구성', value: '우수' },
                ].map((feature, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md border border-[#FBE4F0]">
                    <div className="text-[#EC4899] mb-2">{feature.icon}</div>
                    <div className="text-sm text-gray-600">{feature.label}</div>
                    <div className="text-lg font-bold text-gray-900">{feature.value}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-4 text-center">
                  <p className="text-blue-900 font-bold text-lg mb-1">🚀 2026년 1월 출시 예정</p>
                  <p className="text-blue-700 text-sm">지금 사전 예약을 받고 있습니다</p>
                </div>
                <Button 
                  variant="purchase" 
                  size="lg" 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full"
                >
                  사전 예약 문의하기
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
            설치부터 사용까지, 간편하게
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12">
            5분이면 충분합니다
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group aspect-video"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/tent/이미지_회전_동영상_제작.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white text-xl font-bold mb-2">360° 뷰</h4>
                <p className="text-white/90">모든 각도에서 완벽한 공간</p>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group aspect-video"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/tent/이미지_동영상_변환.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white text-xl font-bold mb-2">실제 사용 모습</h4>
                <p className="text-white/90">언제 어디서나 골프를</p>
              </div>
            </motion.div>
          </div>

          {/* Additional Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Video 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group aspect-video"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/tent/KakaoTalk_20251031_090352028.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white text-xl font-bold mb-2">설치 과정</h4>
                <p className="text-white/90">누구나 쉽게 설치 가능</p>
              </div>
            </motion.div>

            {/* Video 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group aspect-video"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/tent/KakaoTalk_20251031_090533290.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white text-xl font-bold mb-2">다양한 공간 활용</h4>
                <p className="text-white/90">실내외 어디든 가능</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Installation Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
            새로운 추억을, 새로운 곳에서
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12">
            어디든 골프의 무대가 됩니다
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="text-lg font-bold mb-1">{location.title}</h4>
                  <p className="text-sm text-white/90">{location.description}</p>
                </div>
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#F472B6] transition-all duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Screen System Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 mt-32"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#FBE4F0] text-[#DB2777] rounded-full text-sm font-semibold mb-6">
              <span className="brand-name">언제칠까</span> Studio가 조용한 이유
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              프리미엄 <span className="text-[#EC4899]">스크린 시스템</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              타격감은 살리고, 소음은 줄였습니다<br />
              TPU라미네이트로 더욱 오래 사용할 수 있습니다.
            </p>
          </div>

          {/* Screen Features */}
          <div className="max-w-6xl mx-auto mb-20">
            <h4 className="text-3xl font-bold text-gray-900 text-center mb-12">
              스크린 특성
            </h4>
            
            {/* Screen Setup Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/tent/스크린.jpg"
                  alt="언제칠까 Studio 스크린 시스템"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Wind className="w-10 h-10" />, title: '3중에어메쉬원단', desc: '통풍성 우수' },
                { icon: <Flame className="w-10 h-10" />, title: '방염', desc: '안전성 인증' },
                { icon: <VolumeX className="w-10 h-10" />, title: '저소음', desc: '조용한 타격감' },
                { icon: <Target className="w-10 h-10" />, title: '집중타격부 TPU라미네이트', desc: '내구성 강화' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:border-[#F472B6] transition-all"
                >
                  <div className="flex justify-center mb-4 text-[#EC4899]">{feature.icon}</div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-gray-600 text-center">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#F472B6] to-[#F9A8D4] rounded-3xl p-12 text-white shadow-2xl">
            <h4 className="text-3xl font-bold mb-8 text-center">
              좋은 추억은 좋은 공간에서 만들어집니다
            </h4>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-center">
                <span className="font-semibold text-white">언제칠까</span> Studio의 부드러운 타구감과 저소음은<br />
                <span className="font-bold text-[#FBE4F0]">TPU 라미네이트 스크린</span> 덕분입니다
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-center text-xl font-semibold text-[#FBE4F0]">
                  '프리미엄 스크린 시스템'은 기본 사양입니다
                </p>
                <p className="text-center text-white/80 mt-2">
                  옵션이 아닙니다
                </p>
              </div>
              <div className="pt-6 text-center">
                <p className="text-white/90 mb-4">
                  스크린만 별도 구매도 가능합니다
                </p>
                <Button 
                  variant="purchase" 
                  size="lg" 
                  onClick={() => setIsScreenModalOpen(true)}
                >
                  스크린 구매 문의
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

      </SectionWrapper>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productType="tent"
      />
      
      <PurchaseModal
        isOpen={isScreenModalOpen}
        onClose={() => setIsScreenModalOpen(false)}
        productType="screen"
      />
    </>
  );
}

