# 🗄️ PostgreSQL 통합 가이드 (Supabase)

## 단계 1: Supabase 프로젝트 생성

1. https://app.supabase.com 접속
2. "New Project" 클릭
3. 프로젝트 정보 입력:
   - **Project Name**: farbutneighbour-japan
   - **Database Password**: 강력한 비밀번호 설정
   - **Region**: Asia-Seoul (또는 가장 가까운 지역)
4. "Create new project" 클릭

## 단계 2: 데이터베이스 연결 정보 획득

1. Supabase 대시보드 → Settings → Database
2. "Connection String" 섹션에서:
   - **Connection Mode**: Transaction (권장)
   - **PostgreSQL** 탭 선택
   - 연결 문자열 복사:
   ```
   postgresql://[user]:[password]@[host]:[port]/[database]?sslmode=require
   ```

## 단계 3: Vercel 환경 변수 업데이트

```bash
vercel env rm DATABASE_URL --yes
vercel env add DATABASE_URL production --value "[SUPABASE_CONNECTION_STRING]"
```

## 단계 4: Prisma 마이그레이션

```bash
# 로컬에서 마이그레이션 실행
npx prisma migrate deploy

# 또는 새로 만들기
npx prisma migrate reset
```

## 단계 5: Vercel 재배포

```bash
vercel deploy --prod --yes
```

## 단계 6: API 테스트

```bash
curl https://jian2609.vercel.app/api/articles
```

---

## 주의사항

- Supabase 무료 티어: 500MB 데이터, 2GB 대역폭
- 프로덕션 환경에서는 유료 플랜 고려
- 연결 문자열은 절대 공개하지 말 것

