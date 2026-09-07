import { PrismaClient } from '@prisma/client'

// PrismaClient는 싱글톤으로 관리해야 함
const globalForPrisma = global as unknown as { prisma?: PrismaClient }

export const prisma = globalForPrisma.prisma || createPrismaClient()

function createPrismaClient() {
  if (!process.env.DATABASE_URL) {
    // 빌드 타임에 DATABASE_URL이 없으면 더미 클라이언트 생성
    if (process.env.NODE_ENV === 'production' || typeof window === 'undefined') {
      console.warn('⚠️ DATABASE_URL이 설정되지 않았습니다. Prisma를 초기화할 수 없습니다.')
    }
  }

  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  })

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = client
  }

  return client
}
