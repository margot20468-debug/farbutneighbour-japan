export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">내 보관함</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          저장한 뉴스와 법 카드를 관리하세요
        </p>

        {/* 빈 상태 */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-12 text-center border border-gray-200 dark:border-gray-700">
          <div className="text-4xl mb-4">📚</div>
          <h2 className="text-lg font-bold mb-2">아직 저장한 항목이 없습니다</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            뉴스와 법 카드를 저장하면 여기에서 관리할 수 있습니다
          </p>
          <a
            href="/articles"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            뉴스 보기
          </a>
        </div>

        {/* 주의: 로그인 필요 */}
        <div className="mt-8 bg-yellow-50 dark:bg-slate-800 border border-yellow-200 dark:border-slate-600 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            🔐 현재는 로그인 기능이 구현 중입니다. MVP 단계에서 준비하겠습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
