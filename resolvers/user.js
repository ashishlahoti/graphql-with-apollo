module.exports = {
    async posts(user, args, {dataSources}){
      return await dataSources.postAPI.getPostByUserId(user.id);
    }
  }