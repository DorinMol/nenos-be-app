import { User } from '@prisma/client'
import prisma from '../../prisma/prisma'
import { AuthPayload, CreateUserInput, LoginUserInput } from '../models/user'
import AuthService from './auth'

export default class UserService {
  static async createUser(user: CreateUserInput): Promise<AuthPayload> {
    const hashedPassword = await AuthService.hashPassword(user.password)
    const createdUser = await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    })

    return { token: await AuthService.generateJwtToken(createdUser.email) }
  }

  static async loginUser(user: LoginUserInput): Promise<AuthPayload> {
    const foundUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    })

    if (!foundUser) {
      throw new Error('User not found')
    }

    const isPasswordCorrect = await AuthService.comparePasswords(
      user.password,
      foundUser.password,
    )

    if (!isPasswordCorrect) {
      throw new Error('Invalid password')
    }

    return { token: await AuthService.generateJwtToken(user.email) }
  }

  static async getUsers(): Promise<User[]> {
    return prisma.user.findMany()
  }
}
