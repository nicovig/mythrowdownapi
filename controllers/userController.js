const express = require('express');
const router = express.Router();

const userManager = require('../managers/userManager');

router.delete('/:id', userManager.deleteUser);

router.get('/', userManager.getAllUsers);

router.get('/:id', userManager.getUserById);

router.post('/', userManager.createUser);

router.put('/:id', userManager.updateUser);

module.exports = router;