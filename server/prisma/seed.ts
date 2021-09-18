import { PrismaClient, Prisma } from '@prisma/client'
import User from "../users/dto"

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Maria Kolokolova',
    lastName: 'Maria Kolokolova',
    password: 'Maria Kolokolova',
    email: 'john@prisma1.io',
    permissionLevel: 1,
  },
  {
    firstName: 'Maria1 Kolokolova1',
    lastName: 'Maria1 Kolokolova1',
    password: 'Maria1 Kolokolova1',
    email: 'john@prisma2.io',
    permissionLevel: 1,
  },
  {
    firstName: 'Maria2 Kolokolova2',
    lastName: 'Maria2 Kolokolova2',
    password: 'Maria2 Kolokolova2',
    email: 'john@prisma3.io',
    permissionLevel: 1,
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })