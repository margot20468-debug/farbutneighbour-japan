'use client'

import { useState } from 'react'
import Link from 'next/link'
import KoreanComparison from '@/components/article/KoreanComparison'
import SourceLink from '@/components/article/SourceLink'

// 더미 데이터 - 나중에 데이터베이스에서 가져올 예정
const articles: Record<
  string,
  {
    id: string
    title: string
    category: string
    japaneseSummary: string
    koreanComparison: string
    keyPoints: string[]
    sourceUrl: string
    sourceName: string
    sourcePublishedAt: Date
    publishedAt: Date
    relatedLegalCards: Array<{ id: string; topic: string }>
    relatedTimelineEvents: Array<{ id: string; year: number; title: string }>
  }
> = {
  'tokyo-mansion-price-2024': {
    id: '1',
    title: '도쿄 신규 맨션 가격 3년 연속 상승, 평균 8억 엔 돌파',
    category: 'market',
    japaneseSummary: `일본 부동산 정보 서비스 "suumo"의 조사에 따르면, 도쿄 23구 내 신규 맨션(아파트)의 평균 가격이 2024년 상반기 기준 약 8억 2,000만 엔($5.5M)에 달했습니다. 이는 지난 3년간 계속된 상승세로, 특히 도쿄 올림픽 개최 이후 인구 집중과 신규 개발이 활발해지면서 부동산 가격이 급등했습니다.

도시 중심부(미나토구, 분쿄구 등)에서는 평균 10억 엔 이상에 육박하고 있으며, 교외 지역도 지속적인 상승을 보이고 있습니다. 일본은행의 금리 인상 기조에도 불구하고, 글로벌 수요와 국내 자산 재배치 수요가 가격을 떠받치고 있습니다.`,

    koreanComparison: `한국 서울과의 비교를 보면, 평당 가격은 도쿄가 낮지만 전체 규모 차이가 큽니다. 도쿄 신규 맨션은 평균 80-100㎡인 반면, 서울 아파트는 80-120㎡로 유사합니다.

중요한 차이는 다음과 같습니다:

**일본의 특징:**
- 신축 아파트를 매입 후 10-15년 보유하면 30-50% 가치 하락이 일반적
- 상속세·취득세가 한국보다 높아서 보유 비용이 큼
- 대출금리는 현재 0.5-1.5% (고정)로 한국보다 낮음

**한국의 특징:**
- 신축 분양가는 상대적으로 높지만, 상속·증여세가 일본보다 낮음
- 자본이득세가 없어 매매 시 세금이 적음
- 금리는 현재 3-4% 대로 일본보다 높음

**가장 중요한 차이:**
일본은 "신축 프리미엄"이 약하고, 중고 아파트의 가치 하락이 크므로, 투자 수익보다 '거주'를 목적으로 매입하는 것이 일반적입니다. 한국은 여전히 '자산증식 수단'으로 보는 경향이 강합니다.`,

    keyPoints: [
      '일본 신축 아파트는 구입 후 10-15년 후 30-50% 가치 하락이 일반적 (한국과 다름)',
      '도쿄 올림픽 이후 인구 집중으로 가격이 오르고 있지만, 장기 보유 시 리스크 존재',
      '일본은 금리가 낮아서 대출이 쉽지만, 보유세(고정자산세, 도시계획세)와 상속세가 높음',
      '한국과 달리 일본은 "주거용 부동산"으로서의 위치가 강하고, 투자 수익성은 낮은 편',
    ],

    sourceUrl: 'https://suumo.jp/example',
    sourceName: 'SUUMO (소우모) - 리크루트',
    sourcePublishedAt: new Date('2024-09-01'),
    publishedAt: new Date('2024-09-01'),

    relatedLegalCards: [
      { id: '1', topic: '부동산 매매계약 조건부 거래' },
      { id: '3', topic: '신축 아파트 보증금(敷金) 규정' },
      { id: '5', topic: '일본 취득세·등기비용' },
    ],

    relatedTimelineEvents: [
      { id: '1', year: 2024, title: '도쿄 맨션 평균가 8억 엔 돌파' },
      { id: '2', year: 2020, title: '도쿄 올림픽 개최' },
    ],
  },
  'japan-interest-rate-policy': {
    id: '2',
    title: '일본은행, 기준금리 0.25% → 0.5% 인상',
    category: 'finance',
    japaneseSummary: `일본중앙은행(BOJ)이 정책위원회에서 기준금리를 0.25%에서 0.5%로 0.25%p 인상하기로 결정했습니다. 이는 2016년 마이너스 금리 도입 이후 8년 만의 가장 공격적인 인상으로, 장기간의 초저금리 정책에서 벗어나려는 신호입니다.

BOJ는 성명에서 "인플레이션이 지속적으로 2% 목표에 가까워지고 있으며, 경제 데이터가 견고하다"고 설명했습니다. 다만 글로벌 금융 불안정성을 감시하면서 향후 추가 인상을 단계적으로 진행하겠다는 입장을 밝혔습니다.`,

    koreanComparison: `한국은행의 정책금리는 현재 3.25%로, 일본의 0.5%보다 훨씬 높습니다. 이는 두 나라의 경제 상황이 매우 다름을 의미합니다.

**일본의 금리 환경:**
- 마이너스 금리(-0.1%)에서 출발해 단계적으로 인상
- 현재도 여전히 역사적으로 매우 낮은 수준
- 인플레이션이 한국(2-3%)보다 낮음 (1.5% 전후)
- 부동산 대출금리: 0.5-1.5% (매우 낮음)

**한국의 금리 환경:**
- 2022년 이후 인플레이션 억제를 위해 빠르게 인상
- 부동산 대출금리: 3-4% (일본의 2배 이상)
- 인플레이션 억제 목표로 높은 금리 유지 중

**부동산에 미치는 영향:**
일본: 저금리가 계속되면서 부동산 수요가 약해지지 않고, 오히려 구매력이 유지됨
한국: 높은 금리로 월세 부담이 크고, 신규 수요 둔화로 가격 조정 압력`,

    keyPoints: [
      '일본의 금리 인상은 "점진적"이며, 한국은 이미 충분히 높은 수준 (3배 차이)',
      '저금리 덕분에 일본 부동산 대출은 여전히 매력적이지만, 한국은 대출 비용이 높음',
      '금리 인상의 속도가 다르므로, 양국의 부동산 시장 사이클도 다르게 진행될 가능성',
      '환율 변동도 고려해야 함 - 일본 저금리는 엔화 약세를 초래할 수 있음',
    ],

    sourceUrl: 'https://www.boj.or.jp/example',
    sourceName: '일본은행(BOJ) 공식 성명',
    sourcePublishedAt: new Date('2024-08-30'),
    publishedAt: new Date('2024-08-30'),

    relatedLegalCards: [
      { id: '2', topic: '주택담보대출 금리·상환 규정' },
    ],

    relatedTimelineEvents: [
      { id: '3', year: 2024, title: 'BOJ 기준금리 0.5% 인상' },
    ],
  },
}

