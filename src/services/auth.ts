import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

  static async generateJwtToken(email: string) {
    return jwt.sign({ email }, process.env.JWT_SECRET as string)
  }
}
