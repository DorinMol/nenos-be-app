import { faker } from '@faker-js/faker'
import { PrismaClient, Restaurant, User } from '@prisma/client'
const prisma = new PrismaClient()

function createRandomUser(): Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
  return {
    email: faker.helpers.unique(faker.internet.email),
    password: faker.internet.password(),
  }
}

function createRandomRestaurant(): Omit<
  Restaurant,
  'id' | 'createdAt' | 'updatedAt'
> {
  return {
    name: faker.person.lastName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  }
}

async function main() {
  const users = faker.helpers.multiple(createRandomUser, { count: 5 })
  const restaurants = faker.helpers.multiple(createRandomRestaurant, {
    count: 100,
  })

  await prisma.user.createMany({
    data: users,
  })

  await prisma.restaurant.createMany({
    data: restaurants,
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
