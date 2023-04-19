const express = require('express');

const auth = require('../middleware/auth');
const router = express.Router();

const exerciseManager = require('../managers/exerciseManager');

router.delete('/:id', auth, exerciseManager.deleteExercise);
 
router.get('/', auth, exerciseManager.getAllExercises);

router.get('/:id', auth, exerciseManager.getExerciseById);

router.post('/', auth, exerciseManager.createExercise);

router.put('/:id', auth, exerciseManager.updateExercise);

module.exports = router;