const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const roleController = require('../controllers/roleController');

router.delete('/:id', auth, roleController.deleteRole);

router.get('/', auth, roleController.getAllRoles);

router.post('/', auth, roleController.createRole);

router.put('/', auth, roleController.updateRole);

module.exports = router;