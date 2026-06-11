import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Apple from 'next-auth/providers/apple';

// Auth.js v5, AUTH_GOOGLE_ID / AUTH_GOOGLE_SECRET / AUTH_APPLE_ID / AUTH_APPLE_SECRET
// ortam değişkenlerini otomatik okur. .env.local'a anahtarlarını ekle.
export const {handlers, auth, signIn, signOut} = NextAuth({
  providers: [Google, Apple],
  pages: {signIn: '/'},
});
