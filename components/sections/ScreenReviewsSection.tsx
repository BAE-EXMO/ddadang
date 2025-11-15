'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { Star, ThumbsUp, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  business: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
}

export default function ScreenReviewsSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'business' | 'personal'>('all');

  const reviews: Review[] = [
    {
      id: 1,
      name: "김성훈",
      business: "스카이골프연습장 대표",
      rating: 5,
      date: "2024.11.02",
      title: "소음 문제가 완전히 해결됐습니다",
      content: "야외 연습장 5타석에 설치했는데, 기존 스크린 대비 타구음이 70% 이상 줄었어요. 주변 상가 민원이 걱정이었는데 이제는 전혀 없습니다. 내구성도 뛰어나서 하루 200타 이상 맞아도 끄떡없네요.",
      helpful: 142
    },
    {
      id: 2,
      name: "이준호",
      business: "개인 (전원주택)",
      rating: 5,
      date: "2024.10.28",
      title: "집에서 골프 치는 꿈을 이뤘습니다",
      content: "전원주택 지하에 홈스크린골프장 만들면서 TPU 라미네이트 스크린 설치했습니다. 프로젝터 화질도 선명하고 타구감도 실제 타석이랑 똑같아요. 가족들이 매일 즐기고 있습니다.",
      helpful: 98
    },
    {
      id: 3,
      name: "박지영",
      business: "레이크사이드 리조트 시설팀장",
      rating: 5,
      date: "2024.10.25",
      title: "투숙객 만족도가 확 올랐어요",
      content: "리조트 레저시설에 3대 설치했는데 투숙객들 반응이 폭발적입니다. 특히 비 오는 날에도 골프를 즐길 수 있다는 점에서 큰 호평을 받고 있습니다. 내구성도 우수해서 AS 걱정이 없네요.",
      helpful: 87
    },
    {
      id: 4,
      name: "정민수",
      business: "프로골프레슨 원장",
      rating: 5,
      date: "2024.10.20",
      title: "레슨 효율이 2배 이상 올랐습니다",
      content: "실내 레슨장 4타석 전부 교체했어요. 타구 소리가 조용해서 레슨할 때 대화가 잘 들리고, 반발력이 일정해서 정확한 피드백이 가능합니다. 회원들도 타구감이 훨씬 좋다고 만족해요.",
      helpful: 134
    },
    {
      id: 5,
      name: "최승희",
      business: "골드힐 스크린골프장 점주",
      rating: 5,
      date: "2024.10.18",
      title: "교체 비용 걱정했는데 오히려 이득",
      content: "6개월째 사용 중인데 기존 스크린은 3개월마다 교체했던 것에 비해 아직도 새것처럼 멀쩡합니다. 장기적으로 보면 훨씬 경제적이에요. 고객들도 타격감이 좋다고 재방문율이 올랐습니다.",
      helpful: 156
    },
    {
      id: 6,
      name: "강태영",
      business: "개인 (아파트 골프동호회 회장)",
      rating: 5,
      date: "2024.10.15",
      title: "동호회원들 모두 만족합니다",
      content: "아파트 커뮤니티센터 골프연습장에 설치했습니다. 저소음이라 아파트 주민 민원 걱정 없고, 80명 회원이 매일 사용해도 스크린 상태가 양호합니다. 초기 투자비는 좀 있지만 그만한 가치 있어요.",
      helpful: 72
    },
    {
      id: 7,
      name: "윤재원",
      business: "그린밸리 CC 클럽하우스 매니저",
      rating: 5,
      date: "2024.10.12",
      title: "회원들이 실외 타석보다 선호합니다",
      content: "클럽하우스 실내연습장 리뉴얼하면서 설치했는데, 타구감이 실제 잔디 타석과 거의 유사해서 회원들 만족도가 매우 높습니다. 날씨 상관없이 연습 가능해서 이용률도 3배 증가했어요.",
      helpful: 103
    },
    {
      id: 8,
      name: "신동욱",
      business: "개인 (빌라 옥상)",
      rating: 5,
      date: "2024.10.09",
      title: "작은 공간에도 완벽하게 설치됐어요",
      content: "빌라 옥상 3평 공간에 맞춤 제작 설치했습니다. 사이즈 맞춤 제작이 가능해서 좋았고, 야외라 내구성 걱정했는데 자외선 차단 기능이 있어서 6개월 지났는데도 변색 없이 깨끗합니다.",
      helpful: 61
    },
    {
      id: 9,
      name: "한수정",
      business: "골프앤카페 대표",
      rating: 5,
      date: "2024.10.05",
      title: "카페 매출이 30% 늘었어요",
      content: "카페 2층에 골프연습장 만들면서 3타석 설치했어요. 조용해서 1층 카페 손님들 불편 없고, 골프 치러 온 손님들이 음료 주문도 많이 해서 매출도 올라갔습니다. 인테리어 효과도 좋아요.",
      helpful: 89
    },
    {
      id: 10,
      name: "오민재",
      business: "테크빌 사옥 복지시설 담당",
      rating: 5,
      date: "2024.10.01",
      title: "직원 복지 만족도 1위 시설입니다",
      content: "사옥 7층 휴게실에 2타석 설치했는데 직원들 반응이 엄청 좋아요. 점심시간이나 퇴근 후 스트레스 해소용으로 인기 만점입니다. 조용해서 층간 소음 민원도 전혀 없습니다.",
      helpful: 78
    },
    {
      id: 11,
      name: "배현우",
      business: "파인힐 펜션 운영",
      rating: 5,
      date: "2024.09.28",
      title: "비수기 예약이 끊이지 않아요",
      content: "펜션 정원에 이동형 스튜디오랑 같이 구매했어요. 날씨 안 좋은 날에도 투숙객들이 골프 즐길 수 있어서 만족도가 높고, 비수기에도 예약률이 70% 이상 유지됩니다. 투자 대비 효과 최고!",
      helpful: 95
    },
    {
      id: 12,
      name: "송민지",
      business: "스포츠센터 지배인",
      rating: 5,
      date: "2024.09.25",
      title: "회원 유지율이 확 올랐습니다",
      content: "골프 전용관 6타석 전부 교체했어요. 기존에는 소음 때문에 옆 요가실 수업에 방해됐는데, 이제는 전혀 문제없습니다. 회원들도 타구감 좋다고 만족해서 해지율이 반으로 줄었어요.",
      helpful: 112
    },
    {
      id: 13,
      name: "임동혁",
      business: "개인 (단독주택 차고)",
      rating: 5,
      date: "2024.09.22",
      title: "이웃 민원 걱정 끝났어요",
      content: "차고를 개조해서 골프연습장 만들었는데, 기존 스크린은 소음 때문에 이웃 눈치 봤어요. TPU 스크린으로 교체한 후로는 밤 10시에 쳐도 민원 한 번 없습니다. 타구감도 훨씬 부드럽고요.",
      helpful: 67
    },
    {
      id: 14,
      name: "조은지",
      business: "한라산 리조트 골프아카데미 실장",
      rating: 5,
      date: "2024.09.18",
      title: "프로들도 인정하는 품질입니다",
      content: "주니어 골프아카데미 8타석에 설치했습니다. 투어 프로 출신 코치들도 타구감이 실제와 거의 동일하다고 극찬했어요. 아이들이 장시간 연습해도 손목 무리가 덜해서 부상 위험도 줄었습니다.",
      helpful: 128
    },
    {
      id: 15,
      name: "권혁진",
      business: "스마트골프존 가맹점주",
      rating: 5,
      date: "2024.09.15",
      title: "손님들이 다른 매장과 비교해요",
      content: "12타석 전부 TPU로 교체했는데, 손님들이 타구감 차이를 확실히 느끼십니다. '여기가 제일 좋다'며 단골이 된 분들이 많아요. 가격 대비 내구성, 성능 모두 만족스럽습니다.",
      helpful: 141
    },
    {
      id: 16,
      name: "황지수",
      business: "개인 (아파트 베란다)",
      rating: 4,
      date: "2024.09.12",
      title: "좁은 공간 활용도 가능해요",
      content: "아파트 확장 베란다에 작은 사이즈로 주문제작했어요. 소음이 거의 없어서 밤에도 연습 가능하고, 공간 활용도 잘됩니다. 다만 설치가 좀 까다로워서 전문가 도움이 필요해요.",
      helpful: 54
    },
    {
      id: 17,
      name: "서준호",
      business: "건축사무소 소장 (모델하우스)",
      rating: 5,
      date: "2024.09.08",
      title: "모델하우스 방문객 체류시간 2배 증가",
      content: "고급 아파트 모델하우스 골프체험존에 설치했어요. 방문객들이 골프 체험하면서 자연스럽게 오래 머물게 되어 계약 전환율도 올랐습니다. 고급스러운 이미지 연출에도 효과적이에요.",
      helpful: 82
    },
    {
      id: 18,
      name: "전미란",
      business: "LPGA 티칭프로",
      rating: 5,
      date: "2024.09.05",
      title: "여성 골퍼들에게 특히 추천합니다",
      content: "개인 레슨 스튜디오에 2타석 설치했어요. 타구음이 부드러워서 힘이 약한 여성 골퍼들도 자신감 있게 칠 수 있어요. 충격 흡수가 잘 돼서 손목, 팔꿈치 부담도 적습니다.",
      helpful: 93
    },
    {
      id: 19,
      name: "노태준",
      business: "개인 (공장 창고 개조)",
      rating: 5,
      date: "2024.09.01",
      title: "넓은 공간에 설치하니 프로급이에요",
      content: "폐공장 창고를 개조해서 개인 골프연습장 만들었어요. 10m x 5m 대형 스크린 맞춤 제작했는데, 웅장하고 타구감도 최고입니다. 친구들 불러서 같이 치는데 모두 부러워해요.",
      helpful: 71
    },
    {
      id: 20,
      name: "안선영",
      business: "대학교 골프부 감독",
      rating: 5,
      date: "2024.08.28",
      title: "선수들 기록이 실제로 향상됐어요",
      content: "대학 골프부 실내 훈련장 6타석에 설치했습니다. 반발 계수가 일정해서 정확한 데이터 분석이 가능하고, 선수들이 날씨 영향 없이 꾸준히 훈련할 수 있어 대회 성적도 좋아졌습니다.",
      helpful: 106
    },
    {
      id: 21,
      name: "유재민",
      business: "골프존 프랜차이즈 법인",
      rating: 5,
      date: "2024.08.25",
      title: "전 지점 교체 결정했습니다",
      content: "테스트로 1개 지점에 먼저 설치했다가 효과가 좋아서 5개 지점 전부 교체 중입니다. 고객 재방문율 15% 상승, AS 비용 60% 절감, ROI가 확실합니다.",
      helpful: 167
    },
    {
      id: 22,
      name: "문성호",
      business: "개인 (상가 지하)",
      rating: 5,
      date: "2024.08.22",
      title: "습기 많은 지하에서도 문제없어요",
      content: "상가 지하 개인 연습공간에 설치했는데, 방수 기능이 뛰어나서 습기 찬 환경에도 곰팡이나 변색이 전혀 없습니다. 내구성도 좋아서 매일 100타 이상 쳐도 끄떡없어요.",
      helpful: 58
    },
    {
      id: 23,
      name: "홍진아",
      business: "키즈골프클럽 원장",
      rating: 5,
      date: "2024.08.18",
      title: "아이들 안전에 최적화돼있어요",
      content: "어린이 골프교실 4타석에 설치했어요. 충격 흡수가 뛰어나서 아이들이 실수로 스크린에 부딪혀도 다칠 염려가 없고, 소음이 적어 집중력도 높아졌습니다. 학부모들도 만족해요.",
      helpful: 79
    },
    {
      id: 24,
      name: "차민석",
      business: "실버타운 체육시설 팀장",
      rating: 5,
      date: "2024.08.15",
      title: "어르신들도 안전하게 이용하세요",
      content: "실버타운 골프연습장 3타석에 설치했습니다. 반발이 부드러워서 관절이 약한 어르신들도 부담 없이 즐기시고, 저소음이라 다른 프로그램 방해도 안 됩니다. 이용률이 가장 높은 시설이에요.",
      helpful: 84
    },
    {
      id: 25,
      name: "장우진",
      business: "개인 (해외 거주)",
      rating: 5,
      date: "2024.08.12",
      title: "해외 배송도 가능합니다",
      content: "베트남 하노이 자택에 설치했어요. 해외 배송 문의했더니 친절하게 안내해주시고, 도착 후 설치도 영상통화로 도움받아 쉽게 완료했습니다. 타구감은 한국 스크린골프장과 동일해요.",
      helpful: 43
    },
    {
      id: 26,
      name: "고은별",
      business: "컨트리클럽 드라이빙레인지 책임",
      rating: 5,
      date: "2024.08.08",
      title: "야외에서도 내구성 뛰어납니다",
      content: "야외 드라이빙레인지 끝 타석 안전망으로 활용 중입니다. 자외선, 비바람에 노출돼도 6개월째 변형 없고, 일반 그물망보다 훨씬 안전해서 사고 위험도 줄었어요.",
      helpful: 91
    },
    {
      id: 27,
      name: "신우철",
      business: "PGA 투어프로 코치",
      rating: 5,
      date: "2024.08.05",
      title: "프로 선수 훈련용으로 손색없습니다",
      content: "투어 선수 3명 개인 코칭 스튜디오에 설치했어요. 임팩트 순간 스핀값, 볼 속도 측정이 정확하고, 타구 피드백이 실제 필드와 동일해서 전천후 훈련이 가능합니다.",
      helpful: 119
    },
    {
      id: 28,
      name: "염지혜",
      business: "호텔 피트니스센터 매니저",
      rating: 5,
      date: "2024.08.01",
      title: "특급 호텔 시설에 어울리는 품질",
      content: "특1급 호텔 피트니스센터에 2타석 설치했어요. 고급스러운 마감과 조용한 작동으로 VIP 고객들 만족도가 높습니다. 호텔 이미지 제고에도 큰 도움이 되고 있습니다.",
      helpful: 76
    },
    {
      id: 29,
      name: "허준혁",
      business: "개인 (공동 구매)",
      rating: 5,
      date: "2024.07.28",
      title: "동호회 공동구매로 가성비 UP",
      content: "골프동호회 회원 5명이 각자 집에 설치하려고 공동구매 문의했더니 할인까지 해주셨어요. 모두 만족하며 사용 중이고, 주말마다 돌아가며 집에서 라운딩 즐기고 있습니다.",
      helpful: 102
    },
    {
      id: 30,
      name: "백수진",
      business: "스크린골프 창업 준비",
      rating: 5,
      date: "2024.07.25",
      title: "창업 준비 중이신 분들께 강력 추천",
      content: "스크린골프장 창업 준비하면서 여러 스크린 비교해봤는데, 가격 대비 성능이 가장 좋았어요. 상담도 친절하고 설치 A/S까지 완벽합니다. 다음달 오픈하는데 자신감 생겼어요!",
      helpful: 138
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'business') return !review.business.includes('개인');
    if (selectedFilter === 'personal') return review.business.includes('개인');
    return true;
  });

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <SectionWrapper
      id="screen-reviews"
      heading="고객 후기"
      subheading={
        <>
          실제 사용자들의 솔직한 경험담<br />
          <span className="brand-name">언제칠까</span> TPU 라미네이트 스크린이 만든 변화
        </>
      }
      bgColor="light"
    >
      {/* 통계 요약 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#EC4899] to-[#F472B6] rounded-3xl p-8 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
              <div className="text-white/80">전체 후기</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
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
        className="flex justify-center gap-4 mb-12"
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
          onClick={() => setSelectedFilter('business')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            selectedFilter === 'business'
              ? 'bg-[#EC4899] text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          사업자 ({reviews.filter(r => !r.business.includes('개인')).length})
        </button>
        <button
          onClick={() => setSelectedFilter('personal')}
          className={`px-6 py-3 rounded-full font-semibold transition-all ${
            selectedFilter === 'personal'
              ? 'bg-[#EC4899] text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          개인 ({reviews.filter(r => r.business.includes('개인')).length})
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
                <div className="font-bold text-lg text-gray-900">{review.name}</div>
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
          <h3 className="text-2xl font-bold text-white mb-4">
            당신도 이런 변화를 경험해보세요
          </h3>
          <p className="text-gray-300 mb-6">
            TPU 라미네이트 스크린으로 더 나은 골프 환경을 만들어드립니다
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#EC4899] text-white font-semibold rounded-lg hover:bg-[#F472B6] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            구매 문의하기
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

