import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
    const email = "papa@papa.com";

    // cleanup the existing database
    await prisma.user.delete({ where: { email } }).catch(() => {
        // no worries if it doesn't exist yet
    });

    const hashedPassword = await bcrypt.hash("papa", 10);

    const user = await prisma.user.create({
        data: {
            email,
            password: {
                create: {
                    hash: hashedPassword,
                },
            },
        },
    });

    await prisma.restaurant.create({
        data: {
            name: "Shree Sai Vada Pav",
            score: 5,
            note: "Vada Pav y Tea",
            address: "Alperton, Wembley 181 Ealing Road",
            userId: user.id,
        },
    });

    await prisma.restaurant.create({
        data: {
            name: "MEATliquor",
            score: 2,
            userId: user.id,
        },
    });

    console.log(`Database has been seeded. 🌱`);
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });