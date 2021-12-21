import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/typeDefs';
import resolvers from './resolvers';
import { PrismaClient } from '@prisma/client'
import getUser from './utilities/getUser';

const prisma = new PrismaClient({ log: ['query'] });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    prisma,
    userId: await getUser(req.headers.authorization || '')
  })
});

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
