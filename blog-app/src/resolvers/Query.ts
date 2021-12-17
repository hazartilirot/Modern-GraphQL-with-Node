import { PrismaContext } from './mutations/types';
import { SignupArgs } from './mutations/types'

export default {
  posts: (parent: any, args: any, { prisma }: PrismaContext) => {
    return prisma.post.findMany({ orderBy: { createdAt: "desc"} });
  },
};