const categoryLabel: Record<string, string> = {
  market: '시장',
  finance: '금융',
  rental: '임대차',
  law: '법·세금',
  urban: '도시',
}

const categoryColors: Record<string, string> = {
  market: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  finance: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  rental: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  law: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  urban: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
}

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const article = articles[params.slug]

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold mb-2">기사를 찾을 수 없습니다</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              요청하신 뉴스 기사가 존재하지 않습니다.
            </p>
            <Link
              href="/articles"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              뉴스 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* 카테고리 & 제목 */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[article.category]}`}
            >
              {categoryLabel[article.category]}
            </span>
            <time className="text-sm text-gray-600 dark:text-gray-400">
              {article.publishedAt.toLocaleDateString('ko-KR')}
            </time>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {article.title}
          </h1>

          <div className="flex gap-4">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                isBookmarked
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {isBookmarked ? '📌' : '🔖'} {isBookmarked ? '저장됨' : '저장하기'}
            </button>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
            >
              🔗 원문 보기
            </a>
          </div>
        </header>

        {/* 원문 출처 */}
        <SourceLink
          url={article.sourceUrl}
          name={article.sourceName}
          publishedAt={article.sourcePublishedAt}
        />

        {/* 일본에서 일어난 일 */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🇯🇵</span> 일본에서 일어난 일
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
            {article.japaneseSummary}
          </p>
        </section>

        {/* 핵심: 한국 비교 */}
        <KoreanComparison
          content={article.koreanComparison}
          keyPoints={article.keyPoints}
        />

        {/* 관련 법·제도 카드 */}
        {article.relatedLegalCards.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">📋 관련 법·제도</h2>
            <div className="grid gap-4">
              {article.relatedLegalCards.map((card) => (
                <Link
                  key={card.id}
                  href="/legal"
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 hover:underline">
                    {card.topic} →
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 관련 타임라인 이벤트 */}
        {article.relatedTimelineEvents.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">📅 시장 역사</h2>
            <div className="grid gap-4">
              {article.relatedTimelineEvents.map((event) => (
                <Link
                  key={event.id}
                  href="/timeline"
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {event.year}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {event.title} →
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 네비게이션 */}
        <nav className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition font-semibold"
          >
            ← 뉴스 목록으로
          </Link>
        </nav>
      </article>
    </div>
  )
}
