import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Permitir requisições para páginas públicas e APIs
  if (pathname.includes('/api') || pathname.includes('/login') || pathname.includes('/register')) {
    return NextResponse.next();
  }

  // Redirecionar para a página de login se não autenticado
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*'], // Protege todas as rotas que começam com /protected
};
