'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <img
          src="/images/hero-golf.jpg"
          alt="골프를 즐기는 사람들"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to solid color if image not found
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #2F5233 0%, #5C5C5C 100%)';
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Message */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            골프는 소중한 <span className="text-yellow-400">추억</span>입니다
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-2xl md:text-3xl text-white/95 font-light leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              언제칠까는 그 추억을 더 오래,<br className="md:hidden" /> 더 스마트하게 지켜드립니다
            </p>

            <div className="pt-8 space-y-4">
              <p className="text-lg md:text-xl text-white/90 italic">
                "골프는 스코어가 아니라 사람과의 시간입니다"
              </p>
              <p className="text-lg md:text-xl text-white/90 italic">
                "그 순간은 소중한 추억이 됩니다"
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" size="lg" href="#airtent">
              추억의 시작 →
            </Button>
            <Button variant="outline" size="lg" href="#story">
              EXMO 이야기
            </Button>
          </motion.div>

          {/* Three Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            {[
              { icon: '🏕️', title: 'Studio', description: '프리미엄 골프 공간' },
              { icon: '📱', title: '언제칠까 앱', description: '추억을 기록하다' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

