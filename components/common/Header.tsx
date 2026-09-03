'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">🌏</div>
            <div>
              <h1 className="text-xl font-bold">먼나라 이웃나라 부동산편</h1>
              <p className="text-xs text-gray-500">일본 부동산을 한국과 비교하다</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/articles" className="text-sm hover:text-blue-600">
              뉴스
            </Link>
            <Link href="/legal" className="text-sm hover:text-blue-600">
              법·제도
            </Link>
            <Link href="/timeline" className="text-sm hover:text-blue-600">
              타임라인
            </Link>
            <Link href="/bookmarks" className="text-sm hover:text-blue-600">
              보관함
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
