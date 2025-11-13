'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import PurchaseModal from '../ui/PurchaseModal';

export default function ProductSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<'tent' | 'screen'>('tent');

  const openModal = (productType: 'tent' | 'screen') => {
    setSelectedProduct(productType);
    setModalOpen(true);
  };
  
  const products = [
    {
      id: 'app',
      title: <><span className="brand-name">언제칠까</span> APP</>,
      altText: '언제칠까 APP',
      description: <>골프 약속부터 정산까지. <span className="brand-name">언제칠까</span>로 한 번에 관리하세요.</>,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      ctaLabel: '앱 다운로드',
      ctaHref: '#download',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      id: 'tent',
      title: <><span className="brand-name">언제칠까</span> STUDIO</>,
      altText: '언제칠까 STUDIO',
      description: '공기압 구조로 설치 5분! 실내외 어디든 설치 가능한 이동형 스크린골프 공간. 학교, 캠핑장, 해변, 축제, 전시회, 전원주택까지 장소 제약 없이 골프를 즐기세요.',
      image: '/images/tent/KakaoTalk_20251031_090254255.jpg',
      ctaLabel: '구매 문의',
      ctaHref: '#contact',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'screen',
      title: <><span className="brand-name">언제칠까</span> SCREEN</>,
      altText: '언제칠까 SCREEN',
      description: '소음·반사·내구성 모두를 잡은 차세대 골프 임팩트 스크린.',
      image: '/images/screen/연습장이미지.jpg',
      ctaLabel: '구매 문의',
      ctaHref: '#technology',
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <>
      <PurchaseModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        productType={selectedProduct}
      />
      
      <SectionWrapper
        id="products"
        heading={<><span className="brand-name">언제칠까</span>, 세 가지 형태의 솔루션</>}
        subheading={<><span className="brand-name">언제칠까</span>는 골프를 더 똑똑하게 만듭니다.</>}
        bgColor="dark"
      >
      <div className="space-y-24">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-12 items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                <img
                  src={product.image}
                  alt={product.altText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-40 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-transparent to-transparent opacity-60" />
                
                {/* Overlay Tech Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 tech-grid opacity-30" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  <span className={`inline-block px-4 py-1 bg-gradient-to-r ${product.gradient} text-white text-sm font-mono rounded-full mb-4`}>
                    Product {index + 1}
                  </span>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    {product.title}
                  </h3>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {product.description}
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              >
                {product.id === 'tent' ? (
                  <Button 
                    variant="purchase" 
                    size="md" 
                    onClick={() => openModal('tent')}
                  >
                    {product.ctaLabel}
                  </Button>
                ) : product.id === 'screen' ? (
                  <Button 
                    variant="purchase" 
                    size="md" 
                    onClick={() => openModal('screen')}
                  >
                    {product.ctaLabel}
                  </Button>
                ) : (
                  <Button variant="primary" size="md" href={product.ctaHref}>
                    {product.ctaLabel}
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-24 text-center"
      >
        <div className="inline-block px-8 py-6 bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-lg border border-gray-700 rounded-2xl">
          <p className="text-xl text-gray-300">
            앱, 텐트, 스크린 —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">
              세 가지가 모여 하나의 골프 데이터 플랫폼을 완성합니다
            </span>
          </p>
        </div>
      </motion.div>
      </SectionWrapper>
    </>
  );
}

