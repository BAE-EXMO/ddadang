'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function AppGuideSection() {
  const memories = [
    { icon: '📸', text: '어제의 라운드를 기억하시나요?' },
    { icon: '👥', text: '함께한 사람들의 웃음소리' },
    { icon: '⛳', text: '최고의 샷, 그 순간의 감동' },
  ];

  const features = [
    { 
      icon: '🗓️', 
      title: '약속 관리', 
      description: '일정 조율부터 동반자 초대까지',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: '💬', 
      title: '실시간 채팅', 
      description: '약속별 그룹 채팅으로 소통',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: '⚡', 
      title: '스코어 기록', 
      description: '간편한 버튼 입력',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: '💰', 
      title: '자동 정산', 
      description: '복잡한 계산은 이제 그만',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: '🏆', 
      title: '추억 저장', 
      description: '모든 라운드를 기록',
      color: 'from-red-500 to-rose-500'
    },
    { 
      icon: '👥', 
      title: '월례회', 
      description: '정기 모임을 한곳에서',
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  const useCases = [
    {
      title: '골프 약속 만들기',
      steps: [
        '새 약속 버튼 터치',
        '날짜, 시간, 골프장 입력',
        '동반자 초대',
        'SMS 초대장 자동 발송',
      ],
    },
    {
      title: '게임 스코어링',
      steps: [
        '채팅방에서 게임 시작',
        '코스 및 플레이어 설정',
        '홀별 스코어 간편 입력',
        '실시간 순위 확인',
      ],
    },
    {
      title: '자동 정산',
      steps: [
        '홀 완료 후 정산하기',
        '타당, 버디 자동 계산',
        '벌금 자동 적용',
        '최종 정산표 저장',
      ],
    },
  ];

  return (
    <SectionWrapper
      id="app"
      className="bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* Emotional Opening */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
          추억을 기억하는 방법
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          기억은 <span className="text-blue-600">기록될 때</span><br />
          완성됩니다
        </h2>

        {/* Memory Questions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {memories.map((memory, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100"
            >
              <div className="text-5xl mb-4">{memory.icon}</div>
              <p className="text-lg text-gray-700 font-medium italic">
                "{memory.text}"
              </p>
            </motion.div>
          ))}
        </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-2xl text-gray-700 font-light">
              언제칠까 앱은 추억을 잃지 않게 합니다
            </p>
            <p className="text-xl text-gray-600">
              사진처럼, 스코어도 기록됩니다
            </p>
          </motion.div>
      </motion.div>

      {/* App Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* App Screenshots/Info */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                골프의 추억 = <br />
                함께한 시간 + 기록 + 에피소드
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-blue-100">
                  ✓ 스코어 기록이 귀찮다
                </p>
                <p className="text-lg text-blue-100">
                  ✓ 계산이 번거롭다
                </p>
                <p className="text-lg text-blue-100">
                  ✓ 기억은 흐려진다
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-blue-400">
                <p className="text-2xl font-bold">
                  → 언제칠까 앱이 추억을 '간단히' 남겨줍니다
                </p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              스마트한 기록 시스템
            </h3>
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`text-4xl bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* How to Use */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          간편한 사용 방법
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} delay={index * 0.1}>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {useCase.title}
              </h4>
              <div className="space-y-3">
                {useCase.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
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
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed italic">
            "지난 라운드도, 다음 라운드도,<br />
            추억은 잊히지 않습니다"
          </p>

          <div className="pt-8">
            <Button variant="primary" size="lg" href="#download">
              📱 언제칠까 앱 다운로드
            </Button>
          </div>

          <div className="pt-4">
            <p className="text-gray-600">
              iOS & Android 모두 지원
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
