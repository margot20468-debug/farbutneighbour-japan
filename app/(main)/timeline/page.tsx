'use client'

const timelineEvents = [
  {
    year: 2024,
    japan: {
      title: '도쿄 신규 맨션 가격 사상 최고 경신',
      description: '올림픽 레거시와 인구 집중으로 계속 상승세',
    },
    korea: {
      title: '서울 아파트 가격 조정장 진행',
      description: '금리 인상과 매물 증가로 약세 이어져',
    },
  },
  {
    year: 2023,
    japan: {
      title: '일본은행, 기준금리 -0.1% 유지',
      description: '완화적 금리 정책 계속 유지',
    },
    korea: {
      title: '한국은행, 금리 3.25% 선언',
      description: '인플레이션 억제를 위한 인상 기조 지속',
    },
  },
  {
    year: 2022,
    japan: {
      title: '아키야(空き家) 활용 정책 강화',
      description: '빈 집 증가에 따른 정부 대책',
    },
    korea: {
      title: '전월세 전환율 규제 시행',
      description: '전세 시장 폭락에 대한 정부 조치',
    },
  },
]

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">시장 역사 타임라인</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          일본과 한국의 부동산 시장 주요 사건을 연도별로 비교합니다
        </p>

        {/* 타임라인 */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 dark:border-blue-400 pl-8 relative"
            >
              {/* 연도 표시 */}
              <div className="absolute -left-6 top-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                {event.year}
              </div>

              {/* 이벤트 카드 */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* 일본 */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full mb-3">
                    일본
                  </span>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
                    {event.japan.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {event.japan.description}
                  </p>
                </div>

                {/* 한국 */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-semibold rounded-full mb-3">
                    한국
                  </span>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
                    {event.korea.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {event.korea.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 안내 */}
        <div className="mt-12 bg-blue-50 dark:bg-slate-800 rounded-lg p-8 text-center">
          <h2 className="text-lg font-bold mb-2">더 많은 타임라인 이벤트 추가 예정</h2>
          <p className="text-gray-600 dark:text-gray-400">
            MVP 단계에서는 최근 5년의 주요 사건을 중심으로 구성합니다
          </p>
        </div>
      </div>
    </div>
  )
}
