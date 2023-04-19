const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const userManager = require('../managers/userManager');

router.delete('/:id', auth, userManager.deleteUser);

router.get('/', auth, userManager.getAllUsers);

router.get('/:id', auth, userManager.getUserById);

router.post('/', userManager.createUser);

router.put('/:id', auth, userManager.updateUser);

module.exports = router;