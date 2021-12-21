import { Context } from './types'

export default {
  posts: async (
    parent: { id: string },
    args: any, { prisma, userId }: Context
  ) =>
    userId !== +parent.id 
      ? await prisma.post.findMany({
        where: { AND: [{ authorId: +parent.id }, { published: true }] } }) 
      : await prisma.post.findMany({ where: { authorId: +parent.id } })
};