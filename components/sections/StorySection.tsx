'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

export default function StorySection() {
  const testimonials = [
    {
      name: '김동현',
      role: '골프 동호회 회장',
      content: '언제칠까 덕분에 동호회 관리가 정말 편해졌어요. 라운드 일정부터 정산까지 한 번에!',
      avatar: '👨',
    },
    {
      name: '이서연',
      role: '스크린골프장 운영자',
      content: '텐트 설치가 너무 간편해서 놀랐습니다. 5분이면 정말 설치 완료!',
      avatar: '👩',
    },
    {
      name: '박준호',
      role: '골프 강사',
      content: '데이터 분석 기능이 레슨에 큰 도움이 됩니다. 학생들 실력 향상이 눈에 보여요.',
      avatar: '🧑',
    },
  ];

  return (
    <SectionWrapper
      id="story"
      heading="Real Stories"
      subheading="언제칠까를 사용하는 실제 사용자들의 이야기"
      bgColor="darker"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <Card key={index} delay={index * 0.15}>
            <div className="text-center">
              <div className="text-5xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-gray-300">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video border-2 border-gray-300">
          <img
            src="/images/tent/KakaoTalk_20251031_090656348.jpg"
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group"
            >
              <svg
                className="w-8 h-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </motion.button>
          </div>
        </div>
        <div className="text-center mt-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            언제칠까 STUDIO 소개 영상
          </h3>
          <p className="text-gray-600">
            5분 안에 완성되는 스크린골프 공간을 직접 확인해보세요
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

