const UserRepository = require('../repositories/UserRepository');

class UserController {
  getUsers(req, res) {
    const users = UserRepository.listAllUsers();

    res.status(200).json(users);
  }

  getUserById(req, res) {
    const { id } = req.params;

    const user = UserRepository.findById(id);

    if(!user) {
      return res.status(404).json({ error: "user not found" });
    }

    res.status(200).json(user);
  }
  
  addNewUser(req, res) {
    const body = req.body;

    const newUser = UserRepository.createNewUser(body);

    res.status(201).json(newUser);
  }
}

module.exports = new UserController();