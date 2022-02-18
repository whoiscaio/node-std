const UserRepository = require('../repositories/UserRepository');

class UserController {
  getUsers(req, res) {
    const users = UserRepository.listAllUsers();

    res.status(200).json(users);
  }
}

module.exports = new UserController();