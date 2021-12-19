import { PostArgs, PostPayload, Context } from './types';

export default {
  postCreate: async (
    parent: any,
    { post: { title, content } }: PostArgs,
    { prisma, userId }: Context
  ): Promise<PostPayload> => !userId ? 
    {
      userErrors: [{ message: "You're unauthorized" }],
      post: null
    } : !title || !content ?
    {
      userErrors: [{ message: "Please provide title and content to create a post" }],
      post: null
    } : {
      userErrors: [],
      post: await prisma.post.create({ 
        data: { title, content, authorId: userId } 
      })
    },
  postUpdate: async (
    parent: any,
    { postId, post }: { postId: string, post: PostArgs["post"] },
    { prisma, userId }: Context
  ): Promise<PostPayload> => !userId ? 
    {
      userErrors: [{ message: "You're unauthorized" }],
      post: null
    } : Object.keys(post).filter(v => v).length === 0 ? 
    {
      userErrors: [{ message: "Please provide all fields to update a post" }],
      post: null
    } : await prisma.post.findFirst({ where: 
          { AND: [{id: +postId }, {authorId: userId}] } }) ?
    {
      userErrors: [],
      post: await prisma.post.update({ data: Object.entries(post)
        .reduce((obj: { [index: string]: any }, [key, value]) => {
          if (value) obj[key] = value;
          return obj;
        }, {}),
        where: { id: +postId }
      })
    } : {
      userErrors: [{ message: "The post with the specified id does not exist" }],
      post: null
    },
  postDelete: async(
    parent: any,
    { postId }: { postId: string },
    { prisma, userId }: Context
  ): Promise<PostPayload> => !userId ? 
    {
      userErrors: [{ message: "You're unauthorized" }],
      post: null
    } : !postId ?
    {
      userErrors: [{ message: "You must provide a post id to delete a post"}],
      post: null
    } : await prisma.post.findFirst({ where: 
          { AND: [{id: +postId }, {authorId: userId}] } }) ?
    {
      userErrors: [],
      post: await prisma.post.delete({ where: { id: +postId }})
    } : {
      userErrors: [{ message: "The post with the specified id does not exist" +
          " or you're unauthorized" }],
      post: null
    },
  postPublish: async (
    parent: any,
    { postId, published }: { postId: string, published: boolean },
    { prisma, userId}: Context
  ): Promise<PostPayload> => !userId ? 
    {
      userErrors: [{ message: "You're unauthorized "}],
      post: null
    } : !await prisma.post.findFirst({ where: 
          { AND: { id: +postId, authorId: userId} }}) ?
    {
      userErrors: [{ message: "The post with the specified id does not exist" +
          " or you're unauthorized" }],
      post: null
    } :
    {
      userErrors: [],
      post: await prisma.post.update({ 
        data: { published }, 
        where: { id: +postId} 
      })
    }
}
