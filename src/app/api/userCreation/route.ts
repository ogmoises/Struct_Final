import { NextResponse } from 'next/server';
import { Prisma, PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);
    const { email, password } = body;

    // Hash da senha antes de salvar no banco de dados
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const usuario = await prisma.usuario.create({
      data: {
        email,
        password: hashedPassword,  // Salvar a senha hash no banco de dados
      },
    });

    console.log("Usuário criado:", usuario);
    return NextResponse.json(usuario);

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json({error: "Email já cadastrado"}, {status:400});
    }

    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
