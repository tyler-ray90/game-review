const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/review');

router.get('/', reviewsCtrl.index);

module.exports = router;