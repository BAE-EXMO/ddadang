'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', href: '#airtent' },
    { name: <><span className="brand-name">언제칠까</span> 앱</>, href: '#app' },
    { name: <><span className="brand-name">언제칠까</span> 이야기</>, href: '#story' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white shadow-md border-gray-200' 
          : 'bg-white border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md">
              <img 
                src="/images/logo.png" 
                alt="언제칠까 로고" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-2xl font-bold brand-name">
              언제칠까
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-black transition-colors font-normal text-sm"
              >
                {link.name}
              </a>
            ))}
            <Button variant="secondary" size="sm" href="#app">
              <span className="brand-name">언제칠까</span> 앱
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4 bg-white rounded-lg mt-2 p-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4">
              <Button variant="primary" size="sm" href="#download">
                앱 다운로드
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

