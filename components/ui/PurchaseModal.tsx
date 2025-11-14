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
    email: '',
    // Tent options
    simulator: false,
    projector: false,
    monitor: false,
    // Screen options
    width: '',
    height: '',
    velcroFrontTop: '',
    velcroFrontLeft: '',
    velcroFrontRight: '',
    velcroBackTop: '',
    velcroBackLeft: '',
    velcroBackRight: '',
    additionalNotes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Sheets에 데이터 저장
    const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    
    if (googleSheetsUrl) {
      try {
        const orderData = {
          productType,
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          email: formData.email,
          width: formData.width,
          height: formData.height,
          velcroFrontTop: formData.velcroFrontTop,
          velcroFrontLeft: formData.velcroFrontLeft,
          velcroFrontRight: formData.velcroFrontRight,
          velcroBackTop: formData.velcroBackTop,
          velcroBackLeft: formData.velcroBackLeft,
          velcroBackRight: formData.velcroBackRight,
          additionalNotes: formData.additionalNotes,
          simulator: formData.simulator,
          projector: formData.projector,
          monitor: formData.monitor
        };
        
        await fetch(googleSheetsUrl, {
          method: 'POST',
          mode: 'no-cors', // Google Apps Script는 CORS를 지원하므로 no-cors 모드 사용
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData)
        });
        
        console.log('주문 정보가 Google Sheets에 저장되었습니다.');
      } catch (error) {
        console.error('Google Sheets 저장 실패:', error);
        // 에러가 발생해도 이메일은 계속 진행
      }
    }
    
    // 이메일 클라이언트 열기
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

이름 또는 상호: ${formData.name}
연락처: ${formData.phone}
받을 곳: ${formData.address}
이메일: ${formData.email}

사이즈:
가로: ${formData.width}mm
세로: ${formData.height}mm

밸크로 위치:
[앞면]
- 상: ${formData.velcroFrontTop}
- 좌: ${formData.velcroFrontLeft}
- 우: ${formData.velcroFrontRight}

[뒷면]
- 상: ${formData.velcroBackTop}
- 좌: ${formData.velcroBackLeft}
- 우: ${formData.velcroBackRight}

기타 문의:
${formData.additionalNotes}`;
    }

    window.location.href = `mailto:contact@when7.com?subject=${productType === 'tent' ? 'STUDIO' : 'TPU 스크린'} 구매 문의&body=${encodeURIComponent(emailBody)}`;
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
                  {productType === 'screen' ? '이름 또는 상호 *' : '이름 *'}
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
                  {productType === 'screen' ? '연락처 *' : '전화번호 *'}
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
                  {productType === 'screen' ? '받을 곳 *' : '주소 *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              {productType === 'screen' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              )}

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
                        가로크기 (mm) *
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
                        세로크기 (mm) *
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
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      밸크로 위치 *
                    </label>
                    
                    {/* 앞면 */}
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">앞면</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">상</label>
                          <select
                            required
                            value={formData.velcroFrontTop}
                            onChange={(e) => setFormData({ ...formData, velcroFrontTop: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                          >
                            <option value="">선택하세요</option>
                            <option value="까슬이">까슬이</option>
                            <option value="보슬이">보슬이</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">좌</label>
                            <select
                              required
                              value={formData.velcroFrontLeft}
                              onChange={(e) => setFormData({ ...formData, velcroFrontLeft: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            >
                              <option value="">선택하세요</option>
                              <option value="까슬이">까슬이</option>
                              <option value="보슬이">보슬이</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">우</label>
                            <select
                              required
                              value={formData.velcroFrontRight}
                              onChange={(e) => setFormData({ ...formData, velcroFrontRight: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            >
                              <option value="">선택하세요</option>
                              <option value="까슬이">까슬이</option>
                              <option value="보슬이">보슬이</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 뒷면 */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">뒷면</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">상</label>
                          <select
                            required
                            value={formData.velcroBackTop}
                            onChange={(e) => setFormData({ ...formData, velcroBackTop: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                          >
                            <option value="">선택하세요</option>
                            <option value="까슬이">까슬이</option>
                            <option value="보슬이">보슬이</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">좌</label>
                            <select
                              required
                              value={formData.velcroBackLeft}
                              onChange={(e) => setFormData({ ...formData, velcroBackLeft: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            >
                              <option value="">선택하세요</option>
                              <option value="까슬이">까슬이</option>
                              <option value="보슬이">보슬이</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">우</label>
                            <select
                              required
                              value={formData.velcroBackRight}
                              onChange={(e) => setFormData({ ...formData, velcroBackRight: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                            >
                              <option value="">선택하세요</option>
                              <option value="까슬이">까슬이</option>
                              <option value="보슬이">보슬이</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      기타 문의
                    </label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      rows={4}
                      placeholder="추가로 문의하실 내용을 입력해주세요"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                    />
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

