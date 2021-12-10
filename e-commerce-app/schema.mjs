import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  
  type Product {
      id: ID!
      name: String!
      description: String!
      image: String!
      quantity: Int!
      price: Float!
      onSale: Boolean!
      category: Category
  }
  
  type Category {
      id: ID!
      name: String!
      products: [Product!]!
  }
`