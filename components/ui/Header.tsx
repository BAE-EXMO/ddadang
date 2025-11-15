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
                    <div className="border-t border-gray-100">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                        앱 다운로드
                      </div>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.when7.whentogolf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setPurchaseDropdownOpen(false)}
                        className="w-full text-left px-4 py-3 hover:bg-[#FEF7FB] transition-colors text-gray-700 hover:text-[#EC4899] font-medium flex items-center gap-2"
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
                        onClick={() => setPurchaseDropdownOpen(false)}
                        className="w-full text-left px-4 py-3 hover:bg-[#FEF7FB] transition-colors text-gray-700 hover:text-[#EC4899] font-medium flex items-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                        App Store
                      </a>
                    </div>
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
              <div className="w-full space-y-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.when7.whentogolf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm flex items-center justify-center gap-2"
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
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  App Store
                </a>
              </div>
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

