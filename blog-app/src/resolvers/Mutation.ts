import { PostArgs, PostPayload, PrismaContext } from './types';

export default {
  postCreate: async (
    parent: any,
    { post: { title, content } }: PostArgs,
    { prisma }: PrismaContext
  ): Promise<PostPayload> => !title || !content ?
    {
      userErrors: [{ message: "Please provide title and content to create a post" }],
      post: null
    } : {
      userErrors: [],
      post: await prisma.post.create({ 
        data: { title, content, authorId: 1 } 
      })
    },
  postUpdate: async (
    parent: any,
    { postId, post }: { postId: string, post: PostArgs["post"] },
    { prisma }: PrismaContext
  ): Promise<PostPayload> => Object.keys(post).filter(v => v).length === 0 ? 
    {
      userErrors: [{ message: "Please provide all fields to update a post" }],
      post: null
    } : await prisma.post.findUnique({ where: { id: +postId } }) ?
    {
      userErrors: [],
      post: await prisma.post.update({ data: Object.entries({ ...post })
        .reduce((obj: { [index: string]: any }, [key, value]) => {
          if (value) obj[key] = value;
          return obj;
        }, {}),
        where: { id: +postId }
      })
    } : {
      userErrors: [{ message: "The post id does not exist" }],
      post: null
    }
};