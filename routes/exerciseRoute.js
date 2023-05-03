const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const exerciseController = require('../controllers/exerciseController');

router.delete('/:id', auth, exerciseController.deleteExercise);
 
router.get('/', auth, exerciseController.getAllExercises);

router.get('/:id', auth, exerciseController.getExerciseById);

router.post('/', auth, exerciseController.createExercise);

router.put('/:id', auth, exerciseController.updateExercise);

module.exports = router;