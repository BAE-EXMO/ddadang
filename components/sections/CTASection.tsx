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
      className="relative py-32 overflow-hidden"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black z-10" />
        {/* Sunset colors for emotional touch */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/30 via-yellow-500/20 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            추억을 함께 만들어갑니다
          </span>

          {/* Main Heading */}
                 <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
                   추억을 만드는 기술
                   <br />
                   <span className="text-yellow-400">
                     언제칠까
                   </span>
                 </h2>

                 {/* Emotional Messages */}
                 <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="mb-12 space-y-4"
                 >
                   <p className="text-2xl md:text-3xl text-white font-light italic">
                     "추억을 만들고, 기록하고, 지켜줍니다"
                   </p>
                   <p className="text-xl text-white/90">
                     Studio · 따당 앱 · 스크린천
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
               <Button variant="primary" size="lg" href="#airtent">
                 Studio 문의
               </Button>
               <Button variant="secondary" size="lg" href="#app">
                 따당 앱 다운로드
               </Button>
               <Button variant="outline" size="lg" href="#screen">
                 스크린천 문의
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

