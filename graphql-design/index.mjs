import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    cars: [Car!]!
  }
  
  type Mutation {
    groupDelete(groupId: ID!): Boolean
    groupPublish(groupId: ID!): Boolean
    groupUnpublish(groupId: ID!): Boolean
    groupCarsAdd(groupId: ID!, carId: ID!): Boolean
    groupCarsRemove(groupId: ID!, carId: ID!): Boolean
    groupCreate(groupInput: GroupInput!): GroupUpdatePayload
    groupUpdate(groupId: ID, groupInput: GroupInput!): GroupUpdatePayload!
  }
  
  input GroupInput {
    name: String
    image: ImageInput
    description: String
    attributeSet: groupAttributeFields
  }
  
  input ImageInput {
    url: String!
  }
  
  type GroupUpdatePayload {
    userError: [UserError!]!
    group: Group
  }
  
  type UserError {
    message: String!
    field: [String!]!
  }
  
  type Car {
      id: ID!
      color: String!
      make: String!
  }
  
  type Group {
    id: ID!
    name: String!
    image: Image!
    description: String!
    cars(skip: Int!, take: Int!): [Car!]!
    attributeSet: GroupAttributeSet
  }
  
  type Image {
    id: ID!
    url: String!
  }
  
  type GroupAttributeSet {
    attributes: [CarAttributes!]!
    applyAttributesSeparately: Boolean!
  }
  
  type CarAttributes {
    attribute: groupAttributeFields!
  }
  
  enum groupAttributeFields {
    INCLINE_ENGINE
    FOUR_CYLINDER_ENGINE
    TWIN_CYLINDER_ENGINE
    RED_PAINT
    BLACK_PAINT
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