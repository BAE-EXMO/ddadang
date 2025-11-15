'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';
import { TrendingDown, TrendingUp, Building2, Tent, DollarSign, Clock, MapPin, Home, Zap, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

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
      payback: "6개월",
      roi: "200%"
    },
    {
      type: "복합 레저시설",
      location: "캠핑장 + 골프존",
      investment: "5천만원~",
      revenue: "월 1,000만원~",
      features: ["골프 + 캠핑 결합", "주말 집중 운영", "체험형 프로그램"],
      payback: "8개월",
      roi: "240%"
    },
    {
      type: "글램핑 리조트",
      location: "관광지 인근",
      investment: "1억원~",
      revenue: "월 2,000만원~",
      features: ["숙박 + 골프 패키지", "사계절 운영", "프리미엄 가격"],
      payback: "10개월",
      roi: "300%"
    }
  ];

  return (
    <>
      <SectionWrapper
        id="business-value"
        bgColor="dark"
      >
        {/* 메인 헤드라인 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-black text-white rounded-sm text-sm font-bold mb-6 tracking-wider">
            BUSINESS OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            골프장 창업의<br />
            <span className="relative inline-block">
              <span className="relative z-10">패러다임 전환</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-gray-200 -z-10"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            수억원의 시설비? 높은 임대료? 이제는 옛날 이야기입니다.<br />
            <span className="text-black font-bold">데이터로 증명된 새로운 비즈니스 모델</span>
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
            <h3 className="text-3xl font-bold text-black mb-4">
              기존 스크린골프장의 현실
            </h3>
            <p className="text-gray-600 font-medium">창업을 망설이게 만드는 4가지 리스크</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-sm p-6 border-2 border-gray-300 hover:border-gray-900 transition-all shadow-sm"
              >
                <div className="text-gray-900 mb-4">{problem.icon}</div>
                <h4 className="text-lg font-bold text-black mb-2">{problem.title}</h4>
                <p className="text-gray-600 text-sm font-medium">{problem.description}</p>
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
          <div className="bg-black text-white px-12 py-4 rounded-sm text-3xl font-bold shadow-lg tracking-wider">
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
            <h3 className="text-3xl font-bold text-black mb-4">
              <span className="brand-name">언제칠까</span> STUDIO의 솔루션
            </h3>
            <p className="text-gray-600 font-medium">사업 리스크를 최소화하는 4가지 핵심 가치</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-gray-50 to-white rounded-sm p-6 border-2 border-black hover:shadow-2xl transition-all"
              >
                <div className="text-black mb-4">{solution.icon}</div>
                <div className="inline-block px-3 py-1 bg-black text-white rounded-sm text-xs font-bold mb-3 tracking-wider">
                  {solution.highlight}
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{solution.title}</h4>
                <p className="text-gray-600 text-sm font-medium">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 핵심 데이터 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto bg-black rounded-sm p-12 text-white shadow-2xl border-4 border-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">
                  외곽 빈땅을<br />
                  수익 창출 자산으로
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">주차장만 확보하면 시작 가능</p>
                      <p className="text-gray-300 text-sm">접근성 좋은 외곽 토지를 활용</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">시뮬레이터 임대로 즉시 영업</p>
                      <p className="text-gray-300 text-sm">복잡한 설비 투자 불필요</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">골프 + 캠핑 + 숙박 3 in 1</p>
                      <p className="text-gray-300 text-sm">다목적 활용으로 수익 극대화</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-sm p-8 border border-white/20">
                <div className="text-center mb-6">
                  <p className="text-gray-300 text-sm mb-2 font-bold tracking-wider">평균 손익분기점</p>
                  <div className="text-6xl font-bold mb-2 tracking-tighter">6개월</div>
                  <p className="text-gray-300 text-sm">초기 투자 대비 회수 기간</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center border-t border-white/20 pt-6">
                  <div>
                    <p className="text-4xl font-bold mb-1 tracking-tighter">1/10</p>
                    <p className="text-gray-300 text-xs font-bold">초기 투자비</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1 tracking-tighter">3배</p>
                    <p className="text-gray-300 text-xs font-bold">수익 다각화</p>
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
            <h3 className="text-3xl font-bold text-black mb-4">
              검증된 비즈니스 모델
            </h3>
            <p className="text-gray-600 font-medium">토지 규모와 입지에 따른 맞춤형 사업 전략</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-lg border-2 border-gray-200 hover:border-black transition-all"
              >
                <div className="p-6 bg-black text-white border-b-4 border-gray-900">
                  <h4 className="text-2xl font-bold mb-2 tracking-tight">{model.type}</h4>
                  <p className="text-gray-300 text-sm font-medium">{model.location}</p>
                </div>
                <div className="p-6">
                  <div className="mb-6 pb-6 border-b-2 border-gray-100">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-gray-600 text-xs font-bold block mb-1">초기 투자</span>
                        <span className="text-2xl font-bold text-black">{model.investment}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 text-xs font-bold block mb-1">예상 월매출</span>
                        <span className="text-2xl font-bold text-black">{model.revenue}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-600 text-xs font-bold block mb-1">손익분기점</span>
                        <span className="text-xl font-bold text-green-600">{model.payback}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 text-xs font-bold block mb-1">연 ROI</span>
                        <span className="text-xl font-bold text-blue-600">{model.roi}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black mb-3">핵심 특징</p>
                    <ul className="space-y-2">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
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

        {/* 비교 표 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-sm overflow-hidden shadow-xl border-2 border-gray-200">
              <div className="grid grid-cols-3 border-b-2 border-gray-900">
                <div className="p-4 bg-gray-50 border-r border-gray-200">
                  <p className="text-sm font-bold text-gray-600">비교 항목</p>
                </div>
                <div className="p-4 bg-gray-50 border-r border-gray-200">
                  <p className="text-sm font-bold text-gray-900">기존 실내 골프장</p>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-sm font-bold text-white">언제칠까 STUDIO</p>
                </div>
              </div>
              {[
                { label: "시설비", old: "3억원~", new: "3천만원~" },
                { label: "월 임대료", old: "500만원~", new: "50만원~" },
                { label: "인테리어", old: "1억원~", new: "불필요" },
                { label: "회수 기간", old: "3~5년", new: "6개월~" },
                { label: "운영 유연성", old: "낮음", new: "매우 높음" }
              ].map((row, index) => (
                <div key={index} className={`grid grid-cols-3 ${index < 4 ? 'border-b border-gray-200' : ''}`}>
                  <div className="p-4 bg-gray-50 border-r border-gray-200">
                    <p className="text-sm font-bold text-gray-700">{row.label}</p>
                  </div>
                  <div className="p-4 border-r border-gray-200">
                    <p className="text-sm font-bold text-red-600">{row.old}</p>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <p className="text-sm font-bold text-blue-600">{row.new}</p>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-2">
                <div className="p-6 bg-red-50 text-center border-r border-gray-200">
                  <p className="text-red-900 font-bold text-lg mb-1">총 투자비 4억원 이상</p>
                  <p className="text-red-700 text-sm font-medium">높은 리스크, 장기 회수</p>
                </div>
                <div className="p-6 bg-blue-50 text-center">
                  <p className="text-blue-900 font-bold text-lg mb-1">총 투자비 5천만원 이하</p>
                  <p className="text-blue-700 text-sm font-medium">최소 리스크, 빠른 회수</p>
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
          <div className="inline-block bg-white border-4 border-black rounded-sm p-12 shadow-2xl">
            <div className="mb-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-sm font-bold tracking-wider">
              🚀 2026년 1월 출시 예정 - 사전 예약 진행 중
            </div>
            <h3 className="text-3xl font-bold text-black mb-4 tracking-tight">
              지금 사전 예약하세요
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl font-medium">
              빈땅을 가지고 계신가요? 골프 사업을 꿈꾸시나요?<br />
              <span className="text-black font-bold">데이터 기반의 사업 계획을 제공해드립니다</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-black text-white font-bold rounded-sm hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg tracking-wider"
              >
                💼 사전 예약 상담 신청
              </button>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-sm border-2 border-black hover:bg-gray-50 transition-all duration-300 tracking-wider"
              >
                📞 전화 문의
              </a>
            </div>
            <p className="text-gray-600 text-sm mt-6 font-medium">
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
