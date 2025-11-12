'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';

export default function ScreenSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const problems = [
    { icon: '💔', text: '스크린이 찢어졌다', impact: '추억의 공간이 멈춘다' },
    { icon: '🔊', text: '소음이 너무 크다', impact: '즐거움이 불편함이 된다' },
    { icon: '💸', text: '자주 교체해야 한다', impact: '비용이 계속 든다' },
  ];

  const solutions = [
    {
      icon: '💪',
      title: '뛰어난 내구성',
      description: 'TPU 라미네이트 기술',
      detail: '일반 스크린보다 3배 이상 오래갑니다',
    },
    {
      icon: '🔇',
      title: '저소음 설계',
      description: '조용한 임팩트',
      detail: '이웃 걱정 없이 편안하게',
    },
    {
      icon: '✨',
      title: '오래가는 품질',
      description: '장기 보증',
      detail: '추억의 공간을 계속 지킵니다',
    },
  ];

  const specs = [
    { label: '소재', value: 'TPU 라미네이트' },
    { label: '두께', value: '커스터마이징 가능' },
    { label: '크기', value: '맞춤 제작' },
    { label: '부착', value: '밸크로 / 프레임' },
  ];

  return (
    <>
      <SectionWrapper
        id="screen"
        className="bg-gradient-to-b from-white via-green-50/30 to-white"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            추억을 오래 남기는 장치
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">추억</span>이 계속 이어지도록
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            스크린골프는 또 하나의 추억의 장소입니다<br />
            스크린천이 오래 버티지 못하면, 추억의 공간이 끊깁니다
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            이런 경험 있으시죠?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-red-50 rounded-2xl p-8 text-center border-2 border-red-200"
              >
                <div className="text-6xl mb-4">{problem.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.text}
                </h4>
                <p className="text-red-600 font-medium">
                  → {problem.impact}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution - Main Product */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Product Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-white p-8">
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-xl font-bold text-gray-700">EXMO 스크린천</p>
                  <p className="text-gray-600">TPU 라미네이트</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                💪 3배 내구성
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">
                추억이 끊어지지 않도록
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                EXMO 스크린천은 TPU 라미네이트 기술로 제작되어<br />
                일반 스크린보다 훨씬 오래 사용할 수 있습니다
              </p>

              {/* Solutions Grid */}
              <div className="space-y-4 pt-4">
                {solutions.map((solution, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 shadow-md border border-green-100 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{solution.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {solution.title}
                        </h4>
                        <p className="text-green-600 font-semibold mb-2">
                          {solution.description}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {solution.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="w-full"
              >
                맞춤 제작 문의
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Specs & Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            제품 특징
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Specs */}
            <Card>
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>📋</span> 제품 사양
              </h4>
              <div className="space-y-4">
                {specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-bold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Benefits */}
            <Card>
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>✨</span> 핵심 이점
              </h4>
              <div className="space-y-4">
                {[
                  '찢어짐 걱정 없는 내구성',
                  '조용한 임팩트 소음',
                  '맞춤 제작 가능',
                  '장기 보증 서비스',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl">✓</span>
                    <p className="text-gray-700 pt-1">{benefit}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Durability Test Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-12 text-center border-2 border-green-200 shadow-xl max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🔬</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              내구성 테스트 완료
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              10,000회 이상의 타구 테스트를 통과한 검증된 품질
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
                <div className="text-sm text-gray-600">타구 테스트</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">-40%</div>
                <div className="text-sm text-gray-600">소음 감소</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">3년+</div>
                <div className="text-sm text-gray-600">평균 사용 기간</div>
              </div>
            </div>
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
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed italic">
              "추억은 끊어지면 안 됩니다"
            </p>
            <p className="text-xl text-gray-600">
              스크린이 오래가면 즐거움도 오래갑니다
            </p>
            <p className="text-lg text-gray-600">
              EXMO 스크린천은 추억이 닳지 않게 만듭니다
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productType="screen"
      />
    </>
  );
}

