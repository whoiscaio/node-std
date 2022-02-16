const MyController = require('./controllers/MyController');

module.exports = [
  {
    endpoint: '/home',
    method: 'GET',
    handler: MyController.homeGet,
  }, 
  {
    endpoint: '/users',
    method: 'GET',
    handler: MyController.usersGet,
  }
]