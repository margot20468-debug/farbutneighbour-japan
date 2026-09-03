'use client'

import { useState } from 'react'

const dummyLegalCards = [
  {
    id: '1',
    topic: '부동산 매매계약 조건부 거래',
    japanContent:
      '일본에서는 조건부 거래(条件付き取引)가 일반적입니다. 계약 후 7-10일 이내에 로컬 정부의 허가를 받아야 합니다.',
    koreaContent:
      '한국에서는 계약 체결 시 관할 지청의 확인을 거쳐야 합니다. 동의 절차가 필요하며, 계약금-중도금-잔금의 3단계 시스템입니다.',
    differenceSummary: '일본은 조건부 거래 기간이 정해져 있으며, 한국은 사전 확인 절차가 엄격합니다.',
  },
  {
    id: '2',
    topic: '임차인 보증금 반환 규정',
    japanContent: '일본의 敷金(보증금)은 원칙적으로 전액 반환됩니다. 수리비는 대출인이 부담합니다.',
    koreaContent: '한국의 보증금은 반환이 원칙이지만, 기본 손상은 관례상 세입자 부담입니다.',
    differenceSummary: '일본은 보증금 반환이 더 엄격하고, 한국은 관례에 따라 달라집니다.',
  },
]

export default function LegalPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">법·제도 비교 카드</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          일본과 한국의 부동산 법제도를 쉽게 비교하세요
        </p>

        {/* 법 카드 목록 */}
        <div className="space-y-4">
          {dummyLegalCards.map((card) => (
            <div
              key={card.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800"
            >
              <button
                onClick={() =>
                  setExpandedCard(expandedCard === card.id ? null : card.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition"
              >
                <h3 className="font-bold text-lg text-left">{card.topic}</h3>
                <span
                  className={`text-2xl transition-transform ${
                    expandedCard === card.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {expandedCard === card.id && (
                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* 일본 */}
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full mb-3">
                        일본
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">
                        {card.japanContent}
                      </p>
                    </div>

                    {/* 한국 */}
                    <div>
                      <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-semibold rounded-full mb-3">
                        한국
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">
                        {card.koreaContent}
                      </p>
                    </div>
                  </div>

                  {/* 핵심 차이 */}
                  <div className="bg-yellow-50 dark:bg-slate-700 border border-yellow-200 dark:border-slate-600 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      핵심 차이
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {card.differenceSummary}
                    </p>
                  </div>

                  {/* 법적 고지 */}
                  <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    ⓘ 본 정보는 일반 교육 목적이며 법률 자문이 아닙니다. 개별 상황에 대해
                    전문가와 상담하세요.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 추가 콘텐츠 안내 */}
        <div className="mt-12 bg-blue-50 dark:bg-slate-800 rounded-lg p-8 text-center">
          <h2 className="text-lg font-bold mb-2">더 많은 법 카드가 준비 중입니다</h2>
          <p className="text-gray-600 dark:text-gray-400">
            MVP 단계에서는 20개의 핵심 카드를 준비하고 있습니다
          </p>
        </div>
      </div>
    </div>
  )
}
