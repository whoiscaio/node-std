const UserRepository = require('../repositories/UserRepository');

class UserController {
  async getUsers(req, res) {
    const users = await UserRepository.list();

    res.status(200).json(users);
  }

  async getUserById(req, res) {
    const { id } = req.params;

    const user = await UserRepository.findById(id);

    if(!user) {
      return res.status(404).json({ error: "user not found" });
    }

    res.status(200).json(user);
  }
  
  async addNewUser(req, res) {
    const body = req.body;

    const newUser = await UserRepository.create(body);

    res.status(201).json(newUser);
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const body = req.body;

    const user = await UserRepository.findById(id);

    if(!user) {
      return res.status(404).json({ error: "not found" });
    }

    const updatedUser = await UserRepository.update(id, body);

    res.status(200).json(updatedUser);
  }

  async deleteUser(req, res) {
    const { id } = req.params;

    await UserRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new UserController();