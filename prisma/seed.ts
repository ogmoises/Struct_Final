import { prisma } from "./"

const main = async () => {
    const usuario1 = await prisma.usuario.create({data: {
        email: "teste@email.1",
        password: "Aa123"
    }})

    const usuario2 = await prisma.usuario.create({data: {
        email: "teste@email.2",
        password: "Bb123"
    }})

    const usuario3 = await prisma.usuario.create({data: {
        email: "teste@email.3",
        password: "Cc123"
    }})
};

main()
  .then(async () => await prisma.$disconnect())
  .catch(async(e) => {
    console.log(e);
    await prisma.$disconnect()
});