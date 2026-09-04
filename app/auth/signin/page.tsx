'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await signIn('email', {
      email,
      redirect: false,
      callbackUrl: '/admin',
    })

    setSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🌏</div>
            <h1 className="text-2xl font-bold mb-2">관리자 로그인</h1>
            <p className="text-gray-600 dark:text-gray-400">
              먼나라 이웃나라 부동산편
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
              <p className="text-green-800 dark:text-green-300 font-semibold mb-2">
                ✅ 인증 링크를 보냈습니다!
              </p>
              <p className="text-sm text-green-700 dark:text-green-400">
                {email}로 보낸 이메일의 링크를 클릭하여 로그인하세요.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm text-green-600 dark:text-green-300 hover:underline"
              >
                다른 이메일로 시도
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100"
                >
                  이메일 주소
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-slate-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
              >
                {isLoading ? '전송 중...' : '인증 링크 전송'}
              </button>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  📝 주의: 이것은 데모 환경입니다. 콘솔 로그에서 인증 링크를 확인하세요.
                </p>
              </div>
            </form>
          )}

          <div className="mt-8 bg-blue-50 dark:bg-slate-700 rounded-lg p-4 border border-blue-200 dark:border-slate-600">
            <p className="text-xs text-gray-700 dark:text-gray-300">
              <strong>💡 테스트 방법:</strong> 개발 서버 콘솔에 출력된 인증 링크를 복사해서 브라우저에 붙여넣으세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
