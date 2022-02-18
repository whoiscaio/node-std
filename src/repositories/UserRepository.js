const { v4 } = require('uuid');
let users = require('../mocks/users');

class UserRepository {
  listAllUsers() {
    return users;
  }

  findById(id) {
    const user = users.find((user) => user.id === id);

    return user;
  }

  createNewUser(body) {
    const newUser = {
      ...body,
      id: v4(),
    }

    users = [
      ...users,
      newUser,
    ]

    return newUser;
  }
}

module.exports = new UserRepository();