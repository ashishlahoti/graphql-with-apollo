const {RESTDataSource} = require('apollo-datasource-rest');

class UserAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = "https://jsonplaceholder.typicode.com/users";
    }

    async getUsers() {
        return await this.get('/');
    }

    async getUserById(id) {
        return await this.get(`/${id}`);
    }
}

module.exports = UserAPI;