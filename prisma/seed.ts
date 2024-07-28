import { prisma } from "./";
import bcrypt from "bcrypt";

const main = async () => {
  const saltRounds = 12;

  const hashedPassword1 = await bcrypt.hash("Aa123", saltRounds);
  const hashedPassword2 = await bcrypt.hash("Bb123", saltRounds);
  const hashedPassword3 = await bcrypt.hash("Cc123", saltRounds);

  const usuario1 = await prisma.usuario.create({
    data: {
      email: "teste@email.1",
      password: hashedPassword1,
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      email: "teste@email.2",
      password: hashedPassword2,
    },
  });

  const usuario3 = await prisma.usuario.create({
    data: {
      email: "teste@email.3",
      password: hashedPassword3,
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
  });
