import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST() {
  try {
    // 동적 import로 Prisma 클라이언트 로드
    const { prisma } = await import('@/lib/db')

    console.log('📊 시드 데이터 입력 시작...')

    // 출처 생성
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

    // 뉴스 1
    await prisma.article.create({
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
            japaneseSummary: `일본 부동산 정보 서비스 "suumo"의 조사에 따르면, 도쿄 23구 내 신규 맨션의 평균 가격이 2024년 상반기 기준 약 8억 2,000만 엔에 달했습니다. 이는 지난 3년간 계속된 상승세로, 특히 도쿄 올림픽 개최 이후 인구 집중과 신규 개발이 활발해지면서 부동산 가격이 급등했습니다.`,
            koreanComparison: `한국 서울과의 비교를 보면, 평당 가격은 도쿄가 낮지만 전체 규모 차이가 큽니다. 일본은 신축 아파트를 매입 후 10-15년 보유하면 30-50% 가치 하락이 일반적입니다.`,
            keyPoints: JSON.stringify([
              '일본 신축 아파트는 구입 후 10-15년 후 30-50% 가치 하락이 일반적',
              '도쿄 올림픽 이후 인구 집중으로 가격이 오르고 있지만, 장기 보유 시 리스크 존재',
            ]),
            riskNotes: JSON.stringify([]),
            category: 'market',
          },
        },
      },
    })

    // 뉴스 2
    await prisma.article.create({
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
            japaneseSummary: `일본중앙은행(BOJ)이 정책위원회에서 기준금리를 0.25%에서 0.5%로 인상하기로 결정했습니다. 이는 2016년 마이너스 금리 도입 이후 8년 만의 가장 공격적인 인상입니다.`,
            koreanComparison: `한국은행의 정책금리는 현재 3.25%로, 일본의 0.5%보다 훨씬 높습니다. 부동산 대출금리도 일본은 0.5-1.5%인 반면 한국은 3-4%입니다.`,
            keyPoints: JSON.stringify([
              '일본의 금리 인상은 "점진적"이며, 한국은 이미 충분히 높은 수준 (3배 차이)',
              '저금리 덕분에 일본 부동산 대출은 여전히 매력적',
            ]),
            riskNotes: JSON.stringify([]),
            category: 'finance',
          },
        },
      },
    })

    console.log('✅ 뉴스 생성 완료 (2개)')

    // 법 카드
    await prisma.legalCard.create({
      data: {
        topic: '부동산 매매계약 조건부 거래',
        japanContent:
          '일본에서는 조건부 거래가 일반적입니다. 계약 후 7-10일 이내에 로컬 정부의 허가를 받아야 합니다.',
        koreaContent:
          '한국에서는 계약 체결 시 관할 지청의 확인을 거쳐야 합니다. 계약금-중도금-잔금의 3단계 시스템입니다.',
        differenceSummary: '일본은 조건부 거래 기간이 정해져 있으며, 한국은 사전 확인 절차가 엄격합니다.',
        references: JSON.stringify(['日本: 不動産流通経営協会', '한국: 대한부동산중개협회']),
        warningNote:
          '본 정보는 일반 교육 목적이며, 법률 자문이 아닙니다. 개별 거래 시 전문가 상담이 필요합니다.',
      },
    })

    console.log('✅ 법 카드 생성 완료')

    // 타임라인
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

    console.log('✅ 타임라인 생성 완료 (2개)')

    return NextResponse.json({
      success: true,
      message: '✨ 시드 데이터 입력 완료!',
      data: {
        articles: 2,
        legalCards: 1,
        timelineEvents: 2,
      },
    })
  } catch (error) {
    console.error('❌ 시드 데이터 입력 실패:', error)
    return NextResponse.json(
      { success: false, message: '시드 데이터 입력 실패' },
      { status: 500 }
    )
  }
}
