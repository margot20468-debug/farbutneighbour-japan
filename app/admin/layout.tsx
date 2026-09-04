import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* 관리자 헤더 */}
      <header className="bg-slate-900 dark:bg-black text-white border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="text-xl font-bold">
              🌏 먼나라 이웃나라 관리자
            </Link>
            <Link
              href="/"
              className="text-sm px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition"
            >
              서비스 홈으로
            </Link>
          </div>

          {/* 네비게이션 */}
          <nav className="flex gap-4 text-sm">
            <Link
              href="/admin/articles/new"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              ➕ 뉴스 등록
            </Link>
            <Link
              href="/admin/review"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition"
            >
              📋 검수 큐
            </Link>
            <Link
              href="/admin/articles"
              className="px-4 py-2 border border-gray-600 hover:bg-gray-800 rounded-lg transition"
            >
              📚 뉴스 관리
            </Link>
          </nav>
        </div>
      </header>

      {/* 콘텐츠 */}
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

      {/* 푸터 */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-400 mt-12">
        <p>관리자 전용 페이지입니다</p>
      </footer>
    </div>
  )
}
