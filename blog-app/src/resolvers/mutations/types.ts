import { Prisma, PrismaClient, Post, User } from '.prisma/client';

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >,
  userId: number | null
}

export interface PostPayload {
  userErrors: { message: string }[],
  post: Post | null
}

export interface PostArgs {
  post: {
    title?: string,
    content?: string
  }
}

export interface AuthPayload {
  userErrors: { message: string }[],
  token: string | null
}

export interface SignupArgs {
  credentials: {
    email: string,
    password: string,
    name?: string,
    bio?: string,
  }
}