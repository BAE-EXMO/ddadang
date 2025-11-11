'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTASection() {
  const [mounted, setMounted] = useState(false);
  const [particles] = useState(() => 
    Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-gray-100"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[150px]"
        />
      </div>

      {/* Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-2 bg-white/80 border border-gray-300 rounded-full text-gray-700 text-sm font-mono mb-8 shadow-sm">
            Join the Future of Golf
          </span>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight drop-shadow-sm">
            골프의 미래는
            <br />
            <span className="text-blue-600">
              언제칠까가 만듭니다
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            EXMO가 만든 GolfTech 브랜드,{' '}
            <span className="font-bold text-gray-900">언제칠까</span>
          </p>
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-600 font-mono font-semibold">
              Golf <span className="text-blue-600 mx-2">•</span> Data <span className="text-indigo-600 mx-2">•</span> Space
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button variant="primary" size="lg" href="#contact">
            제품 상담
          </Button>
          <Button variant="ghost" size="lg" href="#contact">
            체험 신청
          </Button>
          <Button variant="outline" size="lg" href="#download">
            앱 다운로드
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="inline-block px-8 py-6 bg-white backdrop-blur-xl rounded-2xl border-2 border-gray-300 shadow-lg">
            <p className="text-gray-600 text-sm mb-2 font-mono">Contact Us</p>
            <a
              href="mailto:info@exmo.kr"
              className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-indigo-600 transition-all"
            >
              info@exmo.kr
            </a>
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: '⚡', text: '빠른 설치' },
            { icon: '🔒', text: '안전한 데이터' },
            { icon: '🌐', text: '24/7 지원' },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white backdrop-blur-lg rounded-xl border border-gray-300 shadow-md"
            >
              <span className="text-3xl">{feature.icon}</span>
              <span className="text-gray-700 font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gray-400 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                y: [0, -300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}

