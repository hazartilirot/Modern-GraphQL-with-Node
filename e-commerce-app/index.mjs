import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.mjs'
import resolvers from './resolvers/index.mjs'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is ready at ${url}`));