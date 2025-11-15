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
      isAppDownload: true,
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
                ) : product.id === 'app' ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.when7.whentogolf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm font-semibold"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Google Play
                    </a>
                    <a
                      href="https://apps.apple.com/kr/app/id6738754660"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm font-semibold"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      App Store
                    </a>
                  </div>
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

