import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

async function main() {
  console.log('📊 시드 데이터 입력 시작...')

  try {
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
        name: '일본은행(BOJ)',
        country: 'Japan',
        type: 'government',
        url: 'https://www.boj.or.jp',
        reliabilityLevel: 5,
      },
    })

    console.log('✅ 출처 2개 생성')

    // 뉴스 1
    const article1 = await prisma.article.create({
      data: {
        title: '도쿄 신규 맨션 가격 3년 연속 상승, 평균 8억 엔 돌파',
        slug: 'tokyo-mansion-price-2024',
        sourceId: suumo.id,
        sourceUrl: 'https://suumo.jp/example',
        sourcePublishedAt: new Date('2024-09-01'),
        status: 'PUBLISHED',
        publishedAt: new Date('2024-09-03'),
      },
    })

    // 뉴스 1 요약
    await prisma.articleSummary.create({
      data: {
        articleId: article1.id,
        japaneseSummary:
          '도쿄 23구 내 신규 맨션의 평균 가격이 2024년 상반기 기준 약 8억 2,000만 엔에 달했습니다. 지난 3년간 계속된 상승세로, 도쿄 올림픽 개최 이후 인구 집중과 신규 개발이 활발해지면서 부동산 가격이 급등했습니다.',
        koreanComparison:
          '한국 서울과 비교하면, 평당 가격은 도쿄가 낮지만 가치 하락이 더 급합니다. 일본은 신축 아파트를 매입 후 10-15년 보유하면 30-50% 가치 하락이 일반적이며, 한국과 달리 "주거용"으로서의 위치가 강합니다.',
        keyPoints: JSON.stringify([
          '일본 신축 아파트는 구입 후 10-15년 후 30-50% 가치 하락이 일반적',
          '도쿄 올림픽 이후 인구 집중으로 가격 상승 중',
          '일본은 금리가 낮지만 보유세와 상속세가 높음',
          '투자 수익성보다 거주 목적의 부동산으로 인식',
        ]),
        riskNotes: JSON.stringify([]),
        category: 'market',
      },
    })

    // 뉴스 2
    const article2 = await prisma.article.create({
      data: {
        title: '일본은행, 기준금리 0.25% → 0.5% 인상',
        slug: 'japan-interest-rate-policy',
        sourceId: boj.id,
        sourceUrl: 'https://www.boj.or.jp/example',
        sourcePublishedAt: new Date('2024-08-30'),
        status: 'PUBLISHED',
        publishedAt: new Date('2024-09-02'),
      },
    })

    // 뉴스 2 요약
    await prisma.articleSummary.create({
      data: {
        articleId: article2.id,
        japaneseSummary:
          '일본중앙은행(BOJ)이 기준금리를 0.25%에서 0.5%로 인상하기로 결정했습니다. 2016년 마이너스 금리 도입 이후 8년 만의 가장 공격적인 인상으로, 장기간의 초저금리 정책에서 벗어나려는 신호입니다.',
        koreanComparison:
          '한국은행의 정책금리는 3.25%로 일본의 0.5%보다 훨씬 높습니다. 부동산 대출금리도 일본 0.5-1.5%에 비해 한국은 3-4%입니다. 이는 두 나라의 경제 상황이 매우 다름을 의미합니다.',
        keyPoints: JSON.stringify([
          '일본의 금리 인상은 점진적이며, 한국은 이미 충분히 높은 수준',
          '저금리로 일본 부동산 대출은 여전히 매력적',
          '금리 인상 속도 차이로 양국 시장 사이클이 다르게 진행',
          '환율 변동으로 일본 저금리가 엔화 약세 초래 가능',
        ]),
        riskNotes: JSON.stringify([]),
        category: 'finance',
      },
    })

    console.log('✅ 뉴스 2개 생성')

    // 법 카드
    const legal1 = await prisma.legalCard.create({
      data: {
        topic: '부동산 매매계약 조건부 거래',
        japanContent:
          '일본에서는 조건부 거래가 일반적입니다. 계약 후 7-10일 이내에 로컬 정부의 허가를 받아야 합니다.',
        koreaContent:
          '한국에서는 계약 체결 시 관할 지청의 확인을 거쳐야 합니다. 계약금-중도금-잔금의 3단계 시스템입니다.',
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

    const legal2 = await prisma.legalCard.create({
      data: {
        topic: '임차인 보증금 반환 규정',
        japanContent:
          '일본의 敷金(보증금)은 원칙적으로 전액 반환됩니다. 수리비는 대출인이 부담합니다.',
        koreaContent:
          '한국의 보증금은 반환이 원칙이지만, 기본 손상은 관례상 세입자 부담입니다.',
        differenceSummary:
          '일본은 보증금 반환이 더 엄격하고, 한국은 관례에 따라 달라집니다.',
        references: JSON.stringify([
          '日本: 国土交通省',
          '한국: 주택임차차용금반환보장보험',
        ]),
        warningNote:
          '본 정보는 일반 교육 목적이며, 법률 자문이 아닙니다. 개별 거래 시 전문가 상담이 필요합니다.',
      },
    })

    console.log('✅ 법 카드 2개 생성')

    // 타임라인
    await prisma.timelineEvent.create({
      data: {
        country: 'Japan',
        eventDate: new Date('2024-09-01'),
        title: '도쿄 맨션 평균가 8억 엔 돌파',
        description:
          '도쿄 23구 내 신규 맨션 평균 가격이 8억 엔을 돌파했습니다.',
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
        description:
          '일본은행이 마이너스 금리 도입 이후 8년 만에 가장 공격적인 인상을 단행했습니다.',
        category: 'policy',
      },
    })

    console.log('✅ 타임라인 3개 생성')

    console.log('\n✨ 시드 데이터 입력 완료!')
    console.log(`
    생성된 데이터:
    - 뉴스: 2개
    - 법 카드: 2개
    - 타임라인: 3개

    확인하기: http://localhost:3000
    `)
  } catch (error) {
    console.error('❌ 오류:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

main()
