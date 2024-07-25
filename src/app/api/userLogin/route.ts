import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);
    const { email, password } = body;

    const usuario = await prisma.usuario.findFirst({
      where: { email },
    });

    if (!usuario) {
      return NextResponse.json({ error: 'Email incorreto', field: 'email' }, { status: 401 });
    }

    // Verificar a senha fornecida com a senha hash armazenada
    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Senha incorreta', field: 'password' }, { status: 401 });
    }

    console.log("Usuário logado:", usuario);
    return NextResponse.json({ message: 'Login bem-sucedido', usuario });

  } catch (error) {
    console.error("Erro ao logar usuário:", error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}