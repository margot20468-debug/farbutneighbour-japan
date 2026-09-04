import { auth } from '@/lib/auth'

export default auth((req) => {
  // /admin 경로는 인증 필수
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!req.auth) {
      const signInUrl = new URL('/auth/signin', req.nextUrl.origin)
      signInUrl.searchParams.append('callbackUrl', req.nextUrl.pathname)
      return Response.redirect(signInUrl)
    }
  }
})

export const config = {
  matcher: ['/admin/:path*'],
}
