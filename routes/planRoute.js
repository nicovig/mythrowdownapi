const express = require('express');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

const planController = require('../controllers/planController');

router.delete('/:id', auth, planController.deletePlan);
 
router.get('/', planController.getPlan);

router.post('/', auth, multer, planController.createPlan);

router.put('/:id', auth, multer, planController.updatePlan);

module.exports = router;