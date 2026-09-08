import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('📊 추가 데이터 입력 시작...')

  // SUUMO 소스 ID 조회
  const suumoSource = await prisma.source.findFirst({ where: { name: 'SUUMO - 리크루트' } })
  if (!suumoSource) {
    console.error('❌ SUUMO 소스를 찾을 수 없습니다')
    return
  }

  // 추가 기사 1
  await prisma.article.create({
    data: {
      title: '일본 부동산 공실률 사상 최고 기록',
      slug: 'japan-vacant-property-crisis',
      sourceId: suumoSource.id,
      sourceUrl: 'https://suumo.jp/vacancy',
      sourcePublishedAt: new Date('2024-08-15'),
      status: 'PUBLISHED',
      publishedAt: new Date('2024-08-20'),
      summary: {
        create: {
          japaneseSummary: '일본 부동산 시장에서 공실률이 사상 최고 수준을 기록했습니다.',
          koreanComparison: '한국의 주택 공실률은 약 8-10% 수준입니다.',
          keyPoints: JSON.stringify(['공실률 사상 최고', '지방 지역 심각']),
          riskNotes: JSON.stringify([]),
          category: 'market',
        },
      },
    },
  })

  // 추가 법 카드
  await prisma.legalCard.create({
    data: {
      topic: '외국인 부동산 매매 제한',
      japanContent: '일본은 일부 지역을 제외하고 외국인 매매를 허용합니다.',
      koreaContent: '한국은 지역별로 외국인 매매에 제한이 있습니다.',
      differenceSummary: '일본은 개방적, 한국은 제한적',
      references: JSON.stringify(['日本: 不動産法', '한국: 외국인투자촉진법']),
      warningNote: '외국인 거래 시 변호사 상담 필수',
    },
  })

  // 추가 타임라인
  await prisma.timelineEvent.create({
    data: {
      country: 'Japan',
      eventDate: new Date('2024-07-01'),
      title: '도쿄 부동산 가격 상승 가속',
      description: '도쿄 지역 부동산 가격이 전년 대비 15% 상승',
      category: 'market',
    },
  })

  console.log('✅ 추가 데이터 입력 완료')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
