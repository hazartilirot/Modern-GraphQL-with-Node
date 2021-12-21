import { Context } from './types'
import { User } from '.prisma/client'

export default {
  user: async (
    parent: { authorId: string},
    args: any,
    { prisma }: Context
  ) => await prisma.user.findUnique({ where: { id: +parent.authorId } })
}