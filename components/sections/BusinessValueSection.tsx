'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';
import { TrendingDown, TrendingUp, Building2, Tent, DollarSign, Clock, MapPin, Home, Zap, Shield } from 'lucide-react';

export default function BusinessValueSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const problems = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "막대한 초기 투자",
      description: "수억원의 시설비와 인테리어 비용"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "높은 고정비",
      description: "매월 수천만원의 임대료와 관리비"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "긴 회수 기간",
      description: "투자금 회수까지 3~5년 소요"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "입지 제약",
      description: "도심 상권에만 가능한 사업"
    }
  ];

  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "최소 투자",
      description: "빈땅만 있으면 설치 완료",
      highlight: "시설비 90% 절감"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "제로 임대료",
      description: "외곽 저렴한 토지 활용 가능",
      highlight: "고정비 제로화"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "빠른 손익분기",
      description: "시뮬레이터만 임대하면 영업 시작",
      highlight: "6개월 내 회수"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "다목적 활용",
      description: "골프장 + 캠핑장 + 숙박시설",
      highlight: "3배 수익 창출"
    }
  ];

  const businessModels = [
    {
      type: "외곽형 골프타석",
      location: "외곽 빈땅 + 주차장",
      investment: "3천만원~",
      revenue: "월 500만원~",
      features: ["저렴한 토지 임대", "주차장 필수", "시뮬레이터 임대"],
      payback: "6개월"
    },
    {
      type: "복합 레저시설",
      location: "캠핑장 + 골프존",
      investment: "5천만원~",
      revenue: "월 1,000만원~",
      features: ["골프 + 캠핑 결합", "주말 집중 운영", "체험형 프로그램"],
      payback: "8개월"
    },
    {
      type: "글램핑 리조트",
      location: "관광지 인근",
      investment: "1억원~",
      revenue: "월 2,000만원~",
      features: ["숙박 + 골프 패키지", "사계절 운영", "프리미엄 가격"],
      payback: "10개월"
    }
  ];

  return (
    <>
      <SectionWrapper
        id="business-value"
        bgColor="darker"
      >
        {/* 메인 헤드라인 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-[#EC4899] text-white rounded-full text-sm font-semibold mb-6">
            💡 스마트한 사업 아이템
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            골프장 창업의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#F472B6]">고정관념을 깨다</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            수억원의 시설비? 높은 임대료? 이제는 옛날 이야기입니다.<br />
            <span className="font-bold text-gray-900">빈땅만 있으면 누구나 골프 사업을 시작할 수 있습니다.</span>
          </p>
        </motion.div>

        {/* 기존 방식의 문제점 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              기존 스크린골프장의 한계
            </h3>
            <p className="text-gray-600">창업을 망설이게 만드는 4가지 이유</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border-2 border-red-200 hover:border-red-400 transition-all"
              >
                <div className="text-red-500 mb-4">{problem.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h4>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VS 구분선 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center my-16"
        >
          <div className="bg-gradient-to-r from-red-500 to-[#EC4899] text-white px-12 py-4 rounded-full text-3xl font-bold shadow-2xl">
            VS
          </div>
        </motion.div>

        {/* 언제칠까 스튜디오 솔루션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="brand-name text-[#EC4899]">언제칠까</span> STUDIO의 혁신
            </h3>
            <p className="text-gray-600">사업 리스크를 최소화하는 4가지 솔루션</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#FEF7FB] to-white rounded-2xl p-6 border-2 border-[#EC4899] hover:shadow-2xl transition-all"
              >
                <div className="text-[#EC4899] mb-4">{solution.icon}</div>
                <div className="inline-block px-3 py-1 bg-[#EC4899] text-white rounded-full text-xs font-bold mb-3">
                  {solution.highlight}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h4>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 핵심 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#EC4899] via-[#F472B6] to-[#F9A8D4] rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  외곽 빈땅이<br />
                  수익 창출 골드존으로
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">주차장만 있으면 OK</p>
                      <p className="text-white/80 text-sm">접근성 좋은 외곽 토지를 활용하세요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">시뮬레이터 임대로 즉시 영업</p>
                      <p className="text-white/80 text-sm">복잡한 설비 투자 없이 바로 시작</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">골프 + 캠핑 + 숙박 3 in 1</p>
                      <p className="text-white/80 text-sm">다목적 활용으로 수익 극대화</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <p className="text-white/80 text-sm mb-2">초기 투자 대비 회수 기간</p>
                  <div className="text-5xl font-bold mb-2">6개월</div>
                  <p className="text-white/80 text-sm">평균 손익분기점</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold mb-1">1/10</p>
                    <p className="text-white/80 text-xs">초기 투자비</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">3배</p>
                    <p className="text-white/80 text-xs">수익 다각화</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 사업 모델 제안 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              당신에게 맞는 사업 모델을 선택하세요
            </h3>
            <p className="text-gray-600">토지 규모와 입지에 따른 맞춤형 사업 전략</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`p-6 text-white ${
                  index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  'bg-gradient-to-br from-pink-500 to-pink-600'
                }`}>
                  <h4 className="text-2xl font-bold mb-2">{model.type}</h4>
                  <p className="text-white/80 text-sm">{model.location}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">초기 투자</span>
                      <span className="text-xl font-bold text-gray-900">{model.investment}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">예상 월매출</span>
                      <span className="text-xl font-bold text-[#EC4899]">{model.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">손익분기점</span>
                      <span className="text-lg font-bold text-green-600">{model.payback}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">핵심 특징</p>
                    <ul className="space-y-2">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#EC4899] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 비교 이미지 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 기존 방식 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-red-500" />
                <h4 className="text-2xl font-bold text-gray-900">기존 실내 골프장</h4>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">시설비</span>
                  <span className="font-bold text-red-600">3억원~</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">월 임대료</span>
                  <span className="font-bold text-red-600">500만원~</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">인테리어</span>
                  <span className="font-bold text-red-600">1억원~</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">회수 기간</span>
                  <span className="font-bold text-red-600">3~5년</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">운영 유연성</span>
                  <span className="font-bold text-red-600">낮음</span>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <p className="text-red-700 font-bold">총 투자비 4억원 이상</p>
                <p className="text-red-600 text-sm mt-1">높은 리스크, 장기 회수</p>
              </div>
            </div>

            {/* 언제칠까 스튜디오 */}
            <div className="bg-gradient-to-br from-[#FEF7FB] to-white rounded-2xl p-8 shadow-xl border-2 border-[#EC4899]">
              <div className="flex items-center gap-3 mb-6">
                <Tent className="w-8 h-8 text-[#EC4899]" />
                <h4 className="text-2xl font-bold text-gray-900">
                  <span className="brand-name text-[#EC4899]">언제칠까</span> STUDIO
                </h4>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-pink-200">
                  <span className="text-gray-600">시설비</span>
                  <span className="font-bold text-green-600">3천만원~</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-pink-200">
                  <span className="text-gray-600">월 임대료</span>
                  <span className="font-bold text-green-600">50만원~</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-pink-200">
                  <span className="text-gray-600">인테리어</span>
                  <span className="font-bold text-green-600">불필요</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-pink-200">
                  <span className="text-gray-600">회수 기간</span>
                  <span className="font-bold text-green-600">6개월~</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">운영 유연성</span>
                  <span className="font-bold text-green-600">매우 높음</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#EC4899] to-[#F472B6] rounded-lg p-4 text-center text-white">
                <p className="font-bold text-lg">총 투자비 5천만원 이하</p>
                <p className="text-white/90 text-sm mt-1">최소 리스크, 빠른 회수</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 추가 이점 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <span className="brand-name text-[#EC4899]">언제칠까</span> STUDIO만의 특별한 장점
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FEF7FB] flex items-center justify-center flex-shrink-0">
                  <Tent className="w-6 h-6 text-[#EC4899]" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">캠핑용 텐트로도 활용</h5>
                  <p className="text-gray-600 text-sm">
                    골프 시즌이 아닐 때는 프리미엄 캠핑 텐트로 대여하여 추가 수익 창출이 가능합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FEF7FB] flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-[#EC4899]" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">숙박 시설로 전환</h5>
                  <p className="text-gray-600 text-sm">
                    내부 인테리어만 조금 손보면 글램핑 숙박시설로 즉시 전환 가능합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FEF7FB] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#EC4899]" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">이동 및 재배치 자유</h5>
                  <p className="text-gray-600 text-sm">
                    사업이 잘 안되면 다른 곳으로 이동 가능. 실패 리스크를 최소화합니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FEF7FB] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#EC4899]" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">사계절 운영 가능</h5>
                  <p className="text-gray-600 text-sm">
                    냉난방 시스템으로 봄·여름·가을·겨울 365일 안정적 운영이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl">
            <div className="mb-6 inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold">
              🚀 2026년 1월 출시 예정 - 사전 예약 진행 중
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              지금 사전 예약하세요
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl">
              빈땅을 가지고 계신가요? 골프 사업을 꿈꾸시나요?<br />
              <span className="brand-name text-[#F472B6]">언제칠까</span> STUDIO가 당신의 꿈을 현실로 만들어드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                💼 사전 예약 상담 신청
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="#contact"
              >
                📞 전화 문의
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              * 사업 계획서 및 수익성 분석 자료를 무료로 제공해드립니다
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productType="tent"
      />
    </>
  );
}

