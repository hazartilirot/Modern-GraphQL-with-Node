import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.mjs'
import resolvers from './resolvers/index.mjs'
import context from './context/db.mjs';

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen().then(({ url }) => console.log(`Server is ready at ${url}`));