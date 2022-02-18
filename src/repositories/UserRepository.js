const { v4 } = require('uuid');
const UserModel = require('../models/User.model');

class UserRepository {
  async list() {
    const users = await UserModel.find({});

    return users;
  }

  async findById(id) {
    const user = await UserModel.findById(id);

    return user;
  }

  async create(body) {
    const newUser = await UserModel.create(body);

    return newUser;
  }

  async update(id, body) {
    const updatedUser = await UserModel.findByIdAndUpdate(id, body, { new: true });

    return updatedUser;
  }

  async delete(id) {
    await UserModel.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();