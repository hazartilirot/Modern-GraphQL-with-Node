import { PostCreateArgs, PostPayload, PrismaContext } from './types';

export default {
  postCreate: async (
    parent: any,
    args: PostCreateArgs,
    { prisma }: PrismaContext
  ): Promise<PostPayload> => {
    const post = await prisma.post.create({ data: { ...args, authorId: 1 } })
    return !args.title || !args.content ?
      {
        userErrors: [{ message: "Please provide title and content to create a post" }],
        post: null
      } : {
        userErrors: [],
        post
      }
  }
};