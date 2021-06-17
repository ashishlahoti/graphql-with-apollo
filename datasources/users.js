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

    async createUser(userInput){
        return await this.post('/', userInput);
    }

    async updateUser(id, userInput){
        return await this.put(`/${id}`, userInput);
    }

    async deleteUser(id){
        return await this.delete(`/${id}`);
    }
}

module.exports = UserAPI;