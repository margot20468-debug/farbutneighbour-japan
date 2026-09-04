import ArticleCard from '@/components/article/ArticleCard'

export default function Home() {
  // MVP 단계에서는 더미 데이터로 화면 구조를 보여줍니다
  const dummyArticles = [
    {
      id: '1',
      slug: 'tokyo-mansion-price-2024',
      title: '도쿄 신규 맨션 가격 3년 연속 상승, 평균 8억 엔 돌파',
      category: 'market',
      japaneseSummary: '일본 부동산 정보 서비스의 조사에 따르면, 도쿄 23구 내 신규 맨션의 평균 가격이 2024년 상반기 기준 약 8억 2,000만 엔에 달했습니다.',
      sourceUrl: 'https://suumo.jp/example',
      sourceName: 'SUUMO - 리크루트',
      publishedAt: new Date('2024-09-01'),
    },
    {
      id: '2',
      slug: 'japan-interest-rate-policy',
      title: '일본은행, 기준금리 0.25% → 0.5% 인상',
      category: 'finance',
      japaneseSummary: '일본중앙은행(BOJ)이 정책위원회에서 기준금리를 0.25%에서 0.5%로 0.25%p 인상하기로 결정했습니다.',
      sourceUrl: 'https://www.boj.or.jp/example',
      sourceName: '일본은행(BOJ) 공식 성명',
      publishedAt: new Date('2024-08-30'),
    },
  ]

  const dummyLegalCards = [
    {
      id: '1',
      topic: '부동산 매매계약 조건부 거래',
      jpLabel: '条件付き取引',
      krLabel: '조건부 거래',
    },
    {
      id: '2',
      topic: '임차인 보증금 반환 규정',
      jpLabel: '敷金返還',
      krLabel: '보증금 반환',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* 히어로 섹션 */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          일본 부동산을 한국 관점에서 이해하다
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          매번 헷갈리는 일본 제도와 시장을 한국과 나란히 비교하고 학습하세요
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/articles"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            뉴스 보기
          </a>
          <a
            href="/legal"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition"
          >
            법 비교 카드
          </a>
        </div>
      </section>

      {/* 최신 뉴스 */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">최신 뉴스</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {dummyArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/articles"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            모든 뉴스 보기 →
          </a>
        </div>
      </section>

      {/* 주요 법 카드 */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">인기 법·제도 비교</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {dummyLegalCards.map((card) => (
            <div
              key={card.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition bg-white dark:bg-slate-800"
            >
              <h3 className="font-bold text-lg mb-4">{card.topic}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">일본</span>
                  <p className="font-semibold text-sm">{card.jpLabel}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">한국</span>
                  <p className="font-semibold text-sm">{card.krLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/legal"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            모든 법 카드 보기 →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-12 mb-12">
        <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">일본 부동산, 더 이상 어렵지 않습니다</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            신뢰할 수 있는 출처, 정확한 비교, 쉬운 설명으로 일본 시장을 이해하세요
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            서비스 소개
          </a>
        </div>
      </section>
    </div>
  )
}
