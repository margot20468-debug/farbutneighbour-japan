import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/articles" className="hover:text-blue-600">
                  뉴스
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-blue-600">
                  법·제도 비교
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-blue-600">
                  시장 역사
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">정보</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-blue-600">
                  법적 고지
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">문의</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <a href="mailto:contact@example.com" className="hover:text-blue-600">
                contact@example.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {currentYear} 먼나라 이웃나라 부동산편. 모든 권리 보유.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-2">
            본 서비스는 일반 정보 제공 목적이며, 법률·세무·투자 자문이 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
