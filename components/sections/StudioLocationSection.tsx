'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

export default function StudioLocationSection() {
  const locations = [
    {
      title: '전원주택',
      description: '집 앞마당에서 즐기는 프라이빗 골프',
      icon: '🏡',
      image: '/images/studio-locations/개인주택.png',
    },
    {
      title: '골프장 & 컨트리클럽',
      description: '골프장에서 워밍업과 대기 시간 활용',
      icon: '⛳',
      image: '/images/studio-locations/골프코스.png',
    },
    {
      title: '프로 개인 강습장',
      description: '프로 골퍼의 1:1 맞춤형 레슨 스튜디오',
      icon: '⛳',
      image: '/images/studio-locations/개인레슨.png',
    },
    {
      title: '해수욕장',
      description: '바닷가에서 즐기는 특별한 골프 체험',
      icon: '🏖️',
      image: '/images/studio-locations/해수욕장.png',
    },
    {
      title: '골프연습장',
      description: '실외 연습장에서 실전 같은 연습',
      icon: '🏌️',
      image: '/images/studio-locations/골프장.png',
    },
    {
      title: '학교 실내강당',
      description: '체육 수업과 방과후 활동으로 활용',
      icon: '🏫',
      image: '/images/studio-locations/실내강당.png',
    },
    {
      title: '지방축제 개최지',
      description: '축제 현장에서 인기 만점 골프 챌린지!',
      icon: '🎪',
      image: '/images/studio-locations/축제장소.png',
    },
    {
      title: '캠핑장',
      description: '캠핑과 골프를 동시에 즐기는 새로운 경험',
      icon: '⛺',
      image: '/images/studio-locations/캠핑장.png',
    },
  ];

  return (
    <SectionWrapper
      id="studio-locations"
      heading={<><span className="brand-name">언제칠까</span> STUDIO, 어디든 설치 가능합니다</>}
      subheading="5분 안에 설치 완료! 장소에 구애받지 않는 이동형 스크린골프 공간"
      bgColor="dark"
    >
      {/* Product Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
            <img
              src="/images/studio-locations/실내.png"
              alt="언제칠까 STUDIO 제품"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="inline-block px-8 py-4 bg-blue-600 text-white rounded-2xl shadow-xl">
              <p className="text-2xl font-bold">⚡ 설치 시간 단 5분 ⚡</p>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900">
              공기압 구조로 간편한 설치
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              공기압 프레임 구조로 누구나 쉽게 설치할 수 있습니다.
              특별한 공간, 특별한 장소에서 골프를 즐기세요!
            </p>

            {/* Specifications */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">제품 사양</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">크기</span>
                  <p className="font-bold text-gray-900">4.6m × 3.5m × 3.3m</p>
                </div>
                <div>
                  <span className="text-gray-600">무게</span>
                  <p className="font-bold text-gray-900">약 150kg</p>
                </div>
                <div>
                  <span className="text-gray-600">설치 시간</span>
                  <p className="font-bold text-gray-900">5분</p>
                </div>
                <div>
                  <span className="text-gray-600">구조</span>
                  <p className="font-bold text-gray-900">공기압 프레임</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {['실내외 설치', '빠른 조립', '이동 편리', '내구성 우수'].map((feature, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
                >
                  ✓ {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Location Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={location.image}
                alt={location.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                {location.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{location.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {location.description}
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 transition-all duration-300 rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="inline-block px-10 py-6 bg-white rounded-2xl shadow-xl border-2 border-gray-200">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-gray-900">더 많은 장소</span>에서 활용할 수 있습니다
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['회사 야유회', '골프 대회', '기업 행사', '체험 이벤트', '실내 연습장'].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Installation Guide */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🛠️ 간편한 설치 과정
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: '펼치기', desc: '텐트를 펼칩니다' },
              { step: '2', title: '공기 주입', desc: '에어펌프로 주입' },
              { step: '3', title: '장비 설치', desc: '스크린·센서 설치' },
              { step: '4', title: '완료!', desc: '골프 시작!' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3 shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

