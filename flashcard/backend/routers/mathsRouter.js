const express = require('express');
const router = express.Router();
const mathsController = require('../controllers/mathsController');

router.get('/', mathsController.getAllMaths);
router.post('/', mathsController.createMath);
router.put('/:id', mathsController.updateMath);
router.delete('/:id', mathsController.deleteMath);

module.exports = router;
