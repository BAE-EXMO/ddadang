'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  productType: 'tent' | 'screen';
}

export default function PurchaseModal({ isOpen, onClose, productType }: PurchaseModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    // Tent options
    simulator: false,
    projector: false,
    monitor: false,
    // Screen options
    width: '',
    height: '',
    velcroPosition: '',
    velcroType: '일반형',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
           let emailBody = '';
           if (productType === 'tent') {
             emailBody = `STUDIO 구매 문의

이름: ${formData.name}
전화번호: ${formData.phone}
주소: ${formData.address}

선택 옵션:
${formData.simulator ? '✓ 시뮬레이터\n' : ''}${formData.projector ? '✓ 프로젝터\n' : ''}${formData.monitor ? '✓ 모니터\n' : ''}`;
           } else {
             emailBody = `TPU 라미네이트 스크린 구매 문의

이름: ${formData.name}
전화번호: ${formData.phone}
주소: ${formData.address}

사이즈:
가로: ${formData.width}mm
세로: ${formData.height}mm

밸크로:
부착 위치: ${formData.velcroPosition}
종류: ${formData.velcroType}`;
           }

           window.location.href = `mailto:info@exmo.kr?subject=${productType === 'tent' ? 'STUDIO' : 'TPU 스크린'} 구매 문의&body=${encodeURIComponent(emailBody)}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">
                   {productType === 'tent' ? 'STUDIO 구매 문의' : 'TPU 스크린 구매 문의'}
                </h3>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  전화번호 *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  주소 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              {productType === 'tent' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    옵션 선택
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.simulator}
                        onChange={(e) => setFormData({ ...formData, simulator: e.target.checked })}
                        className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">시뮬레이터</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.projector}
                        onChange={(e) => setFormData({ ...formData, projector: e.target.checked })}
                        className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">프로젝터</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.monitor}
                        onChange={(e) => setFormData({ ...formData, monitor: e.target.checked })}
                        className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">모니터</span>
                    </label>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        가로 (mm) *
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.width}
                        onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        세로 (mm) *
                      </label>
                      <input
                        type="number"
                        required
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      밸크로 부착 위치 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.velcroPosition}
                      onChange={(e) => setFormData({ ...formData, velcroPosition: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      밸크로 종류 *
                    </label>
                    <select
                      value={formData.velcroType}
                      onChange={(e) => setFormData({ ...formData, velcroType: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                      <option value="일반형">일반형</option>
                      <option value="강력형">강력형</option>
                      <option value="초강력형">초강력형</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  문의하기
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

