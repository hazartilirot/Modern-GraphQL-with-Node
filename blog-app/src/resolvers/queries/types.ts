import { PrismaClient, Prisma, User, Profile } from '.prisma/client'

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >,
  userId: number | null
}

export interface UserPayload {
  userErrors: { message: string }[],
  user: User | null
}

export interface ProfilePayload {
  userErrors: { message: string }[],
  profile: Profile | null
}