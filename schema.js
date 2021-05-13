const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!,
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    address: Address,
    posts: [Post]
  }

  type Address {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: Geo
  }

  type Geo {
      lat: String,
      lng: String
  }

  type Post {
    id: ID!,
    userId: String,
    title: String,
    body: String
  }
  
  type Book {
    title: String
    author: String
  }
  
  type Query {
    users: [User]
    books: [Book],
    posts: [Post],
    postById(id:ID): Post,
    postByUserId(userId:ID): [Post]
  }

  type Mutation {
    fullName: User
  }
`;