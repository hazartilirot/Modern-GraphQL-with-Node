import { Prisma, PrismaClient, Post } from '.prisma/client';

export interface PrismaContext {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
}

export interface PostCreateArgs {
  title: string,
  content: string
}

export interface PostPayload {
  userErrors: { message: string }[],
  post: Post | null
}