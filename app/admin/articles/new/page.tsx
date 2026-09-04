'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const categories = [
  { value: 'market', label: '시장' },
  { value: 'finance', label: '금융' },
  { value: 'rental', label: '임대차' },
  { value: 'law', label: '법·세금' },
  { value: 'urban', label: '도시' },
]

const sources = [
  { value: 'suumo', label: 'SUUMO (리크루트)' },
  { value: 'boj', label: '일본은행(BOJ)' },
  { value: 'nikkei', label: '일본 경제신문' },
  { value: 'yomiuri', label: '요미우리 신문' },
  { value: 'asahi', label: '아사히 신문' },
]

export default function NewArticlePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    sourceUrl: '',
    sourceName: '',
    sourcePublishedAt: '',
    category: 'market',
    japaneseSummary: '',
    koreanComparison: '',
    keyPoint1: '',
    keyPoint2: '',
    keyPoint3: '',
    keyPoint4: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 나중에 API 호출로 변경될 예정
      // const response = await fetch('/api/articles', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // 현재는 임시로 성공 처리
      alert('뉴스가 등록되었습니다. (검수 대기 중)')
      router.push('/admin/review')
    } catch (error) {
      alert('등록에 실패했습니다.')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">새 뉴스 등록</h1>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
        {/* 기본 정보 */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6">📝 기본 정보</h2>

          <div className="space-y-4">
            {/* 제목 */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold mb-2">
                뉴스 제목 *
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="예: 도쿄 맨션 가격 3년 연속 상승"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* 원문 URL */}
            <div>
              <label htmlFor="sourceUrl" className="block text-sm font-semibold mb-2">
                원문 URL *
              </label>
              <input
                id="sourceUrl"
                type="url"
                name="sourceUrl"
                value={formData.sourceUrl}
                onChange={handleChange}
                placeholder="https://example.com/article"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* 출처 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="sourceName"
                  className="block text-sm font-semibold mb-2"
                >
                  출처명 *
                </label>
                <select
                  id="sourceName"
                  name="sourceName"
                  value={formData.sourceName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">선택하세요</option>
                  {sources.map((source) => (
                    <option key={source.value} value={source.label}>
                      {source.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="sourcePublishedAt"
                  className="block text-sm font-semibold mb-2"
                >
                  원문 발행일 *
                </label>
                <input
                  id="sourcePublishedAt"
                  type="date"
                  name="sourcePublishedAt"
                  value={formData.sourcePublishedAt}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* 카테고리 */}
            <div>
              <label htmlFor="category" className="block text-sm font-semibold mb-2">
                카테고리 *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* 콘텐츠 */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6">✏️ 콘텐츠</h2>

          <div className="space-y-4">
            {/* 일본 요약 */}
            <div>
              <label
                htmlFor="japaneseSummary"
                className="block text-sm font-semibold mb-2"
              >
                일본에서 일어난 일 *
              </label>
              <textarea
                id="japaneseSummary"
                name="japaneseSummary"
                value={formData.japaneseSummary}
                onChange={handleChange}
                placeholder="일본 뉴스의 배경과 사실을 요약하세요. (500-1000자)"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                원문의 핵심 사실을 객관적으로 설명하세요
              </p>
            </div>

            {/* 한국 비교 */}
            <div>
              <label
                htmlFor="koreanComparison"
                className="block text-sm font-semibold mb-2"
              >
                한국과 비교하면 *
              </label>
              <textarea
                id="koreanComparison"
                name="koreanComparison"
                value={formData.koreanComparison}
                onChange={handleChange}
                placeholder="한국의 상황, 제도, 시장과 비교하는 해설을 작성하세요. (800-1500자)"
                required
                rows={8}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                • 서로 다른 점 강조
                <br />
                • 한국 제도/시장의 대응 설명
                <br />• 구체적인 수치나 사례 포함
              </p>
            </div>
          </div>
        </section>

        {/* 체크포인트 */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-6">⚠️ 독자를 위한 체크포인트</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            독자가 주의할 차이, 한계, 위험요소를 3-4개 작성하세요
          </p>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <label
                  htmlFor={`keyPoint${i}`}
                  className="block text-sm font-semibold mb-2"
                >
                  체크포인트 {i} {i <= 3 ? '*' : ''}
                </label>
                <textarea
                  id={`keyPoint${i}`}
                  name={`keyPoint${i}`}
                  value={formData[`keyPoint${i}` as keyof typeof formData] as string}
                  onChange={handleChange}
                  placeholder={`포인트 ${i}을 작성하세요...`}
                  required={i <= 3}
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 제출 */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition"
          >
            {isSubmitting ? '등록 중...' : '✅ 검수 큐에 제출'}
          </button>
          <Link
            href="/admin/review"
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
          >
            취소
          </Link>
        </div>

        {/* 안내 */}
        <div className="bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            ℹ️ <strong>중요:</strong> 등록한 콘텐츠는 검수 큐에 저장되며, 사실 검증 후 발행됩니다.
            AI가 생성한 초안은 공개 전 반드시 사람이 검수합니다.
          </p>
        </div>
      </form>
    </div>
  )
}
