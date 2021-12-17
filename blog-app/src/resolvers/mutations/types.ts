import { Prisma, PrismaClient, Post, User } from '.prisma/client';

export interface PrismaContext {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
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
  user: {
    email: string,
    password: string,
    name?: string,
    bio?: string,
  }
}