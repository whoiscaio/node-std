const UserRepository = require('../repositories/UserRepository');

class UserController {
  getUsers(req, res) {
    const users = UserRepository.list();

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

    const newUser = UserRepository.create(body);

    res.status(201).json(newUser);
  }

  updateUser(req, res) {
    const { id } = req.params;
    const body = req.body;

    const user = UserRepository.findById(id);

    if(!user) {
      return res.status(404).json({ error: "not found" });
    }

    const updatedUser = UserRepository.update(id, body);

    res.status(200).json(updatedUser);
  }
}

module.exports = new UserController();