'use client';

import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';

export default function TechnologySection() {
  const technologies = [
    {
      title: 'TPU Lamination',
      description: '내구성과 정밀 반사율을 향상시킨 최첨단 소재 기술',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Inflatable Structure',
      description: '공기압 프레임 구조로 빠른 설치와 이동성 극대화',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Data Cloud API',
      description: '앱-공간 데이터 공유 아키텍처로 실시간 연동',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <SectionWrapper
      id="technology"
      heading="Built with Precision"
      subheading="기술은 단순한 수단이 아니라, 골프 경험을 완성하는 언어입니다."
      bgColor="gradient"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <Card key={index} delay={index * 0.15}>
            <div className="text-center">
              <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center p-5 shadow-xl glow-blue`}>
                <div className="text-white">
                  {tech.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
                {tech.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tech.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Code Block Effect */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-gray-800 backdrop-blur-lg rounded-2xl border border-gray-600 p-8 font-mono text-sm overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400">// EXMO Technology Stack</span>
          </div>
          <div className="space-y-2 text-gray-300">
            <div><span className="text-blue-400">const</span> <span className="text-cyan-400">platform</span> = {`{`}</div>
            <div className="pl-4"><span className="text-purple-400">hardware</span>: <span className="text-green-400">"Tent + Screen"</span>,</div>
            <div className="pl-4"><span className="text-purple-400">software</span>: <span className="text-green-400">"WhenToGolf App"</span>,</div>
            <div className="pl-4"><span className="text-purple-400">cloud</span>: <span className="text-green-400">"Real-time Data Sync"</span></div>
            <div>{`};`}</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

