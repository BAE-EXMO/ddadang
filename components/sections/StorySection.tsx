'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

export default function StorySection() {
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
