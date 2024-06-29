import { User } from '@prisma/client'

export type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>
export type LoginUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>

export type AuthPayload = {
  token: string
}
