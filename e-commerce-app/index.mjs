import { ApolloServer, gql } from 'apollo-server';
import products from './products.mjs';


const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
  }
  
  type Product {
      id: ID!
      name: String!
      description: String!
      image: String!
      quantity: Int!
      price: Float!
      onSale: Boolean!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    products: () => products,
    product: (parent, { id }, context) => products.find(p => p.id === id)
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is ready at ${url}`));