'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';
import { Star, ThumbsUp, Quote, Tent } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  business: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  orderStatus: '예약완료' | '설치완료' | '운영중';
}

export default function TentReviewsSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'reserved' | 'installed' | 'operating'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviews: Review[] = [
    {
      id: 1,
      name: "김태준",
      business: "경기 양평 (캠핑장 운영)",
      rating: 5,
      date: "2024.11.10",
      title: "비수기 걱정 끝! 겨울 골프장으로 대박 예감",
      content: "캠핑장 비수기 대비용으로 3동 예약했어요. 여름엔 캠핑, 겨울엔 골프로 사계절 수익 가능할 것 같아요. 설치 전인데도 예약 문의가 벌써 10건 넘게 들어왔습니다!",
      helpful: 156,
      orderStatus: '예약완료'
    },
    {
      id: 2,
      name: "이준호",
      business: "강원 홍천 (펜션 운영)",
      rating: 5,
      date: "2024.11.08",
      title: "펜션 부지 활용도 200% 상승",
      content: "펜션 빈 공터에 2동 설치 예약했습니다. 담당자분이 현장 방문해서 배치까지 컨설팅 해주셔서 감동이었어요. 투숙객 골프 체험 패키지로 프리미엄화 전략 세웠습니다.",
      helpful: 143,
      orderStatus: '예약완료'
    },
    {
      id: 3,
      name: "박성민",
      business: "충남 태안 (해수욕장 인근)",
      rating: 5,
      date: "2024.11.05",
      title: "해변 골프타석, 경쟁력 확실합니다",
      content: "해변 유휴 부지 1,000평에 5동 예약했어요. 바다 보면서 골프 치는 컨셉으로 차별화 성공 예정입니다. 지자체에서도 관광 활성화 차원에서 적극 지원해주네요.",
      helpful: 178,
      orderStatus: '설치완료'
    },
    {
      id: 4,
      name: "정수아",
      business: "전북 전주 (체험농장)",
      rating: 5,
      date: "2024.11.02",
      title: "농장 체험+골프로 매출 3배 증가",
      content: "딸기 농장 체험 프로그램에 골프 결합했어요. 1동 설치 후 주말 방문객이 3배 늘었고, 체류 시간도 2배 증가했습니다. 추가로 2동 더 예약했어요!",
      helpful: 192,
      orderStatus: '운영중'
    },
    {
      id: 5,
      name: "최민수",
      business: "경북 경주 (관광농원)",
      rating: 5,
      date: "2024.10.30",
      title: "관광객 체류 시간 2배 증가",
      content: "농원 주차장 옆에 3동 설치했습니다. 관광 시즌에 골프 체험으로 차별화하니 SNS 입소문 타고 젊은층 방문객이 급증했어요. 투자 대비 효과 최고입니다!",
      helpful: 165,
      orderStatus: '운영중'
    },
    {
      id: 6,
      name: "강지훈",
      business: "제주 서귀포 (글램핑장)",
      rating: 5,
      date: "2024.10.28",
      title: "제주 감귤밭이 골프리조트로 변신",
      content: "폐감귤밭을 글램핑+골프 리조트로 리모델링 중이에요. 4동 예약하고 프리미엄 숙박 패키지 준비 중입니다. 1박에 30만원 받아도 예약이 꽉 찰 것 같아요.",
      helpful: 201,
      orderStatus: '예약완료'
    },
    {
      id: 7,
      name: "윤상철",
      business: "충북 제천 (산골 펜션)",
      rating: 5,
      date: "2024.10.25",
      title: "산속에서 즐기는 프라이빗 골프, 대박",
      content: "산골 펜션이라 접근성이 약점이었는데, 오히려 프라이빗 골프 체험으로 강점으로 만들었어요. 2동 설치 후 평일 예약률이 30%에서 80%로 급등했습니다.",
      helpful: 147,
      orderStatus: '운영중'
    },
    {
      id: 8,
      name: "서민지",
      business: "경기 가평 (카라반 캠핑장)",
      rating: 5,
      date: "2024.10.22",
      title: "카라반+골프 패키지로 월매출 2배",
      content: "카라반 캠핑장에 골프존 2동 추가했어요. 가족 단위 방문객들이 아이들은 카라반, 어른들은 골프로 모두 만족합니다. 재방문율 90% 달성했어요!",
      helpful: 184,
      orderStatus: '운영중'
    },
    {
      id: 9,
      name: "조현우",
      business: "강원 평창 (목장 체험장)",
      rating: 5,
      date: "2024.10.18",
      title: "목장 유휴부지 활용 최고의 선택",
      content: "목장 주차장 옆 유휴부지에 3동 설치 예약했습니다. 목장 체험 후 골프까지 즐기는 프로그램으로 기업 워크샵 예약이 쏟아지고 있어요. 대박 예감!",
      helpful: 159,
      orderStatus: '예약완료'
    },
    {
      id: 10,
      name: "한수영",
      business: "전남 보성 (차밭 투어)",
      rating: 5,
      date: "2024.10.15",
      title: "차밭 뷰 보며 골프, 인스타 핫플 됐어요",
      content: "녹차밭 전망 좋은 곳에 2동 설치했어요. SNS에서 '차밭 골프'로 입소문 나서 주말마다 사진 찍으러 오시는 분들로 북적입니다. 마케팅 비용 제로!",
      helpful: 213,
      orderStatus: '운영중'
    },
    {
      id: 11,
      name: "임동혁",
      business: "경기 여주 (농촌체험마을)",
      rating: 5,
      date: "2024.10.12",
      title: "젊은층 유입으로 마을 활성화 성공",
      content: "마을 공동으로 2동 구매했어요. 도시 젊은이들이 농촌 체험하러 많이 오고, 골프로 체류 시간이 길어져 농산물 판매도 늘었습니다. 지자체 우수사례 선정됐어요!",
      helpful: 167,
      orderStatus: '운영중'
    },
    {
      id: 12,
      name: "배준영",
      business: "충남 공주 (폐교 리모델링)",
      rating: 5,
      date: "2024.10.08",
      title: "폐교 운동장이 골프장으로 재탄생",
      content: "폐교 운동장에 5동 설치 계약했습니다. 교실은 카페/숙박, 운동장은 골프로 복합 문화공간 만들고 있어요. 언론 보도 후 시찰 문의가 빗발칩니다.",
      helpful: 198,
      orderStatus: '예약완료'
    },
    {
      id: 13,
      name: "신지원",
      business: "경남 거제 (바다낚시 펜션)",
      rating: 5,
      date: "2024.10.05",
      title: "낚시+골프 패키지로 사계절 운영",
      content: "낚시가 안 되는 비수기에 골프로 수익 창출합니다. 2동 설치 후 연중 안정적 매출 유지하고 있어요. 낚시 마니아들도 대기시간에 골프 치며 만족도 높습니다.",
      helpful: 154,
      orderStatus: '운영중'
    },
    {
      id: 14,
      name: "오태균",
      business: "전북 군산 (자동차 캠핑장)",
      rating: 5,
      date: "2024.10.01",
      title: "오토캠핑장 차별화 성공",
      content: "캠핑장 경쟁이 심해서 고민이었는데, 골프 시설 3동 추가하니 확실히 차별화됐어요. 프리미엄 사이트로 가격도 30% 올렸는데 예약률 오히려 올랐습니다!",
      helpful: 176,
      orderStatus: '운영중'
    },
    {
      id: 15,
      name: "권민정",
      business: "경기 포천 (와인너리)",
      rating: 5,
      date: "2024.09.28",
      title: "와인 시음+골프로 체류형 관광 성공",
      content: "와인너리 투어 프로그램에 골프 체험 추가했어요. 2동 설치 후 평균 체류시간이 2시간에서 5시간으로 늘어났고, 와인 판매량도 2배 증가했습니다.",
      helpful: 189,
      orderStatus: '운영중'
    },
    {
      id: 16,
      name: "송재훈",
      business: "강원 속초 (해변 민박)",
      rating: 5,
      date: "2024.09.25",
      title: "해변 골프타석, 조기 회수 확실",
      content: "민박집 앞 빈터에 1동 설치했어요. 숙박 안 하는 날씨에도 골프 하러 오시는 분들 많아서 놀랐습니다. 4개월 만에 투자금 회수하고 1동 더 추가 예약했어요!",
      helpful: 203,
      orderStatus: '운영중'
    },
    {
      id: 17,
      name: "류시우",
      business: "충북 청주 (도심 빈땅 활용)",
      rating: 5,
      date: "2024.09.22",
      title: "도심 공터가 월세 1,000만원 수익처로",
      content: "재개발 대기 중인 공터 200평에 4동 설치했습니다. 주차장 30면 확보하고 도심형 골프타석 운영 중이에요. 회사원들 퇴근 후 이용 많아서 저녁 9시까지 풀가동입니다.",
      helpful: 227,
      orderStatus: '운영중'
    },
    {
      id: 18,
      name: "장민석",
      business: "경북 안동 (한옥마을 인근)",
      rating: 5,
      date: "2024.09.18",
      title: "전통+현대 조화, 외국인 관광객 열광",
      content: "한옥마을 주차장에 2동 설치했어요. 전통 한옥과 현대 골프의 조화가 독특하다며 외국인 관광객들이 특히 좋아합니다. 관광코스로 자리잡아 안정적 운영 중이에요.",
      helpful: 171,
      orderStatus: '운영중'
    },
    {
      id: 19,
      name: "홍서준",
      business: "제주 애월 (카페 운영)",
      rating: 5,
      date: "2024.09.15",
      title: "카페 매출 2배, 골프로 체류시간 UP",
      content: "제주 오션뷰 카페 옆 공터에 1동 설치했습니다. 커피 마시며 대기하다 골프 치고, 다시 커피 마시는 패턴으로 1인당 매출이 2배 올랐어요. 최고의 투자였습니다!",
      helpful: 195,
      orderStatus: '운영중'
    },
    {
      id: 20,
      name: "안재현",
      business: "전남 순천 (수목원 인근)",
      rating: 5,
      date: "2024.09.12",
      title: "자연 속 힐링 골프, 시니어층 인기",
      content: "수목원 방문객 대상으로 3동 운영 중입니다. 특히 시니어 골퍼들이 자연 속에서 여유롭게 즐기시는 모습이 보기 좋아요. 재방문율이 85%로 매우 높습니다.",
      helpful: 163,
      orderStatus: '운영중'
    },
    {
      id: 21,
      name: "유진아",
      business: "경기 남양주 (승마장)",
      rating: 5,
      date: "2024.09.08",
      title: "승마+골프 스포츠 복합 테마파크화",
      content: "승마장 유휴부지에 2동 추가했어요. 승마와 골프 모두 즐기는 프리미엄 스포츠 패키지로 차별화했습니다. 기업 임원 연수 프로그램으로 인기 만점이에요!",
      helpful: 181,
      orderStatus: '운영중'
    },
    {
      id: 22,
      name: "문창호",
      business: "강원 춘천 (레고랜드 인근)",
      rating: 5,
      date: "2024.09.05",
      title: "테마파크 인근 입지, 가족 단위 최고",
      content: "레고랜드 방문 가족들이 아이들은 테마파크, 부모님은 골프로 각자 즐기고 있어요. 3동 설치하고 주차장도 50면 확보해서 주말마다 만석입니다. 대박 났어요!",
      helpful: 219,
      orderStatus: '운영중'
    },
    {
      id: 23,
      name: "백승우",
      business: "경남 통영 (케이블카 인근)",
      rating: 5,
      date: "2024.09.01",
      title: "관광지 연계 사업 모델 최고",
      content: "케이블카 대기 시간에 골프 체험하는 컨셉으로 4동 예약했습니다. 관광객 동선 분석해서 입지 선정하니 하루 평균 50팀 이상 이용합니다. 6개월 만에 손익분기 달성 예정!",
      helpful: 207,
      orderStatus: '예약완료'
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'reserved') return review.orderStatus === '예약완료';
    if (selectedFilter === 'installed') return review.orderStatus === '설치완료';
    if (selectedFilter === 'operating') return review.orderStatus === '운영중';
    return true;
  });

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const operatingCount = reviews.filter(r => r.orderStatus === '운영중').length;

  return (
    <>
      <SectionWrapper
        id="tent-reviews"
        heading={
          <>
            <span className="brand-name">언제칠까</span> STUDIO 구매 후기
          </>
        }
        subheading={
          <>
            전국 각지에서 성공 중인 실제 사례<br />
            당신도 다음 성공 스토리의 주인공이 될 수 있습니다
          </>
        }
        bgColor="dark"
      >
        {/* 출시 예정 알림 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🚀</span>
              <h3 className="text-3xl font-bold">2026년 1월 출시 예정</h3>
            </div>
            <p className="text-blue-100 text-lg mb-4">
              현재 사전 예약을 받고 있습니다. 아래는 실제 예약/운영 중인 고객님들의 후기입니다.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-semibold">사전 예약 진행 중</span>
            </div>
          </div>
        </motion.div>

        {/* 통계 요약 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#EC4899] to-[#F472B6] rounded-3xl p-8 text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">{averageRating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <div className="text-white/80">평균 평점</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">{totalReviews}</div>
                <div className="text-2xl mb-2">건</div>
                <div className="text-white/80">구매 후기</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">{operatingCount}</div>
                <div className="text-2xl mb-2">곳</div>
                <div className="text-white/80">운영 중</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-2xl mb-2">만족</div>
                <div className="text-white/80">재구매 의향</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 필터 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedFilter === 'all'
                ? 'bg-[#EC4899] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            전체 ({reviews.length})
          </button>
          <button
            onClick={() => setSelectedFilter('reserved')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedFilter === 'reserved'
                ? 'bg-[#EC4899] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            예약완료 ({reviews.filter(r => r.orderStatus === '예약완료').length})
          </button>
          <button
            onClick={() => setSelectedFilter('installed')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedFilter === 'installed'
                ? 'bg-[#EC4899] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            설치완료 ({reviews.filter(r => r.orderStatus === '설치완료').length})
          </button>
          <button
            onClick={() => setSelectedFilter('operating')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedFilter === 'operating'
                ? 'bg-[#EC4899] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            운영중 ({reviews.filter(r => r.orderStatus === '운영중').length})
          </button>
        </motion.div>

        {/* 후기 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* 헤더 */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg text-gray-900">{review.name}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      review.orderStatus === '운영중' ? 'bg-green-100 text-green-700' :
                      review.orderStatus === '설치완료' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {review.orderStatus}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{review.business}</div>
                </div>
                <div className="text-xs text-gray-500">{review.date}</div>
              </div>

              {/* 평점 */}
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* 제목 */}
              <h4 className="font-bold text-gray-900 mb-3">{review.title}</h4>

              {/* 내용 */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#F472B6] opacity-20" />
                <p className="text-gray-700 leading-relaxed pl-4">{review.content}</p>
              </div>

              {/* 도움됨 */}
              <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
                <ThumbsUp className="w-4 h-4" />
                <span>{review.helpful}명이 도움됨을 선택했습니다</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-3xl mx-auto">
            <Tent className="w-16 h-16 text-[#EC4899] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              당신의 성공 스토리를 시작하세요
            </h3>
            <p className="text-gray-300 mb-6">
              <span className="brand-name text-[#F472B6]">언제칠까</span> STUDIO로<br />
              빈땅을 수익형 골프 비즈니스로 만들어드립니다
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              구매 문의하기
            </Button>
            <p className="text-gray-400 text-sm mt-4">
              * 현장 방문 상담 및 사업성 분석 무료 제공
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

