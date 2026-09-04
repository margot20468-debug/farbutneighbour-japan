import { NextRequest, NextResponse } from 'next/server'

// 북마크 API
// POST /api/bookmarks - 북마크 추가/제거
// GET /api/bookmarks - 북마크 목록 조회

interface BookmarkRequest {
  targetType: 'article' | 'legal_card'
  targetId: string
  action: 'add' | 'remove'
}

interface BookmarkResponse {
  success: boolean
  message: string
  isBookmarked?: boolean
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<BookmarkResponse>> {
  try {
    const body = (await request.json()) as BookmarkRequest

    // 입력 검증
    if (!body.targetType || !body.targetId || !body.action) {
      return NextResponse.json(
        { success: false, message: '필수 필드가 누락되었습니다' },
        { status: 400 }
      )
    }

    // TODO: 인증 체크 (현재는 미구현)
    // const session = await getSession(request)
    // if (!session) {
    //   return NextResponse.json(
    //     { success: false, message: '로그인이 필요합니다' },
    //     { status: 401 }
    //   )
    // }

    // TODO: Prisma를 사용하여 데이터베이스에 저장
    // if (body.action === 'add') {
    //   await prisma.bookmark.create({
    //     data: {
    //       userId: session.user.id,
    //       targetType: body.targetType,
    //       articleId: body.targetType === 'article' ? body.targetId : null,
    //       legalCardId: body.targetType === 'legal_card' ? body.targetId : null,
    //     },
    //   })
    // } else {
    //   await prisma.bookmark.deleteMany({
    //     where: {
    //       userId: session.user.id,
    //       targetType: body.targetType,
    //       articleId: body.targetType === 'article' ? body.targetId : null,
    //     },
    //   })
    // }

    // 임시로 성공 응답
    const isBookmarked = body.action === 'add'

    return NextResponse.json(
      {
        success: true,
        message:
          body.action === 'add'
            ? '북마크에 추가되었습니다'
            : '북마크에서 제거되었습니다',
        isBookmarked,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error managing bookmark:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}

// 북마크 목록 조회 (현재는 미구현)
export async function GET(request: NextRequest) {
  try {
    // TODO: 인증 체크
    // TODO: Prisma를 사용하여 사용자의 북마크 조회
    // const bookmarks = await prisma.bookmark.findMany({
    //   where: { userId: session.user.id },
    //   include: {
    //     article: true,
    //     legalCard: true,
    //   },
    // })

    return NextResponse.json(
      {
        success: true,
        data: [],
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching bookmarks:', error)
    return NextResponse.json(
      { success: false, message: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}
