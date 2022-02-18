const { v4 } = require('uuid');
let users = require('../mocks/users');

class UserRepository {
  list() {
    return users;
  }

  findById(id) {
    const user = users.find((user) => user.id === id);

    return user;
  }

  create(body) {
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

  update(id, body) {
    let updatedUser = users.find((user) => user.id === id);
    updatedUser = {
      ...updatedUser,
      ...body,
      id,
    }
    
    users = users.map((user) => (
      user.id === id
      ? updatedUser
      : user
    ));

    return updatedUser;
  }
}

module.exports = new UserRepository();