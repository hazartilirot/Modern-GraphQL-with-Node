import { Context, ProfilePayload, UserPayload } from './types';

export default {
  me: async (
    parent: any,
    args: any,
    { prisma, userId }: Context 
  ): Promise<UserPayload> => !userId ?
  {
    userErrors: [{ message: "You are not logged in"}],
    user: null
  } : {
    userErrors: [],
    user: await prisma.user.findUnique({ where: { id: userId } })
  },
  profile: async (
    parent: any,
    { profileUserId }: { profileUserId: string },
    { prisma, userId }: Context
  ): Promise<ProfilePayload> => {
    if (!userId) return {
      userErrors: [{ message: "You are not logged in" }],
      profile: null
    }
    const profile = await prisma
      .profile.findUnique({ where: { userId: +profileUserId } })
  
    return !profile ? {
      userErrors: [{ message: "Profile doesn't exist" }],
      profile: null
    } : {
      userErrors: [],
      profile
    }
  },
  
}