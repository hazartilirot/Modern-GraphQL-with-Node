import { Context } from './types';

export default {
  user: async (
    parent: { id: string, bio: string, userId: string },
    args: any,
    { prisma }: Context
  ) => await prisma.user.findUnique({ where: { id: +parent.userId } })
}

/* MIND Profile.ts is a subresolver of profile resolver. We need it to get
a userId from the parent (from the profile resolver). All errors would
handle the parent. It's called a resolver chain. Profile behaves as Query if
we decided to get a user which is nested in a profile query */