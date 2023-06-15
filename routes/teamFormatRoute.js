const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const teamFormatController = require('../controllers/teamFormatController');

router.delete('/:id', auth, teamFormatController.deleteTeamFormat);
 
router.get('/', auth, teamFormatController.getAllTeamFormats);

router.get('/:id', auth, teamFormatController.getTeamFormatById);

router.post('/', auth, teamFormatController.createTeamFormat);

router.put('/', auth, teamFormatController.updateTeamFormat);

module.exports = router;