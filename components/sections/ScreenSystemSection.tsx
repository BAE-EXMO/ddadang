'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wind, Flame, VolumeX, Target } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';

export default function ScreenSystemSection() {
  const [isScreenModalOpen, setIsScreenModalOpen] = useState(false);

  return (
    <>
      <SectionWrapper
        id="screen-system"
        bgColor="dark"
      >
        {/* Premium Screen System Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#FBE4F0] text-[#DB2777] rounded-full text-sm font-semibold mb-6">
              <span className="brand-name">언제칠까</span> Studio가 조용한 이유
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              프리미엄 <span className="text-[#EC4899]">스크린 시스템</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              타격감은 살리고, 소음은 줄였습니다<br />
              TPU라미네이트로 더욱 오래 사용할 수 있습니다.
            </p>
          </div>

          {/* Screen Features */}
          <div className="max-w-6xl mx-auto mb-20">
            <h4 className="text-3xl font-bold text-gray-900 text-center mb-12">
              스크린 특성
            </h4>
            
            {/* Screen Setup Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/tent/스크린.jpg"
                  alt="언제칠까 Studio 스크린 시스템"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Wind className="w-10 h-10" />, title: '3중에어메쉬원단', desc: '통풍성 우수' },
                { icon: <Flame className="w-10 h-10" />, title: '방염', desc: '안전성 인증' },
                { icon: <VolumeX className="w-10 h-10" />, title: '저소음', desc: '조용한 타격감' },
                { icon: <Target className="w-10 h-10" />, title: '집중타격부 TPU라미네이트', desc: '내구성 강화' },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:border-[#F472B6] transition-all"
                >
                  <div className="flex justify-center mb-4 text-[#EC4899]">{feature.icon}</div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-gray-600 text-center">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#F472B6] to-[#F9A8D4] rounded-3xl p-12 text-white shadow-2xl">
            <h4 className="text-3xl font-bold mb-8 text-center">
              좋은 추억은 좋은 공간에서 만들어집니다
            </h4>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-center">
                <span className="font-semibold text-white">언제칠까</span> Studio의 부드러운 타구감과 저소음은<br />
                <span className="font-bold text-[#FBE4F0]">TPU 라미네이트 스크린</span> 덕분입니다
              </p>
              <div className="border-t border-white/20 pt-6">
                <p className="text-center text-xl font-semibold text-[#FBE4F0]">
                  '프리미엄 스크린 시스템'은 기본 사양입니다
                </p>
                <p className="text-center text-white/80 mt-2">
                  옵션이 아닙니다
                </p>
              </div>
              <div className="pt-6 text-center">
                <p className="text-white/90 mb-4">
                  스크린만 별도 구매도 가능합니다
                </p>
                <Button 
                  variant="purchase" 
                  size="lg" 
                  onClick={() => setIsScreenModalOpen(true)}
                >
                  스크린 구매 문의
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      <PurchaseModal
        isOpen={isScreenModalOpen}
        onClose={() => setIsScreenModalOpen(false)}
        productType="screen"
      />
    </>
  );
}

