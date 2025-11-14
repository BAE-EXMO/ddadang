'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Flag, Calendar, DollarSign, MessageCircle, Zap, BarChart, Trophy } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function AppGuideSection() {
  const memories = [
    { icon: <Camera className="w-6 h-6" />, text: '어제의 라운드를 기억하시나요?' },
    { icon: <Users className="w-6 h-6" />, text: '함께한 사람들의 웃음소리' },
    { icon: <Flag className="w-6 h-6" />, text: '최고의 샷, 그 순간의 감동' },
  ];

  const benefits = [
    { 
      icon: <Calendar className="w-12 h-12" />, 
      title: '골프 약속, 이제 간단하게', 
      problem: '4명의 스케줄 조율, 날씨 확인, 골프장 예약 변경 공지...',
      solution: '한 번의 기록으로 모두 완료. 캘린더에서 날씨 확인하고, 약속 카드가 곧 단톡방입니다.',
      color: 'from-[#EC4899] to-[#F472B6]'
    },
    { 
      icon: <DollarSign className="w-12 h-12" />, 
      title: '정산 걱정 없는 즐거운 라운드', 
      problem: '타당 천원 정산 때문에 언성이 높아지고, 총액이 안 맞아 불편하셨죠?',
      solution: '타수에 따른 정확한 자동 정산. 누가 얼마를 잃고 땄는지 투명하게. 이제 천원 때문에 기분 상할 일 없습니다.',
      color: 'from-[#F472B6] to-[#F9A8D4]'
    },
    { 
      icon: <Users className="w-12 h-12" />, 
      title: '총무도, 회원도 편한 월례회', 
      problem: '총무는 참여 여부 일일이 확인하고, 회원은 불참 메시지 남기기 부담스럽고...',
      solution: '약속 카드 삭제만으로 불참 의사 전달. 회원 관리 한눈에, 새 회원 추가도 자동으로.',
      color: 'from-[#F9A8D4] to-[#FBE4F0]'
    },
    { 
      icon: <Camera className="w-12 h-12" />, 
      title: '함께한 추억, 영원히 간직하세요', 
      problem: '작년 그날의 라운드, 누구와 함께했는지 기억나시나요?',
      solution: '한 명만 저장하면 동반자 모두에게 공유. 앨범처럼 찾아보는 추억, 전적 비교까지.',
      color: 'from-[#DB2777] to-[#EC4899]'
    },
  ];

  const quickFeatures = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: '약속 생성',
      desc: '캘린더에서 날씨 보며 일정 조율',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '그룹 채팅',
      desc: '약속 카드가 곧 단톡방',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '간편 입력',
      desc: '홀별 스코어 버튼으로 기록',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: '자동 정산',
      desc: '타수 기반 투명한 계산',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: '전적 관리',
      desc: '동반자별 누적 전적 비교',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: '추억 저장',
      desc: '앨범처럼 라운드 기록 보관',
    },
  ];

  return (
    <SectionWrapper
      id="app"
      className="bg-gradient-to-b from-white via-[#FEF7FB]/30 to-white"
    >
      {/* Emotional Opening */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="inline-block px-6 py-2 bg-[#FBE4F0] text-[#DB2777] rounded-full text-sm font-semibold mb-6">
          추억을 기억하는 방법
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-snug md:leading-normal">
          기억은 <span className="text-[#EC4899]">기록될 때</span><br />
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
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FBE4F0]"
            >
              <div className="flex justify-center mb-4 text-[#EC4899]">{memory.icon}</div>
              <p className="text-lg text-gray-700 font-medium italic">
                "{memory.text}"
              </p>
            </motion.div>
          ))}
        </div>
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
            <div className="bg-gradient-to-br from-[#F472B6] to-[#F9A8D4] rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                골프의 추억 = <br />
                함께한 시간 + 기록 + 에피소드
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-white/90">
                  ✓ 스코어 기록이 귀찮다
                </p>
                <p className="text-lg text-white/90">
                  ✓ 계산이 번거롭다
                </p>
                <p className="text-lg text-white/90">
                  ✓ 기억은 흐려진다
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/30">
                <p className="text-2xl font-bold">
                  → <span className="font-semibold text-white">언제칠까</span> 앱이 추억을 '간단히' 남겨줍니다
                </p>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="brand-name">언제칠까</span> 앱의 장점
            </h3>
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-500 italic mb-2">❌ {benefit.problem}</p>
                    <p className="text-gray-700">✅ {benefit.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quick Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          모든 기능이 하나의 앱에
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {quickFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all text-center"
            >
              <div className="flex justify-center mb-3 text-[#EC4899]">{feature.icon}</div>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Emotional Closing */}
      <motion.div
        id="download"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="pt-8">
            <Button variant="primary" size="lg" href="#download">
              📱 <span className="font-semibold text-white">언제칠까</span> 앱 다운로드
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
