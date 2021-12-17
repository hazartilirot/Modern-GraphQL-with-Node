import { PrismaContext, SignupArgs, AuthPayload } from './types';
import validator from 'validator';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken'

export default {
  userSignup: async (
    parent: any,
    { user: { name, email, password, bio } }: SignupArgs,
    { prisma }: PrismaContext
  ): Promise<AuthPayload> => !name || !email || !password || !bio ?
    {
      userErrors: [{ message: "All required fields must be filled in" }],
      token: null
    } : !validator.isEmail(email) ?
    {
      userErrors: [{ message: 'The email has an inappropriate format'}],
      token: null
    } : !validator.isStrongPassword(password, { minLength: 6 }) ? 
    {
      userErrors: [{ message: 'The password does not match security requirements'}],  
      token: null
    } : await prisma.user.findUnique({ where: { email } }) ? 
    {
      userErrors: [{ message: 'Use different credentials '}],
      token: null
    } : { 
      userErrors: [],
      token: await (async () => { 
        const user = await prisma.user.create({ 
          data: { 
            email,
            name,
            password: await bcrypt.hash(password, 10),
          }
        });
        await prisma.profile.create({
          data: {
            bio,
            userId: user.id
          }
        });
        return JWT.sign({
          userId: user.id,
        }, 'SOMERANDOMTOKENYOUHADTOANNOUNCEASANENVIRONMENTVARIABLE', {
          expiresIn: '24h'
        })
      })()
    }
}