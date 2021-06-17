const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    name: String
    username: String
    email: String
    phone: String
    website: String
    address: Address
    posts: [Post]
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
      lat: String
      lng: String
  }

  type Post {
    id: ID!
    userId: String
    title: String
    body: String
  }
  
  type Book {
    title: String
    author: String
  }
  
  type Query {
    users: [User]
    books: [Book]
    posts: [Post]
    postById(id:ID): Post
    postByUserId(userId:ID): [Post]
  }

  input UserInput {
    name: String
    email: String
    phone: String
    website: String
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(input: UserInput, id: ID): User
    deleteUser(id: ID): Boolean
  }
`;