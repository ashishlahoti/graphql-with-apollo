const { ApolloServer, gql } = require('apollo-server');
const UserAPI = require('./datasources/users');
const PostAPI = require('./datasources/posts');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = require('./schema.js');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = require('./resolvers.js');

const dataSources = () => ({
    postAPI: new PostAPI(),
    userAPI: new UserAPI()
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources,
    introspection: true,
    playground: true,
    debug: false
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});