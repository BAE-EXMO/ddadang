'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Home, Monitor, Smartphone } from 'lucide-react';
import Button from './Button';
import PurchaseModal from './PurchaseModal';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [purchaseDropdownOpen, setPurchaseDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productType, setProductType] = useState<'tent' | 'screen'>('tent');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (purchaseDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.purchase-dropdown')) {
          setPurchaseDropdownOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [purchaseDropdownOpen]);

  const navLinks = [
    { id: 'app', name: <><span className="brand-name">언제칠까</span> 앱</>, href: '#app' },
    { id: 'studio', name: 'Studio', href: '#airtent' },
    { id: 'screen', name: '프리미엄 스크린', href: '#airtent' },
    { id: 'contact', name: '문의하기', href: '#contact' },
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
                key={link.id}
                href={link.href}
                className="text-gray-700 hover:text-black transition-colors font-normal text-sm"
              >
                {link.name}
              </a>
            ))}
            
            {/* Purchase Dropdown */}
            <div className="relative purchase-dropdown">
              <button
                onClick={() => setPurchaseDropdownOpen(!purchaseDropdownOpen)}
                className="flex items-center gap-1 px-4 py-2 bg-[#EC4899] text-white rounded-lg hover:bg-[#F472B6] transition-colors font-medium text-sm"
              >
                구매하기
                <ChevronDown className={`w-4 h-4 transition-transform ${purchaseDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {purchaseDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                  >
                    <button
                      onClick={() => {
                        setProductType('tent');
                        setIsModalOpen(true);
                        setPurchaseDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-[#FEF7FB] transition-colors text-gray-700 hover:text-[#EC4899] font-medium flex items-center gap-2"
                    >
                      <Home className="w-5 h-5" />
                      Studio 구매
                    </button>
                    <button
                      onClick={() => {
                        setProductType('screen');
                        setIsModalOpen(true);
                        setPurchaseDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-[#FEF7FB] transition-colors text-gray-700 hover:text-[#EC4899] font-medium border-t border-gray-100 flex items-center gap-2"
                    >
                      <Monitor className="w-5 h-5" />
                      스크린 구매
                    </button>
                    <a
                      href="#download"
                      onClick={() => {
                        setPurchaseDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-[#FEF7FB] transition-colors text-gray-700 hover:text-[#EC4899] font-medium border-t border-gray-100 flex items-center gap-2"
                    >
                      <Smartphone className="w-5 h-5" />
                      앱 다운로드
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                key={link.id}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Purchase Buttons */}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => {
                  setProductType('tent');
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-[#EC4899] text-white rounded-lg hover:bg-[#F472B6] transition-colors font-medium text-sm flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Studio 구매
              </button>
              <button
                onClick={() => {
                  setProductType('screen');
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-[#EC4899] text-white rounded-lg hover:bg-[#F472B6] transition-colors font-medium text-sm flex items-center justify-center gap-2"
              >
                <Monitor className="w-5 h-5" />
                스크린 구매
              </button>
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-4 py-2 bg-[#F472B6] text-white rounded-lg hover:bg-[#F9A8D4] transition-colors font-medium text-sm flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                앱 다운로드
              </a>
            </div>
          </motion.div>
        )}
      </nav>
      
      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productType={productType}
      />
    </header>
  );
}

