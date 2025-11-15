'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';
import { Quote, Tent, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface Reservation {
  id: number;
  name: string;
  business: string;
  date: string;
  title: string;
  reason: string;
}

export default function TentReservationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const reservations: Reservation[] = [
    {
      id: 1,
      name: "김태준",
      business: "경기 양평 (캠핑장 운영 예정)",
      date: "2024.11.10",
      title: "비수기 없는 사계절 수익 창출을 위해",
      reason: "캠핑장 비수기 대비용으로 3동 사전 예약했습니다. 여름엔 캠핑, 겨울엔 골프로 사계절 수익이 가능할 것으로 기대됩니다. 출시 전인데도 주변 캠핑장 사장님들이 문의를 많이 하시네요."
    },
    {
      id: 2,
      name: "이준호",
      business: "강원 홍천 (펜션 운영)",
      date: "2024.11.08",
      title: "펜션 부지 활용도를 높이고 싶어서",
      reason: "펜션 빈 공터 활용 방안을 고민하다가 2동 예약했습니다. 투숙객들에게 골프 체험 패키지를 제공하면 프리미엄 펜션으로 차별화할 수 있을 것 같아요. 2026년 1월이 기대됩니다."
    },
    {
      id: 3,
      name: "박성민",
      business: "충남 태안 (해수욕장 인근 토지 보유)",
      date: "2024.11.05",
      title: "바다 뷰 골프장, 차별화 포인트가 명확해서",
      reason: "해변 유휴 부지 1,000평에 5동 예약했습니다. 바다 보면서 골프 치는 컨셉은 다른 곳과 확실히 차별화될 것 같아요. 지자체에서도 관광 활성화 차원에서 관심을 보이고 있습니다."
    },
    {
      id: 4,
      name: "정수아",
      business: "전북 전주 (체험농장 운영)",
      date: "2024.11.02",
      title: "농장 체험 + 골프로 패키지 만들려고",
      reason: "딸기 농장 체험 프로그램에 골프를 결합하면 가족 단위 방문객이 크게 늘 것 같아 2동 예약했어요. 아이들은 농장 체험, 부모님은 골프 체험으로 체류 시간도 길어질 것 같습니다."
    },
    {
      id: 5,
      name: "최민수",
      business: "경북 경주 (관광농원 운영)",
      date: "2024.10.30",
      title: "젊은층 유치를 위한 전략으로",
      reason: "관광농원 방문객이 중장년층에 편중돼 있어 고민이었는데, 골프 체험 시설을 추가하면 젊은층도 많이 올 것 같아서 3동 예약했습니다. SNS 마케팅 효과도 기대됩니다."
    },
    {
      id: 6,
      name: "강지훈",
      business: "제주 서귀포 (폐감귤밭 소유)",
      date: "2024.10.28",
      title: "유휴 토지를 프리미엄 리조트로",
      reason: "폐감귤밭을 글램핑+골프 리조트로 만들 계획입니다. 4동 예약하고 프리미엄 숙박 패키지를 준비 중이에요. 제주에서 골프와 글램핑을 동시에 즐기는 곳은 흔치 않아 경쟁력이 있을 것 같습니다."
    },
    {
      id: 7,
      name: "윤상철",
      business: "충북 제천 (산골 펜션 운영)",
      date: "2024.10.25",
      title: "접근성 약점을 프라이빗 강점으로",
      reason: "산골이라 접근성이 약점이었는데, 오히려 프라이빗 골프 체험으로 강점화하려고 2동 예약했습니다. 조용한 자연 속 골프를 원하는 분들에게 어필할 수 있을 것 같아요."
    },
    {
      id: 8,
      name: "서민지",
      business: "경기 가평 (카라반 캠핑장 운영)",
      date: "2024.10.22",
      title: "카라반 + 골프 패키지 구상",
      reason: "카라반 캠핑장에 골프존을 추가하면 가족 단위 만족도가 확 올라갈 것 같아 2동 예약했어요. 아이들은 카라반, 어른들은 골프로 모두 즐길 수 있는 공간을 만들 계획입니다."
    },
    {
      id: 9,
      name: "조현우",
      business: "강원 평창 (목장 체험장 운영)",
      date: "2024.10.18",
      title: "기업 워크샵 유치 목적으로",
      reason: "목장 체험과 골프를 결합한 기업 워크샵 프로그램을 만들고 싶어서 3동 예약했습니다. 팀빌딩 + 골프 체험으로 차별화된 기업 연수 패키지를 기획 중입니다."
    },
    {
      id: 10,
      name: "한수영",
      business: "전남 보성 (차밭 관광 운영)",
      date: "2024.10.15",
      title: "SNS 핫플레이스 만들기 위해",
      reason: "녹차밭 전망 좋은 곳에 2동 설치하면 인스타그램 핫플이 될 것 같아 예약했어요. '차밭에서 즐기는 골프'라는 컨셉으로 젊은층 관광객 유치를 기대합니다."
    },
    {
      id: 11,
      name: "임동혁",
      business: "경기 여주 (농촌체험마을 이장)",
      date: "2024.10.12",
      title: "마을 활성화와 젊은층 유입",
      reason: "마을 공동으로 2동 구매하기로 했어요. 도시 젊은이들이 농촌 체험하러 오면 골프도 즐기고 농산물도 사가면서 체류 시간이 길어질 것으로 기대합니다."
    },
    {
      id: 12,
      name: "배준영",
      business: "충남 공주 (폐교 리모델링 사업)",
      date: "2024.10.08",
      title: "복합 문화공간 프로젝트의 핵심으로",
      reason: "폐교 운동장에 5동 설치 계획입니다. 교실은 카페/숙박, 운동장은 골프장으로 복합 문화공간을 만들려고 해요. 지역 랜드마크가 될 것 같아 기대가 큽니다."
    },
    {
      id: 13,
      name: "신지원",
      business: "경남 거제 (바다낚시 펜션 운영)",
      date: "2024.10.05",
      title: "낚시 비수기 대안 수익원 확보",
      reason: "낚시가 안 되는 비수기에 골프로 수익을 창출하려고 2동 예약했습니다. 낚시 마니아들도 대기시간에 골프를 즐길 수 있어 고객 만족도가 올라갈 것 같아요."
    },
    {
      id: 14,
      name: "오태균",
      business: "전북 군산 (오토캠핑장 운영)",
      date: "2024.10.01",
      title: "프리미엄 캠핑장으로 차별화",
      reason: "캠핑장 경쟁이 심해서 차별화가 필요했어요. 골프 시설 3동을 추가하면 프리미엄 사이트로 가격을 올려도 경쟁력이 있을 것 같아 예약했습니다."
    },
    {
      id: 15,
      name: "권민정",
      business: "경기 포천 (와인너리 운영)",
      date: "2024.09.28",
      title: "와인 투어 + 골프 체험형 관광",
      reason: "와인 시음과 골프 체험을 결합한 프로그램을 만들 계획입니다. 2동 예약하고 체류형 관광 상품을 기획 중이에요. 평균 체류시간이 늘어나면 와인 판매도 증가할 것 같습니다."
    },
    {
      id: 16,
      name: "송재훈",
      business: "강원 속초 (해변 민박 운영)",
      date: "2024.09.25",
      title: "날씨 안 좋은 날에도 수익 창출",
      reason: "민박 앞 빈터에 1동 설치하면 날씨가 안 좋아 바다 못 갈 때도 골프 하러 오실 것 같아요. 빠른 투자금 회수가 가능할 것으로 보여 예약했습니다."
    },
    {
      id: 17,
      name: "류시우",
      business: "충북 청주 (도심 공터 소유)",
      date: "2024.09.22",
      title: "재개발 대기 토지 활용 방안",
      reason: "재개발 대기 중인 공터 200평을 그냥 놀리기 아까워서 4동 예약했습니다. 도심형 골프타석으로 운영하면 퇴근 후 직장인들이 많이 이용할 것 같아요."
    },
    {
      id: 18,
      name: "장민석",
      business: "경북 안동 (한옥마을 인근 토지)",
      date: "2024.09.18",
      title: "전통 + 현대의 조화로 관광 상품화",
      reason: "한옥마을 주차장에 2동 설치 계획입니다. 전통 한옥과 현대 골프의 조화가 독특할 것 같고, 특히 외국인 관광객들이 좋아할 것 같아 예약했어요."
    },
    {
      id: 19,
      name: "홍서준",
      business: "제주 애월 (오션뷰 카페 운영)",
      date: "2024.09.15",
      title: "카페 체류시간 늘려 매출 증대",
      reason: "제주 오션뷰 카페 옆 공터에 1동 설치 예정입니다. 커피 마시며 대기하다 골프 치고, 다시 커피 마시는 패턴으로 1인당 매출을 올릴 수 있을 것 같아요."
    },
    {
      id: 20,
      name: "안재현",
      business: "전남 순천 (수목원 인근 토지)",
      date: "2024.09.12",
      title: "시니어 골퍼 타겟 힐링 공간",
      reason: "수목원 방문객 대상 힐링 골프 체험장을 만들 계획입니다. 3동 예약하고 특히 시니어 골퍼들이 자연 속에서 여유롭게 즐길 수 있는 공간으로 만들려고 해요."
    },
    {
      id: 21,
      name: "유진아",
      business: "경기 남양주 (승마장 운영)",
      date: "2024.09.08",
      title: "승마 + 골프 스포츠 복합 시설로",
      reason: "승마장 유휴부지에 2동 추가할 계획입니다. 승마와 골프를 모두 즐기는 프리미엄 스포츠 패키지를 만들면 기업 임원 연수 프로그램으로 인기가 있을 것 같아요."
    },
    {
      id: 22,
      name: "문창호",
      business: "강원 춘천 (레고랜드 인근 토지)",
      date: "2024.09.05",
      title: "가족 단위 테마파크 연계 사업",
      reason: "레고랜드 인근 토지에 3동 설치 계획입니다. 아이들은 테마파크, 부모님은 골프로 각자 즐기는 컨셉이에요. 주차장 50면 확보해서 주말 가족 고객 유치를 목표로 합니다."
    },
    {
      id: 23,
      name: "백승우",
      business: "경남 통영 (케이블카 인근)",
      date: "2024.09.01",
      title: "관광지 대기시간 활용 모델",
      reason: "케이블카 대기 시간에 골프 체험을 제공하는 비즈니스 모델로 4동 예약했습니다. 관광객 동선을 분석해보니 충분히 승산이 있을 것 같아요. 6개월 내 손익분기 목표입니다."
    }
  ];

  const totalReservations = reservations.length;

  return (
    <>
      <SectionWrapper
        id="tent-reservations"
        heading={
          <>
            <span className="brand-name">언제칠까</span> STUDIO 사전 예약 현황
          </>
        }
        subheading={
          <>
            2026년 1월 출시를 앞두고<br />
            전국 각지에서 사전 예약이 이어지고 있습니다
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
              현재 사전 예약을 받고 있습니다. 아래는 실제 사전 예약하신 분들의 예약 이유입니다.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">{totalReservations}</div>
                <div className="text-2xl mb-2">건</div>
                <div className="text-white/80">사전 예약</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15</div>
                <div className="text-2xl mb-2">개</div>
                <div className="text-white/80">시도</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-2xl mb-2">만족</div>
                <div className="text-white/80">기대감</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 예약 이유 목록 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            왜 사전 예약을 하셨나요?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {(showAll ? reservations : reservations.slice(0, 3)).map((reservation, index) => (
            <motion.div
              key={reservation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#EC4899]"
            >
              {/* 헤더 */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold text-lg text-gray-900">{reservation.name}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                      예약완료
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{reservation.business}</div>
                </div>
                <div className="text-xs text-gray-500">{reservation.date}</div>
              </div>

              {/* 제목 */}
              <h4 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                <Quote className="w-5 h-5 text-[#EC4899] flex-shrink-0 mt-1" />
                <span>{reservation.title}</span>
              </h4>

              {/* 예약 이유 */}
              <div className="relative mb-4">
                <p className="text-gray-700 leading-relaxed pl-4 border-l-4 border-[#F472B6]">
                  {reservation.reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 전체보기 버튼 */}
        {!showAll && reservations.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-white text-[#EC4899] border-2 border-[#EC4899] rounded-lg font-bold hover:bg-[#FEF7FB] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              전체보기 ({reservations.length}건)
            </button>
          </motion.div>
        )}

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
              당신도 지금 사전 예약하세요
            </h3>
            <p className="text-gray-300 mb-6">
              <span className="brand-name text-[#F472B6]">언제칠까</span> STUDIO로<br />
              2026년 새로운 비즈니스를 시작할 준비를 하세요
            </p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              사전 예약 문의하기
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

