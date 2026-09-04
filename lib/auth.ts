import NextAuth from 'next-auth'
import Email from 'next-auth/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './db'

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST || 'localhost',
        port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
        auth: {
          user: process.env.EMAIL_SERVER_USER || 'test',
          pass: process.env.EMAIL_SERVER_PASSWORD || 'test',
        },
      },
      from: process.env.EMAIL_FROM || 'noreply@example.com',
      async sendVerificationRequest({ identifier: email, url }) {
        console.log(`\n✉️ 이메일 인증 링크:`)
        console.log(`받는사람: ${email}`)
        console.log(`링크: ${url}\n`)
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // 로그인 필요한 페이지는 /admin/**
      return !!auth
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
})
