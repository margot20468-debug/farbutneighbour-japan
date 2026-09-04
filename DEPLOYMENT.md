# 🚀 Vercel 배포 가이드

## 사전 준비

1. **Vercel 계정 생성**
   - https://vercel.com/signup에서 가입
   - GitHub 계정과 연동 권장

2. **환경 변수 설정**
   ```bash
   cp .env.example .env.local
   # .env.local 파일 편집 (개발용)
   ```

## 배포 방법 1: Vercel CLI (추천)

### 1. 로컬 배포 (테스트)
```bash
# Vercel CLI로 로그인
vercel login

# 프로젝트 연결
vercel link

# 개발 환경에서 Vercel 실행 (미리보기)
vercel dev
```

### 2. 프로덕션 배포
```bash
# 프리뷰 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 배포 방법 2: GitHub 자동 배포 (권장)

### 1. GitHub 저장소 연결
```bash
# 1. GitHub 저장소 생성
# 2. Vercel에 로그인
# 3. https://vercel.com/new에서 "Import Project"
# 4. GitHub 저장소 선택
```

### 2. 환경 변수 설정 (Vercel 대시보드)

Settings → Environment Variables에서 추가:

```
DATABASE_URL = (PostgreSQL 연결 문자열 또는 SQLite 경로)
NEXTAUTH_URL = https://your-domain.vercel.app
NEXTAUTH_SECRET = (openssl rand -base64 32로 생성)
EMAIL_SERVER_HOST = (Gmail SMTP: smtp.gmail.com)
EMAIL_SERVER_PORT = 587
EMAIL_SERVER_USER = your-email@gmail.com
EMAIL_SERVER_PASSWORD = (Gmail 앱 비밀번호)
EMAIL_FROM = noreply@your-domain.com
```

### 3. 자동 배포
- main 브랜치에 push하면 자동 배포됨
- 프리뷰 URL로 테스트 후 프로덕션으로 프로모션

---

## 데이터베이스 설정

### SQLite (개발용)
- 현재 설정: `file:./dev.db`
- 로컬에서만 동작

### PostgreSQL (프로덕션)
```bash
# Vercel Postgres 생성
# 또는 다른 PostgreSQL 제공자 (Railway, Supabase 등) 사용

# DATABASE_URL 예시:
# postgresql://user:password@host:5432/dbname
```

### Prisma 마이그레이션
```bash
# 프로덕션 배포 후
npx prisma migrate deploy

# 또는 Vercel 빌드 단계에서 자동 실행 (build 스크립트에 추가)
```

---

## 배포 후 확인

1. **로그인 테스트**
   ```
   https://your-domain.vercel.app/auth/signin
   ```

2. **관리자 페이지 테스트**
   ```
   https://your-domain.vercel.app/admin/articles/new
   ```

3. **Vercel 대시보드에서 확인**
   - Deployments: 배포 히스토리
   - Functions: API 라우트 실행 로그
   - Analytics: 성능 모니터링

---

## 문제 해결

### 1. 마이그레이션 오류
```bash
# 로컬에서 마이그레이션 재실행
npx prisma migrate reset
npx prisma migrate dev

# Vercel에서 수동 마이그레이션
# Build 로그 확인 → Database 연결 재확인
```

### 2. NextAuth 오류
```
NextAuth configuration error
```

해결책:
- `NEXTAUTH_URL`이 정확한지 확인
- `NEXTAUTH_SECRET` 설정되었는지 확인
- `/api/auth/[...nextauth]/route.ts`가 존재하는지 확인

### 3. 이메일 인증 오류
- Gmail 사용 시: "앱 비밀번호" 설정 필요
- 콘솔 로그에서 인증 링크 확인

---

## 성능 최적화 (선택사항)

1. **Image Optimization**
   - Vercel Image Optimization 활성화

2. **Edge Functions**
   - API 라우트를 Edge Functions로 변환
   - API 응답 시간 단축

3. **Analytics**
   - Vercel Analytics 활성화
   - Core Web Vitals 모니터링

---

## 다음 단계

1. ✅ 배포 완료
2. 초기 데이터 입력 (관리자 페이지에서)
3. 사용자 테스트 (베타)
4. 기능 추가 (프리미엄, AI 통합 등)

---

**배포 완료 후**: https://your-domain.vercel.app 에서 라이브 상태 확인!
