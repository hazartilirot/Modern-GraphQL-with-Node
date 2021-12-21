import { Context } from './types';
import userResolvers from './userResolvers';

export default {
  ...userResolvers,
  posts: async (parent: any, args: any, { prisma }: Context) =>
     await prisma.post.findMany(),
  users: async (parent: any, args: any, { prisma }: Context) =>
    await prisma.user.findMany()
};