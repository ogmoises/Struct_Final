// types/next-auth.d.ts

import { DefaultSession, DefaultUser } from 'next-auth';

// Defina a interface User com id como number (correspondente a Int do Prisma)
interface User extends DefaultUser {
  id: number; // Utilizando number que é equivalente a Int em Prisma
  email: string;
  // Remova name e image se não forem necessários
}

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: User;
  }
}
