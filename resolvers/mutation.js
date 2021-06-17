module.exports = {
    createUser: (parent, {input}, {dataSources}, info) => {
        return dataSources.userAPI.createUser({...input});
    },
    updateUser: (parent, {id, input}, {dataSources}, info) => {
        return dataSources.userAPI.updateUser(id, {...input});
    },
    deleteUser: (parent, {id}, {dataSources}, info) => {
        return dataSources.userAPI.deleteUser(id);
    }
}