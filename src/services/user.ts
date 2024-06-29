import { User } from '@prisma/client'
import prisma from '../../prisma/prisma'
import { CreateUserInput } from '../models/user'
import AuthService from './auth'

export default class UserService {
  static async createUser(user: CreateUserInput): Promise<User> {
    const hashedPassword = await AuthService.hashPassword(user.password)
    return prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    })
  }

  static async getUsers(): Promise<User[]> {
    return prisma.user.findMany()
  }
}
