'use client'

interface KoreanComparisonProps {
  content: string
  keyPoints: string[]
}

export default function KoreanComparison({
  content,
  keyPoints,
}: KoreanComparisonProps) {
  return (
    <section className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-slate-800 dark:to-slate-700 border-2 border-red-300 dark:border-red-700 rounded-lg p-8 my-8">
      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
          🇰🇷 한국과 비교하면
        </span>
      </div>

      {/* 본문 */}
      <div className="prose dark:prose-invert max-w-none mb-6">
        <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
          {content}
        </p>
      </div>

      {/* 체크포인트 */}
      <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
        <h4 className="font-bold text-sm mb-4 text-gray-900 dark:text-gray-100">
          📌 독자를 위한 체크포인트
        </h4>
        <ul className="space-y-3">
          {keyPoints.map((point, index) => (
            <li key={index} className="flex gap-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 font-semibold text-sm flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 법적 고지 */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-slate-900 border-l-4 border-yellow-400 dark:border-yellow-600 rounded">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          ⓘ <strong>중요:</strong> 본 비교는 일반 정보 제공 목적이며, 법률·세무 자문이 아닙니다.
          개별 상황에 대해 한국과 일본의 전문가와 최신 공적 자료를 확인하세요.
        </p>
      </div>
    </section>
  )
}
