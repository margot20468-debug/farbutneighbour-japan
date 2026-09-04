import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('시드 데이터 입력 시작...')

  // 출처(Source) 생성
  const suumo = await prisma.source.create({
    data: {
      name: 'SUUMO - 리크루트',
      country: 'Japan',
      type: 'news',
      url: 'https://suumo.jp',
      reliabilityLevel: 5,
    },
  })

  const boj = await prisma.source.create({
    data: {
      name: '일본은행(BOJ) 공식 성명',
      country: 'Japan',
      type: 'government',
      url: 'https://www.boj.or.jp',
      reliabilityLevel: 5,
    },
  })

  console.log('✅ 출처 생성 완료')

  // 뉴스 1: 도쿄 맨션 가격
  const article1 = await prisma.article.create({
    data: {
      title: '도쿄 신규 맨션 가격 3년 연속 상승, 평균 8억 엔 돌파',
      slug: 'tokyo-mansion-price-2024',
      sourceId: suumo.id,
      sourceUrl: 'https://suumo.jp/example',
      sourcePublishedAt: new Date('2024-09-01'),
      status: 'PUBLISHED',
      publishedAt: new Date('2024-09-03'),
      summary: {
        create: {
          japaneseSummary: `일본 부동산 정보 서비스 "suumo"의 조사에 따르면, 도쿄 23구 내 신규 맨션(아파트)의 평균 가격이 2024년 상반기 기준 약 8억 2,000만 엔($5.5M)에 달했습니다. 이는 지난 3년간 계속된 상승세로, 특히 도쿄 올림픽 개최 이후 인구 집중과 신규 개발이 활발해지면서 부동산 가격이 급등했습니다.

도시 중심부(미나토구, 분쿄구 등)에서는 평균 10억 엔 이상에 육박하고 있으며, 교외 지역도 지속적인 상승을 보이고 있습니다. 일본은행의 금리 인상 기조에도 불구하고, 글로벌 수요와 국내 자산 재배치 수요가 가격을 떠받치고 있습니다.`,
          koreanComparison: `한국 서울과의 비교를 보면, 평당 가격은 도쿄가 낮지만 전체 규모 차이가 큽니다. 도쿄 신규 맨션은 평균 80-100㎡인 반면, 서울 아파트는 80-120㎡로 유사합니다.

중요한 차이는 다음과 같습니다:

**일본의 특징:**
- 신축 아파트를 매입 후 10-15년 보유하면 30-50% 가치 하락이 일반적
- 상속세·취득세가 한국보다 높아서 보유 비용이 큼
- 대출금리는 현재 0.5-1.5% (고정)로 한국보다 낮음

**한국의 특징:**
- 신축 분양가는 상대적으로 높지만, 상속·증여세가 일본보다 낮음
- 자본이득세가 없어 매매 시 세금이 적음
- 금리는 현재 3-4% 대로 일본보다 높음

**가장 중요한 차이:**
일본은 "신축 프리미엄"이 약하고, 중고 아파트의 가치 하락이 크므로, 투자 수익보다 '거주'를 목적으로 매입하는 것이 일반적입니다. 한국은 여전히 '자산증식 수단'으로 보는 경향이 강합니다.`,
          keyPoints: JSON.stringify([
            '일본 신축 아파트는 구입 후 10-15년 후 30-50% 가치 하락이 일반적 (한국과 다름)',
            '도쿄 올림픽 이후 인구 집중으로 가격이 오르고 있지만, 장기 보유 시 리스크 존재',
            '일본은 금리가 낮아서 대출이 쉽지만, 보유세(고정자산세, 도시계획세)와 상속세가 높음',
            '한국과 달리 일본은 "주거용 부동산"으로서의 위치가 강하고, 투자 수익성은 낮은 편',
          ]),
          riskNotes: JSON.stringify([]),
          category: 'market',
        },
      },
      tags: {
        create: [
          { tag: { connectOrCreate: { where: { name: '도쿄' }, create: { name: '도쿄' } } } },
          { tag: { connectOrCreate: { where: { name: '맨션' }, create: { name: '맨션' } } } },
          { tag: { connectOrCreate: { where: { name: '가격' }, create: { name: '가격' } } } },
        ],
      },
    },
  })

  // 뉴스 2: 일본은행 금리 인상
  const article2 = await prisma.article.create({
    data: {
      title: '일본은행, 기준금리 0.25% → 0.5% 인상',
      slug: 'japan-interest-rate-policy',
      sourceId: boj.id,
      sourceUrl: 'https://www.boj.or.jp/example',
      sourcePublishedAt: new Date('2024-08-30'),
      status: 'PUBLISHED',
      publishedAt: new Date('2024-09-02'),
      summary: {
        create: {
          japaneseSummary: `일본중앙은행(BOJ)이 정책위원회에서 기준금리를 0.25%에서 0.5%로 0.25%p 인상하기로 결정했습니다. 이는 2016년 마이너스 금리 도입 이후 8년 만의 가장 공격적인 인상으로, 장기간의 초저금리 정책에서 벗어나려는 신호입니다.

BOJ는 성명에서 "인플레이션이 지속적으로 2% 목표에 가까워지고 있으며, 경제 데이터가 견고하다"고 설명했습니다. 다만 글로벌 금융 불안정성을 감시하면서 향후 추가 인상을 단계적으로 진행하겠다는 입장을 밝혔습니다.`,
          koreanComparison: `한국은행의 정책금리는 현재 3.25%로, 일본의 0.5%보다 훨씬 높습니다. 이는 두 나라의 경제 상황이 매우 다름을 의미합니다.

**일본의 금리 환경:**
- 마이너스 금리(-0.1%)에서 출발해 단계적으로 인상
- 현재도 여전히 역사적으로 매우 낮은 수준
- 인플레이션이 한국(2-3%)보다 낮음 (1.5% 전후)
- 부동산 대출금리: 0.5-1.5% (매우 낮음)

**한국의 금리 환경:**
- 2022년 이후 인플레이션 억제를 위해 빠르게 인상
- 부동산 대출금리: 3-4% (일본의 2배 이상)
- 인플레이션 억제 목표로 높은 금리 유지 중

**부동산에 미치는 영향:**
일본: 저금리가 계속되면서 부동산 수요가 약해지지 않고, 오히려 구매력이 유지됨
한국: 높은 금리로 월세 부담이 크고, 신규 수요 둔화로 가격 조정 압력`,
          keyPoints: JSON.stringify([
            '일본의 금리 인상은 "점진적"이며, 한국은 이미 충분히 높은 수준 (3배 차이)',
            '저금리 덕분에 일본 부동산 대출은 여전히 매력적이지만, 한국은 대출 비용이 높음',
            '금리 인상의 속도가 다르므로, 양국의 부동산 시장 사이클도 다르게 진행될 가능성',
            '환율 변동도 고려해야 함 - 일본 저금리는 엔화 약세를 초래할 수 있음',
          ]),
          riskNotes: JSON.stringify([]),
          category: 'finance',
        },
      },
      tags: {
        create: [
          { tag: { connectOrCreate: { where: { name: '금리' }, create: { name: '금리' } } } },
          { tag: { connectOrCreate: { where: { name: '일본은행' }, create: { name: '일본은행' } } } },
          { tag: { connectOrCreate: { where: { name: '금융' }, create: { name: '금융' } } } },
        ],
      },
    },
  })

  console.log('✅ 뉴스 생성 완료 (2개)')

  // 법·제도 카드 생성
  const legalCard1 = await prisma.legalCard.create({
    data: {
      topic: '부동산 매매계약 조건부 거래',
      japanContent:
        '일본에서는 조건부 거래(条件付き取引)가 일반적입니다. 계약 후 7-10일 이내에 로컬 정부의 허가를 받아야 합니다.',
      koreaContent:
        '한국에서는 계약 체결 시 관할 지청의 확인을 거쳐야 합니다. 동의 절차가 필요하며, 계약금-중도금-잔금의 3단계 시스템입니다.',
      differenceSummary:
        '일본은 조건부 거래 기간이 정해져 있으며, 한국은 사전 확인 절차가 엄격합니다.',
      references: JSON.stringify([
        '日本: 不動産流通経営協会',
        '한국: 대한부동산중개협회',
      ]),
      warningNote:
        '본 정보는 일반 교육 목적이며, 법률 자문이 아닙니다. 개별 거래 시 전문가 상담이 필요합니다.',
    },
  })

  const legalCard2 = await prisma.legalCard.create({
    data: {
      topic: '임차인 보증금 반환 규정',
      japanContent:
        '일본의 敷金(보증금)은 원칙적으로 전액 반환됩니다. 수리비는 대출인이 부담합니다.',
      koreaContent:
        '한국의 보증금은 반환이 원칙이지만, 기본 손상은 관례상 세입자 부담입니다.',
      differenceSummary: '일본은 보증금 반환이 더 엄격하고, 한국은 관례에 따라 달라집니다.',
      references: JSON.stringify([
        '日本: 国土交通省',
        '한국: 주택임차차용금반환보장보험',
      ]),
      warningNote:
        '본 정보는 일반 교육 목적이며, 법률 자문이 아닙니다. 개별 거래 시 전문가 상담이 필요합니다.',
    },
  })

  console.log('✅ 법 카드 생성 완료 (2개)')

  // 뉴스와 법 카드 연결
  await prisma.articleLegalCard.create({
    data: {
      articleId: article1.id,
      legalCardId: legalCard1.id,
    },
  })

  console.log('✅ 뉴스-법카드 연결 완료')

  // 타임라인 이벤트 생성
  await prisma.timelineEvent.create({
    data: {
      country: 'Japan',
      eventDate: new Date('2024-09-01'),
      title: '도쿄 맨션 평균가 8억 엔 돌파',
      description: '도쿄 23구 내 신규 맨션 평균 가격이 8억 엔을 돌파했습니다.',
      category: 'market',
    },
  })

  await prisma.timelineEvent.create({
    data: {
      country: 'Korea',
      eventDate: new Date('2024-09-01'),
      title: '서울 아파트 가격 조정장 진행',
      description: '금리 인상과 매물 증가로 약세가 이어지고 있습니다.',
      category: 'market',
    },
  })

  await prisma.timelineEvent.create({
    data: {
      country: 'Japan',
      eventDate: new Date('2024-08-30'),
      title: 'BOJ 기준금리 0.5% 인상',
      description: '일본은행이 마이너스 금리 도입 이후 8년 만에 가장 공격적인 인상을 단행했습니다.',
      category: 'policy',
    },
  })

  console.log('✅ 타임라인 이벤트 생성 완료 (3개)')

  console.log('✨ 시드 데이터 입력 완료!')
  console.log(
    `\n생성된 데이터:
  - 뉴스: 2개
  - 법 카드: 2개
  - 타임라인 이벤트: 3개`
  )
}

main()
  .catch((e) => {
    console.error('❌ 시드 데이터 입력 실패:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
