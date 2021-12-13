import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
      cars: [Car!]!
  }
  type Car {
      id: ID!
      color: String!
      make: String!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      cars: () => [{ id: 1, color: "blue", make: "Toyota" }]
    }
  }
})

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`))