'use client'

import { useState } from 'react'
import Link from 'next/link'

interface PendingArticle {
  id: string
  title: string
  category: string
  japaneseSummary: string
  koreanComparison: string
  sourceName: string
  submittedAt: Date
}

// 더미 데이터 - 실제로는 API에서 가져올 예정
const mockPendingArticles: PendingArticle[] = [
  {
    id: '1',
    title: '도쿄 신규 맨션 가격 3년 연속 상승, 평균 8억 엔 돌파',
    category: 'market',
    japaneseSummary:
      '일본 부동산 정보 서비스 "suumo"의 조사에 따르면, 도쿄 23구 내 신규 맨션(아파트)의 평균 가격이 2024년 상반기 기준 약 8억 2,000만 엔에 달했습니다. 이는 지난 3년간 계속된 상승세입니다.',
    koreanComparison:
      '한국 서울과의 비교를 보면, 평당 가격은 도쿄가 낮지만 전체 규모 차이가 큽니다. 일본은 신축 아파트를 매입 후 10-15년 보유하면 30-50% 가치 하락이 일반적입니다.',
    sourceName: 'SUUMO - 리크루트',
    submittedAt: new Date('2024-09-02'),
  },
  {
    id: '2',
    title: '일본은행, 기준금리 0.25% → 0.5% 인상',
    category: 'finance',
    japaneseSummary:
      '일본중앙은행(BOJ)이 정책위원회에서 기준금리를 0.25%에서 0.5%로 인상하기로 결정했습니다. 이는 2016년 마이너스 금리 도입 이후 8년 만의 공격적인 인상입니다.',
    koreanComparison:
      '한국은행의 정책금리는 현재 3.25%로, 일본의 0.5%보다 훨씬 높습니다. 부동산 대출금리도 일본은 0.5-1.5%인 반면 한국은 3-4%입니다.',
    sourceName: '일본은행(BOJ) 공식 성명',
    submittedAt: new Date('2024-09-01'),
  },
]

const categoryColors: Record<string, string> = {
  market: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  finance: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  rental: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  law: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  urban: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
}

const categoryLabel: Record<string, string> = {
  market: '시장',
  finance: '금융',
  rental: '임대차',
  law: '법·세금',
  urban: '도시',
}

export default function ReviewPage() {
  const [articles, setArticles] = useState<PendingArticle[]>(mockPendingArticles)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [reviewNotes, setReviewNotes] = useState<Record<string, string>>({})

  const handleApprove = (id: string) => {
    alert(`✅ 승인됨: ${articles.find((a) => a.id === id)?.title}`)
    setArticles(articles.filter((a) => a.id !== id))
  }

  const handleReject = (id: string) => {
    alert(`❌ 반려됨: ${articles.find((a) => a.id === id)?.title}`)
    setArticles(articles.filter((a) => a.id !== id))
  }

  const handleNeedsRevision = (id: string) => {
    alert(`📝 수정 요청됨: ${articles.find((a) => a.id === id)?.title}`)
    setArticles(articles.filter((a) => a.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">검수 큐</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {articles.length}개의 뉴스 대기 중
          </p>
        </div>
        <Link
          href="/admin/articles/new"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          ➕ 새 뉴스 등록
        </Link>
      </div>

      {articles.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-12 text-center border border-gray-200 dark:border-gray-700">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-lg font-bold mb-2">검수할 뉴스가 없습니다</h2>
          <p className="text-gray-600 dark:text-gray-400">
            모든 뉴스가 검수되어 발행되었습니다.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition"
            >
              {/* 헤더 */}
              <button
                onClick={() =>
                  setExpandedId(expandedId === article.id ? null : article.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        categoryColors[article.category]
                      }`}
                    >
                      {categoryLabel[article.category]}
                    </span>
                    <time className="text-xs text-gray-500 dark:text-gray-400">
                      {article.submittedAt.toLocaleDateString('ko-KR')}
                    </time>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {article.sourceName}
                  </p>
                </div>
                <span
                  className={`text-2xl transition-transform ${
                    expandedId === article.id ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* 상세 정보 */}
              {expandedId === article.id && (
                <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-6 space-y-6">
                  {/* 일본 요약 */}
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-gray-900 dark:text-gray-100">
                      🇯🇵 일본에서 일어난 일
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                      {article.japaneseSummary}
                    </p>
                  </div>

                  {/* 한국 비교 */}
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-gray-900 dark:text-gray-100">
                      🇰🇷 한국과 비교하면
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm bg-red-50 dark:bg-slate-700 p-4 rounded-lg">
                      {article.koreanComparison}
                    </p>
                  </div>

                  {/* 검수 메모 */}
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      검수 메모
                    </label>
                    <textarea
                      value={reviewNotes[article.id] || ''}
                      onChange={(e) =>
                        setReviewNotes({
                          ...reviewNotes,
                          [article.id]: e.target.value,
                        })
                      }
                      placeholder="검수 시 발견한 이슈나 수정 요청사항을 입력하세요..."
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-orange-500 outline-none text-sm"
                    />
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => handleApprove(article.id)}
                      className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                    >
                      ✅ 승인
                    </button>
                    <button
                      onClick={() => handleNeedsRevision(article.id)}
                      className="flex-1 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition"
                    >
                      📝 수정 요청
                    </button>
                    <button
                      onClick={() => handleReject(article.id)}
                      className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
                    >
                      ❌ 반려
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 안내 */}
      <div className="mt-12 bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
        <h3 className="font-bold mb-2">✓ 검수 체크리스트</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>☑️ 일본 뉴스의 사실성 - 원문 확인</li>
          <li>☑️ 수치·법률 표현 - 출처 명확</li>
          <li>☑️ 한국 비교 - 정확하고 균형잡혔는가</li>
          <li>☑️ 체크포인트 - 독자에게 유용한가</li>
          <li>☑️ 법적 고지 - 자문이 아닌 일반정보 표현</li>
        </ul>
      </div>
    </div>
  )
}
