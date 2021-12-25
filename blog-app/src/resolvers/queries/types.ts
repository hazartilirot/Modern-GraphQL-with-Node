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

interface ProfileExt extends Profile {
  isMyProfile: boolean
}

export interface ProfilePayload {
  userErrors: { message: string }[],
  profile: ProfileExt | null
}