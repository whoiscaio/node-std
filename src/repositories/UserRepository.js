const users = require('../mocks/users');

class UserRepository {
  listAllUsers() {
    return users;
  }

  findById(id) {
    const user = users.find((user) => user.id === id);

    return user;
  }
}

module.exports = new UserRepository();