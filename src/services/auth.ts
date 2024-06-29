import bcrypt from 'bcrypt'

export default class AuthService {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  static async comparePasswords(
    firstPassword: string,
    secondPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(firstPassword, secondPassword)
  }
}
