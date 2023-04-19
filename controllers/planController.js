const express = require('express');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const router = express.Router();

const planManager = require('../managers/planManager');

router.delete('/:id', auth, planManager.deletePlan);
 
router.get('/', planManager.getPlan);

router.post('/', auth, multer, planManager.createPlan);

router.put('/:id', auth, multer, planManager.updatePlan);

module.exports = router;