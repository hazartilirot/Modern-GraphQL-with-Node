import { gql } from 'apollo-server'

export default gql`
  type Query {
    posts: [Post!]!
  }
  
  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID! post: PostInput!): PostPayload!
  }

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
  
  input PostInput { 
    title: String, 
    content: String
  }
`