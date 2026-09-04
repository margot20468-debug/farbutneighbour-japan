'use client'

import Link from 'next/link'

interface PublishedArticle {
  id: string
  title: string
  category: string
  status: 'published' | 'draft'
  publishedAt: Date | null
  createdAt: Date
}

// 더미 데이터
const mockArticles: PublishedArticle[] = [
  {
    id: '1',
    title: '도쿄 신규 맨션 가격 3년 연속 상승, 평균 8억 엔 돌파',
    category: 'market',
    status: 'published',
    publishedAt: new Date('2024-09-03'),
    createdAt: new Date('2024-09-01'),
  },
  {
    id: '2',
    title: '일본은행, 기준금리 0.25% → 0.5% 인상',
    category: 'finance',
    status: 'published',
    publishedAt: new Date('2024-09-02'),
    createdAt: new Date('2024-08-30'),
  },
]

const categoryLabel: Record<string, string> = {
  market: '시장',
  finance: '금융',
  rental: '임대차',
  law: '법·세금',
  urban: '도시',
}

const statusLabel: Record<string, string> = {
  published: '발행됨',
  draft: '임시저장',
}

const statusColors: Record<string, string> = {
  published: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  draft: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
}

export default function ArticlesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">뉴스 관리</h1>
        <Link
          href="/admin/articles/new"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          ➕ 새 뉴스 등록
        </Link>
      </div>

      {mockArticles.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-12 text-center border border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">등록된 뉴스가 없습니다.</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-slate-700 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">제목</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">카테고리</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">상태</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">발행일</th>
                <th className="px-6 py-4 text-right text-sm font-semibold">액션</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockArticles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50 dark:hover:bg-slate-700 transition">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {article.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {categoryLabel[article.category]}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[article.status]
                      }`}
                    >
                      {statusLabel[article.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {article.publishedAt?.toLocaleDateString('ko-KR') || '-'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <Link
                        href={`/admin/articles/${article.id}/edit`}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                      >
                        수정
                      </Link>
                      <Link
                        href={`/articles/${article.id}`}
                        target="_blank"
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                      >
                        보기
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
