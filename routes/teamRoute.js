const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const teamController = require('../controllers/teamController');

router.delete('/:id', auth, teamController.deleteTeam);
 
router.get('/', auth, teamController.getAllTeams);

router.get('/:id', auth, teamController.getTeamById);

router.post('/', auth, teamController.createTeam);

router.put('/', auth, teamController.updateTeam);

module.exports = router;