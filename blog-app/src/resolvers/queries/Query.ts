import { Context } from './types';
import userResolvers from './userResolvers';

export default {
  ...userResolvers,
  posts: (parent: any, args: any, { prisma }: Context) => {
    return prisma.post.findMany({ orderBy: { createdAt: "desc"} });
  },
};