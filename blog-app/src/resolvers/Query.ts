import { PrismaContext } from './types';

export default {
  posts: (parent: any, args: any, { prisma }: PrismaContext) => {
    return prisma.post.findMany({ orderBy: { createdAt: "desc"} });
  },
};