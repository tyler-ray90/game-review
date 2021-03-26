const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/review');

router.get('/', reviewsCtrl.index);
router.get('/new', reviewsCtrl.new);
router.get('/:id', reviewsCtrl.show);
router.post('/', reviewsCtrl.create);
router.delete('/:id', reviewsCtrl.delete);
router.get('/:id/edit', reviewsCtrl.edit);
router.put('/:id/', reviewsCtrl.update);

module.exports = router;