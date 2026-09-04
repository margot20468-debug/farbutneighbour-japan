# 🌏 먼나라 이웃나라 부동산편

일본의 부동산 뉴스, 법제도, 시장 역사를 **한국의 맥락에서 비교 해설**하는 웹 애플리케이션입니다.

## 📋 프로젝트 개요

- **목표**: 일본 부동산을 공부하거나 투자를 검토하는 한국 사용자에게 신뢰할 수 있는 비교 리서치 서비스 제공
- **핵심 가치**: 단순 번역이 아니라 **한국의 시장·제도와 정확한 비교** 제시
- **MVP**: 뉴스 20~30건, 법 카드 20개, 타임라인으로 가치 검증

## 🚀 현재 상태

### ✅ 완성 (Phase 1-3)

| 영역 | 상태 | 내용 |
|------|------|------|
| **기초 인프라** | ✅ | Next.js + TypeScript + Tailwind + Prisma |
| **뉴스 상세** | ✅ | 일본 요약 + 한국 비교 (핵심) + 관련 카드/타임라인 |
| **관리자 페이지** | ✅ | 뉴스 등록, 검수 큐, 뉴스 관리 |
| **API 라우트** | ✅ | /api/articles, /api/bookmarks (스켈레톤) |
| **더미 데이터** | ✅ | 2개 완전한 뉴스 기사 (시장·금융) |

### 🔄 다음 단계

| 우선순위 | 작업 | 예상 시간 |
|----------|------|----------|
| 1 | PostgreSQL 연동 & Prisma migrations | 1-2시간 |
| 2 | 초기 데이터 시드 (20~30개 뉴스) | 2-3시간 |
| 3 | 인증 기능 (next-auth) | 1-2시간 |
| 4 | 실제 API 연동 | 1시간 |
| 5 | Vercel 배포 | 30분 |

## 📦 기술 스택

```
프론트엔드: Next.js 16, React 19, TypeScript
스타일: Tailwind CSS v4, dark mode 지원
데이터베이스: PostgreSQL (준비 중) + Prisma ORM
인증: next-auth v5 (구현 예정)
배포: Vercel (예정)
```

## 📂 프로젝트 구조

```
app/
├── (main)/
│   ├── page.tsx                    # 홈
│   ├── articles/
│   │   ├── page.tsx                # 뉴스 목록 (필터 & 검색)
│   │   └── [slug]/page.tsx         # 뉴스 상세 (핵심) ⭐
│   ├── legal/page.tsx              # 법 카드
│   ├── timeline/page.tsx           # 타임라인
│   └── bookmarks/page.tsx          # 내 보관함
├── admin/                          # 관리자 영역
│   ├── layout.tsx
│   ├── articles/
│   │   ├── page.tsx                # 뉴스 관리 목록
│   │   └── new/page.tsx            # 뉴스 등록 폼
│   └── review/page.tsx             # 검수 큐
└── api/
    ├── articles/route.ts           # 뉴스 CRUD
    └── bookmarks/route.ts          # 북마크 관리

components/
├── article/
│   ├── ArticleCard.tsx
│   ├── KoreanComparison.tsx        # 한·일 비교 박스 (핵심)
│   └── SourceLink.tsx
├── legal/
└── common/
    ├── Header.tsx
    └── Footer.tsx

lib/
├── db.ts                           # Prisma 클라이언트
prisma/
└── schema.prisma                   # 11개 테이블 스키마
```

## 🏃 빠른 시작

### 1. 개발 서버 실행
```bash
npm run dev
```

열기: [http://localhost:3000](http://localhost:3000)

### 2. 관리자 페이지 접근
```
http://localhost:3000/admin/articles/new
```

### 3. 뉴스 등록 & 검수
- **등록**: `/admin/articles/new` → 폼 작성 → 검수 큐 제출
- **검수**: `/admin/review` → 내용 확인 → 승인/수정/반려
- **발행**: 승인된 뉴스가 자동 발행

## 📊 주요 기능

### 사용자 페이지
- ✅ 홈: 최신 뉴스 + 인기 법 카드
- ✅ 뉴스 목록: 카테고리·기간 필터 + 키워드 검색
- ✅ **뉴스 상세**: 일본 뉴스 + 한국 비교 (핵심) + 출처
- ✅ 법·제도: 한·일 대응 카드 펼치기
- ✅ 타임라인: 연도별 한·일 주요 사건
- ⏳ 보관함: 북마크 관리 (로그인 필요)

### 관리자 페이지
- ✅ 뉴스 등록: 구조화된 폼 (기본정보 + 콘텐츠 + 체크포인트)
- ✅ 검수 큐: 대기 중인 뉴스 상세 확인 + 승인/수정/반려
- ✅ 뉴스 관리: 발행된 뉴스 목록 + 편집
- ⏳ AI 초안: OpenAI 요약·비교·태그 제안

## 📄 데이터 모델

| 테이블 | 설명 |
|--------|------|
| `articles` | 뉴스 기사 (제목, 상태, 발행일) |
| `article_summaries` | 요약 & 비교 (일본 요약, 한국 비교, 체크포인트) |
| `legal_cards` | 법·제도 카드 (한·일 대응) |
| `timeline_events` | 시장 역사 (연도별 사건) |
| `users` | 사용자 & 운영자 |
| `bookmarks` | 저장한 항목 |
| `editorial_reviews` | 검수 이력 |

자세한 스키마: [prisma/schema.prisma](prisma/schema.prisma)

## 🔐 법적 고지

본 서비스는 **일반 정보 제공 및 교육 목적**이며, 법률·세무·투자 자문이 아닙니다.  
개별 거래 또는 의사결정 전에는 각 국가의 **자격 있는 전문가와 최신 공적 자료**를 확인하세요.

## 📅 개발 일정

```
Week 1: 기초 인프라 ✅
Week 2: 뉴스 상세 페이지 (핵심) ✅
Week 3: 관리자 페이지 ✅
Week 4: 데이터베이스 연동 (예정)
Week 5: 초기 콘텐츠 시드 (예정)
Week 6: 테스트 & 출시 (예정)
```

## 🛠️ 개발 가이드

### 환경 변수 설정
```bash
# .env (예시)
DATABASE_URL="postgresql://user:password@localhost:5432/farbutneighbour"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### 스크립트
```bash
npm run dev        # 개발 서버
npm run build      # 빌드
npm run start      # 프로덕션
npm run lint       # ESLint
npx prisma db push    # DB 스키마 동기화
npx prisma studio    # Prisma UI
```

## 🚀 배포

Vercel에 배포하려면:

```bash
npm install -g vercel
vercel login
vercel env add DATABASE_URL
vercel deploy --prod
```

## 📞 문의 & 피드백

`.docs/project-plan.md`에서 전체 계획을 확인할 수 있습니다.

---

**Made with ❤️ by Claude Code**  
Last updated: 2026-09-04
