export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">서비스 소개</h1>

        <article className="prose dark:prose-invert max-w-none">
          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">먼나라 이웃나라 부동산편이란?</h2>
            <p>
              일본의 부동산 뉴스, 제도, 시장을 한국의 맥락에서 이해하는 서비스입니다. 단순한
              번역이 아니라, 일본의 이슈가 한국의 시장과 제도 속에서 어떤 의미인지 비교하고
              해설합니다.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">핵심 가치</h2>
            <ul className="space-y-3">
              <li>
                <strong>일본 뉴스마다 한국 비교 해설</strong> — 원문과 함께 한국과의 차이를
                명확히 제시합니다.
              </li>
              <li>
                <strong>법률 용어를 쉽게</strong> — 한·일 대응표와 실무 예시로 이해도를
                높입니다.
              </li>
              <li>
                <strong>역사와 함께 보기</strong> — 가격, 금리, 정책의 흐름을 타임라인으로
                제시합니다.
              </li>
              <li>
                <strong>신뢰할 수 있는 정보</strong> — 모든 콘텐츠는 출처와 기준일을 명시하고
                사람이 검수합니다.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">주요 사용자</h2>
            <ul className="space-y-2">
              <li>일본 부동산 투자를 검토하는 한국 개인·기업</li>
              <li>한·일 부동산 제도를 연구하는 학생·실무자</li>
              <li>일본 경제·도시개발 뉴스를 한국 관점으로 읽고 싶은 사람</li>
            </ul>
          </section>

          <section className="bg-blue-50 dark:bg-slate-800 rounded-lg p-8 border border-blue-200 dark:border-slate-600">
            <h2 className="text-2xl font-bold mb-4">⚠️ 중요한 고지</h2>
            <p>
              본 서비스는 <strong>일반 정보 제공 목적</strong>이며, 법률·세무·투자·중개
              자문이 아닙니다. 개별 거래나 의사결정 전에는 해당 국가의 자격 있는 전문가와
              최신 공적 자료를 반드시 확인하세요.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
