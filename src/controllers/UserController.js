const UserModel = require('../models/User.model');

class UserController {
  async getUsers(req, res) {
    try {
      const users = await UserModel.find({});

      res.status(200).json(users);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async getUser(req, res) {
    const { id } = req.params;

    try {
      const user = await UserModel.findById(id);

      res.status(200).json(user);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async addUser(req, res) {
    try {
      const user = await UserModel.create(req.body);

      res.status(201).json(user);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async updateUser(req, res) {
    const newInfo = req.body;
    const { id } = req.params;

    try {
      await UserModel.updateOne({ _id: id }, newInfo);

      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params;

    try {
      await UserModel.deleteOne({ _id: id });

      res.sendStatus(204);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = new UserController();