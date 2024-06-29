import { CreateUserInput, LoginUserInput } from '../models/user'
import UserService from '../services/user'

export default class UserController {
  static async createUser(_: unknown, { user }: { user: CreateUserInput }) {
    return UserService.createUser(user)
  }

  static async loginUser(_: unknown, { user }: { user: LoginUserInput }) {
    return UserService.loginUser(user)
  }

  static async users() {
    return UserService.getUsers()
  }
}
