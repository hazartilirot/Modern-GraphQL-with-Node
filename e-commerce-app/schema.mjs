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
      reviews: [Review!]!
  }
  
  type Category {
      id: ID!
      name: String!
      products: [Product!]!
  }
  
  type Review {
      id: ID!
      title: String!
      comment: String!
      date: String!
      rating: Int!
  }
`