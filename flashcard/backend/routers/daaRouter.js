const express = require('express');
const router = express.Router();
const daaController = require('../controllers/daaController');

router.get('/', daaController.getAllCards);
router.post('/', daaController.createCard);
router.put('/:id', daaController.updateCard);
router.delete('/:id', daaController.deleteCard);

module.exports = router;