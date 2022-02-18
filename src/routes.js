const express = require('express');
const UserController = require('./controllers/UserController');

const router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUser);
router.post('/users', UserController.addUser);

module.exports = router;