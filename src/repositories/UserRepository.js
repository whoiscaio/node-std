const users = require('../mocks/users');

class UserRepository {
  listAllUsers() {
    return users;
  }
}

module.exports = new UserRepository();