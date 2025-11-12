'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

export default function StorySection() {
  const values = [
    {
      icon: '🎯',
      title: '추억을 만들고',
      description: '에어텐트',
      detail: '어디서든 골프의 무대를 만듭니다',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: '📱',
      title: '추억을 남기고',
      description: '따당 앱',
      detail: '모든 순간을 기록하고 저장합니다',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🛡️',
      title: '추억을 오래 지키는',
      description: '스크린천',
      detail: '품질로 추억의 공간을 지킵니다',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const testimonials = [
    {
      name: '김철수',
      role: '골프장 운영자',
      comment: '에어텐트 덕분에 야외 이벤트가 성공적이었습니다. 설치도 빠르고 고객들의 반응이 아주 좋았어요!',
      rating: 5,
    },
    {
      name: '박영희',
      role: '골프 동호회 회장',
      comment: '따당 앱으로 월례회 관리가 정말 편해졌어요. 정산도 자동이고 모든 기록이 남아서 좋습니다.',
      rating: 5,
    },
    {
      name: '이준호',
      role: '스크린골프장 사장',
      comment: 'EXMO 스크린천은 내구성이 탁월합니다. 교체 비용이 확실히 줄었고, 소음도 적어 만족스럽습니다.',
      rating: 5,
    },
  ];

  return (
    <SectionWrapper 
      id="story"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Brand Story Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-6 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-semibold mb-6">
          EXMO 이야기
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          골프는 단순한 스포츠가 아니라<br />
          함께 <span className="text-yellow-600">웃고, 응원하고, 기억하는</span> 순간입니다
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          EXMO는 그 순간을 만들어주고, 기록하고, 지켜주는 기술입니다
        </p>
      </motion.div>

      {/* Three Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          3개를 하나로 묶는 스토리
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  <p className="text-gray-600">
                    {value.detail}
                  </p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-gray-300">
                    →
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Brand Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center">
            EXMO의 철학
          </h3>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-center text-2xl font-light italic text-yellow-300">
              "기억에 남는 순간은 기술보다 사람입니다"
            </p>
            <p className="text-center">
              스코어는 잊어도, 추억은 남습니다
            </p>
            <p className="text-center">
              EXMO는 골프를 통해 사람들의 시간을 더 아름답게 만듭니다
            </p>
            <p className="text-center text-xl font-semibold text-yellow-300 pt-4">
              라운드가 끝나도 추억은 계속됩니다
            </p>
          </div>
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
          고객들이 EXMO와 함께 만든 특별한 순간들
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
