import Link from 'next/link'

interface ArticleCardProps {
  id: string
  slug: string
  title: string
  category: string
  japaneseSummary: string
  sourceUrl: string
  sourceName: string
  publishedAt: Date
}

export default function ArticleCard({
  slug,
  title,
  category,
  japaneseSummary,
  sourceUrl,
  sourceName,
  publishedAt,
}: ArticleCardProps) {
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

  return (
    <Link href={`/articles/${slug}`}>
      <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-slate-800">
        <div className="flex items-start justify-between mb-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || categoryColors.market}`}
          >
            {categoryLabel[category] || category}
          </span>
          <time className="text-xs text-gray-500 dark:text-gray-400">
            {publishedAt.toLocaleDateString('ko-KR')}
          </time>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
          {japaneseSummary}
        </p>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-500">{sourceName}</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">더보기 →</span>
        </div>
      </article>
    </Link>
  )
}
