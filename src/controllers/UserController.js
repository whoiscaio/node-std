class UserController {
  getUsers(req, res) {
    res.send('get request');
  }
}

module.exports = new UserController();