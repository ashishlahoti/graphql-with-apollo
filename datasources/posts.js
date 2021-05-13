const {RESTDataSource} = require('apollo-datasource-rest');

class PostAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = "https://jsonplaceholder.typicode.com/posts";
    }

    async getPosts() {
        return await this.get('/');
    }

    async getPostById(id) {
        return await this.get(`/${id}`);
    }

    async getPostByUserId(userId) {
        return await this.get(`?userId=${userId}`);
    }
}

module.exports = PostAPI;