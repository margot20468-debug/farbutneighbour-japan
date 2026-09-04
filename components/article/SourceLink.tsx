import Link from 'next/link'

interface SourceLinkProps {
  url: string
  name: string
  publishedAt: Date
}

export default function SourceLink({ url, name, publishedAt }: SourceLinkProps) {
  const formattedDate = publishedAt.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
      <div className="flex items-start gap-4">
        <div className="text-2xl">🔗</div>
        <div className="flex-1">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
            원문 출처
          </p>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
          >
            {name}
          </Link>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
            <span>발행일: {formattedDate}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition text-xs font-semibold"
            >
              원문 보기 →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
