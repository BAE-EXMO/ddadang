'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';

export default function AirtentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locations = [
    {
      title: '학교 실내강당',
      image: '/images/studio-locations/실내강당.png',
      description: '체육 수업과 방과후 활동',
    },
    {
      title: '전원주택',
      image: '/images/studio-locations/개인주택.png',
      description: '집 앞마당의 프라이빗 골프',
    },
    {
      title: '캠핑장',
      image: '/images/studio-locations/캠핑장.png',
      description: '캠핑과 골프를 동시에',
    },
    {
      title: '해수욕장',
      image: '/images/studio-locations/해수욕장.png',
      description: '바다에서 즐기는 골프',
    },
    {
      title: '지방축제 개최지',
      image: '/images/studio-locations/축제장소.png',
      description: '축제 현장의 인기 콘텐츠',
    },
    {
      title: '골프연습장',
      image: '/images/studio-locations/골프장.png',
      description: '실전 같은 연습 환경',
    },
    {
      title: '프로 개인 강습장',
      image: '/images/studio-locations/개인레슨.png',
      description: '1:1 맞춤형 레슨',
    },
    {
      title: '골프장 & 컨트리클럽',
      image: '/images/studio-locations/골프코스.png',
      description: '워밍업과 대기 시간 활용',
    },
  ];

  return (
    <>
      <SectionWrapper
        id="airtent"
        className="bg-gradient-to-b from-white via-amber-50/30 to-white"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-6">
            추억의 무대를 만드는 기술
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-relaxed md:leading-loose">
            소중한 사람들과 함께할<br />
            <span className="text-amber-600">골프의 무대</span>를 어디든 만들 수 있습니다
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-50 to-white p-8">
              <img
                src="/images/studio-locations/실내.png"
                alt="언제칠까 Studio"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-6 right-6 bg-amber-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
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
                  { icon: '⚡', label: '빠른 설치', value: '5분' },
                  { icon: '📦', label: '간편한 이동', value: '전용백' },
                  { icon: '🏕️', label: '실내외 설치', value: '자유롭게' },
                  { icon: '💪', label: '내구성', value: '우수' },
                ].map((feature, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md border border-amber-100">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <div className="text-sm text-gray-600">{feature.label}</div>
                    <div className="text-lg font-bold text-gray-900">{feature.value}</div>
                  </div>
                ))}
              </div>

              <Button 
                variant="purchase" 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="w-full"
              >
                구매 문의하기
              </Button>
            </div>
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
            <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              <span className="brand-name">언제칠까</span> Studio가 조용한 이유
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              프리미엄 <span className="text-green-600">스크린 시스템</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              타격감은 살리고, 소음은 줄였습니다<br />
              TPU 라미네이트 스크린을 기본 제공합니다
            </p>
          </div>

          {/* Exploded View - Components */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl border-2 border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 text-center mb-12">
                🔧 프리미엄 구성
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: '🎯',
                    title: 'TPU 라미네이트 스크린',
                    desc: '소음·내구 강화',
                    highlight: true,
                    detail: '200,000타 이상, -6dB 소음 감소',
                  },
                  {
                    icon: '🏗️',
                    title: '견고한 프레임',
                    desc: '공기압 구조',
                    highlight: false,
                    detail: '강철/알루미늄 옵션',
                  },
                  {
                    icon: '🛡️',
                    title: '방염 커버',
                    desc: '보호/브랜딩',
                    highlight: false,
                    detail: '방염 인증, 커스텀 인쇄',
                  },
                  {
                    icon: '⚡',
                    title: '스마트 설치 시스템',
                    desc: '안전 고정',
                    highlight: false,
                    detail: '실내·실외 대응',
                  },
                ].map((component, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative rounded-2xl p-6 ${
                      component.highlight
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-2xl transform scale-105'
                        : 'bg-white border-2 border-gray-200'
                    }`}
                  >
                    {component.highlight && (
                      <div className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        핵심
                      </div>
                    )}
                    <div className="text-5xl mb-4">{component.icon}</div>
                    <h5 className={`text-lg font-bold mb-2 ${component.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {component.title}
                    </h5>
                    <p className={`text-sm mb-3 ${component.highlight ? 'text-green-100' : 'text-gray-600'}`}>
                      {component.desc}
                    </p>
                    <p className={`text-xs ${component.highlight ? 'text-green-50' : 'text-gray-500'}`}>
                      {component.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="max-w-6xl mx-auto mb-20">
            <h4 className="text-3xl font-bold text-gray-900 text-center mb-12">
              성능 차이가 고객 만족을 결정합니다
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Durability Chart */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
                <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>💪</span> 내구성 테스트
                </h5>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">일반 스크린</span>
                      <span className="text-sm font-bold text-gray-400">50,000타</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gray-400 h-4 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">TPU 라미네이트</span>
                      <span className="text-sm font-bold text-green-600">200,000타+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-4 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6 text-center">
                  <span className="font-bold text-green-600">4배 이상</span> 오래 사용
                </p>
              </div>

              {/* Noise Reduction Chart */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
                <h5 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>🔇</span> 소음 감소
                </h5>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">일반 스크린</span>
                      <span className="text-sm font-bold text-gray-400">85dB</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-red-400 h-4 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">TPU 라미네이트</span>
                      <span className="text-sm font-bold text-green-600">79dB</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-4 rounded-full" style={{ width: '79%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6 text-center">
                  <span className="font-bold text-green-600">-6dB</span> 더 조용함
                </p>
              </div>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900 to-emerald-800 rounded-3xl p-12 text-white shadow-2xl">
            <h4 className="text-3xl font-bold mb-8 text-center">
              좋은 추억은 좋은 공간에서 만들어집니다
            </h4>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-center">
                <span className="brand-name">언제칠까</span> Studio의 부드러운 타구감과 저소음은<br />
                <span className="font-bold text-yellow-300">TPU 라미네이트 스크린</span> 덕분입니다
              </p>
              <div className="border-t border-green-700 pt-6">
                <p className="text-center text-xl font-semibold text-yellow-300">
                  '프리미엄 스크린 시스템'은 기본 사양입니다
                </p>
                <p className="text-center text-green-200 mt-2">
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
                  onClick={() => setIsModalOpen(true)}
                >
                  스크린 구매 문의
                </Button>
              </div>
            </div>
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
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-amber-400 transition-all duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emotional Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed italic">
              "추억은 특별한 장소에서 만들어집니다"
            </p>
            <p className="text-xl text-gray-600 mt-6">
              <span className="brand-name">언제칠까</span> Studio가 그 특별한 장소를 만들어드립니다
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productType="tent"
      />
    </>
  );
}

