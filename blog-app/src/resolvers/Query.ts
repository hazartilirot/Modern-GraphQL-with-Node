import { Context } from './mutations/types';

export default {
  posts: (parent: any, args: any, { prisma }: Context) => {
    return prisma.post.findMany({ orderBy: { createdAt: "desc"} });
  },
};