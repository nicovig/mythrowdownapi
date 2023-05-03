const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const userController = require('../controllers/userController');

router.delete('/:id', auth, userController.deleteUser);

router.get('/', auth, userController.getAllUsers);

router.get('/:id', auth, userController.getUserById);

router.post('/', auth, userController.createUser);

router.put('/:id', auth, userController.updateUser);

module.exports = router;