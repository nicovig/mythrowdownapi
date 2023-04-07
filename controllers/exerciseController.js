const express = require('express');
const router = express.Router();

const exerciseManager = require('../managers/exerciseManager');

router.delete('/:id', exerciseManager.deleteExercise);
 
router.get('/', exerciseManager.getAllExercises);

router.get('/:id', exerciseManager.getExerciseById);

router.post('/', exerciseManager.createExercise);

router.put('/:id', exerciseManager.updateExercise);

module.exports = router;