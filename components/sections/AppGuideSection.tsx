'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function AppGuideSection() {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      icon: '🗓️',
      title: '골프 약속 관리',
      description: '일정 조율부터 동반자 초대까지 한 번에',
    },
    {
      icon: '💬',
      title: '실시간 채팅',
      description: '약속별 그룹 채팅으로 편리한 소통',
    },
    {
      icon: '⚡',
      title: '빠른 스코어 입력',
      description: '직관적인 버튼 입력 방식',
    },
    {
      icon: '💰',
      title: '자동 정산',
      description: '복잡한 골프 정산을 자동으로',
    },
    {
      icon: '🏆',
      title: '결과 저장',
      description: '라운딩 기록 보관 및 공유',
    },
    {
      icon: '👥',
      title: '월례회 관리',
      description: '정기 모임을 쉽게 관리',
    },
  ];

  const guides = [
    {
      id: 'appointment',
      title: '골프 약속 만들기',
      icon: '🗓️',
      steps: [
        '➕ 새 약속 버튼을 터치하세요',
        '날짜, 시간, 골프장 정보를 입력하세요',
        '동반자를 추가하고 초대장을 발송하세요',
        'SMS로 자동 초대장이 발송됩니다',
      ],
    },
    {
      id: 'scoring',
      title: '게임 스코어링',
      icon: '⚡',
      steps: [
        '채팅방에서 게임 시작 버튼을 터치하세요',
        '코스와 플레이어를 설정하세요',
        '타당, 버디 등 베팅 규칙을 설정하세요',
        '홀별로 간편하게 스코어를 입력하세요',
      ],
    },
    {
      id: 'settlement',
      title: '정산 시스템',
      icon: '💰',
      steps: [
        '각 홀 완료 후 즉시 정산이 가능합니다',
        '타당, 버디, 꼴지 벌금이 자동 계산됩니다',
        '18홀 완료 후 최종 정산표를 확인하세요',
        '정산 내역은 자동으로 저장됩니다',
      ],
    },
    {
      id: 'monthly',
      title: '월례회 관리',
      icon: '👥',
      steps: [
        '새 월례회를 생성하고 기본 정보를 입력하세요',
        '정기 일정을 설정하면 자동으로 약속이 생성됩니다',
        '회원을 초대하고 권한을 관리하세요',
        '전용 채팅방에서 회원들과 소통하세요',
      ],
    },
  ];

  const faqs = [
    {
      q: '초대받은 사람도 앱을 설치해야 하나요?',
      a: '네, 초대받은 분도 언제칠까 앱을 설치해야 채팅 참여 및 실시간 소통이 가능합니다.',
    },
    {
      q: '스코어를 잘못 입력했어요.',
      a: '해당 홀에서 플레이어 스코어를 다시 터치하면 수정할 수 있습니다.',
    },
    {
      q: '정산이 맞지 않는 것 같아요.',
      a: '베팅 설정과 홀별 정산 내역을 다시 확인해보세요. 문제가 지속되면 앱 내 문의 기능을 이용해주세요.',
    },
    {
      q: '채팅방이 안 보여요.',
      a: '인터넷 연결 상태를 확인하고, 앱을 완전히 종료 후 다시 실행해보세요.',
    },
  ];

  return (
    <SectionWrapper
      id="app"
      heading="언제칠까 앱"
      subheading="골프 약속부터 정산까지, 모든 것을 하나의 앱에서"
      bgColor="dark"
    >
      {/* App Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            <span className="font-bold text-gray-900">언제칠까</span>는 아마추어 골퍼를 위한{' '}
            <span className="font-bold text-green-600">올인원 라운딩 앱</span>입니다.
            골프 약속 관리부터 실시간 스코어링, 자동 정산까지 모든 기능을 제공합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="#download">
              📱 앱 다운로드
            </Button>
            <Button variant="outline" size="lg" href="#app-guide">
              📖 사용 가이드 보기
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ✨ 주요 기능
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* User Guides */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-20"
        id="app-guide"
      >
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          📖 사용 가이드
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <Card key={guide.id} delay={index * 0.1}>
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{guide.icon}</div>
                <h4 className="text-2xl font-bold text-gray-900 flex-1">
                  {guide.title}
                </h4>
              </div>
              <div className="space-y-3">
                {guide.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ❓ 자주 묻는 질문
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-green-600">Q.</span>
                {faq.q}
              </h4>
              <p className="text-gray-700 pl-6 leading-relaxed">
                <span className="text-green-600 font-bold">A.</span> {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-20"
        id="download"
      >
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border-2 border-green-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            🏌️‍♂️ 언제칠까로 더 즐거운 골프 라이프를!
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            지금 바로 앱을 다운로드하고 스마트한 골프 라운딩을 경험하세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

