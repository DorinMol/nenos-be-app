import UserService from '../services/user'

export default class UserController {
  static async createUser() {
    return UserService.createUser({
      email: 'test@test.com',
      password: 'test',
    })
  }
}
