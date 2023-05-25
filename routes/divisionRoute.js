const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const divisionController = require('../controllers/divisionController');

router.delete('/:id', auth, divisionController.deleteDivision);
 
router.get('/', auth, divisionController.getAllDivisions);

router.get('/:id', auth, divisionController.getDivisionById);

router.post('/', auth, divisionController.createDivision);

router.put('/:id', auth, divisionController.updateDivision);

module.exports = router;