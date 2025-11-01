'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';

export default function EcosystemSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nodes = [
    { id: 'app', label: 'App', x: 50, y: 20, color: 'from-pink-500 to-rose-500' },
    { id: 'tent', label: 'Studio', x: 20, y: 60, color: 'from-blue-500 to-cyan-500' },
    { id: 'screen', label: 'Screen', x: 80, y: 60, color: 'from-purple-500 to-pink-500' },
    { id: 'cloud', label: 'Cloud', x: 50, y: 80, color: 'from-cyan-500 to-teal-500' },
  ];

  const connections = [
    { from: 'app', to: 'tent' },
    { from: 'app', to: 'screen' },
    { from: 'tent', to: 'cloud' },
    { from: 'screen', to: 'cloud' },
    { from: 'app', to: 'cloud' },
  ];

  return (
    <SectionWrapper
      id="ecosystem"
      heading="Golf Data Ecosystem"
      subheading="모든 것이 연결되어 있습니다. 당신의 골프 데이터가 흐르는 생태계."
      bgColor="dark"
    >
      <div className="relative h-[500px] max-w-4xl mx-auto">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {connections.map((conn, i) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;
            
            return (
              <motion.line
                key={i}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="url(#gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Data Flow Particles */}
        {mounted && connections.map((conn, i) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gray-400 rounded-full"
              style={{
                left: `${fromNode.x}%`,
                top: `${fromNode.y}%`,
                zIndex: 2,
              }}
              animate={{
                left: [`${fromNode.x}%`, `${toNode.x}%`],
                top: [`${fromNode.y}%`, `${toNode.y}%`],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className={`w-24 h-24 rounded-full bg-gradient-to-r ${node.color} shadow-2xl flex items-center justify-center text-white font-bold text-lg backdrop-blur-lg border-2 border-white/20 bg-gray-900/20`}
            >
              {node.label}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          앱에서 발생한 데이터, 텐트와 스크린에서 생성된 플레이 기록,
          <br />
          <span className="font-bold text-gray-900">모든 것이 클라우드를 통해 실시간으로 동기화됩니다</span>
        </p>
      </motion.div>
    </SectionWrapper>
  );
}

