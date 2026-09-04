'use client'

import { useState } from 'react'
import ArticleCard from '@/components/article/ArticleCard'

const categories = [
  { value: 'all', label: '전체' },
  { value: 'market', label: '시장' },
  { value: 'finance', label: '금융' },
  { value: 'rental', label: '임대차' },
  { value: 'law', label: '법·세금' },
  { value: 'urban', label: '도시' },
]

const dummyArticles = [
  {
    id: '1',
    slug: 'tokyo-mansion-price-2024',
    title: '도쿄 신규 맨션 가격 3년 연속 상승, 평균 8억 엔 돌파',
    category: 'market',
    japaneseSummary: '일본 부동산 정보 서비스의 조사에 따르면, 도쿄 23구 내 신규 맨션의 평균 가격이 2024년 상반기 기준 약 8억 2,000만 엔에 달했습니다. 지난 3년간 계속된 상승세로, 특히 도쿄 올림픽 개최 이후 인구 집중과 신규 개발이 활발해지면서 부동산 가격이 급등했습니다.',
    sourceUrl: 'https://suumo.jp/example',
    sourceName: 'SUUMO - 리크루트',
    publishedAt: new Date('2024-09-01'),
  },
  {
    id: '2',
    slug: 'japan-interest-rate-policy',
    title: '일본은행, 기준금리 0.25% → 0.5% 인상',
    category: 'finance',
    japaneseSummary: '일본중앙은행(BOJ)이 정책위원회에서 기준금리를 0.25%에서 0.5%로 0.25%p 인상하기로 결정했습니다. 이는 2016년 마이너스 금리 도입 이후 8년 만의 가장 공격적인 인상으로, 장기간의 초저금리 정책에서 벗어나려는 신호입니다.',
    sourceUrl: 'https://www.boj.or.jp/example',
    sourceName: '일본은행(BOJ) 공식 성명',
    publishedAt: new Date('2024-08-30'),
  },
]

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = dummyArticles.filter((article) => {
    const matchCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.japaneseSummary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">일본 부동산 뉴스</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          한국과 비교하는 해설을 함께 읽으세요
        </p>

        {/* 검색 및 필터 */}
        <div className="space-y-6 mb-8">
          {/* 검색 */}
          <div>
            <input
              type="text"
              placeholder="뉴스를 검색하세요..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat.value
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 뉴스 목록 */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">
              검색 결과가 없습니다.
            </p>
          </div>
        )}

        {/* 더 많은 콘텐츠 안내 */}
        <div className="mt-12 bg-blue-50 dark:bg-slate-800 rounded-lg p-8 text-center">
          <h2 className="text-lg font-bold mb-2">더 많은 뉴스가 곧 추가됩니다</h2>
          <p className="text-gray-600 dark:text-gray-400">
            현재 MVP 단계에서 콘텐츠를 구축 중입니다
          </p>
        </div>
      </div>
    </div>
  )
}
