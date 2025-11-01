'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

export default function VisionSection() {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: '언제칠까 App',
      description: '라운드 일정, 정산, 데이터 관리',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: '언제칠까 Studio',
      description: '이동형 스크린골프 공간',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      title: '언제칠까 Screen',
      description: 'TPU 라미네이트 임팩트 스크린',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <SectionWrapper
      id="about"
      heading="We Connect Golf."
      subheading="EXMO는 '언제칠까'라는 이름으로 골프의 데이터화, 공간화, 네트워크화를 실현합니다."
      bgColor="darker"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} delay={index * 0.1}>
            <div className="text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-4 text-white glow-blue`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-12"
      >
        <div className="inline-block px-8 py-6 bg-white border-2 border-gray-300 rounded-2xl shadow-lg">
          <p className="text-xl md:text-2xl text-gray-900 font-semibold italic">
            "우리는 천을 팔지 않습니다.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              골프의 경험을 설계합니다
            </span>
            ."
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

