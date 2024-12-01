import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            if (nextUrl.pathname.startsWith('/contents')) return isLoggedIn;
            else if (isLoggedIn) return Response.redirect(new URL('/contents', nextUrl));
            return true;
        }
    },
    providers: [],
} satisfies NextAuthConfig;