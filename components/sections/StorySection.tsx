'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

export default function StorySection() {
  const values = [
    {
      icon: '🏕️',
      title: '추억의 공간을 만들다',
      description: 'Studio',
      detail: '프리미엄 스크린 시스템으로 어디서든 최상의 골프 환경을 제공합니다',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: '📱',
      title: '추억을 기록하다',
      description: <><span className="brand-name">언제칠까</span> 앱</>,
      detail: '골프 약속부터 스코어, 정산까지 모든 순간을 저장합니다',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const testimonials = [
    {
      name: '김철수',
      role: '골프장 운영자',
      comment: 'Studio 덕분에 야외 이벤트가 성공적이었습니다. 설치도 빠르고 고객들의 반응이 아주 좋았어요!',
      rating: 5,
    },
    {
      name: '박영희',
      role: '골프 동호회 회장',
      comment: <>
        <span className="brand-name">언제칠까</span> 앱으로 월례회 관리가 정말 편해졌어요. 정산도 자동이고 모든 기록이 남아서 좋습니다.
      </>,
      rating: 5,
    },
    {
      name: '이준호',
      role: '기업 체육대회 담당',
      comment: 'Studio를 행사장에 설치했는데 프리미엄 스크린 덕분에 소음 걱정 없이 진행했습니다. 참가자들도 만족했어요!',
      rating: 5,
    },
  ];

  return (
    <SectionWrapper 
      id="story"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Three Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          2개의 제품, 하나의 스토리
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <Card>
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-5xl mb-6 mx-auto shadow-lg`}>
                  {value.icon}
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-lg font-semibold text-gray-700 mb-3">
                    {value.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {value.detail}
                  </p>
                </div>
                {i < 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-5xl text-gray-300">
                    →
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Customer Testimonials - 추억 앨범 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
          추억 앨범
        </h3>
        <p className="text-lg text-gray-600 text-center mb-12">
          고객들이 <span className="brand-name">언제칠까</span>와 함께 만든 특별한 순간들
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} delay={i * 0.1}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Company Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            주식회사 EXMO
          </h4>
          <div className="space-y-2 text-gray-600">
            <p>경기도 하남시 미사강변대로 16</p>
            <p>하우스디 스마트밸리 F615호</p>
            <p className="pt-3">
              <a href="mailto:info@exmo.kr" className="text-blue-600 hover:text-blue-700 font-semibold">
                info@exmo.kr
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
