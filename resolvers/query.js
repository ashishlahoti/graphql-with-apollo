module.exports = {
    users: (parent, args, {dataSources}, info) => {
      return dataSources.userAPI.getUsers();
    },
    posts: (parent, args, {dataSources}, info) => {
      return dataSources.postAPI.getPosts();
    },
    postById: (parent, {id}, {dataSources}, info) => {
      return dataSources.postAPI.getPostById(id);
    },
    postByUserId: (parent, {userId}, {dataSources}, info) => {
      return dataSources.postAPI.getPostByUserId(userId);
    }
}