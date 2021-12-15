import { gql } from 'apollo-server'

export default gql`
  type Query {
    hello: String!
  }
  
  type Mutation {
    postCreate(title: String! content: String!): PostPayload!
  }
  # Defining Our GraphQL Schema 7:58
  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }
  
  type UserError {
    message: String!
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    user: User!
  }
  
  type User {
    id: ID!
    email: String!
    name: String
    posts: [Post!]!
    profile: Profile
  }
  
  type Profile {
    id: ID!
    bio: String!
    user: User!
  }
`