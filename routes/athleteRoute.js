const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const athleteController = require('../controllers/athleteController');

router.delete('/:id', auth, athleteController.deleteAthlete);
 
router.get('/', auth, athleteController.getAllAthletes);

router.get('/:id', auth, athleteController.getAthleteById);

router.post('/', auth, athleteController.createAthlete);

router.put('/', auth, athleteController.updateAthlete);

module.exports = router;