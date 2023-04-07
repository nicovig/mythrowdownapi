const express = require('express');
const router = express.Router();

const authenticationManager = require('../managers/authenticationManager');

router.post('/', authenticationManager.login);

module.exports = router;