import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';

const prisma = new PrismaClient();

interface User {
  id: string;
  email: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('Authorize called with:', credentials);
        if (!credentials) return null;

        const { email, password } = credentials;

        const user = await prisma.usuario.findUnique({
          where: { email },
        });

        if (!user) {
          return null;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return null;
        }

        return { id: user.id.toString(), email: user.email } as User;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email as string,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.email = user.email as string;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-default-secret',
};

export default NextAuth(authOptions);
