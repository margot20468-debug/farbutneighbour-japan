import { NextRequest, NextResponse } from 'next/server'

// 뉴스 등록 API
// POST /api/articles
// Body: { title, sourceUrl, sourceName, sourcePublishedAt, category, japaneseSummary, koreanComparison, keyPoints }

interface CreateArticleRequest {
  title: string
  sourceUrl: string
  sourceName: string
  sourcePublishedAt: string
  category: string
  japaneseSummary: string
  koreanComparison: string
  keyPoints: string[]
}

interface CreateArticleResponse {
  success: boolean
  message: string
  articleId?: string
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<CreateArticleResponse>> {
  try {
    const body = (await request.json()) as CreateArticleRequest

    // 입력 검증
    if (!body.title || !body.sourceUrl || !body.category) {
      return NextResponse.json(
        { success: false, message: '필수 필드가 누락되었습니다' },
        { status: 400 }
      )
    }

    if (!body.japaneseSummary || !body.koreanComparison) {
      return NextResponse.json(
        { success: false, message: '콘텐츠 필드가 누락되었습니다' },
        { status: 400 }
      )
    }

    // TODO: Prisma를 사용하여 데이터베이스에 저장
    // const article = await prisma.article.create({
    //   data: {
    //     title: body.title,
    //     slug: slugify(body.title),
    //     sourceUrl: body.sourceUrl,
    //     sourcePublishedAt: new Date(body.sourcePublishedAt),
    //     status: 'PENDING_REVIEW',
    //     source: {
    //       connect: { name: body.sourceName },
    //     },
    //     summary: {
    //       create: {
    //         japaneseSummary: body.japaneseSummary,
    //         koreanComparison: body.koreanComparison,
    //         keyPoints: JSON.stringify(body.keyPoints),
    //         category: body.category,
    //       },
    //     },
    //   },
    // })

    // 임시로 성공 응답
    const mockArticleId = `article_${Date.now()}`

    return NextResponse.json(
      {
        success: true,
        message: '뉴스가 검수 큐에 등록되었습니다',
        articleId: mockArticleId,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating article:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}

// 뉴스 목록 조회 (선택)
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const status = searchParams.get('status')

    // TODO: Prisma를 사용하여 데이터베이스에서 조회
    // const articles = await prisma.article.findMany({
    //   where: {
    //     ...(category && { summary: { category } }),
    //     ...(status && { status }),
    //   },
    //   include: { summary: true },
    //   orderBy: { publishedAt: 'desc' },
    // })

    // 임시로 빈 배열 반환
    return NextResponse.json(
      {
        success: true,
        data: [],
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}
