import { gql } from 'apollo-server'

export default gql`
  type Query {
    me: UserPayload!
    user: User!
    users: [User!]!
    posts: [Post!]!
    profile(profileUserId: ID!): ProfilePayload!
  }
  
  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID! post: PostInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
    postPublish(postId: ID! published: Boolean!): PostPayload!
    userSignup(credentials: CredentialsInput!): AuthPayload!
    userSignin(credentials: CredentialsInput!): AuthPayload!
  }

  type ProfilePayload {
    userErrors: [UserError!]!
    profile: Profile
  }
  
  type UserPayload {
    userErrors: [UserError!]!
    user: User
  }
  
  type AuthPayload {
    userErrors: [UserError!]!
    token: String
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
    createdAt: String!
    published: Boolean!
    user: User!
  }
  
  type User {
    id: ID!
    email: String!
    name: String
    posts: [Post!]!
  }
  
  type Profile {
    id: ID!
    bio: String!
    isMyProfile: Boolean!
    user: User
  }
  
  input PostInput { 
    title: String
    content: String
    published: Boolean
  }
  
  input CredentialsInput {
    email: String!
    password: String!
    name: String
    bio: String
  }
`